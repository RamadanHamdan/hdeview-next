import { NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
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

    if (!file || typeof file.arrayBuffer !== 'function') {
      return NextResponse.json(
        { status: 'error', message: 'Tidak ada file yang diunggah.' },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const fileType =
      buffer.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
        ? 'png'
        : buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff
          ? 'jpg'
          : buffer.toString('ascii', 0, 4) === 'RIFF' &&
              buffer.toString('ascii', 8, 12) === 'WEBP'
            ? 'webp'
            : null;

    if (!fileType) {
      return NextResponse.json(
        { status: 'error', message: 'Hanya file PNG, JPG, dan WebP yang diizinkan.' },
        { status: 415 }
      );
    }

    // Save to public/uploads directory
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const fileName = `${randomUUID()}.${fileType}`;
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
