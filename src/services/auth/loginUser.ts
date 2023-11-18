import { signIn } from "next-auth/react";
interface LoginUserParams {
    cryptedEmail: string;
    cryptedPassword: string;
}
export const loginWithCredentials = async ({ cryptedEmail, cryptedPassword }: LoginUserParams) => {
    const res = await signIn("credentials", {
        redirect: false,
        cryptedEmail,
        cryptedPassword,
    })

    return res
}