"use client";
import { useState } from "react";
import {
  ForgotPasswordSchema,
  getForgotPasswordModel,
} from "../../models/forgot-password-model";
import Errors from "../../components/errors";
import { useTranslations } from "next-intl";
import Image from "next/image";
import logoPic from "../../../../public/logo.png";

export default function ForgotPassword() {
  const transalationMessage = useTranslations("ForgetPassword");

  const [errors, setErrors] = useState<{ message: string; key: string }[]>([]);
  const handleSubmit = (formData: any) => {
    const result = ForgotPasswordSchema.safeParse(
      getForgotPasswordModel(formData)
    );
    if (!result.success) {
      setErrors(
        result.error.issues.map((issue) => {
          console.log(issue);
          return { message: issue.message, key: issue.path.join("-") };
        })
      );
    } else {
      setErrors([]);
      console.log(result.data);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image src={logoPic} className="mx-auto h-20 w-auto" alt="logo" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {transalationMessage("forgetPassword")}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {errors.length > 0 && <Errors errors={errors} />}
          <form action={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 required"
              >
                {transalationMessage("email")}
                <sup className="text-red-600 text-sm mx-1">*</sup>
              </label>
              <div className="mt-2">
                <input
                  required
                  id="email"
                  type="email"
                  placeholder={transalationMessage("emailPlaceholder")}
                  name="email"
                  autoComplete="email"
                  className="p-2 block w-full outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                title="submit"
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {transalationMessage("sendEmail")}
              </button>
              <div className="mt-8 text-center text-sm">
                <a
                  href="#"
                  className=" font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  {transalationMessage("backToLogin")}
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
