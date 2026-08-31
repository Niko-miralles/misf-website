import { NextResponse } from 'next/server'
import { clearAdminSession } from '@/lib/admin-auth'
import { rejectCrossSiteWrite } from '@/lib/admin-request'

export async function POST(request: Request) {
  const rejected = rejectCrossSiteWrite(request)
  if (rejected) return rejected
  await clearAdminSession()
  return NextResponse.json({ ok: true })
}
