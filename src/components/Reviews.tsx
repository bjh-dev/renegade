const Reviews = () => {
  return (
    <div className="bg-gray-900 py-12">
      <div className="container">
        <div>
          <h2 className="text-base font-semibold uppercase tracking-wide text-primary">
            GOOGLE REVIEWS
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-200">
            Don&apos;t just take our word for it. Check out what others say
            about Renegade.
          </p>
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
          <div>
            {` `}
            Tells us what you think.{` `}
            <a
              href="https://www.google.com/search?q=renegade+mma+bjj&oq=renegade+mma+bjj&aqs=chrome..69i57j46i13i175i199j0i13j46i13i175i199j0i13l4j0i22i30.4392j1j9&sourceid=chrome&ie=UTF-8#lrd=0x6ad65d191140a833:0xfa85d323f5f6f44,1,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary after:content-['_↗']"
            >
              Leave a review.
            </a>
          </div>
          {/* {placeData.map((place) => (
            <div key={place.rating}>
              <p className="my-2 lg:my-0 lg:text-right">
                Average
                {` `}
                <span className="text-primary">{place.rating}</span>
                {` `}
                stars (from
                {` `}
                <span className="text-primary">
                  {place.user_ratings_total}
                </span>
                {` `}
                reviews).
              </p>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
