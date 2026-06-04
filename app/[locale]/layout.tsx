import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales, type Locale } from '@/i18n/request'
import '../globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.home' })

  return {
    title: {
      template: '%s — MY CLUB',
      default: t('title'),
    },
    description: t('description'),
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL || 'https://myclublace.com'
    ),
    alternates: {
      canonical: `/${locale}`,
      languages: { tr: '/tr', en: '/en', ru: '/ru' },
    },
    openGraph: {
      siteName: 'MY CLUB',
      locale: locale === 'tr' ? 'tr_TR' : locale === 'en' ? 'en_US' : 'ru_RU',
      type: 'website',
    },
  }
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params

  if (!locales.includes(locale as Locale)) notFound()

  const messages = await getMessages()

  return (
    <html lang={locale} className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-blanc text-charbon antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
