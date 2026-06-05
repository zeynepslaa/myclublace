import { groq } from '@sanity/client'

// ─────────────────────────────────────────
// COLLECTIONS
// ─────────────────────────────────────────

export const collectionsQuery = groq`
  *[_type == "collection"] | order(order asc) {
    _id,
    "name": name,
    "slug": slug.current,
    productCode,
    "category": category->{ "name": name, "slug": slug.current },
    "image": images[0],
    featured,
    order
  }
`

export const featuredCollectionsQuery = groq`
  *[_type == "collection" && featured == true] | order(order asc) [0...4] {
    _id,
    "name": name,
    "slug": slug.current,
    productCode,
    "category": category->{ "name": name, "slug": slug.current },
    "image": images[0]
  }
`

export const collectionBySlugQuery = groq`
  *[_type == "collection" && slug.current == $slug][0] {
    _id,
    "name": name,
    "slug": slug.current,
    productCode,
    "category": category->{ "name": name, "slug": slug.current },
    "description": description,
    images,
    featured
  }
`

export const collectionSlugsQuery = groq`
  *[_type == "collection"]{ "slug": slug.current }
`

// ─────────────────────────────────────────
// CATEGORIES
// ─────────────────────────────────────────

export const categoriesQuery = groq`
  *[_type == "category"] | order(name.tr asc) {
    _id,
    "name": name,
    "slug": slug.current
  }
`

// ─────────────────────────────────────────
// EXHIBITIONS
// ─────────────────────────────────────────

export const exhibitionsQuery = groq`
  *[_type == "exhibition" && active == true] | order(year desc) {
    _id,
    "name": name,
    location,
    year,
    image,
    active
  }
`

// ─────────────────────────────────────────
// SITE SETTINGS
// ─────────────────────────────────────────

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    whatsapp,
    phone,
    email,
    instagram,
    "address": address
  }
`

// ─────────────────────────────────────────
// HOMEPAGE
// ─────────────────────────────────────────

export const homepageQuery = groq`
  *[_type == "homepage"][0] {
    heroImage,
    "featuredCollections": featuredCollections[]-> {
      _id,
      "name": name,
      "slug": slug.current,
      productCode,
      "category": category->{ "name": name, "slug": slug.current },
      "image": images[0]
    },
    "heroStatement": heroStatement
  }
`
