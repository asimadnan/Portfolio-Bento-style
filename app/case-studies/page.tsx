import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Blocks, Clock } from "lucide-react"
import { caseStudies } from "@/lib/case-studies"

export const metadata = {
  title: "Case Studies | Asim Adnan",
  description: "Selected AI systems and operational workflow case studies by Asim Adnan.",
}

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f2] text-[#080b0c] dark:bg-[#070908] dark:text-[#f7f5eb]">
      <header className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-6 md:px-10">
        <Link href="/" className="inline-flex items-center gap-3 text-sm font-semibold text-black/70 transition hover:text-[#82951f] dark:text-white/70">
          <ArrowLeft size={16} />
          Home
        </Link>
      </header>

      <section className="mx-auto max-w-[1280px] px-6 pb-10 pt-8 md:px-10 md:pb-16 md:pt-14">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8ea71d]">Selected Implementations</p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[0.95fr_0.6fr] lg:items-end">
          <h1 className="max-w-[880px] text-[clamp(3rem,7vw,6.5rem)] font-medium leading-[0.95] tracking-normal">
            AI systems that solve operational problems<span className="text-[#9bb627]">.</span>
          </h1>
          <p className="max-w-[520px] text-lg leading-8 text-black/65 dark:text-white/62">
            A data-driven library of implementation stories, from readiness and workflow mapping through production systems, governance, and measurable operational change.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 pb-20 md:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group flex min-h-[420px] flex-col overflow-hidden rounded-lg border border-black/12 bg-white/70 shadow-sm transition hover:-translate-y-1 hover:border-[#9bb627]/50 hover:shadow-xl dark:border-white/12 dark:bg-white/6"
            >
              <div className="relative h-44 overflow-hidden bg-[#080d0c]">
                <Image src={study.image} alt="" fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#81951f]">{study.eyebrow}</p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight">{study.title}</h2>
                <p className="mt-4 flex-1 text-sm leading-6 text-black/65 dark:text-white/62">{study.summary}</p>
                <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-black/55 dark:text-white/52">
                  <span className="inline-flex items-center gap-2"><Clock size={14} /> {study.duration}</span>
                  <span className="inline-flex items-center gap-2"><Blocks size={14} /> {study.status}</span>
                </div>
                <div className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-black transition group-hover:text-[#82951f] dark:text-white">
                  Read case study <ArrowRight size={15} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
