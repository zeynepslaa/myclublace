'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const ACTIVE_LOCALES = ['tr', 'en'] as const

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  function switchLocale(next: string) {
    // Replace /tr or /en at the start of the path
    const newPath = pathname.replace(/^\/(tr|en|ru)/, `/${next}`)
    router.push(newPath)
  }

  return (
    <div
      className={cn(
        'flex items-center border border-lin px-2 py-1 gap-1',
        className
      )}
    >
      {ACTIVE_LOCALES.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          <button
            onClick={() => switchLocale(l)}
            className={cn(
              'text-[9px] uppercase tracking-[0.1em] font-sans transition-colors duration-300',
              locale === l ? 'text-charbon' : 'text-whisper hover:text-cendre'
            )}
          >
            {l.toUpperCase()}
          </button>
          {i < ACTIVE_LOCALES.length - 1 && (
            <span className="text-[9px] text-lin">/</span>
          )}
        </span>
      ))}
    </div>
  )
}
