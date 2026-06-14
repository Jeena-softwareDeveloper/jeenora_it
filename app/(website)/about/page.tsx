import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pb-24">
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-background -z-10"></div>
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            We are <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">NexusAgency</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            A team of passionate designers, developers, and strategists dedicated to creating digital experiences that leave a lasting impact.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-3xl overflow-hidden border border-border">
            <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team working" fill className="object-cover" />
            <div className="absolute inset-0 bg-orange-500/20 mix-blend-multiply"></div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              We started with a simple belief: every business deserves a digital presence that truly reflects its quality and ambition. For over 5 years, we have been bridging the gap between cutting-edge technology and beautiful design.
            </p>
            <ul className="space-y-4 mb-8">
              {["Innovation in every project", "Pixel-perfect premium design", "Data-driven development", "Unwavering client support"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-orange-500 w-6 h-6" />
                  <span className="text-muted-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-24">
        <div className="bg-muted border border-border rounded-3xl p-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
            <span className="text-5xl font-extrabold text-foreground mb-2">150+</span>
            <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">Projects Delivered</span>
          </div>
          <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
            <span className="text-5xl font-extrabold text-foreground mb-2">50+</span>
            <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">Happy Clients</span>
          </div>
          <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
            <span className="text-5xl font-extrabold text-foreground mb-2">5+</span>
            <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">Years Experience</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Meet the Leaders</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">The brilliant minds behind our award-winning projects.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Alex Admin", role: "Founder & CEO", img: "https://randomuser.me/api/portraits/men/32.jpg" },
            { name: "Sarah Connor", role: "Lead Designer", img: "https://randomuser.me/api/portraits/women/44.jpg" },
            { name: "David Chen", role: "CTO", img: "https://randomuser.me/api/portraits/men/68.jpg" }
          ].map((member, i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden bg-muted border border-border p-6 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-orange-500/20 mb-6 group-hover:border-indigo-500 transition-colors flex items-center justify-center bg-muted">
                <Image src={member.img} alt={member.name} width={128} height={128} className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-orange-500 font-medium text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
