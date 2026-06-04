import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Logo } from './Logo'
import { LanguageSwitcher } from './LanguageSwitcher'
import { createWhatsAppLink } from '@/lib/whatsapp'

interface NavProps {
  locale: string
}

export function Nav({ locale }: NavProps) {
  const t = useTranslations('nav')
  const whatsappLink = createWhatsAppLink()

  const links = [
    { href: `/${locale}/collections`, label: t('collections') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/exhibitions`, label: t('exhibitions') },
    { href: `/${locale}/contact`, label: t('contact') },
  ]

  return (
    <header className="sticky top-0 z-50 bg-blanc border-b border-b-[0.5px] border-lin">
      <nav className="max-w-editorial mx-auto px-8 h-[54px] flex items-center justify-between">

        {/* Logo */}
        <Logo locale={locale} size="md" />

        {/* Right side */}
        <div className="flex items-center gap-6">

          {/* Nav links */}
          <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-[9px] uppercase tracking-[0.12em] font-sans text-cendre
                             no-underline transition-colors duration-300 hover:text-charbon"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Language switcher */}
          <LanguageSwitcher className="hidden md:flex" />

          {/* WhatsApp CTA */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[8px] uppercase tracking-[0.12em] font-sans
                       bg-noir text-ivoire px-4 py-[6px]
                       transition-opacity duration-300 hover:opacity-80
                       no-underline flex-shrink-0"
          >
            {t('whatsapp')}
          </a>
        </div>

      </nav>
    </header>
  )
}
