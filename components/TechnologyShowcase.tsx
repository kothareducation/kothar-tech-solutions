import { Brain, Cpu, Network, TrendingUp, CheckCircle } from "lucide-react";

export function TechnologyShowcase() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Our Expertise
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We deliver comprehensive solutions across multiple domains to meet
            your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-4 bg-[#ed6a06] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Enterprise Solutions</h3>
            <p className="text-slate-400 text-sm">
              Scalable applications built for large-scale operations
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-4 bg-[#63afc7] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Cpu className="w-10 h-10 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2">
              Cross-Platform Development
            </h3>
            <p className="text-slate-400 text-sm">
              Applications that work seamlessly across all devices
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-4 bg-slate-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Network className="w-10 h-10 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Websites</h3>
            <p className="text-slate-400 text-sm">Websites for your business</p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-4 bg-[#ed6a06] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Mobile Applications</h3>
            <p className="text-slate-400 text-sm">
              Mobile applications for iOS and Android platforms
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/modern-data-center-with-servers-and-ai-processing-.jpg"
              alt="Modern Data Center"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Our Development Approach
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-[#63afc7]" />
                <span>Agile methodology with bi-weekly sprints</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-[#63afc7]" />
                <span>Code reviews and quality assurance testing</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-[#63afc7]" />
                <span>Continuous integration and deployment</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-[#63afc7]" />
                <span>Regular communication and progress updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
