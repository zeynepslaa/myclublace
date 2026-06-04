import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'collection',
  title: 'Koleksiyon',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Koleksiyon Adı',
      type: 'object',
      fields: [
        { name: 'tr', title: 'Türkçe', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ru', title: 'Русский', type: 'string' },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'name.en',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'productCode',
      title: 'Ürün Kodu',
      type: 'string',
      description: 'Örnek: MC-2048',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Görseller',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Alt Metin',
              type: 'string',
            },
          ],
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'description',
      title: 'Açıklama',
      type: 'object',
      fields: [
        { name: 'tr', title: 'Türkçe', type: 'text', rows: 3 },
        { name: 'en', title: 'English', type: 'text', rows: 3 },
        { name: 'ru', title: 'Русский', type: 'text', rows: 3 },
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Ana Sayfada Öne Çıkar',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Sıralama',
      type: 'number',
      description: 'Küçük sayı = önce gösterilir',
      initialValue: 99,
    }),
  ],
  preview: {
    select: {
      title: 'name.tr',
      subtitle: 'productCode',
      media: 'images.0',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'İsimsiz Koleksiyon',
        subtitle: subtitle,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Sıralamaya Göre',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Ürün Koduna Göre',
      name: 'productCodeAsc',
      by: [{ field: 'productCode', direction: 'asc' }],
    },
  ],
})
