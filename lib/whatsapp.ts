export const WHATSAPP_NUMBER = '905362452626'

/**
 * Creates a WhatsApp deep link with an optional pre-filled message.
 */
export function createWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

/**
 * Creates a collection-specific WhatsApp message.
 */
export function createCollectionInquiryLink(
  collectionName: string,
  productCode: string,
  locale: 'tr' | 'en' | 'ru' = 'en'
): string {
  const messages = {
    tr: `Merhaba, ${collectionName} (${productCode}) koleksiyonu hakkında bilgi almak istiyorum.`,
    en: `Hello, I would like to inquire about the ${collectionName} (${productCode}) collection.`,
    ru: `Здравствуйте, хочу узнать о коллекции ${collectionName} (${productCode}).`,
  }
  return createWhatsAppLink(messages[locale])
}
