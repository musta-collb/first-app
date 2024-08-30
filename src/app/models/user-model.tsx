import { z } from "zod";
import {
  CONFIRM_PASSWORD_REQUIRED,
  EMAIL_INVALID,
  EMAIL_REQUIRED,
  FIRST_NAME_REQUIRED,
  INVALID_PHONE_NUMBER,
  LAST_NAME_REQUIRED,
  PASSWORD_MISMATCH,
  PASSWORD_REGEX,
  PASSWORD_REQUIRED,
  PHONE_NUMBER_REGEX,
  PHONE_NUMBER_REQUIRED,
  USERNAME_INVALID,
  USERNAME_REGEX,
  USERNAME_REQUIRED,
  WEAK_PASSWORD,
} from "../utils/validation/validation-constants";

export const UserShcema = z
  .object({
    username: z
      .string()
      .min(1, { message: USERNAME_REQUIRED })
      .regex(USERNAME_REGEX, {
        message: USERNAME_INVALID,
      }),
    email: z
      .string()
      .email({ message: EMAIL_INVALID })
      .min(1, { message: EMAIL_REQUIRED }),
    firstName: z.string().min(1, { message: FIRST_NAME_REQUIRED }),
    lastName: z.string().min(1, { message: LAST_NAME_REQUIRED }),
    phoneNumber: z
      .string()
      .min(1, { message: PHONE_NUMBER_REQUIRED })
      .regex(PHONE_NUMBER_REGEX, { message: INVALID_PHONE_NUMBER }),
    password: z
      .string()
      .min(1, { message: PASSWORD_REQUIRED })
      .regex(PASSWORD_REGEX, { message: WEAK_PASSWORD }),
    confirmPassword: z.string().min(1, { message: CONFIRM_PASSWORD_REQUIRED }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: PASSWORD_MISMATCH,
  });
// TODO : add an async validation for checking if the username is already taken or email is already registered

export interface User {
  userId?: string;
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  password?: string;
  confirmPassword?: string;
}

export const getSignUpModel = (data: FormData): any => {
  return {
    username: data.get("username"),
    password: data.get("password"),
    email: data.get("email"),
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    phoneNumber: data.get("phoneNumber"),
    confirmPassword: data.get("confirmPassword"),
  };
};
