import { FaGraduationCap } from 'react-icons/fa'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'classes',
  title: 'Classes',
  type: 'document',
  icon: FaGraduationCap,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'imageSimple',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'portableTextSimple',
    }),
  ],
})
