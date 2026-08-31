import { redirect } from 'next/navigation'
import { isAdminAuthenticated } from '@/lib/admin-auth'
import LoginForm from './LoginForm'

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  if (await isAdminAuthenticated()) redirect('/admin')
  const { error } = await searchParams

  return (
    <main className="min-h-screen bg-misf-blue-dark px-4 py-12 flex items-center justify-center">
      <LoginForm initialError={Boolean(error)} />
    </main>
  )
}
