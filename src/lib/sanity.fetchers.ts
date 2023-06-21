import imageUrlBuilder from '@sanity/image-url'
import { cache } from 'react'

import { client } from '@/sanity/lib/client'
import { homePageQuery, settingsQuery } from '@/lib/sanity.queries';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

const clientFetch = cache(client.fetch.bind(client))
const revalidate = 60

export async function getHomePage() {
  const res = await clientFetch(homePageQuery, {
    next: { revalidate: revalidate, fallback: 'blocking' }
  })
  if(!res) {
    throw new Error('Failed to fetch home page')
  }
  return res
}

export async function getSettings() {
  const res = await clientFetch(settingsQuery, {
    next: { revalidate: revalidate, fallback: 'blocking' }
  })
  if(!res) {
    throw new Error('Failed to fetch settings')
  }
  return res
}
