'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { getLocalizedValue } from '@/lib/utils'
import type { Exhibition } from '@/lib/types'
import type { Locale } from '@/i18n/request'

interface ExhibitionsStripProps {
  exhibitions: Exhibition[]
  locale: Locale
}

export function ExhibitionsStrip({ exhibitions, locale }: ExhibitionsStripProps) {
  const t = useTranslations('exhibitions')

  if (!exhibitions?.length) return null

  return (
    <section className="bg-blanc border-b border-[0.5px] border-lin">
      <div className="max-w-editorial mx-auto px-8 py-8">
        <ScrollReveal>
          <p className="text-[7px] uppercase tracking-[0.28em] font-sans text-whisper mb-5">
            {t('label')}
          </p>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {exhibitions.map((ex) => (
              <div
                key={ex._id}
                className="flex flex-col gap-[3px] pr-8 border-r border-[0.5px] border-lin last:border-r-0"
              >
                <p className="font-display text-[13px] text-charbon">
                  {getLocalizedValue(ex.name, locale)}
                </p>
                <p className="text-[8px] uppercase tracking-[0.1em] font-sans text-whisper">
                  {ex.location}
                  {ex.year ? ` · ${ex.year}` : ''}
                </p>
              </div>
            ))}

            <Link
              href={`/${locale}/exhibitions`}
              className="text-[8px] uppercase tracking-[0.16em] font-sans
                         text-whisper no-underline ml-auto
                         transition-colors duration-300 hover:text-cendre"
            >
              {t('viewAll')} →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
