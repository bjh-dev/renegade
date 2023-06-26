/* eslint-disable max-len */
import Image from 'next/image'
import React from 'react'

import { CustomPortableText } from '@/components/CustomPortableText'
import { urlForImage } from '@/sanity/lib/image'

const TextWithImage = (props: any) => {
  const { title, subtitle, image, text } = props.data
  return (
    <div id="about" className="container py-12 md:py-20 lg:py-24">
      <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-6 lg:gap-6 xl:gap-12">
        <div className="col-span-1 lg:col-span-1 flex flex-col space-y-6">
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
        <div className="col-span-1 col-start-1 lg:col-span-1">
          <Image
            className="max-w-lg mx-auto"
            src={urlForImage(image).url()}
            alt={image.alt}
            width={900}
            height={900}
          />
        </div>
      </div>
    </div>
  )
}

export default TextWithImage
