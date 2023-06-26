export interface Base {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
}

type Slug = {
  _type: 'slug'
  current: string
}
export interface SettingsPayload {
  title: string
  siteUrl: string
}

export interface HomePagePayload extends Base{
  title: string
  description: string
  content: any[]
  seo: {
    title: string
    description: string
    image: {
      url: string
      alt: string
    }
  }
}

export interface Classes extends Base{
  title: string,
  shortDescription: string,
  slug: Slug
}
