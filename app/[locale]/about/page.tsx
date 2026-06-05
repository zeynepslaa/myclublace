import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import type { Locale } from '@/i18n/request'

interface PageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.about' })
  return { title: t('title'), description: t('description') }
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params

  return <main>{/* UI to be implemented */}</main>
}
