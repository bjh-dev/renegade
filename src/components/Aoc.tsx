import Image from "next/image";

const Aoc = () => {
  return (
    <>
      <div className="flex flex-row space-x-6">
        <Image
          className="w-20"
          src="/images/Australian_Aboriginal_Flag.svg"
          alt="Aboriginal Flag"
          width={120}
          height={82}
        />
        <Image
          className="ml-3 w-20"
          src="images/Flag_of_the_Torres_Strait_Islanders.svg"
          alt="Torres Straight Islander Flag"
          width={120}
          height={82}
        />
      </div>
      <p className="mt-6 text-base text-gray-500">
        Renegade acknowledges the Traditional Owners of the lands on which we
        gather to train, and we pay our respects to their Elders past, present,
        and emerging.
      </p>
    </>
  );
};

export default Aoc;
