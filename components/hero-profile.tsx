"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, FileText, Mail } from "lucide-react"

type Profile = {
  name: string
  headline: string
  subheadline: string
  location: string
  video?: string
  backdrop?: string
  ctas: {
    resume?: string
    github?: string
    linkedin?: string
    email?: string
  }
}

export function HeroProfile({ profile }: { profile: Profile }) {
  return (
    <section id="home" className="relative h-[72vh] md:h-[86vh] w-full">
      <div className="absolute inset-0">
        {profile.video ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            crossOrigin="anonymous"
            poster={profile.backdrop}
          >
            <source src={profile.video} type="video/mp4" />
          </video>
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-zinc-900 to-black" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-4 pb-10 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm uppercase tracking-widest text-zinc-300">Portfolio</p>
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">{profile.name}</h1>
          <p className="text-lg text-zinc-200">{profile.headline}</p>
          <p className="text-sm text-zinc-300">
            {profile.subheadline} • {profile.location}
          </p>
          <div className="flex flex-wrap gap-3 pt-3">
            {profile.ctas.email && (
              <Button asChild size="lg" className="bg-white text-black hover:bg-zinc-200">
                <a href={`mailto:${profile.ctas.email}`}>
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </a>
              </Button>
            )}
            {profile.ctas.resume && (
              <Button asChild size="lg" variant="secondary" className="bg-zinc-800/80 text-white hover:bg-zinc-700">
                <a href={profile.ctas.resume} target="_blank" rel="noreferrer">
                  <FileText className="mr-2 h-5 w-5" />
                  Resume
                </a>
              </Button>
            )}
            {profile.ctas.github && (
              <Button asChild size="lg" variant="secondary" className="bg-zinc-800/80 text-white hover:bg-zinc-700">
                <a href={profile.ctas.github} target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
            )}
            {profile.ctas.linkedin && (
              <Button asChild size="lg" variant="secondary" className="bg-zinc-800/80 text-white hover:bg-zinc-700">
                <a href={profile.ctas.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
