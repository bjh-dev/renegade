import { SchemaTypeDefinition } from 'sanity'

import classes from '@/sanity/schemas/documents/classes'
import formBuilder from '@/sanity/schemas/objects/formBuilder'
import formBuilderField from '@/sanity/schemas/objects/formBuilderField'
import pageBuilder from '@/sanity/schemas/objects/pageBuilder'
import boxedTextWithImage from '@/sanity/schemas/sections/boxedTextWithImage'
import classList from '@/sanity/schemas/sections/classList'
import googleReviews from '@/sanity/schemas/sections/googleReviews'
import hero from '@/sanity/schemas/sections/hero'
import membershipForm from '@/sanity/schemas/sections/membershipForm'
import pricing from '@/sanity/schemas/sections/pricing'
import textWithImage from '@/sanity/schemas/sections/textWithImage'

import home from './documents/home'
import page from './documents/page'
import settings from './documents/settings'
import header from './objects/header'
import imageSimple from './objects/imageSimple'
import link from './objects/link'
import portableTextSimple from './objects/portableTextSimple'
import seo from './objects/seo'
import video from './objects/video'

export const schema: { types: SchemaTypeDefinition[] } = {
types: [
	// Document Types
  classes,
	home,
  page,
	settings,
	// Object Types
  formBuilder,
  formBuilderField,
	header,
	imageSimple,
	link,
  pageBuilder,
	portableTextSimple,
	seo,
	video,
	// Page Builder Sections
  boxedTextWithImage,
  classList,
  googleReviews,
  hero,
  membershipForm,
  pricing,
  textWithImage,
]
}
