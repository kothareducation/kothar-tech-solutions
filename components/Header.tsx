import { Button } from "@/components/ui/button";
import Image from "next/image";
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-3">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Image
              src="/kothar-tech-landscape-nobg.png"
              alt="Kothar Tech Logo"
              width={150}
              height={150}
            />
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#services"
            className="text-sm font-medium text-foreground hover:text-[#ed6a06] transition-colors relative group"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ed6a06] transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-foreground hover:text-[#ed6a06] transition-colors relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ed6a06] transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium text-foreground hover:text-[#ed6a06] transition-colors relative group"
          >
            Testimonials
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ed6a06] transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-foreground hover:text-[#ed6a06] transition-colors relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ed6a06] transition-all group-hover:w-full"></span>
          </a>
          <a href="#contact">
            <Button
              size="sm"
              className="bg-[#ed6a06] hover:bg-[#d45f05] text-white border-0 shadow-lg"
            >
              Get Started
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
}
