export interface SettingsPayload {
  title: string
  siteUrl: string
}

export interface HomePagePayload {
  title: string
  description: string
  seo: {
    title: string
    description: string
    image: {
      url: string
      alt: string
    }
  }
}
