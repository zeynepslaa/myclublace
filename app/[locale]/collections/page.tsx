import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { client } from '@/sanity/lib/client'
import { collectionsQuery, categoriesQuery } from '@/sanity/lib/queries'
import type { Collection, Category } from '@/lib/types'
import type { Locale } from '@/i18n/request'

interface PageProps {
  params: Promise<{ locale: Locale }>
  searchParams: Promise<{ category?: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.collections' })
  return { title: t('title'), description: t('description') }
}

export default async function CollectionsPage({ params, searchParams }: PageProps) {
  const { locale } = await params
  const { category: activeCategory } = await searchParams

  const [collections, categories] = await Promise.all([
    client.fetch<Collection[]>(collectionsQuery).catch(() => []),
    client.fetch<Category[]>(categoriesQuery).catch(() => []),
  ])

  const filtered = activeCategory
    ? collections.filter((c) => c.category?.slug === activeCategory)
    : collections

  return (
    <main>
      <div style={{ padding: '4rem 2rem', fontFamily: 'Georgia, serif' }}>
        <h1>Collections — {locale.toUpperCase()}</h1>
        <p style={{ color: '#8A8680', marginTop: '0.5rem' }}>
          {filtered.length} collections
        </p>
      </div>
    </main>
  )
}
