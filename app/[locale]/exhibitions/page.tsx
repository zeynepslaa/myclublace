import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { client } from '@/sanity/lib/client'
import { exhibitionsQuery } from '@/sanity/lib/queries'
import type { Exhibition } from '@/lib/types'
import type { Locale } from '@/i18n/request'

interface PageProps {
  params: { locale: Locale }
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta.exhibitions' })
  return { title: t('title'), description: t('description') }
}

export default async function ExhibitionsPage({ params: { locale } }: PageProps) {
  const exhibitions = await client.fetch<Exhibition[]>(exhibitionsQuery)

  return <main>{/* UI to be implemented — {exhibitions.length} exhibitions */}</main>
}
