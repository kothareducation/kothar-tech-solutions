import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/Kothar_tech-nobg.png"
                alt="Kothar Tech Logo"
                width={80}
                height={80}
                className="object-contain"
              />
              <div>
                <div className="font-bold text-[#ed6a06]">KOTHAR TECH</div>
                <div className="text-xs text-muted-foreground font-medium">
                  SOLUTIONS PVT. LTD.
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Enterprise software solutions, web & mobile applications, and
              digital transformation services for modern businesses.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#services"
                  className="hover:text-foreground transition-colors"
                >
                  ERP & CRM Systems
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-foreground transition-colors"
                >
                  Web & Mobile Apps
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-foreground transition-colors"
                >
                  BI Dashboards
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-foreground transition-colors"
                >
                  IT Security
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:info@kotharedu.com"
                  className="hover:text-foreground transition-colors"
                >
                  info@kotharedu.com
                </a>
              </li>
              <li>
                <a
                  href="tel:0430082553"
                  className="hover:text-foreground transition-colors"
                >
                  0430 082 553
                </a>
              </li>
              <li>Kothar Tech Solutions, Australia</li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; 2025 Kothar Tech Solutions Private Limited. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
