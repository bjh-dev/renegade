import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'settings',
	title: 'Site Settings',
	type: 'document',
	fields: [
		defineField({
			name: 'siteTitle',
			title: 'Site Title',
			type: 'string',
		}),
		defineField({
			name: 'siteUrl',
			title: 'Site URL',
			type: 'url',
		}),
		defineField({
			name: 'primaryNav',
			title: 'Primary Navigation',
			type: 'array',
			of: [
				{
					type: 'link',
				},
			],
		}),
	],
})
