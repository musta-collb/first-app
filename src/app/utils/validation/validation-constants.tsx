export const PASSWORD_REGEX: RegExp =
  /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;

export const USERNAME_REGEX: RegExp = /^[a-zA-Z0-9]{3,}$/;

export const EMAIL_INVALID_MESSAGE: string = "Invalid email";
export const EMAIL_REQUIRED_MESSAGE: string = "Email required";
export const PASSWORD_REQUIRED_MESSAGE: string = "Password required";
export const WEAK_PASSWORD_MESSAGE: string =
  "Password must be at least 8 characters long and contain at least one letter and one number";
export const EMAIL_OR_USER_NAME_REQUIRED: string = "Email or username required";
