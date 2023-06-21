// sanity/schemas/objects/imageSimple.tsx

import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'imageSimple',
	title: 'Image',
	type: 'image',
	options: {
		hotspot: true,
	},
	fields: [
		defineField({
			name: 'alt',
			title: 'Alt Text',
			type: 'string',
			description: 'Alternative text for screen readers.',
		}),
	],
})
