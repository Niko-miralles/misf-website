import { NextResponse } from 'next/server'
import { createAdminSession, verifyAdminPassword } from '@/lib/admin-auth'

export async function POST(request: Request) {
  const { password } = await request.json()

  if (!verifyAdminPassword(String(password || ''))) {
    return NextResponse.json({ error: 'That password is not correct.' }, { status: 401 })
  }

  await createAdminSession()
  return NextResponse.json({ ok: true })
}
