import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { client } from '@/sanity/lib/client'
import { homepageQuery, exhibitionsQuery, featuredCollectionsQuery } from '@/sanity/lib/queries'
import type { Homepage, Exhibition, Collection } from '@/lib/types'
import type { Locale } from '@/i18n/request'
import { Nav } from '@/components/ui/Nav'
import { Footer } from '@/components/ui/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { CollectionsPreview } from '@/components/sections/CollectionsPreview'
import { AboutStrip } from '@/components/sections/AboutStrip'
import { ExhibitionsStrip } from '@/components/sections/ExhibitionsStrip'
import { WhatsAppCTA } from '@/components/sections/WhatsAppCTA'

interface PageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.home' })
  return { title: t('title'), description: t('description') }
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params

  const [homepage, featuredCollections, exhibitions] = await Promise.all([
    client.fetch<Homepage>(homepageQuery).catch(() => null),
    client.fetch<Collection[]>(featuredCollectionsQuery).catch(() => []),
    client.fetch<Exhibition[]>(exhibitionsQuery).catch(() => []),
  ])

  return (
    <>
      <Nav locale={locale} />
      <main>
        <HeroSection locale={locale} heroImage={homepage?.heroImage} />
        <CollectionsPreview collections={featuredCollections || []} locale={locale} />
        <AboutStrip locale={locale} />
        <ExhibitionsStrip exhibitions={exhibitions || []} locale={locale} />
        <WhatsAppCTA />
      </main>
      <Footer locale={locale} />
    </>
  )
}
