import { NextResponse } from 'next/server'
import { createAdminSession, verifyAdminPassword } from '@/lib/admin-auth'
import { rejectCrossSiteWrite } from '@/lib/admin-request'

export async function POST(request: Request) {
  const rejected = rejectCrossSiteWrite(request)
  if (rejected) return rejected

  const body = await request.json().catch(() => null)
  const password = body && typeof body === 'object' && 'password' in body ? body.password : ''

  if (!verifyAdminPassword(String(password || ''))) {
    const configured = Boolean(process.env.ADMIN_PASSWORD && process.env.ADMIN_SESSION_SECRET)
    return NextResponse.json(
      { error: configured ? 'That password is not correct.' : 'CMS authentication is not configured.' },
      { status: configured ? 401 : 503 }
    )
  }

  await createAdminSession()
  return NextResponse.json({ ok: true })
}
