import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const services = [
  { label: "ERP & CRM Systems", href: "#services" },
  { label: "Web & Mobile Apps", href: "#services" },
  { label: "BI Dashboards", href: "#services" },
  { label: "IT Security", href: "#services" },
  { label: "Cloud & DevOps", href: "#services" },
];

const company = [
  { label: "About Us", href: "#about" },
  { label: "Our Work", href: "#work" },
  { label: "Expertise", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const contact = [
  {
    icon: Mail,
    label: "Email",
    value: "info@kothartechsolutions.com",
    href: "mailto:info@kothartechsolutions.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0450 466 876",
    href: "tel:0450466876",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Australia",
    href: "#contact",
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-35" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-orange/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-cyan/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top brand band */}
        <Reveal>
          <div className="flex flex-col gap-8 border-b border-white/10 py-14 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <div className="mb-6 flex items-center gap-4">
                <Image
                  src="/kothar-tech-landscape-nobg.png"
                  alt="Kothar Tech Solutions"
                  width={180}
                  height={52}
                  className="h-12 w-auto"
                />
              </div>
              <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-orange uppercase">
                Kothar Tech Solutions
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Software that moves business forward
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/55">
                Enterprise systems, web & mobile products, and digital platforms
                engineered for Australian businesses.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 self-start rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange/25 transition-colors hover:bg-orange-deep lg:self-auto"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        {/* Link columns */}
        <Reveal delay={80}>
          <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-display mb-5 text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
                Get in touch
              </p>
              <ul className="space-y-4">
                {contact.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="group flex items-start gap-3 rounded-xl border border-transparent p-2 -m-2 transition-colors hover:border-white/10 hover:bg-white/[0.03]"
                    >
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-orange transition-colors group-hover:bg-orange/15">
                        <item.icon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-xs text-white/40">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block text-sm font-medium text-white/80 transition-colors group-hover:text-orange">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3 lg:col-start-6">
              <p className="font-display mb-5 text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
                Services
              </p>
              <ul className="space-y-3">
                {services.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
                    >
                      <span className="h-px w-0 bg-orange transition-all group-hover:w-3" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <p className="font-display mb-5 text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
                Company
              </p>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
                    >
                      <span className="h-px w-0 bg-cyan transition-all group-hover:w-3" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Kothar Tech Solutions Private
            Limited. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/40">
            <a href="#work" className="transition-colors hover:text-orange">
              Clients
            </a>
            <a href="#services" className="transition-colors hover:text-orange">
              Services
            </a>
            <a href="#contact" className="transition-colors hover:text-orange">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
