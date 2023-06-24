import Image from "next/image";

const CovidSafe = () => {
  return (
    <div className="p-12 lg:container">
      <div className="grid grid-cols-1 place-items-center bg-primary xl:grid-cols-2">
        <div className="col-span-1">
          <Image
            className="max-h-96 object-fill"
            src="/images/facility.jpg"
            alt="Renegade MMA Covid Clean Gym"
            width={1200}
            height={900}
          />
        </div>
        <div className="col-span-1">
          <div className="p-6 py-12 lg:py-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900">
              our commitment to cleanliness
            </h2>
            <p className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-4xl md:text-3xl">
              COVID-19 Clean
            </p>
            <p className="mt-4 lg:text-base">
              The impacts of COVID-19 are significant for all martial arts
              academies. Being closed for business and more importantly limited
              in the ways we could connect with our team hurt. That’s why we are
              committed to keeping our facilities, staff and members as safe as
              possible with our COVID-19 Safety Policy in line with health
              recommendations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CovidSafe;
