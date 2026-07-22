import { Code, Globe, Database, Shield, Zap, Cloud } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const services = [
  {
    icon: Code,
    title: "Enterprise Software",
    description:
      "Custom ERP, CRM, inventory, and automation platforms tailored to how your business actually runs.",
    accent: "orange" as const,
  },
  {
    icon: Globe,
    title: "Web & Mobile Apps",
    description:
      "Responsive websites, e-commerce, and iOS/Android apps with polished UX and solid engineering.",
    accent: "cyan" as const,
  },
  {
    icon: Database,
    title: "BI Dashboards",
    description:
      "Interactive analytics, live monitoring, and reporting that turn raw data into clear decisions.",
    accent: "orange" as const,
  },
  {
    icon: Shield,
    title: "IT Security",
    description:
      "Audits, vulnerability assessments, secure auth, and compliance guidance for your stack.",
    accent: "cyan" as const,
  },
  {
    icon: Zap,
    title: "Performance & QA",
    description:
      "Load testing, optimization, and quality gates so your product stays fast under pressure.",
    accent: "orange" as const,
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Migration, infrastructure, CI/CD, and managed hosting that scales with your growth.",
    accent: "cyan" as const,
  },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-light" />
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-orange uppercase">
            Services
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
            End-to-end technology delivery
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Strategy, build, launch, and support — one team accountable for the
            outcome.
          </p>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 60}>
              <div className="group h-full bg-background p-8 transition-colors hover:bg-white">
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110 ${
                    service.accent === "orange"
                      ? "bg-orange shadow-orange/25"
                      : "bg-cyan shadow-cyan/25"
                  }`}
                >
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold">
                  {service.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
