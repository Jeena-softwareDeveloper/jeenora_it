import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jeenora | Enterprise Business Software Solutions",
    template: "%s | Jeenora",
  },
  description: "Jeenora delivers intelligent, global Enterprise Business Software Solutions. From custom billing and multi-branch POS to advanced inventory management and E-commerce. Based in Erode, India, empowering businesses worldwide.",
  keywords: [
    "Enterprise Software", 
    "Business Software Solutions", 
    "Inventory Management Software", 
    "Custom Billing Software", 
    "E-Commerce Solutions", 
    "Multi-Branch POS", 
    "Jeenora", 
    "Top Software Company in Erode", 
    "Global Software Agency", 
    "Digital Transformation",
    "Retail Operations Software",
    "Cloud ERP Solutions"
  ],
  authors: [{ name: "Jeenora" }],
  creator: "Jeenora",
  publisher: "Jeenora",
  openGraph: {
    title: "Jeenora | Enterprise Business Software Solutions",
    description: "Scale your enterprise with intelligent software solutions for total business management. We are your global digital transformation partners.",
    url: "https://www.jeenora.com",
    siteName: "Jeenora",
    images: [
      {
        url: "/logo192.png",
        width: 1200,
        height: 630,
        alt: "Jeenora Enterprise Software Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeenora | Global Enterprise Software Solutions",
    description: "Scale your enterprise with intelligent software solutions. Based in Erode, empowering businesses worldwide.",
    images: ["/logo192.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f5f7fa] text-foreground">{children}</body>
    </html>
  );
}
