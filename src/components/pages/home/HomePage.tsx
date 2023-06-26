import { Any } from 'next-sanity'

import ClassesList from '@/components/ClassesList'
import CovidSafe from '@/components/CovidSafe'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Memberships from '@/components/Memberships'
import Reviews from '@/components/Reviews'
import ScrollUp from '@/components/ScrollUp'
import TextWithImage from '@/components/TextWithImage'
import { HomePagePayload } from '@/lib/types'

export interface HomePageProps {
  data: HomePagePayload
}

const HomePage = ({ data }: HomePageProps) => {
  const { content } = data
  // console.log('HomePageProps: ', data)
  return (
    <section className="sections flex flex-col">
      {content &&
        content.map((s: any, i: number) => {
          let el: any = null
          // console.log('type: ', s)
          switch (s._type) {
            case 'hero':
              el = <Hero key={i} data={s} />
              break
            case 'textWithImage':
              el = <TextWithImage key={i} data={s} />
              break
            case 'googleReviews':
              el = <Reviews key={i} data={s} />
              break
            case 'pricing':
              el = <Memberships key={i} data={s} />
              break
            case 'classList':
              el = <ClassesList key={i} data={s} />
              break
            case 'boxedTextWithImage':
              el = <CovidSafe key={i} data={s} />
              break
            default:
              el = null
              break
          }
          return el
        })}
      {/* <Hero />
      <TextWithImage />
      <Reviews />
      <Memberships />
      <Classes />
      <CovidSafe /> */}
      <Footer />
      {/* Workaround: scroll to top on route change */}
      <ScrollUp />
    </section>
  )
}

export default HomePage
