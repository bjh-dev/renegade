// sanity/schemas/objects/header.tsx

import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'header',
	title: 'Header',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'text',
			title: 'Text',
			type: 'portableTextSimple',
		}),
		defineField({
			name: 'mediaType',
			title: 'Media Type',
			type: 'string',
			options: {
				list: [
					{ title: 'Image', value: 'image' },
					{ title: 'Video', value: 'video' },
				],
				layout: 'radio',
				direction: 'horizontal',
			},
		}),
		defineField({
			name: 'images',
			title: 'Image',
			description:
				'Provide an image or images for the header section (up to three images).',
			type: 'array',
			of: [{ type: 'imageSimple' }],
			hidden: ({ parent, value }) => !value && parent?.mediaType !== 'image',
			validation: (Rule) => Rule.max(3),
		}),
		defineField({
			name: 'video',
			title: 'Video',
			type: 'video',
			hidden: ({ parent, value }) => !value && parent?.mediaType !== 'video',
		}),
	],
})
