import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  locale: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: {
    my: 'text-[18px]',
    club: 'text-[6px]',
    sub: 'text-[5px]',
    vline: 'h-[14px]',
  },
  md: {
    my: 'text-[22px]',
    club: 'text-[6.5px]',
    sub: 'text-[5px]',
    vline: 'h-[18px]',
  },
  lg: {
    my: 'text-[28px]',
    club: 'text-[7.5px]',
    sub: 'text-[5.5px]',
    vline: 'h-[22px]',
  },
}

export function Logo({ locale, className, size = 'md' }: LogoProps) {
  const s = sizes[size]

  return (
    <Link
      href={`/${locale}`}
      className={cn('flex items-center gap-2 no-underline', className)}
    >
      {/* MY */}
      <span
        className={cn(
          'font-display font-normal text-noir leading-none tracking-[0.04em]',
          s.my
        )}
      >
        MY
      </span>

      {/* Vertical divider */}
      <span
        className={cn('block w-[0.5px] bg-brume flex-shrink-0', s.vline)}
      />

      {/* Right side */}
      <span className="flex flex-col gap-[2px] pl-1">
        <span
          className={cn(
            'font-display uppercase tracking-[0.44em] text-charbon leading-none',
            s.club
          )}
        >
          Club
        </span>
        <span className="block h-[0.5px] bg-lin" />
        <span
          className={cn(
            'font-sans uppercase tracking-[0.2em] text-whisper leading-none',
            s.sub
          )}
        >
          Bridal Lace · Est. 2005
        </span>
      </span>
    </Link>
  )
}
