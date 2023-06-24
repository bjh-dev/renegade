import { FaFileInvoice } from 'react-icons/fa'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page Builder',
  type: 'document',
  icon: FaFileInvoice,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description:
        'The title of the page is used for links and URL slugs (i.e. /about).',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The slug is used to generate the URL of the page.',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
  ],
})
