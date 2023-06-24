import { FaCog } from 'react-icons/fa'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  icon: FaCog,
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
