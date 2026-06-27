import Navbar from "@/components/website/Navbar";
import Footer from "@/components/website/Footer";
import WhatsAppFloat from "@/components/website/WhatsAppFloat";
import TopBanner from "@/components/website/TopBanner";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        <TopBanner />
        <Navbar />
      </div>
      <main className="flex-1 w-full min-w-0 overflow-x-hidden pt-16 sm:pt-24">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
