import { type NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/leads — list all leads (admin)
export async function GET() {
  try {
    const leads = await prisma.lead.findMany({ orderBy: { createdAt: 'desc' } });
    return Response.json(leads);
  } catch {
    return Response.json({ error: 'Failed to fetch leads' }, { status: 500 });
  }
}

// POST /api/leads — create a new lead (public)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, businessType, budget, message, source } = body;
    if (!name || !phone) {
      return Response.json({ error: 'Name and phone are required' }, { status: 400 });
    }
    const lead = await prisma.lead.create({
      data: { name, phone, email, businessType, budget, message, source: source ?? 'contact_form' },
    });
    return Response.json(lead, { status: 201 });
  } catch {
    return Response.json({ error: 'Failed to create lead' }, { status: 500 });
  }
}
