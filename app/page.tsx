"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import {
  ArrowRight,
  Boxes,
  BriefcaseBusiness,
  ChevronRight,
  CircleDot,
  Cuboid,
  GitBranch,
  Handshake,
  Moon,
  ShieldCheck,
  Sparkles,
  Sun,
  Target,
  UsersRound,
  Workflow,
} from "lucide-react"
import { caseStudies } from "@/lib/case-studies"

type Theme = "light" | "dark"

type MediumPost = {
  id: string
  title: string
  url: string
  date: string
  source: string
}

const implementationCards = caseStudies

const realityItems = [
  ["Automating the wrong workflows", UsersRound],
  ["Lack of operational clarity", GitBranch],
  ["Chasing vanity use cases", Sparkles],
  ["Underestimating adoption & change", ShieldCheck],
  ["Building before understanding the business", Boxes],
]

const process = [
  {
    title: "Executive Discovery",
    body: "Leadership teams align on goals, challenges, bottlenecks, and what success looks like.",
    icon: UsersRound,
  },
  {
    title: "Workflow Mapping",
    body: "We map how work actually happens, where time is lost, context breaks, decisions slow down, and value leaks.",
    icon: Workflow,
  },
  {
    title: "Opportunity Prioritization",
    body: "We identify and prioritize AI opportunities based on impact, feasibility, effort, data readiness, and strategic alignment.",
    icon: Target,
  },
  {
    title: "Solution Design & Build",
    body: "Production-ready systems are designed and implemented with governance, evaluations, and human-in-the-loop where it matters.",
    icon: Cuboid,
  },
]

const heroCallouts = [
  {
    title: "Business Outcomes",
    body: "More revenue, time saved, better decisions, happier customers.",
    top: "18%",
  },
  {
    title: "AI Opportunities",
    body: "High-impact workflows worth solving.",
    top: "46%",
  },
  {
    title: "Operational Reality",
    body: "Processes, systems, data, and people.",
    top: "72%",
  },
]

function getStoredThemePreference() {
  const preference = window.localStorage.getItem("themePreference")
  return preference === "light" || preference === "dark" ? preference : null
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark")
}

export default function Page() {
  const [theme, setTheme] = useState<Theme>("light")
  const [mediumPosts, setMediumPosts] = useState<MediumPost[]>([])
  const [mediumStatus, setMediumStatus] = useState<"loading" | "ready" | "error">("loading")

  useEffect(() => {
    window.localStorage.removeItem("theme")

    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const initial = getStoredThemePreference() ?? (media.matches ? "dark" : "light")

    applyTheme(initial)
    setTheme(initial)

    function handleSystemThemeChange(event: MediaQueryListEvent) {
      if (getStoredThemePreference()) return
      const nextTheme = event.matches ? "dark" : "light"
      applyTheme(nextTheme)
      setTheme(nextTheme)
    }

    media.addEventListener("change", handleSystemThemeChange)

    return () => {
      media.removeEventListener("change", handleSystemThemeChange)
    }
  }, [])

  function handleThemeToggle() {
    const nextTheme = theme === "dark" ? "light" : "dark"
    window.localStorage.setItem("themePreference", nextTheme)
    applyTheme(nextTheme)
    setTheme(nextTheme)
  }

  useEffect(() => {
    let active = true

    async function loadMediumPosts() {
      try {
        const response = await fetch("/api/medium?username=asimadnan")
        if (!response.ok) throw new Error("Failed to fetch Medium posts")
        const data = await response.json()
        if (active) {
          setMediumPosts((data.posts ?? []).slice(0, 5))
          setMediumStatus("ready")
        }
      } catch {
        if (active) setMediumStatus("error")
      }
    }

    loadMediumPosts()

    return () => {
      active = false
    }
  }, [])

  return (
    <main className="min-h-screen bg-[#f8f7f2] text-[#080b0c] transition-colors duration-300 dark:bg-[#070908] dark:text-[#f7f5eb]">
      <header className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-4 md:px-12 lg:px-16">
        <a href="#" className="leading-none" aria-label="Asim Adnan home">
          <div className="flex items-start gap-1 text-xl font-semibold tracking-[0.08em]">
            ASIM ADNAN <span className="mt-0.5 text-[#9bb627]">•</span>
          </div>
          <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.22em] text-black/50 dark:text-white/45">
            AI Systems & Workflow Engineer
          </div>
        </a>

        <nav className="hidden items-center gap-14 text-sm font-semibold md:flex">
          <a href="#work" className="hover:text-[#80951e]">Work</a>
          <a href="#readiness" className="hover:text-[#80951e]">AI Readiness</a>
          <a href="#insights" className="hover:text-[#80951e]">Insights</a>
          <a href="#about" className="hover:text-[#80951e]">About</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            onClick={handleThemeToggle}
            className="grid size-10 place-items-center rounded-full border border-black/10 bg-white/70 text-black shadow-sm transition hover:border-[#9bb627] dark:border-white/15 dark:bg-white/8 dark:text-white"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a
            href="mailto:hello@asimadnan.com"
            className="hidden items-center gap-3 rounded bg-[#080b0c] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#9bb627] hover:text-black dark:bg-white dark:text-black dark:hover:bg-[#c7df57] sm:flex"
          >
            Let&apos;s Talk <ArrowRight size={15} />
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-[1440px] gap-8 px-6 pb-8 pt-6 md:grid-cols-[0.9fr_1.1fr] md:px-12 md:pt-8 lg:px-16 lg:pb-9 lg:pt-8">
        <div className="flex flex-col justify-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8ea71d]">
            AI Readiness • Workflow Transformation • Production Systems
          </p>
          <h1 className="mt-4 max-w-[600px] text-[clamp(2.6rem,4.25vw,4.05rem)] font-medium leading-[0.98] tracking-normal">
            Identify the right AI opportunities.
            <br />
            Build what matters<span className="text-[#9bb627]">.</span>
          </h1>
          <p className="mt-5 max-w-[560px] text-base leading-7 text-black/70 dark:text-white/68">
            Asim works with leadership teams to find where AI creates real operational leverage, then designs and builds systems that deliver measurable impact.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm font-medium text-black/70 dark:text-white/70">
            <span className="inline-flex items-center gap-2"><BriefcaseBusiness size={18} /> Senior AI/ML Engineer at</span>
            <span className="inline-flex items-center gap-2 font-bold text-black dark:text-white"><CircleDot size={22} /> Stockland</span>
          </div>
          <div className="mt-5 flex flex-wrap gap-4">
            <a href="#work" className="inline-flex items-center gap-4 rounded bg-[#080b0c] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#9bb627] hover:text-black dark:bg-white dark:text-black">
              Explore Work <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden lg:min-h-[390px]">
          <HeroSystemImage theme={theme} />
        </div>
      </section>

      <section id="readiness" className="relative overflow-hidden bg-[#070b0c] text-white">
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_85%_10%,rgba(155,182,39,0.25),transparent_24%),repeating-radial-gradient(ellipse_at_92%_30%,transparent_0_24px,rgba(155,182,39,0.22)_25px,transparent_26px)]" />
        <div className="relative mx-auto max-w-[1440px] px-6 py-8 md:px-12 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9bb627]">The Reality</p>
              <h2 className="mt-4 max-w-[380px] text-3xl font-medium leading-tight md:text-4xl">Most AI projects fail before they begin.</h2>
            </div>
            <p className="max-w-[620px] self-center text-base leading-7 text-white/74">
              Organizations rush to build without understanding their workflows, data, or constraints. The result? Expensive pilots, low adoption, and no meaningful impact.
            </p>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-5">
            {realityItems.map(([label, Icon], index) => (
              <div key={label as string} className="flex items-center gap-4 border-white/18 md:border-r md:pr-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-[#9bb627]/35 text-[#bdd64d]">
                  <Icon size={18} />
                </span>
                <span className="text-sm leading-5 text-white/80">{label as string}</span>
                {index === realityItems.length - 1 ? null : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 lg:px-16">
        <SectionHeader kicker="The Process" title="From clarity to impact." />
        <div className="mt-10 grid gap-8 md:grid-cols-4 lg:gap-10">
          {process.map((item, index) => (
            <div key={item.title} className="relative min-w-0">
              {index < process.length - 1 && (
                <div className="absolute left-[76px] right-[-28px] top-[31px] hidden h-px bg-[linear-gradient(90deg,rgba(155,182,39,0.34)_50%,transparent_50%)] bg-[length:8px_1px] md:block lg:right-[-36px]">
                  <ChevronRight className="absolute -right-1 -top-[7px] text-[#91a727]" size={14} strokeWidth={1.8} />
                </div>
              )}
              <div className="relative grid size-16 place-items-center rounded-lg border border-black/12 bg-white/70 text-black shadow-[0_10px_24px_rgba(0,0,0,0.06)] dark:border-white/12 dark:bg-white/6 dark:text-white">
                <span className="absolute -left-2 -top-2 grid size-7 place-items-center rounded-full bg-[#e4ecc0] text-[11px] font-bold text-[#82951f] ring-4 ring-[#f8f7f2] dark:bg-[#2a3216] dark:text-[#d7eb6c] dark:ring-[#070908]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <item.icon size={28} strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-[15px] font-bold leading-5 md:max-w-[240px]">{item.title}</h3>
              <p className="mt-3 max-w-[300px] text-[13px] leading-[1.75] text-black/62 dark:text-white/60">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="mx-auto max-w-[1440px] px-6 py-10 md:px-12 lg:px-16">
        <SectionHeader kicker="Selected Implementations" title="AI systems that solve real operational problems." action="View all case studies" href="/case-studies" />
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {implementationCards.map((card) => (
            <a key={card.slug} href={`/case-studies/${card.slug}`} className="group overflow-hidden rounded-lg border border-black/12 bg-white/65 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/12 dark:bg-white/6">
              <div className="relative h-28 overflow-hidden bg-[#080d0c]">
                <Image src={card.image} alt="" fill sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold leading-5 transition group-hover:text-[#82951f]">{card.title}</h3>
                <p className="mt-4 min-h-[112px] text-sm leading-6 text-black/66 dark:text-white/63">{card.summary}</p>
                <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-black/45 dark:text-white/42">{card.eyebrow}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="insights" className="mx-auto max-w-[1440px] px-6 py-10 md:px-12 lg:px-16">
        <SectionHeader kicker="Writing" title="Notes from the field." action="View all articles" href="https://medium.com/@asimadnan" />
        <div className="mt-5 grid gap-5 md:grid-cols-5">
          {mediumStatus === "loading" ? (
            Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="border-black/18 md:border-r md:pr-8 dark:border-white/18">
                <div className="h-3 w-24 rounded bg-black/10 dark:bg-white/10" />
                <div className="mt-3 h-5 w-full rounded bg-black/10 dark:bg-white/10" />
                <div className="mt-2 h-5 w-3/4 rounded bg-black/10 dark:bg-white/10" />
                <div className="mt-5 h-3 w-24 rounded bg-black/10 dark:bg-white/10" />
              </div>
            ))
          ) : mediumStatus === "error" || mediumPosts.length === 0 ? (
            <p className="text-sm leading-6 text-black/62 dark:text-white/62 md:col-span-5">
              Medium posts are temporarily unavailable. Latest writing is available on Medium.
            </p>
          ) : (
            mediumPosts.map((post) => (
              <a key={post.id} href={post.url} target="_blank" rel="noreferrer" className="group border-black/18 md:border-r md:pr-8 dark:border-white/18">
                <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-black/45 dark:text-white/45">{post.date}</p>
                <h3 className="mt-2 text-base font-semibold leading-5 transition group-hover:text-[#82951f]">{post.title}</h3>
                <p className="mt-5 inline-flex items-center gap-3 text-xs text-black/65 dark:text-white/62">Read on Medium <ArrowRight size={14} /></p>
              </a>
            ))
          )}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-[1440px] px-6 pb-8 pt-4 md:px-12 lg:px-16">
        <div className="overflow-hidden rounded-xl bg-[#070b0c] text-white shadow-2xl">
          <div className="grid lg:grid-cols-[1fr_1.2fr]">
            <div className="relative overflow-hidden border-white/12 p-8 lg:border-r">
              <div className="absolute right-8 top-8 hidden h-32 w-40 opacity-20 [background-image:radial-gradient(circle,rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:16px_16px] md:block" />
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9bb627]">About Asim</p>
              <h2 className="relative mt-3 max-w-[560px] text-3xl font-medium leading-tight md:text-4xl">Software engineer. Data scientist. AI systems builder.</h2>
              <p className="relative mt-5 max-w-[560px] text-sm leading-6 text-white/72">
                Asim brings a software engineering foundation together with advanced study in data science and AI research. With a Master of Data Science and a Master of Research focused on artificial intelligence, the work sits at the intersection of production engineering, applied machine learning, and practical business problem solving.
              </p>
            </div>
            <div className="relative p-8">
              <div className="relative max-w-[620px]">
                <p className="text-5xl font-serif text-[#bdd64d]">“</p>
                <blockquote className="-mt-4 text-xl leading-9 text-white/92 md:text-2xl">
                  Asim combines deep technical expertise with a rare ability to understand our business. He doesn&apos;t just build AI solutions, he transforms how we work.
                </blockquote>
                <p className="mt-5 text-sm font-semibold text-[#bdd64d]">— Director of Data & Analytics, Stockland</p>
              </div>
            </div>
          </div>
          <div className="grid border-t border-white/12 lg:grid-cols-[1fr_1fr]">
            <div className="flex items-center gap-5 p-6">
              <span className="grid size-11 place-items-center rounded border border-white/14 bg-white/6"><Handshake size={18} /></span>
              <p className="text-sm leading-5 text-white/78">Let&apos;s build something<br />that moves the needle.</p>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 border-white/12 p-6 lg:border-l">
              <p className="text-sm leading-5 text-white/76">Have a project in mind?<br />Let&apos;s discuss how we can work together.</p>
              <a href="mailto:hello@asimadnan.com" className="inline-flex items-center gap-4 rounded border border-white/14 bg-white/8 px-6 py-3 text-sm font-semibold transition hover:bg-white hover:text-black">
                Let&apos;s Talk <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function SectionHeader({ kicker, title, action, href = "#" }: { kicker: string; title: string; action?: string; href?: string }) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8ea71d]">{kicker}</p>
        <h2 className="mt-3 max-w-[820px] text-3xl font-medium leading-tight md:text-4xl">{title}</h2>
      </div>
      {action ? (
        <a href={href} className="inline-flex items-center gap-4 text-sm font-semibold hover:text-[#82951f]">
          {action} <ArrowRight size={15} />
        </a>
      ) : null}
    </div>
  )
}

function HeroSystemImage({ theme }: { theme: Theme }) {
  const src = theme === "dark" ? "/hero-dark-mode.png" : "/hero-light-mode.png"

  return (
    <div className="relative h-full min-h-[430px] lg:min-h-[450px]">
      <div className="absolute inset-x-0 top-0 h-[330px] md:inset-y-0 md:left-0 md:right-auto md:h-auto md:w-[70%]">
        <Image
          src={src}
          alt="Layered AI readiness model connecting operational reality, AI opportunities, and business outcomes."
          fill
          priority
          sizes="(min-width: 768px) 38vw, 100vw"
          className="object-contain object-center md:object-left"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 grid gap-3 md:hidden">
        {heroCallouts.map((callout) => (
          <div key={callout.title} className="rounded-lg border border-black/10 bg-white/70 p-3 shadow-sm backdrop-blur dark:border-white/12 dark:bg-white/7">
            <h3 className="text-sm font-bold leading-tight text-black dark:text-white">{callout.title}</h3>
            <p className="mt-1 text-xs leading-5 text-black/62 dark:text-white/62">{callout.body}</p>
          </div>
        ))}
      </div>

      <div className="hidden md:block">
        {heroCallouts.map((callout) => (
          <div
            key={callout.title}
            className="absolute right-0 w-[31%] -translate-y-1/2"
            style={{ top: callout.top }}
          >
            <div className="absolute right-full top-[14px] h-px w-16 border-t border-dashed border-black/22 dark:border-white/24" />
            <div className="absolute right-[calc(100%+4rem)] top-[14px] h-8 w-10 border-l border-t border-dashed border-black/22 dark:border-white/24" />
            <h3 className="text-[15px] font-bold leading-tight text-black dark:text-white">{callout.title}</h3>
            <p className="mt-2 max-w-[210px] text-sm leading-6 text-black/62 dark:text-white/62">{callout.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
