import type { Row } from "@/components/row-carousel"

export const PROFILE_HERO = {
  name: "Asim Adnan Eijaz",
  headline: "Machine Learning Engineer",
  subheadline: "Generative AI, MLOps | NLP",
  location: "Sydney, Australia",
  // Replace with your own MP4/WebM for a personal background reel
  video: "hero-video.mp4",
  backdrop: "/placeholder.svg?height=1080&width=1920",
  ctas: {
    email: "hello@asimadnan.com",
    resume: "/asimadnan_resume_2025_AI.pdf",
    github: "https://github.com/asimadnan",
    linkedin: "https://www.linkedin.com/in/asimadnan/",
  },
}

// Project rows with optional trailer for Netflix-like preview
const featured = [
  {
    id: "linkedlift",
    title: "LinkedLift – AI-Powered LinkedIn Optimizer",
    description:
      "Takes your resume and generates a high-impact LinkedIn headline and About section to boost search visibility and personal branding.",
    poster: "/placeholder.svg?height=900&width=600",
    tags: ["Next.js", "OpenAI", "TypeScript", "Tailwind"],
    links: { live: "https://example.com/linkedlift", code: "https://github.com/example/linkedlift" },
    trailer: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: "nobs-compare",
    title: "No-BS Compare – Honest Product Comparison",
    description:
      "Asks clarifying questions and uses LLMs to return structured, unbiased comparisons—no affiliate gimmicks or ad-driven results.",
    poster: "/placeholder.svg?height=900&width=600",
    tags: ["Next.js", "OpenAI", "TypeScript"],
    links: { live: "https://example.com/nobs-compare", code: "https://github.com/example/nobs-compare" },
    trailer: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: "sales-call-analysis",
    title: "Sales Call Analysis with LLM",
    description:
      "Analyzes sales calls with LLMs to extract insights, sentiment, and key conversation points for sales optimization.",
    poster: "/placeholder.svg?height=900&width=600",
    tags: ["Python", "Whisper", "FastAPI", "React"],
    links: { live: "https://example.com/sales-llm", code: "https://github.com/example/sales-llm" },
    trailer: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  },
]

const aiml = [
  {
    id: "style-my-avatar",
    title: "Style My Avatar - AI Avatar Generator",
    description:
      "AI-powered avatar generation platform that creates personalized avatars using generative models and style transfer.",
    poster: "/placeholder.svg?height=900&width=600",
    tags: ["Stable Diffusion", "PyTorch", "FastAPI", "Next.js"],
    links: { live: "https://example.com/avatar", code: "https://github.com/example/avatar" },
    trailer: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    id: "comment-analysis",
    title: "Customer Comment/Review Analysis with LLM",
    description: "Extracts sentiment, themes, and actionable insights from customer feedback.",
    poster: "/placeholder.svg?height=900&width=600",
    tags: ["Transformers", "LLM", "PostgreSQL"],
    links: { live: "https://example.com/reviews", code: "https://github.com/example/reviews" },
  },
  {
    id: "yt-to-blog",
    title: "YouTube Video to Blog Generator",
    description: "Converts YouTube videos into well-structured blog posts using transcription and summarization.",
    poster: "/placeholder.svg?height=900&width=600",
    tags: ["Whisper", "GPT-4", "Flask"],
    links: { live: "https://example.com/yt-blog", code: "https://github.com/example/yt-blog" },
  },
]

const tools = [
  {
    id: "linkedin-heatmap",
    title: "LinkedIn Activity to Heatmap Generator",
    description: "Interactive heatmaps for professional network analysis.",
    poster: "/placeholder.svg?height=900&width=600",
    tags: ["D3.js", "Pandas", "React"],
    links: { live: "https://example.com/heatmap", code: "https://github.com/example/heatmap" },
  },
  {
    id: "au-pay-calculator",
    title: "Australian Pay Calculator",
    description: "Salary calculator for AU tax system with super, HECS, and deductions.",
    poster: "/placeholder.svg?height=900&width=600",
    tags: ["React", "TypeScript", "Tailwind"],
    links: { live: "https://example.com/pay", code: "https://github.com/example/pay" },
  },
  {
    id: "working-day-calculator",
    title: "Working Day Calculator",
    description: "Business day calculator accounting for holidays and weekends.",
    poster: "/placeholder.svg?height=900&width=600",
    tags: ["React", "Date-fns"],
    links: { live: "https://example.com/working-days", code: "https://github.com/example/working-days" },
  },
]

const webdev = [
  {
    id: "preferential-voting",
    title: "Preferential Voting Visualiser",
    description: "Visualizes preferential voting systems and election results.",
    poster: "/placeholder.svg?height=900&width=600",
    tags: ["React", "D3.js", "Node.js"],
    links: { live: "https://example.com/voting", code: "https://github.com/example/voting" },
  },
]

const research = [
  {
    id: "asv-spoof",
    title: "ASV Spoof Research",
    description:
      "Automatic speaker verification spoofing detection using deep learning and signal processing techniques.",
    poster: "/placeholder.svg?height=900&width=600",
    tags: ["PyTorch", "Signal Processing"],
    links: { live: "https://example.com/asv-paper", code: "" },
  },
  {
    id: "oud-effects",
    title: "Effects of OUD Research",
    description: "Machine learning and statistical analysis of the effects of Opioid Use Disorder.",
    poster: "/placeholder.svg?height=900&width=600",
    tags: ["Python", "R", "Statistics"],
    links: { live: "https://example.com/oud-paper", code: "" },
  },
]

const blog = [
  {
    id: "prompts-to-apps",
    title: "Revealed: Turning Prompts Into Apps with AI Builders",
    description: "Exploring the system prompts behind powerful AI dev tools.",
    poster: "/placeholder.svg?height=900&width=600",
    tags: ["Medium • Jun 29, 2025"],
    links: { live: "https://medium.com", code: "" },
  },
  {
    id: "ai-side-project",
    title: "My First AI Side Project: What Broke and Why I'd Do It Again",
    description: "Lessons learned from launching.",
    poster: "/placeholder.svg?height=900&width=600",
    tags: ["Medium • Jun 15, 2025"],
    links: { live: "https://medium.com", code: "" },
  },
  {
    id: "beyond-chatbots",
    title: "Forget Chatbots! 5 Incredible AI Uses Businesses Are Hiding",
    description: "LLMs beyond chat interfaces.",
    poster: "/placeholder.svg?height=900&width=600",
    tags: ["Medium • Mar 17, 2025"],
    links: { live: "https://medium.com", code: "" },
  },
]

export const PROJECT_ROWS: Row[] = [
  { id: "featured", title: "Featured Projects", anchor: "featured", items: featured },
  { id: "aiml", title: "AI/ML", anchor: "aiml", items: aiml },
  { id: "tools", title: "Tools", anchor: "tools", items: tools },
  { id: "web", title: "Web Development", anchor: "web", items: webdev },
  { id: "research", title: "Research", anchor: "research", items: research },
  { id: "blog", title: "Latest Blog Posts", anchor: "blog", items: blog },
]
