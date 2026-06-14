import { type NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/blog/[slug] — get single post by slug (public)
export async function GET(_req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const post = await prisma.blog.findUnique({ where: { slug } });
    if (!post) return Response.json({ error: 'Not found' }, { status: 404 });
    return Response.json(post);
  } catch {
    return Response.json({ error: 'Failed to fetch post' }, { status: 500 });
  }
}

// PATCH /api/blog/[slug] — update post (admin)
export async function PATCH(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const body = await request.json();
    const post = await prisma.blog.update({ where: { slug }, data: body });
    return Response.json(post);
  } catch {
    return Response.json({ error: 'Failed to update post' }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    await prisma.blog.delete({ where: { slug } });
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}
