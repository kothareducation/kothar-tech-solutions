import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-mesh px-8 py-16 text-center text-white sm:px-16">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
            <div className="pointer-events-none absolute -left-16 top-0 h-56 w-56 rounded-full bg-orange/30 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-cyan/25 blur-3xl" />

            <div className="relative z-10">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
                Let&apos;s build something that lasts
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-white/65">
                Tell us about your product, timeline, and goals. We&apos;ll reply
                with a clear plan and estimate — usually within a day.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <a href="#contact">
                  <Button
                    size="lg"
                    className="group h-12 border-0 bg-orange px-7 text-base text-white shadow-xl shadow-orange/30 hover:bg-orange-deep"
                  >
                    <Rocket className="mr-2 h-4 w-4" />
                    Start your project
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
                <a href="mailto:info@kothartechsolutions.com">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 border-white/25 bg-white/5 px-7 text-base text-white hover:bg-white/10 hover:text-white"
                  >
                    Email us directly
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
