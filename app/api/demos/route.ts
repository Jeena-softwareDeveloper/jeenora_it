import { type NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/demos — list active demos (public, optionally filter by category)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const category = searchParams.get('category');
    const adminAll = searchParams.get('all') === 'true';

    const demos = await prisma.demo.findMany({
      where: {
        ...(adminAll ? {} : { isActive: true }),
        ...(category ? { category } : {}),
      },
      orderBy: { sortOrder: 'asc' },
    });
    return Response.json(demos);
  } catch {
    return Response.json({ error: 'Failed to fetch demos' }, { status: 500 });
  }
}

// POST /api/demos — create new demo (admin)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, category, liveUrl } = body;
    if (!name || !category || !liveUrl) {
      return Response.json({ error: 'name, category, and liveUrl are required' }, { status: 400 });
    }
    const demo = await prisma.demo.create({ data: body });
    return Response.json(demo, { status: 201 });
  } catch {
    return Response.json({ error: 'Failed to create demo' }, { status: 500 });
  }
}
