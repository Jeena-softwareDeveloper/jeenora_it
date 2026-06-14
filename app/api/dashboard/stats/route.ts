import { prisma } from '@/lib/prisma';

// GET /api/dashboard/stats — summary stats (admin)
export async function GET() {
  try {
    const [totalLeads, newLeads, wonLeads, totalDemos, totalPosts, publishedPosts, totalContacts, unreadContacts] = await Promise.all([
      prisma.lead.count(),
      prisma.lead.count({ where: { status: 'new' } }),
      prisma.lead.count({ where: { status: 'won' } }),
      prisma.demo.count({ where: { isActive: true } }),
      prisma.blog.count(),
      prisma.blog.count({ where: { status: 'published' } }),
      prisma.contact.count(),
      prisma.contact.count({ where: { status: 'unread' } }),
    ]);

    return Response.json({
      totalLeads,
      newLeads,
      wonLeads,
      totalDemos,
      totalPosts,
      publishedPosts,
      totalContacts,
      unreadContacts,
    });
  } catch {
    return Response.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}
