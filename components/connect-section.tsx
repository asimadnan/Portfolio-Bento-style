import { Calendar, Github, Linkedin, Mail } from "lucide-react"

type Item = { label: string; href: string; type: "email" | "linkedin" | "github" | "calendar" }

export function ConnectSection({ id, heading, items }: { id?: string; heading: string; items: Item[] }) {
  return (
    <section id={id} className="border-t border-zinc-900 bg-black py-12">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-xl font-semibold">{heading}</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {items.map((it) => (
            <a
              key={it.label}
              href={it.href}
              target={it.type === "email" ? "_self" : "_blank"}
              rel="noreferrer"
              className="group rounded-lg border border-zinc-800 bg-zinc-900/40 p-5 hover:bg-zinc-900"
            >
              <div className="flex items-center gap-3">
                <Icon type={it.type} />
                <div>
                  <p className="font-medium text-white group-hover:underline">{it.label}</p>
                  <p className="text-xs text-zinc-400">Click to open</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Icon({ type }: { type: Item["type"] }) {
  const className = "h-5 w-5 text-zinc-300"
  if (type === "email") return <Mail className={className} />
  if (type === "linkedin") return <Linkedin className={className} />
  if (type === "github") return <Github className={className} />
  return <Calendar className={className} />
}
