/* eslint-disable max-len */
import Image from "next/image";
import React from "react";

const Story = () => {
  return (
    <div id="about" className="container py-12 md:py-20 lg:py-24">
      <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-6 xl:gap-12">
        <div className="col-span-1 lg:col-span-1">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight">
            Our Story
          </h2>
          <p className="mb-4 text-xl">
            Renegade is home to a community of people practising Brazilian Jiu
            Jitsu.
          </p>
          <p className="mb-4 text-base">
            Founded in 2010 by Jamie Murray and John Mirabella, the academy is a
            community that celebrates people and culture, skill development and
            great training experiences.
          </p>
          <p className="mb-4 text-base">
            People come for the training but they stay for the community.
          </p>
          <p className="mb-12 text-base">
            Our instructors have decades of experience in coaching and are black
            belts in Brazilian Jiu Jitsu. Their passion for martial arts is only
            surpassed by their joy in seeing all students find new skills and
            increased happiness at Renegade.
          </p>
        </div>
        <div className="col-span-1 col-start-1 lg:col-span-1">
          <Image
            src="/images/jamie-john.jpg"
            alt="Jamie Murray and John Mirrabella in their gi's at Renegade"
            width={900}
            height={900}
          />
        </div>
      </div>
    </div>
  );
};

export default Story;
