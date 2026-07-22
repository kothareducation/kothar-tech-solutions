"use client";

import { Target, Award, Shield, Code2, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

const points = [
  {
    icon: Target,
    title: "Transparent communication",
    description:
      "Clear timelines, regular demos, and honest conversations — no surprises mid-sprint.",
    accent: "orange" as const,
  },
  {
    icon: Award,
    title: "Quality-first engineering",
    description:
      "Clean architecture, documented code, and testing so what we ship stays maintainable.",
    accent: "cyan" as const,
  },
  {
    icon: Shield,
    title: "Post-launch partnership",
    description:
      "We stay after go-live for maintenance, iterations, and feature growth as you need it.",
    accent: "orange" as const,
  },
];

const stats = [
  { icon: Code2, value: "10+", label: "Projects shipped" },
  { icon: Users, value: "100%", label: "Client-focused" },
  { icon: Clock, value: "24h", label: "Avg. response" },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-60" />
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-orange/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Visual column */}
          <Reveal className="order-2 lg:order-1 lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:mx-0 lg:max-w-none">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-orange/25 via-transparent to-cyan/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl border border-border/80 shadow-2xl shadow-ink/10">
                <img
                  src="/professional-tech-team-working-on-ai-and-machine-l.jpg"
                  alt="Kothar Tech engineering team"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-display text-xs font-semibold tracking-[0.2em] text-orange uppercase">
                    Built in Australia
                  </p>
                  <p className="mt-1 font-display text-xl font-bold text-white">
                    Senior attention. Production systems.
                  </p>
                </div>
              </div>

              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="absolute -right-3 -bottom-6 w-[calc(100%-1.5rem)] rounded-2xl border border-border bg-white/95 p-4 shadow-xl backdrop-blur-sm sm:-right-6 sm:w-auto sm:min-w-[220px]"
              >
                <div className="space-y-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange/10 text-orange">
                        <stat.icon className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="font-display text-lg font-bold leading-none text-foreground">
                          {stat.value}
                        </div>
                        <div className="mt-0.5 text-xs text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </Reveal>

          {/* Content column */}
          <Reveal delay={100} className="order-1 lg:order-2 lg:col-span-7">
            <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-orange uppercase">
              Why Kothar
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
              A tech partner,{" "}
              <span className="text-gradient-brand">not a ticket queue</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We&apos;re a focused software team that builds production systems
              — then sticks around to keep them sharp. You get senior attention
              without enterprise overhead.
            </p>

            <div className="mt-10 grid gap-4">
              {points.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  className="group relative overflow-hidden rounded-2xl border border-border/80 bg-white/70 p-5 backdrop-blur-sm transition-all duration-300 hover:border-orange/30 hover:shadow-lg hover:shadow-orange/5"
                >
                  <div
                    className={`absolute inset-y-0 left-0 w-1 ${
                      point.accent === "orange" ? "bg-orange" : "bg-cyan"
                    } opacity-0 transition-opacity group-hover:opacity-100`}
                  />
                  <div className="flex gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white transition-transform duration-300 group-hover:scale-110 ${
                        point.accent === "orange" ? "bg-orange" : "bg-cyan"
                      }`}
                    >
                      <point.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold">
                        {point.title}
                      </h3>
                      <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
