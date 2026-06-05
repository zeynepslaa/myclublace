import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { client } from '@/sanity/lib/client'
import { siteSettingsQuery } from '@/sanity/lib/queries'
import { createWhatsAppLink } from '@/lib/whatsapp'
import type { SiteSettings } from '@/lib/types'
import type { Locale } from '@/i18n/request'

interface PageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.contact' })
  return { title: t('title'), description: t('description') }
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params
  const settings = await client.fetch<SiteSettings>(siteSettingsQuery).catch(() => null)
  const whatsappLink = createWhatsAppLink()

  return <main>{/* UI to be implemented */}</main>
}
