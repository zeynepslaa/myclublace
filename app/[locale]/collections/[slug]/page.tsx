import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { collectionBySlugQuery, collectionSlugsQuery } from '@/sanity/lib/queries'
import { getLocalizedValue, formatProductCode } from '@/lib/utils'
import { createCollectionInquiryLink } from '@/lib/whatsapp'
import type { Collection } from '@/lib/types'
import type { Locale } from '@/i18n/request'

interface PageProps {
  params: Promise<{ locale: Locale; slug: string }>
}

export async function generateStaticParams() {
  const collections = await client.fetch<{ slug: string }[]>(collectionSlugsQuery).catch(() => [])
  return collections.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const collection = await client.fetch<Collection>(collectionBySlugQuery, { slug }).catch(() => null)
  if (!collection) return {}
  const name = getLocalizedValue(collection.name, locale)
  return {
    title: `${name} (${formatProductCode(collection.productCode)}) — MY CLUB`,
  }
}

export default async function CollectionDetailPage({ params }: PageProps) {
  const { locale, slug } = await params
  const collection = await client.fetch<Collection>(collectionBySlugQuery, { slug }).catch(() => null)

  if (!collection) notFound()

  const name = getLocalizedValue(collection.name, locale)
  const whatsappLink = createCollectionInquiryLink(name, collection.productCode, locale)

  return (
    <main>
      <div style={{ padding: '4rem 2rem', fontFamily: 'Georgia, serif' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#B0ACA6', marginBottom: '1rem' }}>
          {formatProductCode(collection.productCode)}
        </p>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{name}</h1>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-block', marginTop: '2rem', padding: '0.75rem 1.5rem', background: '#18140F', color: '#F0EDE8', fontSize: '12px' }}>
          Inquire via WhatsApp
        </a>
      </div>
    </main>
  )
}
