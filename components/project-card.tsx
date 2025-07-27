import type { Project } from "@/lib/projects"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, FileText } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Card
      className={`bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 group ${featured ? "lg:col-span-1" : ""}`}
    >
      <CardContent className="p-0">
        {project.image && (
          <div className="relative overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"

            />
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="bg-black/50 text-white">
                {project.category}
              </Badge>
            </div>
          </div>
        )}

        <div className="p-6">
          <h3
            className={`font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors ${featured ? "text-2xl" : "text-xl"}`}
          >
            {project.title}
          </h3>

          <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="border-gray-700 text-gray-300">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.links.website && (
              <Button size="sm" variant="outline" className="bg-black text-white border-gray-700 hover:bg-gray-900">
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit
              </Button>
            )}
            {project.links.github && (
              <Button size="sm" variant="outline" className="bg-black text-white border-gray-700 hover:bg-gray-900">
                <Github className="w-4 h-4 mr-2" />
                Code
              </Button>
            )}
            {project.links.paper && (
              <Button size="sm" variant="outline" className="bg-black text-white border-gray-700 hover:bg-gray-900">
                <FileText className="w-4 h-4 mr-2" />
                Paper
              </Button>
            )}
            {project.links.demo && (
              <Button size="sm" variant="outline" className="bg-black text-white border-gray-700 hover:bg-gray-900">
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
