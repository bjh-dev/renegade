import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'membershipForm',
  title: 'Membership Form',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'portableTextSimple',
    }),
  ],
})
