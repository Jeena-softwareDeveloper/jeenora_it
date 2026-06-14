import { type NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/seo/[page] — get SEO for a specific page (public)
export async function GET(_req: NextRequest, { params }: { params: Promise<{ page: string }> }) {
  try {
    const { page } = await params;
    const seo = await prisma.seo.findUnique({ where: { page } });
    return Response.json(seo ?? {});
  } catch {
    return Response.json({ error: 'Failed to fetch SEO settings' }, { status: 500 });
  }
}

// PUT /api/seo/[page] — update SEO for a specific page (admin)
export async function PUT(request: NextRequest, { params }: { params: Promise<{ page: string }> }) {
  try {
    const { page } = await params;
    const body = await request.json();
    const { metaTitle, metaDesc, keywords, ogImage, canonicalUrl } = body;

    const seo = await prisma.seo.upsert({
      where: { page },
      update: { metaTitle, metaDesc, keywords, ogImage, canonicalUrl },
      create: { page, metaTitle, metaDesc, keywords, ogImage, canonicalUrl },
    });
    return Response.json(seo);
  } catch {
    return Response.json({ error: 'Failed to save SEO settings' }, { status: 500 });
  }
}
