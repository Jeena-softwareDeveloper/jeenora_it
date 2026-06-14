import { type NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/settings — get all settings as key-value map (public)
export async function GET() {
  try {
    const settings = await prisma.setting.findMany();
    const map = Object.fromEntries(settings.map((s: any) => [s.key, s.value]));
    return Response.json(map);
  } catch {
    return Response.json({ error: 'Failed to fetch settings' }, { status: 500 });
  }
}

// PUT /api/settings — update settings (admin)
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const items: { key: string; value: string }[] = body.settings ?? [body];

    if (!items.length || !items[0]?.key) {
      return Response.json({ error: 'key and value are required' }, { status: 400 });
    }

    const results = await Promise.all(
      items.map(({ key, value }) =>
        prisma.setting.upsert({
          where: { key },
          update: { value },
          create: { key, value },
        })
      )
    );
    return Response.json(results);
  } catch {
    return Response.json({ error: 'Failed to update settings' }, { status: 500 });
  }
}
