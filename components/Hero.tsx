import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Rocket, ArrowRight, Brain } from "lucide-react";

export function Hero() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <Badge
              variant="secondary"
              className="mb-6 bg-orange-50 text-[#ed6a06] border-orange-200"
            >
              <Sparkles className="w-3 h-3 mr-1" />
              Enterprise Software Solutions
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl mb-6">
              Building Software That
              <span className="text-[#ed6a06]"> Powers Your Business</span>
            </h1>
            <p className="text-lg leading-8 text-muted-foreground text-pretty max-w-2xl mb-10">
              We specialize in developing scalable web applications, mobile
              solutions, and custom software that help businesses automate
              workflows, improve productivity, and deliver exceptional customer
              experiences.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="#contact">
                <Button
                  size="lg"
                  className="group bg-[#ed6a06] hover:bg-[#d45f05] text-white border-0 shadow-xl"
                >
                  <Rocket className="mr-2 h-4 w-4" />
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="#services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-[#ed6a06] text-[#ed6a06] hover:bg-orange-50 bg-transparent"
                >
                  Learn More
                </Button>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/futuristic-ai-technology-dashboard-with-holographi.jpg"
                alt="AI Technology Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#ed6a06] rounded-2xl flex items-center justify-center shadow-xl">
              <Brain className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
