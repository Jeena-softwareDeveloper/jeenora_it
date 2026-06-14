import Link from "next/link";
import { ArrowRight, Globe, ShoppingCart, TrendingUp, Layout, Star, Phone, Activity, ShieldCheck, Zap, CheckCircle } from "lucide-react";
import { mockServices, mockDemos, mockTestimonials } from "@/lib/mock-data";
import Image from "next/image";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Globe': return <Globe className="w-8 h-8 text-orange-600" />;
    case 'ShoppingCart': return <ShoppingCart className="w-8 h-8 text-orange-600" />;
    case 'TrendingUp': return <TrendingUp className="w-8 h-8 text-orange-600" />;
    case 'Layout': return <Layout className="w-8 h-8 text-orange-600" />;
    default: return <Globe className="w-8 h-8 text-orange-600" />;
  }
};

import AnimatedHero from "@/components/website/AnimatedHero";
import HrmsIntro from "@/components/website/HrmsIntro";
import AnimatedServices from "@/components/website/AnimatedServices";
import FeatureGrid from "@/components/website/FeatureGrid";
import AppScreenshots from "@/components/website/AppScreenshots";
import KeyFeatures from "@/components/website/KeyFeatures";
import OurClientele from "@/components/website/OurClientele";
import ContactForm from "@/components/website/ContactForm";

export default function HomePage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <AnimatedHero />
      <HrmsIntro />
      <AnimatedServices />
      <FeatureGrid />
      <AppScreenshots />
      <KeyFeatures />
      <OurClientele />
      <ContactForm />

    </div>
  );
}
