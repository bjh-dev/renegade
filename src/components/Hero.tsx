import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-white">
      <div>
        {/* Hero card */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-full" />
          <div className="relative shadow-xl sm:overflow-hidden">
            <div className="absolute inset-0">
              <Image
                className="h-full w-full object-cover"
                src="/images/hero.jpg"
                alt="Jamie Murray standing on front of many seated students talking with one hand raised"
                fill
                priority
              />
              <div className="absolute inset-0 bg-gray-800 opacity-25 mix-blend-multiply" />
            </div>
            <div className="relative">
              <div className="container" style={{ height: `70vh` }}>
                <div className="absolute bottom-24">
                  <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Be a Renegade
                  </h1>
                  <p className="mx-auto mt-6 max-w-lg text-xl text-white">
                    Renegade is a vibrant, safe and welcoming community of
                    people practising Brazilian Jiu Jitsu.
                  </p>
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
