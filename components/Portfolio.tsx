import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 0,
    image: "/software-development-code-on-multiple-screens-with.jpg",
    alt: "Software Development",
    badgeText: "Software Development",
    badgeColor: "bg-orange-100 text-[#ed6a06] hover:bg-orange-100",
    title: "SuperMerch Ecommerce Website",
    description:
      "We worked on a fully functional ecommerce website for a client with overe 50,000 products. It is a platform for selling promotional products online.",
    tech: "React + Node.js",
    arrowColor: "text-[#ed6a06]",
    link: "https://www.supermerch.com.au",
  },
  {
    id: 1,
    image: "/modern-e-commerce-platform-dashboard-with-analytic.jpg",
    alt: "Kothar Dashboard",
    badgeText: "ERP System",
    badgeColor: "bg-orange-100 text-[#ed6a06] hover:bg-orange-100",
    title: "Kothar Dashboard",
    description:
      "A comprehensive Enterprise Resource Planning (ERP) system with real-time analytics, inventory management, financial tracking, and business intelligence features for streamlined operations.",
    tech: "React + Java",
    arrowColor: "text-[#ed6a06]",
    link: "https://dashboard.kotharedu.com",
  },
  {
    id: 23,
    image: "/responsive-web-design-on-multiple-devices-mobile-t.jpg",
    alt: "CAM Youth Website",
    badgeText: "Website",
    badgeColor: "bg-cyan-100 text-[#63afc7] hover:bg-cyan-100",
    title: "CAM Youth Website",
    description:
      "A fully functional website made in Wordpress for a client in the Australia. It is a platform for  organizing various sports tournaments, activities  and empowering youths.",
    tech: "Wordpress",
    arrowColor: "text-[#63afc7]",
    link: "https://cam-youth.com/",
  },
  {
    id: 2,
    image: "/responsive-web-design-on-multiple-devices-mobile-t.jpg",
    alt: "CAM Mobile App",
    badgeText: "Mobile App",
    badgeColor: "bg-cyan-100 text-[#63afc7] hover:bg-cyan-100",
    title: "CAM Cricket App",
    description:
      "A feature-rich cricket application with live scoring, real-time match updates, player statistics, team management, and comprehensive cricket features for enthusiasts and organizers.",
    tech: "Flutter",
    arrowColor: "text-[#63afc7]",
    link: "https://play.google.com/store/apps/details?id=com.softechtonic.cam_cricket",
  },
  {
    id: 3,
    image: "/ai-neural-network-visualization-with-data-flowing-.jpg",
    alt: "CAM Dashboard",
    badgeText: "Web Dashboard",
    badgeColor: "bg-orange-100 text-[#ed6a06] hover:bg-orange-100",
    title: "CAM Dashboard",
    description:
      "A powerful web dashboard for managing cricket tournaments, monitoring live scores, generating reports, and analyzing match data with an intuitive admin interface.",
    tech: "Python Django + React",
    arrowColor: "text-[#ed6a06]",
    link: "# ",
  },
];

export function Portfolio() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Recent Clients & Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications we've built for our clients across various
            industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <Badge className={`mb-3 ${project.badgeColor}`}>
                  {project.badgeText}
                </Badge>
                <Link href={project.link} target="_blank">
                  <h3 className="font-bold text-lg mb-2 hover:text-[#ed6a06] transition-colors">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-green-600">
                    {project.tech}
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 ${project.arrowColor} group-hover:translate-x-1 transition-transform`}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
