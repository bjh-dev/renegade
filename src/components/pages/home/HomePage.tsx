import Classes from '@/components/Classes'
import CovidSafe from '@/components/CovidSafe'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Memberships from '@/components/Memberships'
import Reviews from '@/components/Reviews'
import ScrollUp from '@/components/ScrollUp'
import Story from '@/components/Story'
import { HomePagePayload } from '@/lib/types'

export interface HomePageProps {
  data: HomePagePayload | null
}

const HomePage = ({ data }: HomePageProps) => {
  console.log('HomePageProps: ', data)
  return (
    <>
      <Hero />
      <Story />
      <Reviews />
      <Memberships />
      <Classes />
      <CovidSafe />
      <Footer />
      {/* Workaround: scroll to top on route change */}
      <ScrollUp />
    </>
  )
}

export default HomePage
