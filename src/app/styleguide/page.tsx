import ColourChip from '@/app/styleguide/ColourChip'

const Styleguide = () => {
  return (
    <section className="styleguide">
      <header className="bg-primary py-12 text-white">
        <div className="max-w-prose mx-auto text-center">
          <h1>
            <span className="block uppercase text-6xl font-bold tracking-widest">
              Renegade
            </span>
            <span className="mt-4 block uppercase text-2xl">Styleguide</span>
          </h1>
        </div>
      </header>
      <section className="max-w-prose mx-auto py-12 border-b border-black flex flex-col space-y-6">
        <h2 className="font-bold text-2xl">Introduction</h2>
        <p className="text-xl text-black font-light mt-6">
          This styleguide is a resource for anyone working with the Renegade
          brand identity. It’s designed to help you understand our visual
          identity and how to use it correctly. If you have any questions,
          please{' '}
          <a
            className="underline hover:text-primary hover:decoration-primary decoration-2 underline-offset-2"
            href="mailto:info@renegadebjj.com.au?subject=Renegade Stylguide Enquiry"
          >
            contact us
          </a>
          .
        </p>
      </section>
      <section className="max-w-prose mx-auto py-12 border-b border-black flex flex-col space-y-6">
        <div>
          <h2 className="font-bold text-2xl">Colour</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-6">
          <ColourChip
            name="Primary"
            pantone="2418 U"
            cmyk="94 23 81 09"
            rgb="0 126 82"
            hex="008759"
          />
          <ColourChip
            name="Black"
            pantone="347 C"
            cmyk="92 76 56 78"
            rgb="17 24 32"
            hex="111820"
          />
          <ColourChip
            name="Gray"
            pantone="Cool Gray 3 C"
            cmyk="24 19 19 01"
            rgb="202 200 200"
            hex="CAC8C8"
          />
          <ColourChip
            name="White"
            pantone="Brilliant White"
            cmyk="0 0 0 0"
            rgb="255 255 255"
            hex="FFFFFF"
          />
        </div>
      </section>
      <section className="max-w-prose mx-auto py-12 border-b border-black flex flex-col space-y-6">
        <h2 className="font-bold text-2xl">Typography</h2>
        <div>
          <h3 className="font-bold">Headings</h3>
          <p>
            Headings are set in Gotham Bold. Gotham is a commercial typeface by{' '}
            <a
              className="underline hover:text-primary hover:decoration-primary decoration-2 underline-offset-2"
              href="https://www.typography.com/fonts/gotham/overview"
              target="_blank"
              rel="noreferrer noopener"
            >
              Hoefler&Co
            </a>
            . A licence must be purchased to use this font. If you don’t have
            access to Gotham, you can use the free alternative{' '}
            <a
              className="underline hover:text-primary hover:decoration-primary decoration-2 underline-offset-2"
              href="https://fonts.google.com/specimen/Montserrat"
              target="_blank"
              rel="noreferrer noopener"
            >
              Montserrat Bold
            </a>{' '}
            from Google Fonts.
          </p>
        </div>
        <div>
          <h3 className="font-bold">Body Copy</h3>
          <p>
            Body copy is set in Sentinel Book. Sentinel is a commercial typeface
            by{' '}
            <a
              className="underline hover:text-primary hover:decoration-primary decoration-2 underline-offset-2"
              href="https://www.typography.com/fonts/sentinel/overview"
              target="_blank"
              rel="noreferrer noopener"
            >
              Hoefler&Co
            </a>
            . A licence must be purchased to use this font. If you don’t have
            access to Sentinel, you can use the free alternative{' '}
            <a
              className="underline hover:text-primary hover:decoration-primary decoration-2 underline-offset-2"
              href="https://fonts.google.com/specimen/Domine"
              target="_blank"
              rel="noreferrer noopener"
            >
              Domine Regular
            </a>{' '}
            from Google Fonts.
          </p>
          <h3 className="font-bold mt-6">Sample</h3>
          <p className="font-bold tracking-widest text-3xl">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
          </p>
          <p className="font-bold tracking-widest text-3xl">
            abcdefghijklmnopqrstuvwxyz
          </p>
          <p className="font-bold tracking-widest text-3xl">
            1234567890&!?.,:;()[]
          </p>
        </div>
      </section>
      <section className="max-w-prose mx-auto py-12 border-b border-black flex flex-col space-y-6">
        <h2 className="font-bold text-2xl">Logo</h2>
      </section>
    </section>
  )
}

export default Styleguide
