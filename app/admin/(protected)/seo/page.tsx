import { prisma } from "@/lib/prisma";
import SeoForm from "@/components/admin/SeoForm";

export default async function SeoPage() {
  const seoSettings = await prisma.seo.findMany();
  const seoMap = Object.fromEntries(seoSettings.map((s: any) => [s.page, s]));

  const pages = ["home", "demos", "pricing", "blog", "contact", "about"];

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-1">SEO Settings</h1>
        <p className="text-muted-foreground text-sm">Manage meta tags and SEO for each public page</p>
      </div>
      <SeoForm pages={pages} initialSeo={seoMap} />
    </div>
  );
}
