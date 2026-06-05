'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { CollectionCard } from './CollectionCard'
import type { Collection } from '@/lib/types'
import type { Locale } from '@/i18n/request'

interface CollectionsPreviewProps {
  collections: Collection[]
  locale: Locale
}

export function CollectionsPreview({ collections, locale }: CollectionsPreviewProps) {
  const t = useTranslations('collections')

  if (!collections?.length) return null

  const [featured, ...rest] = collections
  const secondary = rest.slice(0, 2)

  return (
    <section className="bg-blanc border-b border-[0.5px] border-lin">
      <div className="max-w-editorial mx-auto px-8 py-10">

        {/* Header */}
        <ScrollReveal>
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="font-display text-[20px] text-noir">
              {t('title')}
            </h2>
            <Link
              href={`/${locale}/collections`}
              className="text-[8px] uppercase tracking-[0.16em] font-sans
                         text-whisper no-underline
                         transition-colors duration-300 hover:text-cendre"
            >
              {t('viewAll')} →
            </Link>
          </div>
        </ScrollReveal>

        {/* Asymmetric grid */}
        <ScrollReveal delay={0.1}>
          <div
            className="grid gap-[1px] bg-lin"
            style={{ gridTemplateColumns: secondary.length > 0 ? '2fr 1fr 1fr' : '1fr' }}
          >
            {/* Large featured card */}
            <CollectionCard
              collection={featured}
              locale={locale}
              size="large"
              className="bg-ivoire"
            />

            {/* Secondary cards */}
            {secondary.map((col, i) => (
              <CollectionCard
                key={col._id}
                collection={col}
                locale={locale}
                size="small"
                className={i === 0 ? 'bg-blanc' : 'bg-lin2'}
              />
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
