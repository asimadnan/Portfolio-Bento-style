"use client"

import { useRef, useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ExternalLink, Github, Pause, Play, Volume2, VolumeX } from "lucide-react"

type Project = {
  id: string
  title: string
  description: string
  poster: string
  tags?: string[]
  links?: { live?: string; code?: string }
  trailer?: string
}

export function ProjectDialog({
  open,
  onOpenChange,
  project,
}: {
  open: boolean
  onOpenChange: (v: boolean) => void
  project: Project
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(true)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = muted
    if (open && project.trailer) {
      v.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false))
    } else {
      v.pause()
      setPlaying(false)
    }
  }, [open, muted, project.trailer])

  function togglePlay() {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  function toggleMute() {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl bg-zinc-950 text-white p-0 overflow-hidden">
        <div className="relative w-full">
          <div className="relative w-full aspect-video bg-black">
            {project.trailer ? (
              <video
                ref={videoRef}
                className="h-full w-full object-cover object-center"
                autoPlay
                muted={muted}
                loop
                playsInline
                preload="metadata"
                poster={project.poster}
                crossOrigin="anonymous"
              >
                <source src={project.trailer} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={project.poster || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover object-center"
              />
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
          </div>

          {project.trailer ? (
            <div className="absolute bottom-3 left-3 flex items-center gap-2">
              <Button
                size="sm"
                className="bg-white text-black hover:bg-zinc-200"
                onClick={togglePlay}
                aria-label={playing ? "Pause trailer" : "Play trailer"}
              >
                {playing ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
                {playing ? "Pause" : "Play"}
              </Button>
              <Button
                size="icon"
                variant="secondary"
                className="bg-zinc-800/80 text-white hover:bg-zinc-700"
                onClick={toggleMute}
                aria-label={muted ? "Unmute trailer" : "Mute trailer"}
              >
                {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>
            </div>
          ) : null}
        </div>

        <div className="grid gap-6 p-6 md:grid-cols-[1.2fr,1fr]">
          <div className="space-y-3">
            <DialogHeader className="p-0">
              <DialogTitle className="text-2xl">{project.title}</DialogTitle>
              {project.tags && project.tags.length > 0 ? (
                <DialogDescription className="text-zinc-300">{project.tags.join(" • ")}</DialogDescription>
              ) : null}
            </DialogHeader>
            <p className="text-sm leading-relaxed text-zinc-200">{project.description}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.links?.live ? (
                <Button asChild className="bg-white text-black hover:bg-zinc-200">
                  <a href={project.links.live} target="_blank" rel="noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit
                  </a>
                </Button>
              ) : null}
              {project.links?.code ? (
                <Button asChild variant="secondary" className="bg-zinc-800 text-white hover:bg-zinc-700">
                  <a href={project.links.code} target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
              ) : null}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs text-zinc-300 md:grid-cols-2">
            <InfoItem label="Type" value="Project" />
            <InfoItem label="Stack" value={project.tags?.join(", ") || "—"} />
            <InfoItem label="Status" value={project.links?.live ? "Live" : "Preview"} />
            <InfoItem label="Owner" value="Asim Adnan Eijaz" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-zinc-800 bg-zinc-900/40 p-3">
      <p className="text-[10px] uppercase tracking-widest text-zinc-500">{label}</p>
      <p className="mt-1 text-sm text-zinc-200">{value}</p>
    </div>
  )
}
