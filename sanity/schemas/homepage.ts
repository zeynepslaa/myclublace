import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Ana Sayfa',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Hero Görseli',
      type: 'image',
      options: { hotspot: true },
      description: 'Ana sayfanın sağ tarafında görünecek dantel görseli',
    }),
    defineField({
      name: 'heroStatement',
      title: 'Hero Manifesto (Opsiyonel Override)',
      type: 'object',
      description: 'Boş bırakılırsa çeviri dosyasındaki varsayılan metin kullanılır',
      fields: [
        { name: 'tr', title: 'Türkçe', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ru', title: 'Русский', type: 'string' },
      ],
    }),
    defineField({
      name: 'featuredCollections',
      title: 'Öne Çıkan Koleksiyonlar',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'collection' }] }],
      description: 'Ana sayfada gösterilecek koleksiyonlar (max 4)',
      validation: (rule) => rule.max(4),
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Ana Sayfa İçeriği' }
    },
  },
})
