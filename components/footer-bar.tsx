import { Github, Linkedin, Mail, Calendar } from "lucide-react"

export function FooterBar() {
  return (
    <footer id="contact" className="border-t border-zinc-900 bg-black py-10">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">Let{"'"}s Connect</h3>
            <p className="mt-2 max-w-md text-sm text-zinc-400">
              Ready to collaborate or discuss opportunities in Generative AI, MLOps, and NLP.
            </p>
          </div>
          <div className="space-y-2 text-sm text-zinc-300">
            <a className="flex items-center gap-2 hover:text-white" href="mailto:hello@asimadnan.com">
              <Mail className="h-4 w-4" /> hello@asimadnan.com
            </a>
            <a
              className="flex items-center gap-2 hover:text-white"
              href="https://www.linkedin.com/in/asimadnan/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              className="flex items-center gap-2 hover:text-white"
              href="https://github.com/asimadnan"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              className="flex items-center gap-2 hover:text-white"
              href="https://calendly.com/asimadnan"
              target="_blank"
              rel="noreferrer"
            >
              <Calendar className="h-4 w-4" /> Book a call
            </a>
          </div>
          <div className="text-right text-xs text-zinc-500 md:text-right">
            <p>© {new Date().getFullYear()} Asim Adnan Eijaz</p>
            <p>Built with Next.js + shadcn/ui</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
