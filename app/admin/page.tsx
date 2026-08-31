import { redirect } from 'next/navigation'
import { airtableToArticle, getAirtableRecords, isAirtableConfigured } from '@/lib/airtable'
import { isAdminAuthenticated } from '@/lib/admin-auth'
import { articles as fallbackArticles } from '@/data/news'
import AdminDashboard from './AdminDashboard'

export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  if (!(await isAdminAuthenticated())) redirect('/admin/login')

  if (!isAirtableConfigured()) {
    return (
      <main className="min-h-screen bg-misf-blue-dark px-4 py-12 text-white">
        <div className="mx-auto max-w-2xl bg-white p-8 text-misf-blue-dark">
          <p className="font-display text-xs font-black uppercase tracking-[0.25em] text-misf-gold mb-3">
            MISF Admin
          </p>
          <h1 className="font-display text-4xl font-black uppercase mb-4">Airtable is not connected</h1>
          <p className="leading-relaxed text-misf-gray-text">
            Add AIRTABLE_TOKEN, AIRTABLE_BASE_ID, and AIRTABLE_TABLE_ID in Vercel to enable the editor.
          </p>
        </div>
      </main>
    )
  }

  let articles = fallbackArticles

  try {
    const records = await getAirtableRecords()
    const airtableArticles = records
      .map((record) => ({ id: record.id, ...airtableToArticle(record) }))
      .filter((article) => article.title && article.title !== 'Untitled')

    if (airtableArticles.length > 0) {
      articles = airtableArticles
    }
  } catch (error) {
    console.error(error)
  }

  return <AdminDashboard initialArticles={articles} />
}
