import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, FileText, Calendar } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="mb-8">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 mx-auto mb-6 flex items-center justify-center text-4xl font-bold">
            AE
          </div>
        </div>

        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Asim Adnan Eijaz
        </h1>

        <p className="text-2xl text-gray-300 mb-4">Machine Learning Engineer</p>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">Generative AI, MLOps | NLP</p>
        <p className="text-gray-500 mb-12">Sydney, Australia</p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
        <a href="mailto:me@asimadnan.com?subject=Let's%20Connect&body=Hi%20Asim%2C%0A%0AI%20wanted%20to%20reach%20out%20about...">
          <Button variant="outline" className="bg-white text-black hover:bg-gray-100">
            <Mail className="w-4 h-4 mr-2" />
            Contact Me
          </Button>
        </a>
          {/* <Button variant="outline" className="bg-black text-white border-gray-700 hover:bg-gray-900">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Call
          </Button> */}
          <a
          href="/asimadnan_resume_2024_ai.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="bg-black text-white border-gray-700 hover:bg-gray-900">
            <FileText className="w-4 h-4 mr-2" />
            Resume
          </Button>
        </a>
        </div>

        <div className="flex justify-center gap-6">
          <a href="https://linkedin.com/in/asimadnan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/asimadnan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
