"use client"

import { useEffect, useMemo, useState } from "react"
import { NavBar } from "@/components/nav-bar"
import { HeroProfile } from "@/components/hero-profile"
import { RowCarousel, type Project, type Row } from "@/components/row-carousel"
import { FooterBar } from "@/components/footer-bar"
import type { ProfileData, ConnectItem, Blog } from "@/lib/types"

export default function Page() {
  const [data, setData] = useState<ProfileData | null>(null)
  const [mediumPosts, setMediumPosts] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/profile.json", { cache: "no-store" })
        const json = (await res.json()) as ProfileData
        setData(json)

        // Fetch Medium posts if username is provided
        if (json.mediumUsername) {
          try {
            const mediumRes = await fetch(`/api/medium?username=${json.mediumUsername}`)
            if (mediumRes.ok) {
              const mediumData = await mediumRes.json()
              setMediumPosts(mediumData.posts || [])
            }
          } catch (e) {
            console.error("Failed to fetch Medium posts:", e)
          }
        }
      } catch (e) {
        console.error("Failed to load profile.json", e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const rows: Row[] = useMemo(() => {
    if (!data) return []

    // Projects -> Project[]
    const projects: Project[] = data.projects.map((p) => ({
      id: p.id,
      title: p.title,
      description: p.description,
      poster: p.image ?? "/placeholder.svg?height=900&width=600",
      tags: p.technologies,
      links: { live: p.links?.website || p.links?.paper, code: p.links?.github },
      trailer: p.trailer,
    }))

    const featuredItems = projects.filter((p) => data.projects.find((pp) => pp.id === p.id)?.featured === true)

    // Combine static blogs with Medium posts
    const allBlogs = [...(data.blogs || []), ...mediumPosts]
    const blogItems: Project[] = allBlogs.map((b) => ({
      id: b.id,
      title: b.title,
      description: b.excerpt || b.date || "",
      poster: b.image || "/placeholder.svg?height=900&width=600",
      tags: [b.source || "Blog", b.date].filter(Boolean) as string[],
      links: { live: b.url },
      trailer: undefined,
    }))

    // Connect -> Project[] (movie-poster style)
    const connectSource: ConnectItem[] =
      data.connect && data.connect.length > 0
        ? data.connect
        : // Fallback: derive from profile.contact if connect array is not provided
          ([
            data.profile.contact?.email
              ? {
                  id: "email",
                  title: "Email",
                  type: "email",
                  url: `mailto:${data.profile.contact.email}`,
                  image: "/placeholder.svg?height=900&width=600",
                  description: "Reach out via email for collaborations and opportunities.",
                }
              : null,
            data.profile.contact?.linkedin
              ? {
                  id: "linkedin",
                  title: "LinkedIn",
                  type: "linkedin",
                  url: data.profile.contact.linkedin,
                  image: "/placeholder.svg?height=900&width=600",
                  description: "Connect with me on LinkedIn for professional networking.",
                }
              : null,
            data.profile.contact?.github
              ? {
                  id: "github",
                  title: "GitHub",
                  type: "github",
                  url: data.profile.contact.github,
                  image: "/placeholder.svg?height=900&width=600",
                  description: "Explore my open-source projects and contributions.",
                }
              : null,
            data.profile.contact?.resume
              ? {
                  id: "resume",
                  title: "Resume",
                  type: "resume",
                  url: data.profile.contact.resume,
                  image: "/placeholder.svg?height=900&width=600",
                  description: "Download my latest CV and professional experience.",
                }
              : null,
            data.profile.contact?.calendar
              ? {
                  id: "calendar",
                  title: "Book a Call",
                  type: "calendar",
                  url: data.profile.contact.calendar,
                  image: "/placeholder.svg?height=900&width=600",
                  description: "Schedule a 30-minute call to discuss opportunities.",
                }
              : null,
          ].filter(Boolean) as ConnectItem[])

    const connectItems: Project[] = connectSource.map((c) => ({
      id: `connect-${c.id}`,
      title: c.title,
      description: c.description || "",
      poster: c.image || `/placeholder.svg?height=900&width=600&query=contact-${c.type}`,
      tags: ["Connect", c.type].filter(Boolean),
      links: { live: c.url },
      trailer: undefined,
    }))

    return [
      { id: "featured", title: "Featured Projects", anchor: "featured", items: featuredItems },
      { id: "all-projects", title: "All Projects", anchor: "all", items: projects },
      { id: "blogs", title: "Blogs", anchor: "blog", items: blogItems },
      { id: "connect", title: "Connect with me", anchor: "contact", items: connectItems },
    ]
  }, [data, mediumPosts])

  return (
    <main className="min-h-screen bg-black text-white">
      <NavBar />
      {loading ? (
        <HeroSkeleton />
      ) : data ? (
        <HeroProfile
          profile={{
            name: data.profile.name,
            headline: data.profile.headline,
            subheadline: data.profile.subheadline,
            location: data.profile.location,
            video: data.profile.video,
            backdrop: data.profile.backdrop,
            ctas: {
              email: data.profile.contact?.email,
              resume: data.profile.contact?.resume,
              github: data.profile.contact?.github,
              linkedin: data.profile.contact?.linkedin,
            },
          }}
        />
      ) : null}

      <section className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 space-y-10 pb-24 mt-0">
        {rows.map((row) => (
          <RowCarousel key={row.id} row={row} />
        ))}
      </section>

      <FooterBar />
    </main>
  )
}

function HeroSkeleton() {
  return (
    <section className="relative h-[72vh] md:h-[86vh] w-full">
      <div className="absolute inset-0 bg-zinc-900 animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-4 pb-10 sm:px-6 lg:px-8">
        <div className="space-y-3 max-w-2xl">
          <div className="h-5 w-28 rounded bg-zinc-800" />
          <div className="h-10 w-3/4 rounded bg-zinc-800" />
          <div className="h-4 w-2/3 rounded bg-zinc-800" />
          <div className="h-4 w-1/2 rounded bg-zinc-800" />
          <div className="flex gap-3 pt-2">
            <div className="h-10 w-36 rounded bg-zinc-800" />
            <div className="h-10 w-36 rounded bg-zinc-800" />
          </div>
        </div>
      </div>
    </section>
  )
}
