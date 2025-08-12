export type LinkSet = {
  website?: string
  github?: string
  paper?: string
}

export type RawProject = {
  id: string
  title: string
  description: string
  image?: string
  technologies?: string[]
  links?: LinkSet
  category?: string
  featured?: boolean
  trailer?: string
}

export type Blog = {
  id: string
  title: string
  url: string
  date?: string
  source?: string
  image?: string
  excerpt?: string
}

export type ConnectItem = {
  id: string
  title: string
  type: "email" | "linkedin" | "github" | "calendar" | "resume" | "website"
  url: string
  image?: string
  description?: string
}

export type ProfileData = {
  profile: {
    name: string
    headline: string
    subheadline: string
    location: string
    video?: string
    backdrop?: string
    contact?: {
      email?: string
      resume?: string
      github?: string
      linkedin?: string
      calendar?: string
    }
  }
  mediumUsername?: string
  projects: RawProject[]
  blogs?: Blog[]
  connect?: ConnectItem[]
}
