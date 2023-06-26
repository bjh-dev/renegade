// sanity/schemas/documents/home.tsx

import { FaHome } from 'react-icons/fa'
import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'home',
  title: 'Home Page',
  type: 'document',
  icon: FaHome,
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description:
        'The title of the page is used for links and URL slugs (i.e. /about).',
      group: 'content',
    }),
    defineField({
      name: 'header',
      title: 'Header Section',
      type: 'header',
      group: 'content',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      group: 'content',
      type: 'pageBuilder',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],
})
