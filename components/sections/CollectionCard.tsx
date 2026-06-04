import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'
import { getLocalizedValue } from '@/lib/utils'
import type { Collection } from '@/lib/types'
import type { Locale } from '@/i18n/request'
import { cn } from '@/lib/utils'

interface CollectionCardProps {
  collection: Collection
  locale: Locale
  size?: 'large' | 'small'
  className?: string
}

export function CollectionCard({
  collection,
  locale,
  size = 'small',
  className,
}: CollectionCardProps) {
  const name = getLocalizedValue(collection.name, locale)
  const categoryName = getLocalizedValue(collection.category?.name, locale)

  return (
    <Link
      href={`/${locale}/collections/${collection.slug}`}
      className={cn(
        'group flex flex-col no-underline bg-blanc',
        'transition-opacity duration-500 hover:opacity-80',
        className
      )}
    >
      {/* Image */}
      <div
        className={cn(
          'relative overflow-hidden bg-ivoire flex-shrink-0',
          size === 'large' ? 'h-[220px] md:h-[280px]' : 'h-[120px] md:h-[160px]'
        )}
      >
        {collection.image ? (
          <Image
            src={urlFor(collection.image)
              .width(size === 'large' ? 800 : 400)
              .height(size === 'large' ? 560 : 320)
              .quality(85)
              .url()}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            sizes={size === 'large' ? '50vw' : '33vw'}
          />
        ) : (
          /* Texture placeholder */
          <div className="absolute inset-0 lace-mesh opacity-[0.1]" aria-hidden="true" />
        )}
      </div>

      {/* Info */}
      <div className="px-4 py-4 flex flex-col gap-[3px]">
        <p className="font-display italic text-[15px] text-charbon leading-tight">
          {name}
        </p>
        <p className="text-[7.5px] uppercase tracking-[0.2em] font-sans text-whisper">
          {collection.productCode}
        </p>
        <p className="text-[9px] font-sans text-brume mt-[2px]">
          {categoryName}
        </p>
      </div>
    </Link>
  )
}
