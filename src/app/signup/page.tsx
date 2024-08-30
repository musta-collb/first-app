"use client";
import { useState } from "react";
import { UserShcema, getSignUpModel } from "../models/user-model";
import Errors from "../components/input/errors";

export default function SignUp() {
  const [errors, setErrors] = useState<{ message: string; key: string }[]>([]);
  const handleSubmit = (formData: any) => {
    const result = UserShcema.safeParse(getSignUpModel(formData));
    if (!result.success) {
      console.log(result);
      setErrors(
        result.error.issues.map((issue, index) => {
          return { message: issue.message, key: issue.path.join("-") + index };
        })
      );
    } else {
      setErrors([]);
      console.log(result.data);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-3 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img alt="logo" src="logo.png" className="mx-auto h-20 w-auto" />
          <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
          {errors.length > 0 && <Errors errors={errors} />}
          <form action={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900 required"
              >
                Username
                <sup className="text-red-600 text-sm mx-1">*</sup>
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  type="text"
                  name="username"
                  className="p-2 block w-full outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 required"
              >
                Email
                <sup className="text-red-600 text-sm mx-1">*</sup>
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="p-2 block w-full outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="grid gap-2 grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium leading-6 text-gray-900 required"
                >
                  First name
                  <sup className="text-red-600 text-sm mx-1">*</sup>
                </label>
                <div className="mt-2">
                  <input
                    id="firstName"
                    type="firstName"
                    name="firstName"
                    className="p-2 block w-full outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium leading-6 text-gray-900 required"
                >
                  Last name
                  <sup className="text-red-600 text-sm mx-1">*</sup>
                </label>
                <div className="mt-2">
                  <input
                    id="lastName"
                    type="lastName"
                    name="lastName"
                    className="p-2 block w-full outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium leading-6 text-gray-900 required"
              >
                Phone number
                <sup className="text-red-600 text-sm mx-1">*</sup>
              </label>
              <div className="mt-2">
                <input
                  id="phoneNumber"
                  type="phoneNumber"
                  name="phoneNumber"
                  className="p-2 block w-full outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                  <sup className="text-red-600 text-sm mx-1">*</sup>
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="p-2 block w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm password
                  <sup className="text-red-600 text-sm mx-1">*</sup>
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  className="p-2 block w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                title="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              You already have an account?
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
