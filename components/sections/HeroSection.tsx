'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { FadeIn } from '@/components/motion/FadeIn'
import { urlFor } from '@/sanity/lib/image'
import { createWhatsAppLink } from '@/lib/whatsapp'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import type { Locale } from '@/i18n/request'

interface HeroSectionProps {
  locale: Locale
  heroImage?: SanityImageSource
}

export function HeroSection({ locale, heroImage }: HeroSectionProps) {
  const t = useTranslations('hero')

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[360px] border-b border-[0.5px] border-lin">

      {/* Left — Text */}
      <div className="flex flex-col justify-between px-8 py-14 bg-blanc">
        <FadeIn delay={0.2} duration={2.4} y={16}>
          <p className="text-whisper text-whisper-color mb-10 text-[7px] uppercase tracking-[0.32em] text-whisper">
            {t('label')}
          </p>

          <h1 className="font-display text-[2.25rem] leading-[1.2] text-noir mb-6 max-w-[360px]">
            {t('statement')}{' '}
            <em className="italic text-charbon">{t('statementItalic')}</em>
          </h1>

          <p className="text-[12px] font-light text-cendre leading-[1.9] mb-10 max-w-[280px]">
            {t('sub')}
          </p>
        </FadeIn>

        <FadeIn delay={0.6} duration={2.4}>
          <div className="flex items-center gap-6">
            <Link
              href={`/${locale}/collections`}
              className="btn-primary"
            >
              {t('cta')}
            </Link>
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[8px] uppercase tracking-[0.2em] font-sans text-cendre
                         transition-colors duration-300 hover:text-charbon no-underline"
            >
              {t('ctaSecondary')} →
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Right — Visual */}
      <FadeIn
        delay={0.1}
        duration={3.5}
        className="relative bg-ivoire overflow-hidden min-h-[280px] md:min-h-0"
      >
        {/* Lace mesh texture */}
        <div
          className="absolute inset-0 lace-mesh opacity-[0.09]"
          aria-hidden="true"
        />

        {/* Morning light radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 20% 25%, rgba(255,252,248,0.65) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 70% 70%, rgba(26,20,15,0.08) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />

        {/* Real photography */}
        {heroImage ? (
          <Image
            src={urlFor(heroImage).width(900).height(720).quality(90).url()}
            alt="MY CLUB bridal lace collection"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          /* Placeholder until photography is ready */
          <div className="absolute inset-0 flex items-end justify-center pb-6">
            {/* Fine borders */}
            <div className="absolute inset-5 border border-[0.5px] border-brume/35" />
            <div className="absolute inset-9 border border-[0.5px] border-brume/20" />
            {/* Center diamond */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                         w-8 h-8 border border-[0.5px] border-brume/40 rotate-45"
            />
            <p className="font-display italic text-[9.5px] text-brume tracking-[0.06em] relative">
              close-up lace texture · morning light
            </p>
          </div>
        )}
      </FadeIn>

    </section>
  )
}
