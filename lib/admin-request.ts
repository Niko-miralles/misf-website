import { NextResponse } from 'next/server'

/**
 * Reject cross-site writes before touching CMS services. Session cookies are also
 * SameSite=Strict, so this is a second CSRF control rather than the only one.
 */
export function rejectCrossSiteWrite(request: Request) {
  const origin = request.headers.get('origin')
  if (!origin) return null

  const forwardedHost = request.headers.get('x-forwarded-host') || request.headers.get('host')
  const forwardedProto = request.headers.get('x-forwarded-proto') || 'https'
  if (!forwardedHost) return NextResponse.json({ error: 'Invalid request origin.' }, { status: 403 })

  try {
    const parsedOrigin = new URL(origin)
    if (parsedOrigin.host !== forwardedHost || parsedOrigin.protocol !== `${forwardedProto}:`) {
      return NextResponse.json({ error: 'Invalid request origin.' }, { status: 403 })
    }
  } catch {
    return NextResponse.json({ error: 'Invalid request origin.' }, { status: 403 })
  }

  return null
}
