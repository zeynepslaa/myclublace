import type { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { collectionSlugsQuery } from '@/sanity/lib/queries'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://myclublace.com'
const LOCALES = ['tr', 'en', 'ru']

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const collectionSlugs = await client.fetch<{ slug: string }[]>(collectionSlugsQuery).catch(() => [])

  const staticPages = ['', '/collections', '/about', '/exhibitions', '/contact']

  const staticEntries = LOCALES.flatMap((locale) =>
    staticPages.map((page) => ({
      url: `${BASE_URL}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: page === '' ? 1 : 0.8,
    }))
  )

  const collectionEntries = LOCALES.flatMap((locale) =>
    collectionSlugs.map(({ slug }) => ({
      url: `${BASE_URL}/${locale}/collections/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  )

  return [...staticEntries, ...collectionEntries]
}
