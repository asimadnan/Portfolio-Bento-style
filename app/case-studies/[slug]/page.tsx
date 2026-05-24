import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Check, ListChecks } from "lucide-react"
import { caseStudies, getCaseStudy, type CaseStudySection } from "@/lib/case-studies"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)

  if (!study) {
    return {
      title: "Case Study Not Found | Asim Adnan",
    }
  }

  return {
    title: `${study.title} | Case Study`,
    description: study.summary,
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const study = getCaseStudy(slug)

  if (!study) notFound()

  const nextStudy = caseStudies[(caseStudies.findIndex((item) => item.slug === study.slug) + 1) % caseStudies.length]

  return (
    <main className="min-h-screen bg-[#f8f7f2] text-[#080b0c] dark:bg-[#070908] dark:text-[#f7f5eb]">
      <header className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-6 md:px-10">
        <Link href="/case-studies" className="inline-flex items-center gap-3 text-sm font-semibold text-black/70 transition hover:text-[#82951f] dark:text-white/70">
          <ArrowLeft size={16} />
          Case studies
        </Link>
        <Link href="/" className="text-sm font-semibold text-black/55 transition hover:text-[#82951f] dark:text-white/55">
          Home
        </Link>
      </header>

      <section className="mx-auto grid max-w-[1280px] gap-10 px-6 pb-12 pt-8 md:px-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8ea71d]">{study.eyebrow}</p>
          <h1 className="mt-5 max-w-[880px] text-[clamp(3rem,7vw,6.2rem)] font-medium leading-[0.95] tracking-normal">
            {study.title}<span className="text-[#9bb627]">.</span>
          </h1>
          <p className="mt-7 max-w-[780px] text-xl leading-9 text-black/66 dark:text-white/64">{study.hero}</p>
        </div>

        <aside className="grid gap-3 rounded-lg border border-black/12 bg-white/65 p-5 dark:border-white/12 dark:bg-white/6">
          <MetaRow label="Client" value={study.client} />
          <MetaRow label="Industry" value={study.industry} />
          <MetaRow label="Year" value={study.year} />
          <MetaRow label="Timeline" value={study.duration} />
          <MetaRow label="Status" value={study.status} />
        </aside>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 pb-14 md:px-10">
        <div className="relative aspect-[3/2] overflow-hidden rounded-xl border border-black/10 bg-[#080d0c] shadow-2xl dark:border-white/10">
          <Image src={study.image} alt={`${study.title} case study visual`} fill priority sizes="(min-width: 1280px) 1280px, 100vw" className="object-cover" />
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-6 pb-20 md:px-10">
        {study.sections.map((section, index) => (
          <StudySection key={`${section.title}-${index}`} section={section} index={index} />
        ))}
      </div>

      <section className="mx-auto max-w-[1280px] px-6 pb-10 md:px-10">
        <Link
          href={`/case-studies/${nextStudy.slug}`}
          className="group flex flex-col justify-between gap-6 rounded-xl bg-[#070b0c] p-7 text-white transition hover:bg-[#111711] md:flex-row md:items-center"
        >
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#bdd64d]">Next Case Study</p>
            <h2 className="mt-3 text-3xl font-medium">{nextStudy.title}</h2>
          </div>
          <span className="inline-flex items-center gap-3 text-sm font-semibold">
            Read next <ArrowRight size={16} className="transition group-hover:translate-x-1" />
          </span>
        </Link>
      </section>
    </main>
  )
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-6 border-b border-black/10 pb-3 last:border-b-0 last:pb-0 dark:border-white/10">
      <span className="text-xs font-bold uppercase tracking-[0.16em] text-black/42 dark:text-white/42">{label}</span>
      <span className="max-w-[280px] text-right text-sm font-semibold leading-5 text-black/72 dark:text-white/72">{value}</span>
    </div>
  )
}

function StudySection({ section, index }: { section: CaseStudySection; index: number }) {
  return (
    <section className="grid gap-8 border-t border-black/10 py-12 first:border-t-0 first:pt-2 dark:border-white/10 md:py-14 lg:grid-cols-[0.58fr_1fr]">
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8ea71d]">{String(index + 1).padStart(2, "0")}</p>
        <h2 className="mt-3 max-w-[420px] text-3xl font-medium leading-tight md:text-4xl">{section.title}</h2>
      </div>

      <div className="space-y-6">
        {section.paragraphs?.map((paragraph) => (
          <p key={paragraph} className="text-lg leading-9 text-black/67 dark:text-white/64">
            {paragraph}
          </p>
        ))}

        {section.bullets ? (
          <div className="grid gap-3">
            {section.bullets.map((item) => (
              <div key={item} className="flex gap-4 rounded-lg border border-black/10 bg-white/55 p-4 dark:border-white/10 dark:bg-white/5">
                <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-[#e7edc7] text-[#82951f] dark:bg-[#2a3216] dark:text-[#d7eb6c]">
                  <Check size={14} />
                </span>
                <p className="text-base leading-7 text-black/68 dark:text-white/64">{item}</p>
              </div>
            ))}
          </div>
        ) : null}

        {section.steps ? (
          <div className="grid gap-4">
            {section.steps.map((step, stepIndex) => (
              <div key={step.label} className="grid gap-4 rounded-lg border border-black/10 bg-white/55 p-5 dark:border-white/10 dark:bg-white/5 sm:grid-cols-[4rem_1fr]">
                <span className="flex size-12 items-center justify-center rounded-full bg-[#eef4cf] text-sm font-bold text-[#82951f] dark:bg-[#2a3216] dark:text-[#d7eb6c]">
                  {String(stepIndex + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-tight">{step.label}</h3>
                  <p className="mt-2 text-base leading-7 text-black/66 dark:text-white/62">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        ) : null}

        {section.closing ? (
          <div className="flex gap-4 rounded-lg bg-[#070b0c] p-5 text-white">
            <ListChecks size={20} className="mt-1 shrink-0 text-[#bdd64d]" />
            <p className="text-lg leading-8 text-white/78">{section.closing}</p>
          </div>
        ) : null}
      </div>
    </section>
  )
}
