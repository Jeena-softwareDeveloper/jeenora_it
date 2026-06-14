import { type NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';

// PUT /api/services/[id]
export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const service = await prisma.service.update({ where: { id }, data: body });
    return Response.json(service);
  } catch {
    return Response.json({ error: 'Failed to update service' }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await prisma.service.delete({ where: { id } });
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: 'Failed to delete service' }, { status: 500 });
  }
}
