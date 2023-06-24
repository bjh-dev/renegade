import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'
import { SanityClient } from 'sanity'

export function getClient(preview?: { token: string }): SanityClient {
  const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
  })
  if(preview) {
    if(!preview.token) {
      throw new Error('Missing preview token')
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true
    })
  }
  return client

}
