import {
  Brain,
  Cpu,
  Globe,
  Smartphone,
  CheckCircle,
  Code2,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const expertise = [
  {
    icon: Brain,
    title: "Enterprise Solutions",
    description: "Scalable ERP & CRM systems built for real operations",
    color: "bg-orange",
  },
  {
    icon: Cpu,
    title: "Cross-Platform",
    description: "One codebase, polished experiences on every device",
    color: "bg-cyan",
  },
  {
    icon: Globe,
    title: "Web Platforms",
    description: "High-performance sites and e-commerce that convert",
    color: "bg-white/15",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native-feel iOS & Android products users love",
    color: "bg-orange",
  },
];

const approach = [
  "Agile delivery with clear sprint milestones",
  "Code reviews, QA, and performance budgets",
  "CI/CD from day one — ship with confidence",
  "Direct communication, no agency runaround",
];

export function TechnologyShowcase() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 translate-x-1/3 -translate-y-1/3 rounded-full bg-cyan/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-cyan uppercase">
            Expertise
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Built for products that have to work in production
          </h2>
          <p className="mt-4 text-lg text-white/60">
            From architecture to deployment, we cover the full stack so your
            software stays fast, secure, and maintainable.
          </p>
        </Reveal>

        <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-orange/40 hover:bg-white/[0.06]">
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${item.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-orange/30 to-cyan/20 opacity-60 blur-xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <img
                  src="/modern-data-center-with-servers-and-ai-processing-.jpg"
                  alt="Infrastructure and systems engineering"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-xl border border-white/15 bg-ink/70 px-4 py-3 backdrop-blur-md">
                  <Code2 className="h-5 w-5 text-orange" />
                  <div>
                    <div className="text-sm font-semibold">Production-ready</div>
                    <div className="text-xs text-white/55">
                      Secure · Tested · Monitored
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <h3 className="font-display text-2xl font-bold sm:text-3xl">
                Our development approach
              </h3>
              <p className="mt-3 text-white/60">
                Predictable delivery without sacrificing craft. You always know
                what ships next and why.
              </p>
              <ul className="mt-8 space-y-4">
                {approach.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />
                    <span className="text-white/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
