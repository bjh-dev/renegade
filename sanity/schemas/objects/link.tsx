// sanity/schemas/objects/links.ts

import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'link',
	title: 'Link',
	type: 'object',
	fields: [
		defineField({
			name: 'reference',
			title: 'Reference',
			type: 'reference',
			to: [
				{ type: 'home', title: 'Home' },
				// { type: 'page', title: 'Page' },
				// { type: 'post', title: 'Post' },
			],
		}),
		defineField({
			name: 'url',
			title: 'URL',
			type: 'url',
		}),
		defineField({
			name: 'text',
			title: 'Text',
			type: 'string',
			description:
				'The text to display for the URL link or use it to override the default text for the reference link.',
		}),
	],
})
