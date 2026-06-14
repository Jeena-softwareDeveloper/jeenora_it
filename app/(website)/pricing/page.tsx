import Link from "next/link";
import { Check, Phone } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹15,000",
    description: "Perfect for small businesses establishing their online presence.",
    features: [
      "5 Pages Website",
      "Basic SEO Setup",
      "Mobile Responsive Design",
      "Contact Form Integration",
      "Email Support",
      "1 Revision",
    ],
    missingFeatures: [
      "No Admin Panel",
      "No Ecommerce Features",
      "No Blog Engine"
    ],
    popular: false,
  },
  {
    name: "Business",
    price: "₹35,000",
    description: "Ideal for growing businesses needing content management.",
    features: [
      "10 Pages Website",
      "Advanced SEO Optimization",
      "Mobile Responsive Design",
      "Basic Admin Panel",
      "Lead Generation Forms",
      "Priority Support",
      "3 Revisions",
    ],
    missingFeatures: [
      "No Ecommerce Features",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹75,000",
    description: "Comprehensive solution for enterprises and online stores.",
    features: [
      "Unlimited Pages",
      "Full SEO Package",
      "Full Admin Panel (CMS)",
      "Ecommerce Capabilities",
      "Payment Gateway Integration",
      "Dedicated Support",
      "Unlimited Revisions",
    ],
    missingFeatures: [],
    popular: false,
  }
];

export default function PricingPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Simple, Transparent <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Pricing</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect plan for your business. No hidden fees, just incredible value.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative flex flex-col p-8 rounded-3xl ${plan.popular ? 'bg-gradient-to-b from-indigo-900/50 to-background border-indigo-500 border-2 scale-105 z-10 shadow-2xl shadow-indigo-500/20' : 'bg-muted border border-border'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-foreground px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-lg shadow-indigo-500/30">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6 h-10">{plan.description}</p>
              <div className="mb-8">
                <span className="text-5xl font-extrabold">{plan.price}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
                {plan.missingFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 opacity-50">
                    <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-muted"></div>
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className={`h-14 w-full rounded-xl flex items-center justify-center gap-2 font-bold transition-all text-sm uppercase tracking-wide ${plan.popular ? 'bg-orange-600 hover:bg-orange-700 text-white text-foreground hover:scale-105 shadow-lg shadow-indigo-600/25' : 'bg-muted hover:bg-accent text-foreground'}`}>
                Book Free Call <Phone size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
