import Form from "@/components/Form";
import TextCard from "@/components/TextCard";

type MembershipProps = {
  id: number;
  title: string;
  shortDescription: string;
  darkSection: boolean;
};
const memberships = [
  {
    id: 1,
    title: "No Surprises",
    shortDescription:
      "From our training programs to our memberships, you won’t find any surprises. No weird rituals, sensei-worship, or extravagant costumes. No joining or cancellation fees.",
    darkSection: false,
  },
  {
    id: 2,
    title: "Say goodbye to grading fees",
    shortDescription:
      "We have never charged our members to progress through the martial arts ranks. The privilege of earning a rank with us is earned, never purchased.",
    darkSection: false,
  },
  {
    id: 3,
    title: "Cancel and rejoin at any time",
    shortDescription:
      "You’ll never be locked into a contract. If being a member with us doesn’t work out, you can cancel and rejoin at any time - no questions asked.",
  },
  {
    id: 4,
    title: "Exclusive Community",
    shortDescription:
      "Our Memberships are valuable yet easy to understand. We have an academy that others can’t offer by carefully screening each applicant. Outstanding culture and world-class training.",
  },
];
const Memberships = () => {
  return (
    <div id="memberships" className="container py-12 md:py-20 lg:py-24">
      <div className="pb-12">
        <h2 className="text-base font-semibold uppercase tracking-wide text-primary">
          Membership
        </h2>
        <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
          A membership with all the benefits.
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-700">
          Once your application to join has been successful, you’ll become a
          full member. There are no tricks, hidden fees or lock-in contracts.
        </p>
      </div>
      <div className="mb-24 grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-1 lg:gap-x-12 xl:grid-cols-3">
        <div className="col-span-1 xl:col-span-2">
          <div className="grid grid-cols-1 gap-y-12 text-gray-700 md:grid-cols-2 md:gap-x-12 md:gap-y-24">
            {memberships.map((membership) => (
              <TextCard
                key={membership.id}
                title={membership.title}
                overview={membership.shortDescription}
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
              65
            </div>
            <div className="justify-center text-5xl font-extrabold text-gray-900">
              <p className="text-2xl font-bold text-white">Per Week</p>
            </div>
          </div>
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Memberships;
