import { z } from "zod";
import {
  EMAIL_OR_USER_NAME_REQUIRED,
  PASSWORD_REQUIRED,
} from "../utils/validation/validation-constants";

export const LoginModelSchema = z.object({
  identifier: z.string().min(1, { message: EMAIL_OR_USER_NAME_REQUIRED }),
  password: z.string().min(1, { message: PASSWORD_REQUIRED }),
});

export interface LoginModel {
  identifier?: string;
  password?: string;
}

export const getLoginVo = (data: FormData): any => {
  return {
    identifier: data.get("identifier"),
    password: data.get("password"),
  };
};
