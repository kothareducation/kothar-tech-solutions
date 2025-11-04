import { Target, Award, Shield } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Why Work With Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're a dedicated team of software developers committed to
              delivering high-quality, maintainable code and exceeding client
              expectations on every project.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ed6a06] text-white mt-1 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">
                    Transparent Communication
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Regular updates, clear timelines, and honest conversations
                    throughout the development process
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#63afc7] text-white mt-1 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">
                    Quality-First Approach
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Clean, well-documented code with comprehensive testing to
                    ensure your application runs smoothly
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ed6a06] text-white mt-1 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">
                    Post-Launch Support
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We don't disappear after deployment. Get ongoing maintenance
                    and feature updates as needed
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/professional-tech-team-working-on-ai-and-machine-l.jpg"
                alt="Professional Tech Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border">
              <div className="flex items-center space-x-4">
                <div className="text-3xl font-bold text-[#ed6a06]">50+</div>
                <div className="text-sm text-muted-foreground">
                  <div className="font-semibold">Projects</div>
                  <div>Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
