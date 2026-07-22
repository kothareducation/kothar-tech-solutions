"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const projects = [
  {
    id: 0,
    image: "/clients/client-supermerch.jpg",
    alt: "SuperMerch ecommerce platform",
    badgeText: "E-commerce",
    accent: "orange" as const,
    title: "SuperMerch",
    client: "SuperMerch Australia",
    description:
      "A high-volume ecommerce platform with 50,000+ promotional products, built for scale and conversion.",
    tech: "React · Node.js",
    link: "https://www.supermerch.com.au",
  },
  {
    id: 4,
    image: "/clients/client-natureshair.jpg",
    alt: "Nature's Hair ecommerce website",
    badgeText: "E-commerce",
    accent: "cyan" as const,
    title: "Nature's Hair",
    client: "Nature's Hair Australia",
    description:
      "Australian beauty & hair-care ecommerce for textured hair — categories, brands, and a smooth shopping experience.",
    tech: "WordPress · WooCommerce",
    link: "https://www.natureshair.com.au",
  },
  {
    id: 1,
    image: "/clients/client-kothar-dashboard.jpg",
    alt: "Kothar Dashboard ERP",
    badgeText: "ERP System",
    accent: "orange" as const,
    title: "Kothar Dashboard",
    client: "Kothar Educational Services",
    description:
      "Enterprise ERP with live analytics, inventory, finance tracking, and business intelligence.",
    tech: "React · Java",
    link: "https://dashboard.kotharedu.com",
  },

  {
    id: 23,
    image: "/clients/client-cam-youth.jpg",
    alt: "CAM Youth website",
    badgeText: "Website",
    accent: "cyan" as const,
    title: "CAM Youth",
    client: "CAM Youth",
    description:
      "Community platform for youth sports tournaments, activities, and engagement across Australia.",
    tech: "WordPress",
    link: "https://cam-youth.com/",
  },
  {
    id: 2,
    image: "/clients/client-cam-app.jpg",
    alt: "CAM Cricket mobile app",
    badgeText: "Mobile App",
    accent: "cyan" as const,
    title: "CAM Cricket App",
    client: "CAM Cricket",
    description:
      "Live scoring, match updates, player stats, and team management for cricket organizers.",
    tech: "Flutter",
    link: "https://play.google.com/store/apps/details?id=com.softechtonic.cam_cricket",
  },
  {
    id: 3,
    image: "/clients/client-cam-dashboard.jpg",
    alt: "CAM Dashboard",
    badgeText: "Dashboard",
    accent: "orange" as const,
    title: "CAM Dashboard",
    client: "CAM Cricket",
    description:
      "Tournament admin dashboard for live scores, reports, and match analytics.",
    tech: "Django · React",
    link: "#",
  },
];

const AUTO_MS = 6500;

export function Portfolio() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const project = projects[index];
  const count = projects.length;

  const goTo = useCallback(
    (next: number, dir?: number) => {
      const normalized = ((next % count) + count) % count;
      setDirection(dir ?? (normalized > index ? 1 : -1));
      setIndex(normalized);
    },
    [count, index],
  );

  const next = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1, -1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(next, AUTO_MS);
    return () => window.clearInterval(id);
  }, [next, paused]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-ink py-24 text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-orange/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-cyan/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-orange uppercase">
              Clients we&apos;re proud of
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
              Work that ships — and sticks
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous client"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-colors hover:border-orange/50 hover:bg-orange/20"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next client"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-colors hover:border-orange/50 hover:bg-orange/20"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
            <span className="ml-2 font-display text-sm tracking-wider text-white/45 tabular-nums">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(count).padStart(2, "0")}
            </span>
          </div>
        </Reveal>

        <Reveal>
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            {/* Main stage */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-soft shadow-2xl shadow-black/40">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/10]">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={project.id}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -40 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <motion.img
                      src={project.image}
                      alt={project.alt}
                      className="h-full w-full object-cover"
                      initial={{ scale: 1.08 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 6.5, ease: "linear" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/30" />
                  </motion.div>
                </AnimatePresence>

                {/* Slide content */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 sm:p-10 lg:p-14">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`copy-${project.id}`}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.45, delay: 0.1 }}
                      className="max-w-xl"
                    >
                      <span
                        className={`mb-4 inline-block rounded-md px-3 py-1 text-xs font-semibold tracking-wide text-white ${
                          project.accent === "orange" ? "bg-orange" : "bg-cyan"
                        }`}
                      >
                        {project.badgeText}
                      </span>
                      <p className="mb-2 text-sm font-medium tracking-wide text-white/55">
                        {project.client}
                      </p>
                      <h3 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        {project.title}
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
                        {project.description}
                      </p>
                      <div className="mt-6 flex flex-wrap items-center gap-4">
                        <p className="font-display text-xs font-semibold tracking-[0.18em] text-cyan uppercase">
                          {project.tech}
                        </p>
                        {project.link.startsWith("http") && (
                          <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-orange hover:text-white"
                          >
                            Visit live site
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Autoplay progress */}
                <div className="absolute right-0 bottom-0 left-0 z-20 h-1 bg-white/10">
                  {!paused && (
                    <motion.div
                      key={`progress-${project.id}`}
                      className="h-full bg-gradient-to-r from-orange to-cyan"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: AUTO_MS / 1000,
                        ease: "linear",
                      }}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="mt-6 flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {projects.map((item, i) => {
                const active = i === index;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => goTo(i, i > index ? 1 : -1)}
                    aria-label={`Show ${item.title}`}
                    aria-current={active ? "true" : undefined}
                    className={`group relative h-20 w-32 shrink-0 overflow-hidden rounded-xl border transition-all duration-300 sm:h-24 sm:w-40 ${
                      active
                        ? "border-orange scale-[1.02] shadow-lg shadow-orange/20"
                        : "border-white/10 opacity-55 hover:opacity-90"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                    <span className="absolute inset-x-2 bottom-2 truncate text-left text-[11px] font-semibold text-white">
                      {item.title}
                    </span>
                    {active && (
                      <span className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange">
                        <ExternalLink className="h-3 w-3 text-white" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
