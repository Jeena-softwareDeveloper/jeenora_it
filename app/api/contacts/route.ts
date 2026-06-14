import { type NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';

// POST /api/contacts — submit contact form (public)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;
    if (!name || !email || !message) {
      return Response.json({ error: 'name, email, and message are required' }, { status: 400 });
    }
    const contact = await prisma.contact.create({ data: { name, email, phone, message } });
    return Response.json(contact, { status: 201 });
  } catch {
    return Response.json({ error: 'Failed to submit contact form' }, { status: 500 });
  }
}

// GET /api/contacts — list all messages (admin)
export async function GET() {
  try {
    const contacts = await prisma.contact.findMany({ orderBy: { createdAt: 'desc' } });
    return Response.json(contacts);
  } catch {
    return Response.json({ error: 'Failed to fetch contacts' }, { status: 500 });
  }
}
