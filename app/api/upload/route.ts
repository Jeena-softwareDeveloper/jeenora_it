import { type NextRequest } from 'next/server';

// POST /api/upload — upload a file to Cloudinary
// Requires CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET in .env
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return Response.json({ error: 'No file provided' }, { status: 400 });
    }

    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;

    if (!cloudName || !apiKey) {
      return Response.json(
        { error: 'Cloudinary is not configured. Set CLOUDINARY_CLOUD_NAME and CLOUDINARY_API_KEY.' },
        { status: 500 }
      );
    }

    // Build FormData for Cloudinary unsigned upload
    const cloudinaryForm = new FormData();
    cloudinaryForm.append('file', file);
    cloudinaryForm.append('upload_preset', process.env.CLOUDINARY_UPLOAD_PRESET ?? 'ml_default');
    cloudinaryForm.append('api_key', apiKey);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      { method: 'POST', body: cloudinaryForm }
    );

    if (!response.ok) {
      const err = await response.text();
      return Response.json({ error: `Cloudinary error: ${err}` }, { status: 500 });
    }

    const data = await response.json();
    return Response.json({ url: data.secure_url, publicId: data.public_id }, { status: 201 });
  } catch (error) {
    return Response.json({ error: 'File upload failed' }, { status: 500 });
  }
}
