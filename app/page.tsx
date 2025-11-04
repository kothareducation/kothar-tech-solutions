import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TechnologyShowcase } from "@/components/TechnologyShowcase";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function KotharTechSolutions() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TechnologyShowcase />
      <Services />
      <Portfolio />
      <About />
      {/* <Testimonials /> */}
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
