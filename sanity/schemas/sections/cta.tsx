// sanity/schemas/sections/cta.tsx
import { toPlainText } from '@portabletext/react'
import { FaVideo } from 'react-icons/fa'
import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'cta',
	title: 'Call to Action',
	type: 'object',
	fields: [
		defineField({
			name: 'header',
			title: 'Header Section',
			type: 'header',
		}),
		defineField({
			name: 'links',
			title: 'Call to Action Button',
			type: 'array',
			of: [{ type: 'link' }],
		}),
	],
	preview: {
		select: {
			title: 'header.title',
			subtitle: 'header.text',
			media: 'header.images[0].asset',
		},
		prepare({ title, subtitle, media }) {
			const plainText = toPlainText(subtitle)
			return {
				title: `CTA: ${title}`,
				subtitle: plainText,
				media: media ? media : <FaVideo />,
			}
		},
	},
})
