import { useTranslations } from 'next-intl'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { createWhatsAppLink } from '@/lib/whatsapp'

export function WhatsAppCTA() {
  const t = useTranslations('contact.cta')

  return (
    <section className="bg-noir border-b border-[0.5px] border-[#0A0804]">
      <div className="max-w-editorial mx-auto px-8 py-12">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

            <div>
              <h2 className="font-display italic text-[20px] text-ivoire leading-[1.6] mb-2">
                {t('headline')}
              </h2>
              <p className="text-[10px] font-light text-[#4A4438] tracking-[0.04em]">
                {t('sub')}
              </p>
            </div>

            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 text-[8px] uppercase tracking-[0.2em] font-sans
                         bg-ivoire text-noir px-8 py-3
                         transition-opacity duration-300 hover:opacity-80
                         no-underline"
            >
              {t('button')}
            </a>

          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
