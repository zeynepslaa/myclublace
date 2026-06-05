import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

// Re-export for backward compatibility — all files that import from here still work
export type Locale = (typeof routing.locales)[number]
export const locales = routing.locales

function isLocale(value: string | undefined): value is Locale {
  return routing.locales.includes(value as Locale)
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = isLocale(requested) ? requested : routing.defaultLocale

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
