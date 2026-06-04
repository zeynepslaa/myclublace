import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'myclub',
  title: 'MY CLUB — Studio',
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('MY CLUB')
          .items([
            // Singletons
            S.listItem()
              .title('Ana Sayfa')
              .child(
                S.document()
                  .schemaType('homepage')
                  .documentId('homepage')
              ),
            S.listItem()
              .title('Site Ayarları')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.divider(),
            // Collections
            S.listItem()
              .title('Koleksiyonlar')
              .child(S.documentTypeList('collection').title('Koleksiyonlar')),
            S.listItem()
              .title('Kategoriler')
              .child(S.documentTypeList('category').title('Kategoriler')),
            S.divider(),
            // Exhibitions
            S.listItem()
              .title('Fuarlar')
              .child(S.documentTypeList('exhibition').title('Fuarlar')),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
