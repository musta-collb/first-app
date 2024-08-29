import { z } from "zod";

export const ForgotPasswordSchema = z.object({
  email: z.string().email(),
});

export interface ForgotPasswordModel {
  email: string;
}

export const getForgotPasswordModel = (data: FormData): ForgotPasswordModel => {
  return {
    email: data.get("email") as string,
  };
};
