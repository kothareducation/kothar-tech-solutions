import { Button } from "@/components/ui/button";
import { Rocket, ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? We'd love to hear about it. Schedule a free
            consultation to discuss your requirements and get a project
            estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <Button
                size="lg"
                className="group bg-[#ed6a06] hover:bg-[#d45f05] text-white border-0 shadow-xl"
              >
                <Rocket className="mr-2 h-4 w-4" />
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="#contact">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#ed6a06] text-[#ed6a06] hover:bg-orange-50 hover:text-[#ed6a06] bg-transparent"
              >
                Schedule Consultation
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
