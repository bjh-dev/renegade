import { PortableTextBlock } from 'sanity'

import { CustomPortableText } from '@/components/CustomPortableText'
import TextCard from '@/components/TextCard'
import { allClassesQuery } from '@/lib/queries'
import { Classes } from '@/lib/types'
import { getClient } from '@/sanity/lib/client'

type ClassesListProps = {
  data: {
    title: string
    subtitle: string
    introText: PortableTextBlock[]
    classes: Classes[]
  }
}
const ClassesList = async (props: ClassesListProps) => {
  const { title, subtitle, introText } = props.data
  const client = getClient()
  const sessions = await client.fetch<Classes[]>(allClassesQuery)

  // console.log('Classes: ', sessions)
  return (
    <div id="classes" className="bg-gray-900 py-24">
      <div className="container">
        <div className="flex flex-col space-y-6 max-w-lg">
          <div>
            {subtitle && (
              <h3 className="text-primary uppercase font-bold">{subtitle}</h3>
            )}
            {title && (
              <h2 className="mt-1 text-3xl text-white font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
          </div>
          {introText && (
            <CustomPortableText
              value={introText}
              paragraphClasses="text-white"
            />
          )}
        </div>
        <div className="mt-12 grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 md:gap-y-12 lg:grid-cols-3 xl:grid-cols-3">
          {sessions &&
            sessions.map((session, i) => (
              <TextCard
                key={i}
                title={session.title}
                overview={session.shortDescription}
                darkSection
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default ClassesList
