export interface Project {
  id: string
  title: string
  description: string
  image?: string
  technologies: string[]
  links: {
    github?: string
    website?: string
    demo?: string
    paper?: string
  }
  category: "AI/ML" | "Web Development" | "Research" | "Tools"
  featured?: boolean
}

export const projects: Project[] = [

  {
    id: "linkedlift",
    title: "LinkedLift – AI-Powered LinkedIn Optimizer",
    description:
      "An AI tool that takes your resume and generates a high-impact LinkedIn headline and About section, designed to boost search visibility and personal branding.",
    image: "/linked-lift.png?height=400&width=500",
    technologies: ["Next.js", "OpenAI", "TypeScript", "Tailwind CSS"],
    links: {
      website: "https://linkedlift.asimadnan.com/", // Replace with actual link if different
      github: "#"
    },
    category: "AI/ML",
    featured: true
  },
  {
    id: "no-bs-compare",
    title: "No-BS Compare – Honest Product Comparison with LLMs",
    description:
      "A no-fluff product comparison tool that asks clarifying questions and uses LLMs to return structured, unbiased comparisons of items—no affiliate gimmicks or ad-driven results.",
    image: "/no-bull-comparison.png?height=400&width=500",
    technologies: ["Next.js", "OpenAI", "TypeScript", "Tailwind CSS"],
    links: {
      website: "#", // Replace with actual link if different
      github: "#"
    },
    category: "AI/ML",
    featured: true
  },

  {
    id: "sales-call-analysis",
    title: "Sales Call Analysis with LLM",
    description:
      "Advanced AI system that analyzes sales calls using Large Language Models to extract insights, sentiment, and key conversation points for sales optimization.",
    image: "/sales-call.png?height=400&width=500",
    technologies: ["Python", "OpenAI", "Whisper", "FastAPI", "React"],
    links: {
      website: "https://sales-call.streamlit.app/",
      github: "#",
    },
    category: "AI/ML",
    featured: true,
  },
  {
    id: "style-my-avatar",
    title: "Style My Avatar - AI Avatar Generator",
    description:
      "AI-powered avatar generation platform that creates personalized avatars using advanced generative models and style transfer techniques.",
    image: "/style-my-avatar.png?height=300&width=500",
    technologies: ["Python", "Stable Diffusion", "PyTorch", "FastAPI", "Next.js"],
    links: {
      website: "https://www.stylemyavatar.com/",
      github: "#",
    },
    category: "AI/ML",
    featured: true,
  },
  {
    id: "customer-review-analysis",
    title: "Customer Comment/Review Analysis with LLM",
    description:
      "Intelligent system for analyzing customer feedback using LLMs to extract sentiment, themes, and actionable insights.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Python", "Transformers", "LLM", "Sentiment Analysis", "PostgreSQL"],
    links: {
      website: "#",
      github: "https://github.com/asimadnan/llm-text-categorization",
    },
    category: "AI/ML",
  },
  {
    id: "talent-scout-agent",
    title: "Talent Scout - AI Agent",
    description:
      "AI-powered recruitment agent that automatically screens candidates, analyzes resumes, and matches talent with job requirements.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Python", "LangChain", "OpenAI", "Vector DB", "Streamlit"],
    links: {
      website: "#",
      github: "https://github.com/asimadnan/talentscout-ai",
    },
    category: "AI/ML",
  },
  {
    id: "youtube-blog-generator",
    title: "Youtube Video to Blog Generator",
    description:
      "Automated content creation tool that converts YouTube videos into well-structured blog posts using AI transcription and summarization.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Python", "Whisper", "GPT-4", "YouTube API", "Flask"],
    links: {
      website: "https://github.com/asimadnan/youtube-to-blogpost",
      github: "https://youtube-to-blogpost-asim.streamlit.app",
    },
    category: "AI/ML",
  },
  {
    id: "linkedin-heatmap",
    title: "LinkedIn Activity to Heatmap Generator",
    description:
      "Data visualization tool that converts LinkedIn activity data into interactive heatmaps for professional network analysis.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Python", "D3.js", "LinkedIn API", "Pandas", "React"],
    links: {
      website: "#",
      github: "https://github.com/asimadnan/linkedin-activity-heatmap",
    },
    category: "Tools",
  },
  {
    id: "voting-visualiser",
    title: "Preferential Voting Visualiser",
    description:
      "Interactive web application that visualizes preferential voting systems and election results with dynamic charts and analytics.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "D3.js", "TypeScript", "Node.js"],
    links: {
      website: "https://voting.asimadnan.com/",
      github: "#",
    },
    category: "Web Development",
  },
  {
    id: "pay-calculator",
    title: "Australian Pay Calculator",
    description:
      "Comprehensive salary calculator for Australian tax system with superannuation, HECS, and various deduction calculations.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    links: {
      website: "https://paycalculator.asimadnan.com/",
      github: "#",
    },
    category: "Tools",
  },
  {
    id: "working-day-calculator",
    title: "Working Day Calculator",
    description:
      "Business day calculator that accounts for public holidays, weekends, and custom business rules across different regions.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["JavaScript", "React", "Date-fns"],
    links: {
      website: "https://working-days-calculator.vercel.app/",
      github: "#",
    },
    category: "Tools",
  },
  {
    id: "asvspoof-research",
    title: "ASVSpoof Research",
    description:
      "Research thesis on automatic speaker verification spoofing detection using deep learning and signal processing techniques.",
    technologies: ["Python", "PyTorch", "Librosa", "Scikit-learn"],
    links: {
      paper: "https://figshare.mq.edu.au/articles/thesis/Counter_measure_system_for_automatic_speaker_verification_systems/21482952/1",
    },
    category: "Research",
  },
  {
    id: "oud-effects-research",
    title: "Effects of OUD Research",
    description:
      "Research paper analyzing the effects of Opioid Use Disorder using machine learning models and statistical analysis.",
    technologies: ["Python", "R", "Statistical Analysis", "Machine Learning"],
    links: {
      paper: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0278988",
    },
    category: "Research",
  },
]
