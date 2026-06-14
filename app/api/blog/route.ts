import { type NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/blog — list published posts (public), or all with ?all=true (admin)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const all = searchParams.get('all') === 'true';
    const category = searchParams.get('category');

    const posts = await prisma.blog.findMany({
      where: {
        ...(all ? {} : { status: 'published' }),
        ...(category ? { category } : {}),
      },
      orderBy: { createdAt: 'desc' },
    });
    return Response.json(posts);
  } catch {
    return Response.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

// POST /api/blog — create blog post (admin)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, slug, content } = body;
    if (!title || !slug || !content) {
      return Response.json({ error: 'title, slug, and content are required' }, { status: 400 });
    }
    const post = await prisma.blog.create({ data: body });
    return Response.json(post, { status: 201 });
  } catch {
    return Response.json({ error: 'Failed to create post' }, { status: 500 });
  }
}
