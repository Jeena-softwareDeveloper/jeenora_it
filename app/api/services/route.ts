import { type NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/services — list active services (public)
export async function GET(request: NextRequest) {
  try {
    const all = request.nextUrl.searchParams.get('all') === 'true';
    const services = await prisma.service.findMany({
      where: all ? {} : { isActive: true },
      orderBy: { sortOrder: 'asc' },
    });
    return Response.json(services);
  } catch {
    return Response.json({ error: 'Failed to fetch services' }, { status: 500 });
  }
}

// POST /api/services — create service (admin)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, icon, description } = body;
    if (!title || !icon || !description) {
      return Response.json({ error: 'title, icon, and description are required' }, { status: 400 });
    }
    const service = await prisma.service.create({ data: body });
    return Response.json(service, { status: 201 });
  } catch {
    return Response.json({ error: 'Failed to create service' }, { status: 500 });
  }
}
