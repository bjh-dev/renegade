"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { CustomPortableText } from "@/components/CustomPortableText";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message?: string;
}
const Form = (props: any) => {
  const {
    title,
    description,
    submitText,
    successMessage,
    errorMessage,
    formId,
  } = props.data;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [state, setState] = useState("idle");
  const FORMSPARK_ACTION_URL = `https://api.formspark.io/${formId}`;

  const onSubmit = async (data: FormData) => {
    setState("Loading");
    try {
      await fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      setState("Success");
    } catch {
      setState("Error");
    }
  };

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
              <div className="mt-6 max-w-3xl text-gray-100">
                <CustomPortableText
                  value={description}
                  paragraphClasses="mt-4"
                />
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-gray-300 rounded-b-lg lg:rounded-r-lg px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 className="text-lg font-semibold uppercase tracking-wide text-primary">
                {title}
              </h3>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-900"
                  >
                    First name
                    <div className="mt-1">
                      <input
                        type="text"
                        id="firstName"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        aria-required="true"
                        {...register("firstName", { required: true })}
                      />
                    </div>
                    {/* <p className="text-xs italic text-red-500">
                    Please enter your first name.
                  </p> */}
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Last name
                    <div className="mt-1">
                      <input
                        type="text"
                        id="lastName"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        aria-required="true"
                        {...register("lastName", { required: true })}
                      />
                    </div>
                    {/* <p className="text-xs italic text-red-500">
                    Please enter your last name.
                  </p> */}
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Email
                    <div className="mt-1">
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
                        aria-required="true"
                        {...register("email", { required: true })}
                      />
                    </div>
                    {/* <p className="text-xs italic text-red-500">
                    Please enter your email.
                  </p> */}
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Phone
                    <div className="mt-1">
                      <input
                        type="tel"
                        id="phone"
                        autoComplete="tel"
                        className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
                        aria-describedby="phone"
                        aria-required="true"
                        {...register("phone", { required: true })}
                      />
                    </div>
                  </label>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="text-smm block font-medium text-gray-900"
                  >
                    Why do you want to train at Renegade?
                    <div className="mt-1">
                      <textarea
                        className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-green-500 focus:ring-primary-500"
                        id="message"
                        cols={30}
                        rows={7}
                        {...register("message", { required: false })}
                      />
                    </div>
                  </label>
                </div>
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <button
                    disabled={state === "Loading"}
                    type="submit"
                    className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:w-auto"
                  >
                    {submitText}
                  </button>
                </div>
                {state === "Error" && (
                  <div className="col-span-2 mt-4 flex w-full flex-col rounded-md bg-mandy-200 p-4">
                    <CustomPortableText
                      value={errorMessage}
                      paragraphClasses="text-sm"
                    />
                  </div>
                )}
                {state === "Success" && (
                  <div className="col-span-2 mt-4 flex w-full flex-col rounded-md bg-primary-200 p-4">
                    <CustomPortableText
                      value={successMessage}
                      paragraphClasses="text-sm"
                    />
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
