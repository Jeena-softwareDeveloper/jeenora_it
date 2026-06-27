import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background -z-10"></div>
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">About Jeenora IT Solutions</span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            We Build Software That <span className="bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent">Drives Business Forward</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Jeenora IT Solutions is a Bangalore-based software development company specialising in enterprise software, mobile applications, e-commerce platforms, and digital transformation — serving clients across India and beyond.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 mb-24 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-3xl overflow-hidden border border-border bg-primary/5 flex items-center justify-center">
            <div className="text-center space-y-4 p-12">
              <div className="text-8xl font-extrabold text-primary/10">8+</div>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                  <p className="text-2xl font-extrabold text-primary mb-1">200+ Projects</p>
                  <p className="text-muted-foreground text-sm">Successfully Delivered</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                  <p className="text-2xl font-extrabold text-primary mb-1">150+ Clients</p>
                  <p className="text-muted-foreground text-sm">Across 12+ Industries</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                  <p className="text-2xl font-extrabold text-primary mb-1">24/7 Support</p>
                  <p className="text-muted-foreground text-sm">For All Active Clients</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Our Mission</span>
            <h2 className="text-3xl font-bold mb-6">Turning Complex Business Problems into Elegant Software</h2>
            <p className="text-muted-foreground mb-6 text-base leading-relaxed">
              We started with a clear belief: businesses of all sizes deserve software that actually works for them — not the other way around. For over 8 years, we have been building custom software that eliminates operational bottlenecks, automates manual processes, and delivers measurable ROI.
            </p>
            <p className="text-muted-foreground mb-8 text-base leading-relaxed">
              From Microfinance institutions needing loan management platforms to restaurant chains requiring integrated POS systems, our team engineers purpose-built solutions that scale with your business.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Purpose-built software for your industry and workflow",
                "Agile development with full transparency and weekly demos",
                "Cloud-native, scalable, and security-first architecture",
                "Dedicated support and long-term partnership model",
                "Proven delivery track record across 12+ industries",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                  <span className="text-muted-foreground font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="inline-flex h-12 px-8 bg-primary text-primary-foreground font-bold text-sm items-center justify-center rounded-full hover:bg-primary/90 transition-colors shadow-md">
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="container mx-auto px-4 mb-24 max-w-6xl">
        <div className="bg-primary rounded-3xl p-12 grid grid-cols-2 md:grid-cols-5 gap-8 text-center divide-y-2 md:divide-y-0 md:divide-x divide-white/10">
          {[
            { stat: "200+", label: "Projects Delivered" },
            { stat: "150+", label: "Happy Clients" },
            { stat: "8+", label: "Years of Experience" },
            { stat: "12+", label: "Industries Served" },
            { stat: "24/7", label: "Support Availability" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center pt-8 md:pt-0">
              <span className="text-5xl font-extrabold text-white mb-2">{item.stat}</span>
              <span className="text-white/70 font-medium uppercase tracking-wider text-xs">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Summary */}
      <section className="container mx-auto px-4 mb-24 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What We Build</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">A comprehensive portfolio of software products and development services covering every technology need.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "Microfinance (MFI) Software",
            "Restaurant Billing & POS",
            "B2B Software Solutions",
            "B2C Software Solutions",
            "Custom ERP & CRM",
            "Website Development",
            "E-Commerce Platforms",
            "Android App Development",
            "iOS App Development",
            "Cross-Platform Mobile Apps",
            "UI/UX Design",
            "API Development & Integration",
            "Cloud Deployment",
            "Software Maintenance & Support",
          ].map((service, i) => (
            <div key={i} className="bg-muted border border-border rounded-xl p-4 text-center text-sm font-medium text-foreground hover:border-primary/40 hover:bg-primary/5 transition-colors">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
        <p className="text-muted-foreground mb-8 text-base">Get a free project consultation and see how Jeenora IT Solutions can transform your business operations.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact" className="h-12 px-8 bg-primary text-primary-foreground font-bold text-sm rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors shadow-md">
            Contact Sales
          </Link>
          <Link href="#services" className="h-12 px-8 bg-muted border border-border text-foreground font-bold text-sm rounded-full flex items-center justify-center hover:bg-accent transition-colors">
            View Our Services
          </Link>
        </div>
      </section>
    </div>
  );
}
