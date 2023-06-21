/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig, isDev} from 'sanity'
import {deskTool} from 'sanity/desk'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemas/schema'
import { noteField } from 'sanity-plugin-note-field'
import deskStructure from '@/sanity/plugins/deskStructure'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

const devOnlyPlugins = [visionTool()]

export default defineConfig({
  basePath: '/studio',
  name: "Renegade_BJJ",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
		deskTool({ structure: deskStructure }),
		unsplashImageAsset(),
    noteField(),
		...(isDev ? devOnlyPlugins : []),
  ],
})
