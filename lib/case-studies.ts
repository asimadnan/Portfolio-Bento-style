import caseStudiesJson from "@/data/case-studies.json"

export type CaseStudyStep = {
  label: string
  body: string
}

export type CaseStudySection = {
  title: string
  paragraphs?: string[]
  bullets?: string[]
  steps?: CaseStudyStep[]
  closing?: string
}

export type CaseStudy = {
  slug: string
  title: string
  eyebrow: string
  summary: string
  hero: string
  client: string
  industry: string
  year: string
  status: string
  duration: string
  image: string
  sections: CaseStudySection[]
}

export const caseStudies = caseStudiesJson as CaseStudy[]

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug)
}
