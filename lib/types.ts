import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// ─────────────────────────────────────────
// LOCALIZED CONTENT
// ─────────────────────────────────────────

export interface LocalizedString {
  tr?: string
  en?: string
  ru?: string
}

// ─────────────────────────────────────────
// SANITY DOCUMENTS
// ─────────────────────────────────────────

export interface Category {
  _id: string
  name: LocalizedString
  slug: string
}

export interface Collection {
  _id: string
  name: LocalizedString
  slug: string
  productCode: string
  category: Category
  image?: SanityImageSource
  images?: SanityImageSource[]
  description?: LocalizedString
  featured?: boolean
  order?: number
}

export interface Exhibition {
  _id: string
  name: LocalizedString
  location?: string
  year?: number
  image?: SanityImageSource
  active: boolean
}

export interface SiteSettings {
  whatsapp: string
  phone?: string
  email?: string
  instagram?: string
  address?: LocalizedString
}

export interface Homepage {
  heroImage?: SanityImageSource
  featuredCollections?: Collection[]
  heroStatement?: LocalizedString
}
