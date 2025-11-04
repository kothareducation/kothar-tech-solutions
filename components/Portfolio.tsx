import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function Portfolio() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Recent Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications we've built for our clients across various
            industries
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img
                src="/modern-e-commerce-platform-dashboard-with-analytic.jpg"
                alt="Kothar Dashboard"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-6">
              <Badge className="mb-3 bg-orange-100 text-[#ed6a06] hover:bg-orange-100">
                ERP System
              </Badge>
              <h3 className="font-bold text-lg mb-2">Kothar Dashboard</h3>
              <p className="text-muted-foreground text-sm mb-4">
                A comprehensive Enterprise Resource Planning (ERP) system with
                real-time analytics, inventory management, financial tracking,
                and business intelligence features for streamlined operations.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-green-600">
                  React + Java
                </span>
                <ArrowRight className="w-4 h-4 text-[#ed6a06] group-hover:translate-x-1 transition-transform" />
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img
                src="/responsive-web-design-on-multiple-devices-mobile-t.jpg"
                alt="CAM Mobile App"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-6">
              <Badge className="mb-3 bg-cyan-100 text-[#63afc7] hover:bg-cyan-100">
                Mobile App
              </Badge>
              <h3 className="font-bold text-lg mb-2">CAM Cricket App</h3>
              <p className="text-muted-foreground text-sm mb-4">
                A feature-rich cricket application with live scoring, real-time
                match updates, player statistics, team management, and
                comprehensive cricket features for enthusiasts and organizers.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-green-600">
                  Flutter
                </span>
                <ArrowRight className="w-4 h-4 text-[#63afc7] group-hover:translate-x-1 transition-transform" />
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img
                src="/ai-neural-network-visualization-with-data-flowing-.jpg"
                alt="CAM Dashboard"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-6">
              <Badge className="mb-3 bg-orange-100 text-[#ed6a06] hover:bg-orange-100">
                Web Dashboard
              </Badge>
              <h3 className="font-bold text-lg mb-2">CAM Dashboard</h3>
              <p className="text-muted-foreground text-sm mb-4">
                A powerful web dashboard for managing cricket tournaments,
                monitoring live scores, generating reports, and analyzing match
                data with an intuitive admin interface.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-green-600">
                  Python Django + React
                </span>
                <ArrowRight className="w-4 h-4 text-[#ed6a06] group-hover:translate-x-1 transition-transform" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
