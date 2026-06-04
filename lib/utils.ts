import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { Locale } from '@/i18n/request'

/**
 * Merges Tailwind classes safely.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Extracts the localized value from a Sanity localized string object.
 * Falls back to English, then any available value.
 */
export function getLocalizedValue(
  obj: Record<string, string> | undefined | null,
  locale: Locale
): string {
  if (!obj) return ''
  return obj[locale] || obj['en'] || obj['tr'] || Object.values(obj)[0] || ''
}

/**
 * Formats a product code for display.
 */
export function formatProductCode(code: string): string {
  return code.toUpperCase()
}
