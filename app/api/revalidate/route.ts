import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'

/**
 * Sanity webhook — revalidates pages when content changes.
 *
 * Configure in Sanity: Settings → API → Webhooks
 * URL: https://myclublace.com/api/revalidate
 * Secret: Set SANITY_REVALIDATE_SECRET in env
 */
export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  try {
    const body = await req.json()
    const { _type } = body

    // Revalidate based on document type
    switch (_type) {
      case 'collection':
        revalidatePath('/[locale]/collections', 'page')
        revalidatePath('/[locale]/collections/[slug]', 'page')
        revalidatePath('/[locale]', 'page') // Homepage featured collections
        break
      case 'exhibition':
        revalidatePath('/[locale]/exhibitions', 'page')
        revalidatePath('/[locale]', 'page')
        break
      case 'homepage':
        revalidatePath('/[locale]', 'page')
        break
      case 'siteSettings':
        revalidatePath('/[locale]', 'layout')
        break
      default:
        revalidatePath('/', 'layout')
    }

    return NextResponse.json({ revalidated: true, type: _type })
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 })
  }
}
