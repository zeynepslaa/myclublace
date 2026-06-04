import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Logo } from './Logo'
import { createWhatsAppLink } from '@/lib/whatsapp'

interface FooterProps {
  locale: string
}

export function Footer({ locale }: FooterProps) {
  const t = useTranslations('nav')
  const tFooter = useTranslations('footer')

  const links = [
    { href: `/${locale}/collections`, label: t('collections') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/exhibitions`, label: t('exhibitions') },
    { href: `/${locale}/contact`, label: t('contact') },
  ]

  return (
    <footer className="bg-[#110D09] border-t border-t-[0.5px] border-[#1A1410]">
      <div className="max-w-editorial mx-auto px-8 py-6 flex items-center justify-between gap-8">

        {/* Logo — muted */}
        <span className="font-display text-[13px] tracking-[0.08em] text-[#2A2218]">
          MY CLUB
        </span>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-5 list-none m-0 p-0">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-[7px] uppercase tracking-[0.16em] font-sans
                           text-[#221C16] no-underline
                           transition-colors duration-300 hover:text-[#3A3028]"
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[7px] uppercase tracking-[0.16em] font-sans
                         text-[#221C16] no-underline
                         transition-colors duration-300 hover:text-[#3A3028]"
            >
              WhatsApp
            </a>
          </li>
        </ul>

        {/* Copyright */}
        <span className="text-[7px] font-sans text-[#1A1410] tracking-[0.08em]">
          © {new Date().getFullYear()} MY CLUB · myclublace.com
        </span>

      </div>
    </footer>
  )
}
