import { defineArrayMember, defineType } from 'sanity'

export default defineType({
  name: 'pageBuilder',
  title: 'Page Builder',
  type: 'array',
  of: [
    defineArrayMember({ type: 'hero' }),
    defineArrayMember({ type: 'textWithImage' }),
    defineArrayMember({ type: 'googleReviews' }),
    defineArrayMember({ type: 'pricing' }),
    defineArrayMember({ type: 'membershipForm' }),
    defineArrayMember({ type: 'classList' }),
    defineArrayMember({ type: 'boxedTextWithImage' }),
  ],
})
