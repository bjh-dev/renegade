import { clsx } from 'clsx'

type ColourChip = {
  name: string
  pantone: string
  cmyk: string
  rgb: string
  hex: string
}
const ColourChip = (props: ColourChip) => {
  const { name, pantone, cmyk, rgb, hex } = props
  return (
    <>
      <div className="flex flex-col space-y-2 border border-gray-400 p-4 rounded-md">
        <h3 className="font-bold">{name}</h3>
        <div
          className={clsx('w-full h-24 inline-block', {
            'bg-primary': name === 'Primary',
            'bg-black': name === 'Black',
            'bg-gray': name === 'Gray',
            'bg-white': name === 'White',
          })}
        />
        <dl className="flex flex-col text-xs">
          <div className="flex">
            <dt className="font-bold w-16">Pantone</dt>
            <dd>{pantone}</dd>
          </div>
          <div className="flex">
            <dt className="font-bold w-16">CMYK</dt>
            <dd>{cmyk}</dd>
          </div>
          <div className="flex">
            <dt className="font-bold w-16">RGB</dt>
            <dd>{rgb}</dd>
          </div>
          <div className="flex">
            <dt className="font-bold w-16">Hex</dt>
            <dd>{hex}</dd>
          </div>
        </dl>
      </div>
    </>
  )
}

export default ColourChip
