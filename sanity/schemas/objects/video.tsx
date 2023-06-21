import React from 'react'
import ReactPlayer from 'react-player'
import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'video',
	title: 'Video',
	type: 'object',
	options: {
		collapsed: false,
	},
	fields: [
		defineField({
			name: 'url',
			title: 'URL',
			type: 'url',
		}),
		defineField({
			name: 'caption',
			title: 'Caption',
			type: 'string',
		}),
	],
	preview: {
		select: {
			url: 'url',
		},
		prepare({ url }) {
			return {
				title: 'Video',
				media: <ReactPlayer url={url} width={200} height={200} />,
			}
		},
	},
})
