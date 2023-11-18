import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';
interface EmailData {
    name: string;
    surname: string;
    email: string;
    subject: string;
    message: string;
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(400).json({ isEmailSend: false, error: 'Niedozwolona akcja' });
    }

    const { name, surname, email, subject, message }: EmailData = req.body;

    if (!name || !surname || !email || !message || !subject) {
        const errorMessage = 'Wiadomość nie może zostać wysłana z powodu brakujących danych.';
        return res.status(400).json({ isEmailSend: false, error: errorMessage });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.NODEMAILER_USER as string,
            pass: process.env.NODEMAILER_PASSWORD as string,
        },
    });

    try {
        const mailOptions = {
            from: `${name} ${surname} - ${email}`,
            to: process.env.NODEMAILER_USER as string,
            sender: email,
            replyTo: email,
            subject: subject,
            text: message,
        };

        transporter.sendMail(mailOptions, function (error) {
            if (error) {
                return res.status(400).json({ isEmailSend: false, error: 'Wystąpił błąd podczas wysyłania e-maila.' });
            } else {
                return res.status(200).json({ isEmailSend: true, error: false, message: 'E-mail został wysłany pomyślnie!' });
            }
        });
    } catch (error) {
        return res.status(500).json({ isEmailSend: false, error: 'Wystąpił błąd podczas wysyłania e-maila.' });
    }
}
