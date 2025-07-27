import type { MediumPost } from "@/app/api/medium/route"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar } from "lucide-react"
import Image from "next/image"

interface BlogCardProps {
  post: MediumPost
}

export function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 group overflow-hidden">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <Image
            src={post.thumbnail || "/placeholder.svg?height=200&width=400"}
            alt={post.title}
            width={400}
            height={200}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-black/50 text-white">
              Medium
            </Badge>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
            <Calendar className="w-4 h-4" />
            {formatDate(post.pubDate)}
          </div>

          <h3 className="font-bold text-xl mb-3 text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-gray-400 mb-4 leading-relaxed line-clamp-3">{post.description}</p>

          {post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.categories.slice(0, 3).map((category) => (
                <Badge key={category} variant="outline" className="border-gray-700 text-gray-300">
                  {category}
                </Badge>
              ))}
            </div>
          )}

          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
          >
            Read on Medium
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
