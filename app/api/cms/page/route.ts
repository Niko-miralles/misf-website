import { NextRequest, NextResponse } from 'next/server'
import { getSanityPage } from '@/lib/sanity'

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path') || '/'
  const page = await getSanityPage(path)
  return NextResponse.json(page, {
    headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' },
  })
}
