import { NextResponse } from "next/server"
import Parser from "rss-parser"

export interface MediumPost {
  title: string
  link: string
  pubDate: string
  description: string
  thumbnail?: string
  categories: string[]
}

const parser = new Parser()

// Helper: extract first <img … src="…"> from HTML
function extractImage(html?: string) {
  if (!html) return null
  const match = html.match(/<img[^>]+src="([^">]+)"/i)
  return match ? match[1] : null
}

export async function GET() {
  try {
    // Medium’s built-in RSS feed
    const rssUrl = "https://medium.com/feed/@asimadnan"

    // Fetch the raw XML (server-side → no CORS problems)
    const res = await fetch(rssUrl, {
      headers: { "User-Agent": "Mozilla/5.0 (v0.dev fetcher)" },
      // Re-fetch once per hour
      next: { revalidate: 60 * 60 },
    })

    if (!res.ok) throw new Error(`HTTP ${res.status}`)

    const xml = await res.text()

    // Parse XML → JSON
    const feed = await parser.parseString(xml)

    const posts: MediumPost[] = (feed.items || []).map((item) => ({
      title: item.title ?? "Untitled",
      link: item.link ?? "#",
      pubDate: item.pubDate ?? "",
      description: (item["content:encoded"] || item.content || "").replace(/<[^>]+>/g, "").slice(0, 150) + "…",
      thumbnail: extractImage(item["content:encoded"] || item.content) || "/placeholder.svg?height=200&width=400",
      categories: item.categories ?? [],
    }))

    return NextResponse.json({ posts })
  } catch (err) {
    console.error("Failed to fetch Medium posts:", err)
    return NextResponse.json({ error: "Medium fetch failed", posts: [] }, { status: 500 })
  }
}
