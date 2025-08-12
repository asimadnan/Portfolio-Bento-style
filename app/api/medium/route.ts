import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const username = searchParams.get("username")

  if (!username) {
    return NextResponse.json({ error: "Username required" }, { status: 400 })
  }

  try {
    // Try both common Medium RSS formats
    const urls = [`https://medium.com/@${username}/feed`, `https://medium.com/feed/@${username}`]

    let response
    let rssText = ""

    for (const url of urls) {
      try {
        response = await fetch(url, {
          headers: {
            "User-Agent": "Mozilla/5.0 (compatible; Portfolio/1.0)",
          },
        })
        if (response.ok) {
          rssText = await response.text()
          break
        }
      } catch (e) {
        continue
      }
    }

    if (!rssText) {
      throw new Error("Could not fetch Medium RSS")
    }

    // Parse RSS XML
    const posts = parseRSS(rssText)
    return NextResponse.json({ posts })
  } catch (error) {
    console.error("Medium API error:", error)
    return NextResponse.json({ error: "Failed to fetch Medium posts" }, { status: 500 })
  }
}

function parseRSS(rssText: string) {
  const posts = []

  // Extract items using regex (simple XML parsing)
  const itemRegex = /<item>([\s\S]*?)<\/item>/g
  let match

  while ((match = itemRegex.exec(rssText)) !== null) {
    const itemContent = match[1]

    const title = extractTag(itemContent, "title")
    const link = extractTag(itemContent, "link")
    const pubDate = extractTag(itemContent, "pubDate")
    const description = extractTag(itemContent, "description")
    const content = extractTag(itemContent, "content:encoded") || description

    // Extract image from content
    const imageMatch = content?.match(/<img[^>]+src="([^"]+)"/)
    const image = imageMatch ? imageMatch[1] : null

    // Clean description
    const cleanDescription =
      description
        ?.replace(/<[^>]*>/g, "")
        ?.substring(0, 200)
        ?.trim() + "..."

    // Format date
    const date = pubDate
      ? new Date(pubDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : ""

    if (title && link) {
      posts.push({
        id: link.split("/").pop()?.split("?")[0] || Math.random().toString(),
        title: cleanHtml(title),
        url: link,
        date,
        source: "Medium",
        image: image || "/placeholder.svg?height=900&width=600",
        excerpt: cleanDescription || "",
      })
    }
  }

  return posts.slice(0, 10) // Limit to 10 posts
}

function extractTag(content: string, tag: string): string | null {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i")
  const match = content.match(regex)
  return match ? match[1].trim() : null
}

function cleanHtml(text: string): string {
  return text
    .replace(/<!\[CDATA\[(.*?)\]\]>/g, "$1")
    .replace(/<[^>]*>/g, "")
    .trim()
}
