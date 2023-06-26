import Image from 'next/image'

import { CustomPortableText } from '@/components/CustomPortableText'
import { urlForImage } from '@/sanity/lib/image'

const CovidSafe = (props: any) => {
  const { title, subtitle, text, image } = props.data
  // console.log('CovidSafe: ', props.data)
  return (
    <div className="p-12 lg:container">
      <div className="grid grid-cols-1 place-items-center bg-gray xl:grid-cols-2 rounded-lg">
        <div className="col-span-1">
          <Image
            className="object-fill rounded-t-lg"
            src={urlForImage(image).url()}
            alt={image.alt}
            width={1200}
            height={900}
          />
        </div>
        <div className="col-span-1 flex flex-col space-y-6 p-8">
          <div>
            {subtitle && (
              <h3 className="text-primary uppercase font-bold">{subtitle}</h3>
            )}
            {title && (
              <h2 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
          </div>
          {text && <CustomPortableText value={text} paragraphClasses="mt-4" />}
        </div>
      </div>
    </div>
  )
}

export default CovidSafe
