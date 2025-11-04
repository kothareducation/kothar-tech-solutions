import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "They built our inventory management system in 8 weeks. The code
                quality is excellent and they were very responsive to our
                feedback. Highly recommend for any web development project."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#ed6a06] flex items-center justify-center text-white font-semibold">
                  RK
                </div>
                <div>
                  <div className="font-semibold">Rajesh Kumar</div>
                  <div className="text-sm text-muted-foreground">
                    Operations Manager, RetailHub
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "Professional team that delivered exactly what we asked for. The
                booking system they developed has saved us countless hours of
                manual work. Great communication throughout."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#63afc7] flex items-center justify-center text-white font-semibold">
                  PS
                </div>
                <div>
                  <div className="font-semibold">Priya Sharma</div>
                  <div className="text-sm text-muted-foreground">
                    Founder, HealthFirst Clinic
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "They helped us modernize our legacy system with a new React
                frontend. The performance improvement is incredible and our
                customers love the new interface."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#ed6a06] flex items-center justify-center text-white font-semibold">
                  AM
                </div>
                <div>
                  <div className="font-semibold">Amit Mehta</div>
                  <div className="text-sm text-muted-foreground">
                    IT Director, FinServe Solutions
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
