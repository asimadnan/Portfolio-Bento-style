"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, FileText, Menu } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function NavBar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-black/70 to-transparent">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-extrabold tracking-tight">
            <span className="text-2xl text-red-600">ASIM</span>
            <span className="text-2xl text-white">.AE</span>
          </Link>
          <nav className="hidden md:flex items-center gap-5 text-sm text-zinc-300">
            <a href="#home" className="hover:text-white">
              Home
            </a>
            <a href="#featured" className="hover:text-white">
              Featured
            </a>
            <a href="#aiml" className="hover:text-white">
              AI/ML
            </a>
            <a href="#tools" className="hover:text-white">
              Tools
            </a>
            <a href="#web" className="hover:text-white">
              Web Dev
            </a>
            <a href="#research" className="hover:text-white">
              Research
            </a>
            <a href="#blog" className="hover:text-white">
              Blog
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <Button asChild variant="ghost" size="icon" className="text-zinc-300 hover:text-white">
            <a href="https://github.com/asimadnan" target="_blank" aria-label="GitHub" rel="noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" className="text-zinc-300 hover:text-white">
            <a href="https://www.linkedin.com/asimadnan" target="_blank" aria-label="LinkedIn" rel="noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-red-600 text-white hover:bg-red-600 hover:text-white bg-transparent"
          >
            <a href="/asimadnan_resume_2025_AI.pdf" target="_blank" rel="noreferrer">
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-zinc-200 hover:bg-zinc-800/50"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <div className={cn("md:hidden px-4 pb-4", open ? "block" : "hidden")}>
        <div className="grid gap-3 text-zinc-300">
          <a href="#home" className="hover:text-white">
            Home
          </a>
          <a href="#featured" className="hover:text-white">
            Featured
          </a>
          <a href="#aiml" className="hover:text-white">
            AI/ML
          </a>
          <a href="#tools" className="hover:text-white">
            Tools
          </a>
          <a href="#web" className="hover:text-white">
            Web Dev
          </a>
          <a href="#research" className="hover:text-white">
            Research
          </a>
          <a href="#blog" className="hover:text-white">
            Blog
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
          <div className="flex gap-2 pt-2">
            <a
              href="https://github.com/"
              target="_blank"
              aria-label="GitHub"
              className="rounded-md bg-zinc-800/60 p-2"
              rel="noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              aria-label="LinkedIn"
              className="rounded-md bg-zinc-800/60 p-2"
              rel="noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="/asimadnan_resume_2025_AI.pdf"
              target="_blank"
              className="rounded-md bg-red-600 px-3 py-2 text-sm font-medium"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
