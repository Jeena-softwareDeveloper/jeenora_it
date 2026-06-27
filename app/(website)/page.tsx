import AnimatedHero from "@/components/website/AnimatedHero";
import HrmsIntro from "@/components/website/HrmsIntro";
import AnimatedServices from "@/components/website/AnimatedServices";
import ProductShowcase from "@/components/website/ProductShowcase";
import FeatureGrid from "@/components/website/FeatureGrid";
import AppScreenshots from "@/components/website/AppScreenshots";
import VideoShowcase from "@/components/website/VideoShowcase";
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

      {/* Product Screenshots Gallery (image slots) */}
      <ProductShowcase />

      {/* Why Choose Us / Statistics */}
      <FeatureGrid />

      {/* Industries & Development Process */}
      <AppScreenshots />

      {/* Demo Video (video slot) */}
      <VideoShowcase />

      {/* Key Features & Benefits */}
      <KeyFeatures />

      {/* Testimonials & Client Logos */}
      <OurClientele />

      {/* CTA + Contact Form */}
      <ContactForm />
    </div>
  );
}
