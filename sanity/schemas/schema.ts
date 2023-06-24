import { SchemaTypeDefinition } from 'sanity'
import home from './documents/home'
import page from './documents/page'
import settings from './documents/settings'
import header from './objects/header'
import imageSimple from './objects/imageSimple'
import link from './objects/link'
import portableTextSimple from './objects/portableTextSimple'
import seo from './objects/seo'
import video from './objects/video'
import cta from './sections/cta'

export const schema: { types: SchemaTypeDefinition[] } = {
types: [
	// Document Types
	home,
  page,
	settings,
	// Object Types
	header,
	imageSimple,
	link,
	portableTextSimple,
	seo,
	video,
	// Page Builder Sections
	cta,
]
}
