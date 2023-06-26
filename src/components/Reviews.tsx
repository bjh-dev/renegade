import { CustomPortableText } from '@/components/CustomPortableText'

const Reviews = (props: any) => {
  const { title, subtitle, shortDescription, leaveAReview } = props.data
  // console.log('Reviews: ', props)
  return (
    <div className="bg-gray-900 py-12">
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
          {shortDescription && <p className="text-white">{shortDescription}</p>}
        </div>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-12 xl:grid-cols-4">
          {/* {reviews.map((review) => (
            <div key={review.id} className="col-span-1">
              <ReviewCard
                id={review.id}
                name={review.author_name}
                text={review.text}
                reviewLink={review.author_url}
                time={review.relative_time_description}
                rating={review.rating}
                darkSection
              />
            </div>
          ))} */}
        </div>
        <div className="mt-6 justify-between border-t-2 border-gray-800 pt-6 text-sm text-white lg:flex">
          {leaveAReview && (
            <CustomPortableText
              value={leaveAReview}
              paragraphClasses="mt-4 text-white"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Reviews
