"use client"

import { useState, useEffect } from "react"
import type { MediumPost } from "@/app/api/medium/route"
import { BlogCard } from "@/components/blog-card"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export function BlogSection() {
  const [posts, setPosts] = useState<MediumPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/medium")
      const data = await response.json()

      if (data.error) {
        setError(data.error)
      } else {
        setPosts(data.posts || [])
      }
    } catch (err) {
      setError("Failed to load blog posts")
    } finally {
      setLoading(false)
    }
  }

  const displayedPosts = showAll ? posts : posts.slice(0, 6)

  if (loading) {
    return (
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-emerald-400" />
          <p className="text-gray-400">Loading blog posts...</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-red-400 mb-4">{error}</p>
          <Button
            onClick={fetchPosts}
            variant="outline"
            className="bg-black text-white border-gray-700 hover:bg-gray-900"
          >
            Try Again
          </Button>
        </div>
      </section>
    )
  }

  if (posts.length === 0) {
    return (
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-gray-400">No blog posts found.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4">Latest Blog Posts</h2>
        <p className="text-gray-400 text-lg">Insights and thoughts on AI, Machine Learning, and Technology</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedPosts.map((post, index) => (
          <BlogCard key={`${post.link}-${index}`} post={post} />
        ))}
      </div>

      {posts.length > 6 && (
        <div className="text-center mt-12">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            className="bg-black text-white border-gray-700 hover:bg-gray-900"
          >
            {showAll ? "Show Less" : `Show All ${posts.length} Posts`}
          </Button>
        </div>
      )}

      <div className="text-center mt-8">
        <a
          href="https://medium.com/@asimadnan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
        >
          View all posts on Medium →
        </a>
      </div>
    </section>
  )
}
