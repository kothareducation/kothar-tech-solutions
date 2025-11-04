import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, Globe, Database, Shield, Zap, Users } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img
                src="/software-development-code-on-multiple-screens-with.jpg"
                alt="Software Development"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader className="pb-4 relative z-10">
              <div className="flex items-center space-x-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#ed6a06] text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-7 w-7" />
                </div>
                <CardTitle className="text-lg">
                  Enterprise Software Development
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <CardDescription className="text-base leading-relaxed">
                Custom ERP systems, CRM platforms, inventory management
                solutions, and comprehensive business automation tools tailored
                to streamline your operations and boost productivity.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img
                src="/responsive-web-design-on-multiple-devices-mobile-t.jpg"
                alt="Web & Mobile Development"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader className="pb-4 relative z-10">
              <div className="flex items-center space-x-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#63afc7] text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-7 w-7" />
                </div>
                <CardTitle className="text-lg">
                  Web & Mobile Applications
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <CardDescription className="text-base leading-relaxed">
                Professional websites, e-commerce platforms, mobile apps for iOS
                and Android, and CAM (Computer-Aided Manufacturing) applications
                for real-time mobile tracking and monitoring.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img
                src="/ai-neural-network-visualization-with-data-flowing-.jpg"
                alt="Business Dashboards"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader className="pb-4 relative z-10">
              <div className="flex items-center space-x-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#ed6a06] text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Database className="h-7 w-7" />
                </div>
                <CardTitle className="text-lg">
                  Business Intelligence Dashboards
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <CardDescription className="text-base leading-relaxed">
                Interactive dashboards, advanced analytics platforms, custom
                reporting systems, and real-time monitoring tools to visualize
                your data and drive informed business decisions.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#63afc7] text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-7 w-7" />
                </div>
                <CardTitle className="text-lg">IT Security Services</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Comprehensive security audits, vulnerability assessments,
                penetration testing, secure authentication implementation, data
                protection, and compliance consulting to safeguard your digital
                assets.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#ed6a06] text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-7 w-7" />
                </div>
                <CardTitle className="text-lg">
                  Performance Testing & Optimization
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Load testing, stress testing, performance benchmarking, and
                optimization services to ensure your applications run smoothly
                under any traffic conditions and deliver optimal user
                experience.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#63afc7] text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-7 w-7" />
                </div>
                <CardTitle className="text-lg">
                  Cloud & Infrastructure Management
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Cloud migration, server management, infrastructure setup,
                deployment automation, and ongoing maintenance to keep your
                systems running reliably and cost-effectively.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
