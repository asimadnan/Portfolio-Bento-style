"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, Info } from "lucide-react"
import { useState } from "react"
import { ProjectDialog } from "./project-dialog"

export type Feature = {
  id: string
  title: string
  tagline: string
  overview: string
  poster: string
  backdrop?: string
  video?: string
  links?: { live?: string; code?: string }
}

export function HeroBanner({ feature }: { feature: Feature }) {
  const [open, setOpen] = useState(false)

  return (
    <section id="home" className="relative h-[72vh] md:h-[86vh] w-full">
      <div className="absolute inset-0">
        {feature.video ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            crossOrigin="anonymous"
            poster={feature.backdrop}
          >
            <source src={feature.video} type="video/mp4" />
          </video>
        ) : (
          <Image src={feature.backdrop || feature.poster} alt={feature.title} fill className="object-cover" priority />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-4 pb-10 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">{feature.title}</h1>
          <p className="text-lg text-zinc-200">{feature.tagline}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            {feature.links?.live ? (
              <Button asChild size="lg" className="bg-white text-black hover:bg-zinc-200">
                <a href={feature.links.live} target="_blank" rel="noreferrer">
                  <Play className="mr-2 h-5 w-5" />
                  View Project
                </a>
              </Button>
            ) : null}
            <Button
              size="lg"
              variant="secondary"
              className="bg-zinc-800/80 text-white hover:bg-zinc-700"
              onClick={() => setOpen(true)}
            >
              <Info className="mr-2 h-5 w-5" />
              More Info
            </Button>
          </div>
        </div>
      </div>

      <ProjectDialog
        open={open}
        onOpenChange={setOpen}
        project={{
          id: feature.id,
          title: feature.title,
          description: feature.overview,
          poster: feature.poster,
          tags: [feature.tagline],
          links: feature.links,
        }}
      />
    </section>
  )
}
