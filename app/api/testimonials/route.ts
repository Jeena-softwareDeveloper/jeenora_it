import { type NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/testimonials — list active testimonials (public)
export async function GET(request: NextRequest) {
  try {
    const all = request.nextUrl.searchParams.get('all') === 'true';
    const testimonials = await prisma.testimonial.findMany({
      where: all ? {} : { isActive: true },
      orderBy: { createdAt: 'desc' },
    });
    return Response.json(testimonials);
  } catch {
    return Response.json({ error: 'Failed to fetch testimonials' }, { status: 500 });
  }
}

// POST /api/testimonials — create testimonial (admin)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { clientName, review } = body;
    if (!clientName || !review) {
      return Response.json({ error: 'clientName and review are required' }, { status: 400 });
    }
    const testimonial = await prisma.testimonial.create({ data: body });
    return Response.json(testimonial, { status: 201 });
  } catch {
    return Response.json({ error: 'Failed to create testimonial' }, { status: 500 });
  }
}
