import { client } from './client'

export async function sanityFetch<T>({ query, params = {} }: { query: string; params?: Record<string, unknown> }): Promise<T> {
  return client.fetch<T>(query, params, { next: { revalidate: 60 } })
}

// No-op component — visual editing not needed for production
export function SanityLive() {
  return null
}
