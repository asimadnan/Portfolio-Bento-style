"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { ProjectDialog } from "./project-dialog"

export type Project = {
  id: string
  title: string
  slug?: string
  description: string
  poster: string
  tags?: string[]
  links?: { live?: string; code?: string }
  trailer?: string
}

export type Row = {
  id: string
  title: string
  anchor?: string
  items: Project[]
}

export function RowCarousel({ row }: { row: Row }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  function scrollBy(offset: number) {
    const el = scrollRef.current
    if (el) el.scrollBy({ left: offset, behavior: "smooth" })
  }

  return (
    <section id={row.anchor} aria-label={row.title} className="space-y-3 my-0">
      <h2 className="text-xl font-semibold my-16">{row.title}</h2>
      <div className="relative group">
        <button
          aria-label="Scroll left"
          onClick={() => scrollBy(-800)}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 opacity-0 transition group-hover:opacity-100 hover:bg-black/70"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scroll-smooth pb-2 pr-2 [scrollbar-width:none] [-ms-overflow-style:none]"
          style={{ scrollbarWidth: "none" }}
        >
          {row.items.map((item) => (
            <ProjectTile key={item.id} project={item} />
          ))}
        </div>
        <button
          aria-label="Scroll right"
          onClick={() => scrollBy(800)}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 opacity-0 transition group-hover:opacity-100 hover:bg-black/70"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}

function ProjectTile({ project }: { project: Project }) {
  const [open, setOpen] = useState(false) as any

  return (
    <div className="group relative w-[45vw] sm:w-[35vw] md:w-[22vw] lg:w-[17vw] xl:w-[14vw] shrink-0 cursor-pointer">
      <button className="block w-full overflow-hidden rounded-md ring-1 ring-zinc-800" onClick={() => setOpen(true)}>
        <div className="relative aspect-[2/3] w-full">
          <Image
            src={project.poster || "/placeholder.svg?height=900&width=600&query=poster"}
            alt={project.title}
            fill
            className="object-cover object-center transition duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 14vw"
          />
        </div>
      </button>
      <div className="mt-2 px-0.5">
        <p className="truncate text-sm text-zinc-200">{project.title}</p>
        {project.tags && project.tags.length > 0 ? (
          <p className="truncate text-xs text-zinc-400">{project.tags.slice(0, 3).join(" • ")}</p>
        ) : null}
      </div>

      <ProjectDialog open={open} onOpenChange={setOpen} project={project} />
    </div>
  )
}
