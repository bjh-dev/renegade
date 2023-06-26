import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'googleReviews',
  title: 'Google Reviews',
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
      type: 'text',
      validation: (Rule) => Rule.required().max(260),
    }),
    defineField({
      name: 'leaveAReview',
      title: 'Leave A Review',
      type: 'portableTextSimple',
    }),
  ],
})
