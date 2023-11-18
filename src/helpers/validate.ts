import { emailRegexp, passwordRegexp } from "./regexp";

export const validateSurname = (name: string) => !name.length;
export const validateName = (name: string) => !name.length;
export const validateMessage = (message: string) => !message.length;
export const validateEmail = (email: string) => !(emailRegexp.test(email));
export const validatePassword = (password: string) => !(passwordRegexp.test(password))
export const validatePasswordShort = (password: string) => !(password.length > 4);
export const validateTitle = (title: string) => title.length < 4 || title.length > 124;
export const validateContent = (content: string) => !(content.length > 4);
export const validateSlug = (slug: string) => !(slug.length > 4);
export const validateCategory = (category: string[]) => !category.length;
export const validateIdAuthor = (id: string) => !id.length;
export const validateImage = (image: string) => !(image.length > 4);
export const validateTimeRead = (time: number) => !time
