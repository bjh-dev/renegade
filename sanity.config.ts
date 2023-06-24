/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig, isDev} from 'sanity'
import {deskTool} from 'sanity/desk'
import { previewSecretId } from '@/sanity/lib/api'
import {apiVersion, dataset, projectId} from '@/sanity/env'
import {schema} from '@/sanity/schemas/schema'
import { noteField } from 'sanity-plugin-note-field'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import home from '@/sanity/schemas/documents/home'
import page from '@/sanity/schemas/documents/page'
import { previewDocumentNode } from '@/sanity/plugins/previewPane'
import settings from '@/sanity/schemas/documents/settings'
import { pageStructure, singletonPlugin } from '@/sanity/plugins/settings'
import { productionUrl } from '@/sanity/plugins/productionUrl'


export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [
  home.name,
  page.name,
]

const devOnlyPlugins = [visionTool()]

export default defineConfig({
  basePath: '/studio',
  name: "Renegade_BJJ",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
		deskTool({
      structure: pageStructure([home, settings]),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),

     }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([home.name, settings.name]),
    // Add the "Open preview" action
    productionUrl({
      apiVersion,
      previewSecretId,
      types: PREVIEWABLE_DOCUMENT_TYPES,
    }),
    // Add an image asset source for Unsplash

		unsplashImageAsset(),
    noteField(),
		...(isDev ? devOnlyPlugins : []),
  ],
})
