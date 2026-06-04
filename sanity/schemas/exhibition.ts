import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'exhibition',
  title: 'Fuar',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Fuar Adı',
      type: 'object',
      fields: [
        { name: 'tr', title: 'Türkçe', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ru', title: 'Русский', type: 'string' },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Konum',
      type: 'string',
      description: 'Örnek: İzmir, Türkiye',
    }),
    defineField({
      name: 'year',
      title: 'Yıl',
      type: 'number',
      validation: (rule) => rule.min(2000).max(2100),
    }),
    defineField({
      name: 'image',
      title: 'Görsel',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'active',
      title: 'Aktif (Sitede Göster)',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'name.tr',
      subtitle: 'year',
      media: 'image',
    },
  },
  orderings: [
    {
      title: 'Yıla Göre (Yeni → Eski)',
      name: 'yearDesc',
      by: [{ field: 'year', direction: 'desc' }],
    },
  ],
})
