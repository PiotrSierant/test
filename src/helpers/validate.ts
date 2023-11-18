import { emailRegexp, passwordRegexp } from "./regexp";

export const validateSurname = (name: string) => !name.length;
export const validateName = (name: string) => !name.length;
export const validateMessage = (message: string) => !message.length;
export const validateEmail = (email: string) => !(emailRegexp.test(email));
export const validatePassword = (password: string) => !(passwordRegexp.test(password))
export const validatePasswordShort = (password: string) => !(password.length > 4);
