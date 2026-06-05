'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import type { Locale } from '@/i18n/request'

interface AboutStripProps {
  locale: Locale
}

export function AboutStrip({ locale }: AboutStripProps) {
  const t = useTranslations('about')

  return (
    <section className="bg-espresso border-b border-[0.5px] border-[#1A1410]">
      <div className="max-w-editorial mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-center">

          {/* Left — meta */}
          <ScrollReveal>
            <div className="flex flex-col gap-1">
              <p className="text-[7px] uppercase tracking-[0.24em] font-sans text-[#3A3028]">
                {t('label')}
              </p>
              <div className="w-5 h-[0.5px] bg-[#3A3028] my-3" />
              <p className="text-[8px] uppercase tracking-[0.14em] font-sans text-[#3A3028] leading-[2.2]">
                {t('location')}
                <br />
                {t('established')}
              </p>
            </div>
          </ScrollReveal>

          {/* Right — content */}
          <ScrollReveal delay={0.15}>
            <blockquote className="font-display italic text-[19px] text-ivoire leading-[1.65] mb-5 m-0">
              "{t('quote')}"
            </blockquote>
            <div className="w-6 h-[0.5px] bg-[#3A3028] mb-4" />
            <p className="text-[11px] font-light text-[#4A4438] leading-[1.9] mb-5">
              {t('body')}
            </p>
            <Link
              href={`/${locale}/about`}
              className="text-[8px] uppercase tracking-[0.16em] font-sans
                         text-[#3A3028] no-underline
                         transition-colors duration-300 hover:text-[#5A5048]"
            >
              {t('readMore')} →
            </Link>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
