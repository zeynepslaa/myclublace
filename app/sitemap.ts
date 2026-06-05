import type { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://myclublace.com'
const LOCALES = ['tr', 'en']

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = ['', '/collections', '/about', '/exhibitions', '/contact']

  return LOCALES.flatMap((locale) =>
    staticPages.map((page) => ({
      url: `${BASE_URL}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: page === '' ? 1 : 0.8,
    }))
  )
}
