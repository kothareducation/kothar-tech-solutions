"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const primaryStack = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Flutter",
  "Django",
  "Java",
  "WordPress",
  "AWS",
  "PostgreSQL",
  "Docker",
  "Tailwind",
];

const secondaryStack = [
  "GraphQL",
  "Redis",
  "Firebase",
  "Kubernetes",
  "Python",
  "Spring Boot",
  "MongoDB",
  "CI/CD",
  "REST APIs",
  "WooCommerce",
  "Nginx",
  "Figma",
];

function MarqueeRow({
  items,
  direction = "left",
}: {
  items: string[];
  direction?: "left" | "right";
}) {
  const loop = [...items, ...items];

  return (
    <div className="marquee-mask overflow-hidden">
      <div
        className={`flex w-max gap-4 ${
          direction === "left"
            ? "animate-marquee-fast"
            : "animate-marquee-reverse"
        }`}
      >
        {loop.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="group/item relative inline-flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-2.5 backdrop-blur-sm transition-all duration-300 hover:border-orange/50 hover:bg-orange/10 hover:shadow-[0_0_20px_rgba(237,106,6,0.2)]"
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                i % 3 === 0
                  ? "bg-orange shadow-[0_0_8px_rgba(237,106,6,0.8)]"
                  : i % 3 === 1
                    ? "bg-cyan shadow-[0_0_8px_rgba(99,175,199,0.8)]"
                    : "bg-white/50"
              }`}
            />
            <span className="font-display text-xs font-semibold tracking-[0.18em] text-white/65 uppercase transition-colors group-hover/item:text-white">
              {tech}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-mesh text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />

      {/* Full-bleed visual plane */}
      <div className="absolute inset-0">
        <img
          src="/futuristic-ai-technology-dashboard-with-holographi.jpg"
          alt=""
          className="h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />
      </div>

      {/* Soft animated orbs */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-orange/20 blur-3xl animate-float" />
      <div
        className="pointer-events-none absolute bottom-32 right-10 h-80 w-80 rounded-full bg-cyan/15 blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pb-36 pt-32 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display mb-4 text-sm font-semibold tracking-[0.28em] text-orange uppercase"
        >
          Kothar Tech Solutions
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="font-display max-w-4xl text-5xl leading-[0.95] font-bold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
        >
          Software that
          <span className="block text-gradient-brand">moves business forward</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl"
        >
          Custom ERP, web & mobile apps, and intelligence dashboards — engineered
          in Australia for teams that need reliability and speed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a href="#contact">
            <Button
              size="lg"
              className="group h-12 border-0 bg-orange px-7 text-base text-white shadow-xl shadow-orange/30 hover:bg-orange-deep"
            >
              <Rocket className="mr-2 h-4 w-4" />
              Start a project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <a href="#work">
            <Button
              variant="outline"
              size="lg"
              className="h-12 border-white/25 bg-white/5 px-7 text-base text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
            >
              View our work
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Full-width tech marquee */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="group/marquee absolute inset-x-0 bottom-0 z-10"
      >
        <div className="border-t border-white/10 bg-ink/55 backdrop-blur-xl">
          <div className="flex items-center gap-4 px-4 py-3 sm:px-6">
            <span className="hidden shrink-0 rounded-full border border-orange/30 bg-orange/10 px-3 py-1 font-display text-[10px] font-bold tracking-[0.2em] text-orange uppercase sm:inline-block">
              Trusted stack
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-orange/40 via-white/10 to-transparent" />
          </div>

          <div className="space-y-3 pb-5">
            <MarqueeRow items={primaryStack} direction="left" />
            <MarqueeRow items={secondaryStack} direction="right" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
