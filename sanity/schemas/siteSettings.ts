import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Ayarları',
  type: 'document',
  // Singleton — only one document
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp Numarası',
      type: 'string',
      description: 'Başında + ile tam numara. Örnek: +905362452626',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Telefon',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'E-posta',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram Kullanıcı Adı',
      type: 'string',
      description: '@ olmadan. Örnek: myclublace',
    }),
    defineField({
      name: 'address',
      title: 'Adres',
      type: 'object',
      fields: [
        { name: 'tr', title: 'Türkçe', type: 'text', rows: 2 },
        { name: 'en', title: 'English', type: 'text', rows: 2 },
        { name: 'ru', title: 'Русский', type: 'text', rows: 2 },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Ayarları' }
    },
  },
})
