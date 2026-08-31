import { NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import { isAdminAuthenticated } from '@/lib/admin-auth'

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Not authorised' }, { status: 401 })
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json(
      { error: 'Photo storage is not configured yet. Add BLOB_READ_WRITE_TOKEN in Vercel.' },
      { status: 503 }
    )
  }

  const formData = await request.formData()
  const file = formData.get('file')

  if (!(file instanceof File)) {
    return NextResponse.json({ error: 'Choose an image file.' }, { status: 400 })
  }

  if (!file.type.startsWith('image/')) {
    return NextResponse.json({ error: 'Only image files are allowed.' }, { status: 400 })
  }

  if (file.size > 6 * 1024 * 1024) {
    return NextResponse.json({ error: 'Image is too large. Keep it under 6MB.' }, { status: 400 })
  }

  const safeName = file.name.toLowerCase().replace(/[^a-z0-9._-]+/g, '-')
  const blob = await put(`cms/${Date.now()}-${safeName}`, file, {
    access: 'public',
    addRandomSuffix: true,
  })

  return NextResponse.json({ url: blob.url })
}
