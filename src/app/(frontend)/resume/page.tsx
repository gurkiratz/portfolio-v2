import { redirect } from 'next/navigation'
import { getNavLinks } from '@/lib/navigation'

export default async function ResumePage() {
  const navLinks = await getNavLinks()
  const resumeLink = navLinks.find(
    (link) => link.label.trim().toLowerCase() === 'resume',
  )

  if (resumeLink?.href && resumeLink.href !== '/resume') {
    redirect(resumeLink.href)
  }

  redirect('/')
}
