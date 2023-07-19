import Image from "next/image";
import { FaStar } from "react-icons/fa";

import { CustomPortableText } from "@/components/CustomPortableText";

const apiKey = process.env.GOOGLE_KEY;
const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJM6hAERld1moRRG9fPzJdqA8&key=${apiKey}`;

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center space-x-1">
      {rating >= 1 && <FaStar className="text-yellow-500" />}
      {rating >= 2 && <FaStar className="text-yellow-500" />}
      {rating >= 3 && <FaStar className="text-yellow-500" />}
      {rating >= 4 && <FaStar className="text-yellow-500" />}
      {rating >= 5 && <FaStar className="text-yellow-500" />}
    </div>
  );
};
type Review = {
  author_name: string;
  author_url: string;
  language: string;
  original_language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  translated: boolean;
};

const ReviewCard = (props: Review) => {
  return (
    <a
      target="_blank"
      rel="noreferrer noopener"
      href={props.author_url}
      className="flex space-x-4 hover:bg-gray-700 p-4 rounded-lg"
    >
      <div className="flex-none">
        <Image
          className="w-16 h-16 rounded-full"
          src={props.profile_photo_url}
          alt={props.author_name}
          width={120}
          height={120}
        />
      </div>
      <div className="flex flex-col space-y-2">
        <div>
          <p className="font-medium text-white">{props.author_name}</p>
        </div>
        <div>
          <StarRating rating={props.rating} />
        </div>
        <div>
          <p className="text-xs leading-5 text-gray-300 italic line-clamp-5">
            {props.text}
          </p>
        </div>
      </div>
    </a>
  );
};

type ReviewsProps = {
  data: {
    title: string;
    subtitle: string;
    shortDescription: string;
    leaveAReview: any;
  };
};

const Reviews = async (props: ReviewsProps) => {
  const { title, subtitle, shortDescription, leaveAReview } = props.data;
  const details = await fetch(url).then((res) => res.json());
  const reviews = details.result.reviews;
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
        <div className="py-12 grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-12 xl:grid-cols-4">
          {reviews ? (
            reviews.slice(0, 4).map((review: Review, index: any) => (
              <div key={index} className="col-span-1">
                <ReviewCard {...review} />
              </div>
            ))
          ) : (
            <h3 className="text-center font-semibold text-white text-xl">
              Reviews not available at the moment
            </h3>
          )}
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
  );
};

export default Reviews;
