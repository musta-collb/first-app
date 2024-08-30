export const PASSWORD_REGEX: RegExp =
  /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;

export const USERNAME_REGEX: RegExp =
  /^(?=.{4,32}$)(?![_.-])(?!.*[_.]{2})[a-zA-Z0-9._-]+(?<![_.])$/;
export const PHONE_NUMBER_REGEX: RegExp = /^[0-9]{10}$/;

export const EMAIL_INVALID: string = "Invalid email";
export const EMAIL_REQUIRED: string = "Email required";
export const PASSWORD_REQUIRED: string = "Password required";
export const WEAK_PASSWORD: string =
  "Password must be at least 8 characters long and contain at least one letter and one number";
export const EMAIL_OR_USER_NAME_REQUIRED: string = "Email or username required";
export const USERNAME_REQUIRED: string = "Username required";
export const USERNAME_INVALID: string =
  "Username must be at least 3 characters long";
export const FIRST_NAME_REQUIRED: string = "First name required";
export const LAST_NAME_REQUIRED: string = "Last name required";
export const PHONE_NUMBER_REQUIRED: string = "Phone number required";
export const PASSWORD_MISMATCH: string = "Passwords do not match";
export const CONFIRM_PASSWORD_REQUIRED: string = "Confirm password required";
export const INVALID_PHONE_NUMBER: string = "Invalid phone number";
