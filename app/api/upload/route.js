import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    const name = formData.get('name') || 'Guest';
    const category = formData.get('category') || 'General';
    const sn = formData.get('sn') || '-';
    const issue = formData.get('issue') || '-';

    if (!file) {
      return NextResponse.json(
        { status: 'error', message: 'Tidak ada file yang diunggah.' },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save to public/uploads directory
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
    const fileName = `${Date.now()}_${sanitizedFileName}`;
    const filePath = path.join(uploadsDir, fileName);

    fs.writeFileSync(filePath, buffer);

    const fileUrl = `/uploads/${fileName}`;

    return NextResponse.json({
      status: 'success',
      fileUrl,
      ticket: {
        name,
        category,
        sn,
        issue,
      },
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Gagal memproses unggahan file.' },
      { status: 500 }
    );
  }
}
