import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Linkedin, Github, FileText } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
        <p className="text-gray-400 text-lg">Ready to collaborate or discuss opportunities</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gray-900 border-gray-800 hover:border-emerald-500 transition-all duration-300 group">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6 text-white" />
            </div>
            <a href="https://linkedin.com/in/asimadnan" target="_blank" rel="noopener noreferrer">
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            </a>
            <p className="text-gray-400 text-sm mb-4">Professional network</p>
            <a href="https://linkedin.com/in/asimadnan" target="_blank" rel="noopener noreferrer">
            <Button size="sm" variant="outline" className="bg-black text-white border-gray-700 hover:bg-gray-900">
              Connect
            </Button>
            </a>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800 hover:border-emerald-500 transition-all duration-300 group">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Github className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">GitHub</h3>
            <p className="text-gray-400 text-sm mb-4">Open source projects</p>
            <a href="https://github.com/asimadnan" target="_blank" rel="noopener noreferrer">
            <Button size="sm" variant="outline" className="bg-black text-white border-gray-700 hover:bg-gray-900">
              Follow
            </Button>
            </a>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800 hover:border-emerald-500 transition-all duration-300 group">
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold mb-2">Schedule</h3>
          <p className="text-gray-400 text-sm mb-4">Book a 30 min call</p>
          
          <a 
            href="https://calendly.com/asimadnan" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              size="sm" 
              variant="outline" 
              className="bg-black text-white border-gray-700 hover:bg-gray-900"
            >
              Book Call
            </Button>
          </a>
        </CardContent>
      </Card>


        <Card className="bg-gray-900 border-gray-800 hover:border-emerald-500 transition-all duration-300 group">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <a href="/asimadnan_resume_2024_ai.pdf" target="_blank" rel="noopener noreferrer">
            <h3 className="font-semibold mb-2">Resume</h3>
            <p className="text-gray-400 text-sm mb-4">Download CV</p>
            </a>
            <Button size="sm" variant="outline" className="bg-black text-white border-gray-700 hover:bg-gray-900">
              Download
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
