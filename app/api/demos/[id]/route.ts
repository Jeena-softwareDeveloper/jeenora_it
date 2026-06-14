import { type NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';

// PUT /api/demos/[id]
export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const demo = await prisma.demo.update({ where: { id }, data: body });
    return Response.json(demo);
  } catch {
    return Response.json({ error: 'Failed to update demo' }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await prisma.demo.delete({ where: { id } });
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: 'Failed to delete demo' }, { status: 500 });
  }
}
