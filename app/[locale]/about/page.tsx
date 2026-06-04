import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import type { Locale } from '@/i18n/request'

interface PageProps {
  params: { locale: Locale }
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta.about' })
  return { title: t('title'), description: t('description') }
}

export default function AboutPage() {
  return <main>{/* UI to be implemented */}</main>
}
