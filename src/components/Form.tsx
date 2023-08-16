import { CustomPortableText } from "@/components/CustomPortableText";

const Form = (props: any) => {
  const {
    title,
    description,
  } = props.data;

  return (
    <div id="apply" className="py-12">
      <div className="container">
        <div className="relative">
          <h2 className="sr-only">{title}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 ">
            {/* Contact information */}
            <div className="relative overflow-hidden rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg bg-gray-800 px-6 py-10 sm:px-10 xl:p-12">
              <div
                className="pointer-events-none absolute inset-0 sm:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={343}
                  height={388}
                  viewBox="0 0 343 388"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                    fill="url(#linear1)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear1"
                      x1="254.553"
                      y1="107.554"
                      x2="961.66"
                      y2="814.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-1/2 sm:block lg:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={359}
                  height={339}
                  viewBox="0 0 359 339"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                    fill="url(#linear2)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear2"
                      x1="192.553"
                      y1="28.553"
                      x2="899.66"
                      y2="735.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset="1" stopColor="#fff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-1/2 lg:block"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={160}
                  height={678}
                  viewBox="0 0 160 678"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                    fill="url(#linear3)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear3"
                      x1="192.553"
                      y1="325.553"
                      x2="899.66"
                      y2="1032.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="max-w-3xl text-gray-100">
                <CustomPortableText
                  value={description}
                  paragraphClasses="first:mt-0 mt-4"
                />
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-gray-300 rounded-b-lg lg:rounded-r-lg px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12">
              <div className="max-w-xl mx-auto">
              <h3 className="text-2xl font-semibold uppercase tracking-wide text-primary">
              Begin your application.
              </h3>
              <p className="my-6">To begin the application process, please send us an email with the following information:</p>
              <div className="flex flex-col space-y-6">
                <div className="flex items-center space-x-6">
                   <div className="flex-shrink-0 w-12 h-12 border-2 border-primary rounded-full flex justify-center items-center">
                    <p>1</p>
                  </div>
                  <div>Your Name</div>
              </div>
              <div className="flex items-center space-x-6">
                   <div className="flex-shrink-0 w-12 h-12 border-2 border-primary rounded-full flex justify-center items-center">
                    <p>2</p>
                  </div>
                  <div>Why you want to become a member</div>
              </div>
              </div>
              <p className="mt-6 text-xl"><a className="text-primary hover:underline font-semibold" href="mailto:info@renegadebjj.com.au">info@renegadebjj.com.au</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
