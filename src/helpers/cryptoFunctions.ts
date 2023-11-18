import crypto from 'crypto';
import { FormInformation } from '../components/_section/account/ComponentRegister';

function getEncryptionKeyAndIV() {
    const encryptionKey = process.env.NEXT_PUBLIC_ENCRYPTION_KEY ? Buffer.from(process.env.NEXT_PUBLIC_ENCRYPTION_KEY, 'hex') : null;
    const iv = process.env.NEXT_PUBLIC_IV ? Buffer.from(process.env.NEXT_PUBLIC_IV, 'hex') : null;

    if (!encryptionKey || !iv) {
        throw new Error('Brak zdefiniowanych zmiennych środowiskowych ENCRYPTION_KEY lub IV');
    }

    return { encryptionKey, iv };
}

export const encryptingDataRegister = (formValues: FormInformation) => {
    const { encryptionKey, iv } = getEncryptionKeyAndIV();
    const cipher = crypto.createCipheriv('aes-256-cbc', encryptionKey, iv);

    let encryptedData = cipher.update(JSON.stringify(formValues), 'utf8', 'hex');
    encryptedData += cipher.final('hex');

    return encryptedData
}

export const encryptingDataLogin = ({ email, password }: { email: string, password: string }) => {
    const { encryptionKey, iv } = getEncryptionKeyAndIV();

    const cipherEmail = crypto.createCipheriv('aes-256-cbc', encryptionKey, iv);
    let cryptedEmail = cipherEmail.update(email, 'utf8', 'hex');
    cryptedEmail += cipherEmail.final('hex');

    const cipherPassword = crypto.createCipheriv('aes-256-cbc', encryptionKey, iv);
    let cryptedPassword = cipherPassword.update(password, 'utf8', 'hex');
    cryptedPassword += cipherPassword.final('hex');

    return { cryptedEmail, cryptedPassword }
}

export const decryptDataLogin = (cryptedData: string) => {
    const { encryptionKey, iv } = getEncryptionKeyAndIV();

    const decipher = crypto.createDecipheriv('aes-256-cbc', encryptionKey, iv);
    let decryptedData = decipher.update(cryptedData, 'hex', 'utf8');
    decryptedData += decipher.final('utf8');
    return decryptedData;
}

export const decryptDataRegister = (cryptedData: string) => {
    const { encryptionKey, iv } = getEncryptionKeyAndIV();

    const decipher = crypto.createDecipheriv('aes-256-cbc', encryptionKey, iv);
    let decryptedData = decipher.update(cryptedData, 'hex', 'utf8');
    decryptedData += decipher.final('utf8');
    const decryptedObject = JSON.parse(decryptedData);

    return decryptedObject
}