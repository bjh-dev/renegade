import Form from '@/components/Form'
import TextCard from '@/components/TextCard'

type MembershipProps = {
  data: {
    title: string
    subtitle: string
    shortDescription: string
    price: number
    frequency: string
    membershipFeatures: {
      title: string
      description: string
    }[]
  }
}

const Memberships = (props: MembershipProps) => {
  const {
    title,
    subtitle,
    shortDescription,
    price,
    frequency,
    membershipFeatures,
  } = props.data
  // console.log('Memberships: ', props)
  // Test
  return (
    <div id="memberships" className="container py-12 md:py-20 lg:py-24">
      <div className="flex flex-col space-y-6 max-w-lg">
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
        {shortDescription && (
          <p className="mt-4 max-w-2xl text-xl text-gray-700">
            {shortDescription}
          </p>
        )}
      </div>
      <div className="mt-12 mb-24 grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-1 lg:gap-x-12 xl:grid-cols-3">
        <div className="col-span-1 xl:col-span-2">
          <div className="grid grid-cols-1 gap-y-12 text-gray-700 md:grid-cols-2  md:gap-12">
            {membershipFeatures.map((feature, i) => (
              <TextCard
                key={i}
                title={feature.title}
                overview={feature.description}
              />
            ))}
          </div>
        </div>
        <div className="col-span-1 xl:col-start-3">
          <div className="h-full bg-primary p-8 text-center shadow-2xl lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
            <p className="text-2xl font-bold leading-6 text-white">
              Membership
            </p>
            <div className="-ml-8 mt-4 flex items-center justify-center text-7xl font-extrabold text-gray-900">
              <span className="text-5xl">$</span>
              {price}
            </div>
            <div className="justify-center text-5xl font-extrabold text-gray-900">
              <p className="text-2xl font-bold text-white">
                {frequency == 'weekly' ? 'per week' : 'per month'}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Form />
    </div>
  )
}

export default Memberships
