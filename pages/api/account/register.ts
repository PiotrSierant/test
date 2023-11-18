import { NextApiRequest, NextApiResponse } from "next"
import { hash } from "bcryptjs"
import { connectToMongoDB, disconnectFromMongoDB } from "../../../lib/mongodb"
import User from "../../../models/user"
import mongoose from "mongoose"
import { decryptDataRegister } from "../../../src/helpers/cryptoFunctions"

export interface IUser {
    _id?: string;
    email: string;
    name: string;
    surname: string;
    roles?: string[];
}

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//     connectToMongoDB().catch(err => res.json(err));
//     if (req.method === "POST") {
//         if (!req.body) return res.status(400).json({ error: "Brak danych" });

//         const { email, password, name, surname } = decryptDataRegister(req.body);

//         const userExists = await User.findOne({ email });

//         if (userExists) {
//             await disconnectFromMongoDB();
//             return res.status(409).json({ error: "Użytkownik o tym adresie e-mail jest już w systemie!" });
//         }
//         else {
//             if (password.length < 4) {
//                 await disconnectFromMongoDB();
//                 return res.status(409).json({ error: "Hasło za krótkie" });
//             }

//             const hashedPassword = await hash(password, 12);
//             const emailLowerCase = email.toLowerCase();
//             const nameLowerCase = name.toLowerCase();
//             const surnameLowerCase = surname.toLowerCase();
//             User.create({
//                 email: emailLowerCase,
//                 password: hashedPassword,
//                 name: nameLowerCase,
//                 surname: surnameLowerCase,
//                 roles: ["user"]
//             })
//                 .then((createdUser) => {
//                     const user = {
//                         email: createdUser.email,
//                         _id: createdUser._id,
//                         roles: createdUser.roles,
//                     }
//                     return res.status(201).json({ success: true, user })
//                 })
//                 .catch((error) => {
//                     if (error && error instanceof mongoose.Error.ValidationError) {
//                         for (let field in error.errors) {
//                             const msg = error.errors[field].message
//                             return res.status(409).json({ error: msg })
//                         }
//                     }
//                 })
//                 .finally(async () => {
//                     await disconnectFromMongoDB();
//                 })
//         }
//     }
//     else {
//         res.status(405).json({ error: "Niedozwolona akcja" })
//     }
// }

// export default handler

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await connectToMongoDB();

        if (req.method === "POST") {
            if (!req.body) return res.status(400).json({ error: "Brak danych" });

            const { email, password, name, surname } = decryptDataRegister(req.body);

            const userExists = await User.findOne({ email });

            if (userExists) {
                return res.status(409).json({ error: "Użytkownik o tym adresie e-mail jest już w systemie!" });
            } else if (password.length < 4) {
                return res.status(409).json({ error: "Hasło za krótkie" });
            }

            const hashedPassword = await hash(password, 12);
            const emailLowerCase = email.toLowerCase();
            const nameLowerCase = name.toLowerCase();
            const surnameLowerCase = surname.toLowerCase();

            const createdUser = await User.create({
                email: emailLowerCase,
                password: hashedPassword,
                name: nameLowerCase,
                surname: surnameLowerCase,
                roles: ["user"]
            });

            const user = {
                email: createdUser.email,
                _id: createdUser._id,
                roles: createdUser.roles,
            };

            return res.status(201).json({ success: true, user });
        }
    } catch (error) {
        console.error("Błąd podczas łączenia z MongoDB lub rejestracji użytkownika:", error);
        return res.status(500).json({ error: "Wystąpił błąd podczas rejestracji użytkownika" });
    } finally {
        await disconnectFromMongoDB();
    }

    res.status(405).json({ error: "Niedozwolona akcja" });
};

export default handler;