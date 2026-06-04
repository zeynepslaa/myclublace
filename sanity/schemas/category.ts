import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Kategori',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Kategori Adı',
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
        maxLength: 64,
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: 'name.tr' },
  },
})
