import TextCard from "@/components/TextCard";

const sessions = [
  {
    id: 0,
    title: "White Belt Classes",
    overview: `Everybody starts here. You’ll learn some fundamental concepts and techniques from one of our black belts to begin your journey.`,
  },
  {
    id: 1,
    title: "Coloured Belt Classes",
    overview: `Constantly sharpen, revise and improve your game. Build on what you've learned with advanced techniques, takedowns and thematic training.`,
  },
  {
    id: 2,
    title: "Master Class",
    overview: `Black and brown belt only class focused on training gi and no-gi BJJ and advanced leg lock attacks.`,
  },
  {
    id: 3,
    title: `Women's Workshops`,
    overview: `Our women only workshops are led by a black belt instructor to develop your skills in a safe supervised environment without the boys.`,
  },
  {
    id: 4,
    title: "Young Renegades",
    overview: `Martial arts classes for little people (5-12). Respect, control and non-stop fun are the aims of every Young Renegades class.`,
  },
  {
    id: 5,
    title: "Junior Renegades",
    overview: `Training for Teens (13-17). Develop your learning while being supported in an adult environment with a dedicated instructor.`,
  },
  {
    id: 6,
    title: "MMA Program",
    overview: `Mixed Martial Arts program is open to all Renegade members who have been graded to blue belt or above.`,
  },
  {
    id: 7,
    title: "Competition Classes",
    overview: `Behind closed doors, and with the support of your team, it's time to execute at your best in preparation for competition.`,
  },
  {
    id: 8,
    title: "Private Classes",
    overview: `Get uninterrupted attention from a qualified coach. Book for yourself or with others to focus on an area of your training.`,
  },
];
const Classes = () => {
  return (
    <div id="classes" className="bg-gray-900 py-24">
      <div className="container">
        <div className="pb-12">
          <h2 className="text-base font-semibold uppercase tracking-wide text-primary">
            Classes
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl">
            From White Belt to World Champion
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-200">
            We have classes morning, lunchtime and evening. From Monday through
            to Sunday - there is a class waiting for you.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 md:gap-y-12 lg:grid-cols-3 xl:grid-cols-3">
          {sessions.map((session) => (
            <TextCard
              key={session.id}
              title={session.title}
              overview={session.overview}
              darkSection
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
