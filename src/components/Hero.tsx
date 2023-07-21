import Image from "next/image";

import { CustomPortableText } from "@/components/CustomPortableText";
import Logo from "@/components/Logo";
import { urlForImage } from "@/sanity/lib/image";

const Hero = (props: any) => {
  const { title, subtitle, image, shortDescription } = props.data;
  // console.log('Props: ', props)
  // console.log('title: ', props.data)
  return (
    <div className="relative">
      {/* <div className="absolute z-20 top-10 left-10 w-24 h-auto">
        <Logo dark />
      </div> */}
      <div>
        {/* Hero card */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-full" />
          <div className="relative shadow-xl sm:overflow-hidden">
            <div className="absolute inset-0">
              <Image
                className="h-full w-full object-cover"
                src={urlForImage(image).url()}
                alt={image.alt}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAYAAAAxrNxjAAAAAXNSR0IArs4c6QAAAJBlWElmTU0AKgAAAAgABgEGAAMAAAABAAIAAAESAAMAAAABAAEAAAEaAAUAAAABAAAAVgEbAAUAAAABAAAAXgEoAAMAAAABAAIAAIdpAAQAAAABAAAAZgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAAqgAwAEAAAAAQAAAAcAAAAAeLKsYwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAm1pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPjI8L3RpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzI8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpDb21wcmVzc2lvbj4xPC90aWZmOkNvbXByZXNzaW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KsVruIwAAARZJREFUGBkNxz1LAgEAgOHX0/vwQtEINBWi/CA0RBqCaKghClwcImjqP7Q3+AP6Jy0tLhY0FC1FiyVhFonmXSZ+e1d6cvVsjyN3eGT3egMc5jfprSydeoW9zXXsQILSa5XPSgnV48O1FvGxc7CLW5W5fqwSCCrsZ0IUbu44Oz0nGjZ5a2g4sQZ5SXLT0Nrc3peptdoEFZP2yEZKrCCLLlYzaZwOZTl/UXjgZ2gyMIaEkym6fZniS5OQz0uno5NKJhHUhRnb2Tia2GUiG0w9Kr+ijmjoFC+v2Ehn8CtzCJZqEYstcnKcI5qK81FrMTVmNPU6HsHmq/9/Jri8fpWlSJjRuI/QHfP+/ERZtwjMC9iYKJKC1mjyB066bHjy/pMhAAAAAElFTkSuQmCC"
                fill
                priority
              />
              <div className="absolute inset-0 bg-gray-800 opacity-25 mix-blend-multiply" />
            </div>
            <div className="relative">
              <div className="container" style={{ height: `70vh` }}>
                <div className="absolute bottom-24 text-white max-w-lg">
                  <div className="flex flex-col space-y-6">
                    <div className="z-20 w-32 h-auto">
                      <Logo dark />
                    </div>
                    <div>
                      {subtitle && (
                        <h2 className="text-primary uppercase font-bold">
                          {subtitle}
                        </h2>
                      )}
                      {title && (
                        <h1 className="mt-1 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                          {title}
                        </h1>
                      )}
                    </div>
                    {shortDescription && (
                      <CustomPortableText
                        value={shortDescription}
                        paragraphClasses="text-xl"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
