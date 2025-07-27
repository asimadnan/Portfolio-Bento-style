import { projects } from "@/lib/projects"
import { ProjectCard } from "@/components/project-card"
import { Hero } from "@/components/hero"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { BlogSection } from "@/components/blog-section"

export default function Portfolio() {
  const featuredProjects = projects.filter((project) => project.featured)
  const allProjects = projects.filter((project) => !project.featured)

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />

      {/* Featured Projects */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg">Showcasing my most impactful work in AI and Machine Learning</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>
      </section>

      <BlogSection />
      {/* All Projects */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">All Projects</h2>
          <p className="text-gray-400 text-lg">A comprehensive collection of my work across different domains</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

    
      <ContactSection />
      <Footer />
    </div>
  )
}
