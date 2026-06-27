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
      {/* Hero Section */}
      <AnimatedHero />

      {/* About Us / Company Intro */}
      <HrmsIntro />

      {/* Services Section */}
      <AnimatedServices />

      {/* Why Choose Us / Statistics */}
      <FeatureGrid />

      {/* Industries & Development Process */}
      <AppScreenshots />

      {/* Key Features & Benefits */}
      <KeyFeatures />

      {/* Testimonials & Client Logos */}
      <OurClientele />

      {/* CTA + Contact Form */}
      <ContactForm />
    </div>
  );
}
