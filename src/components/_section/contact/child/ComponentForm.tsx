import { FormEvent, useState } from 'react';
import styles from './ComponentForm.module.scss';
import classnames from 'classnames';
import Link from 'next/link';
import { ComponentLoader } from '../../../_basic/loader/ComponentLoader';
import Lottie from 'lottie-react';
import animationDataSended from '../../../../assets/lottie-files/sended-mail.json';
import animationDataFailure from '../../../../assets/lottie-files/failure-mail.json';
import { validateEmail, validateName, validateSurname, validateMessage } from '../../../../helpers/validate';

const validators = {
    email: validateEmail,
    name: validateName,
    surname: validateSurname,
    message: validateMessage
}
type FieldType = "email" | "name" | "surname" | "message";
const successMessage = { firstLine: "Dziękuję za wiadomość!", secondLine: "Zwykle odpowiadam w ciągu 24h.", sended: true }
const failureMessage = { firstLine: "Przepraszam, wystąpił problem podczas wysyłania Twojej wiadomości!", secondLine: "Proszę spróbować ponownie później lub skontaktuj się ze mną przez media społecznościowe.", sended: false }

const sendEmail = async (data: any) => {
    try {
        const res = await fetch('/api/form', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const { isEmailSend, error } = await res.json();
        if (!isEmailSend || error || !res.ok) {
            throw new Error(error);
        }
    } catch (err: any) {
        throw new Error(err);
    }
};

export const ComponentForm = () => {
    const [formValues, setFormValues] = useState<{ name: string, surname: string, email: string, message: string }>(
        {
            name: "",
            surname: "",
            email: "",
            message: "",
        }
    )
    const [privacyConsent, setPrivacyConsent] = useState(false);
    const [validationError, setValidationError] = useState({ email: false, name: false, surname: false, message: false });
    const [loader, setLoader] = useState(false);
    const [message, setMessage] = useState<{ firstLine: string, secondLine: string, sended: boolean } | null>(null);
    const onChange = (key: string, value: any) => {
        setFormValues(prev => ({ ...prev, ...{ [key]: value } }))
    }
    const handleMessage = (message: { firstLine: string, secondLine: string, sended: boolean }) => {
        setMessage(message);
        setTimeout(() => setMessage(null), 5000);
    }
    const clearForm = () => {
        setFormValues({
            name: "",
            surname: "",
            email: "",
            message: "",
        });
        setPrivacyConsent(false);
    }
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const error = { ...validationError };
        for (const [field, value] of Object.entries(formValues)) {
            error[field as FieldType] = validators[field as FieldType](value);
        }
        setValidationError(error);
        if (Object.values(error).filter(Boolean).length) return
        setLoader(true);
        sendEmail({ ...formValues, subject: `${formValues.name} - pomóż mi Zdrowy Sukcesie!` })
            .then(() => handleMessage(successMessage))
            .catch(() => handleMessage(failureMessage))
            .finally(() => {
                clearForm();
                setLoader(false);
            });
    }


    return (<>
        {message ? (
            <section className={styles.message}>
                <section className={styles.animation_wrapper}>
                    {message.sended
                        ? <Lottie animationData={animationDataSended} loop={false} autoPlay={true} />
                        : <Lottie animationData={animationDataFailure} loop={true} autoPlay={true} />
                    }
                </section>
                <section className={styles.inforamtion_wrapper}>
                    <h4>{message.firstLine}</h4>
                    <p>{message.secondLine}</p>
                </section>
            </section>
        ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
                <section className={styles.group}>
                    <input
                        id="name"
                        placeholder="Imię"
                        type="text"
                        minLength={3}
                        maxLength={64}
                        required
                        onChange={(evt) => onChange("name", evt.target.value)}
                        className={classnames(styles.input, { [styles.invalid]: validationError["name"] })}
                    />
                    <label htmlFor="name">Imię</label>
                </section>
                <section className={styles.group}>
                    <input
                        id="surname"
                        placeholder="Nazwisko"
                        type="text"
                        minLength={3}
                        maxLength={64}
                        required
                        onChange={(evt) => onChange("surname", evt.target.value)}
                        className={classnames(styles.input, { [styles.invalid]: validationError["surname"] })}
                    />
                    <label htmlFor="surname">Nazwisko</label>
                </section>
                <section className={styles.group}>
                    <input
                        id="e-mail"
                        placeholder="Adres e-mail"
                        type="email"
                        minLength={3}
                        maxLength={64}
                        required
                        onChange={(evt) => onChange("email", evt.target.value)}
                        className={classnames(styles.input, { [styles.invalid]: validationError["email"] })}
                    />
                    <label htmlFor="e-mail">Adres e-mail</label>
                </section>
                <section className={styles.group}>
                    <textarea
                        id="message"
                        placeholder="Treść wiadomości"
                        rows={4}
                        onChange={(evt) => onChange("message", evt.target.value)}
                        className={classnames(styles.textarea, { [styles.invalid]: validationError["message"] })}
                    >
                    </textarea>
                    <label htmlFor="message">Treść wiadomości</label>
                </section>
                <section className={styles.privacy}>
                    <label htmlFor="check">
                        <input type="checkbox" id="check" onChange={() => setPrivacyConsent(prev => !prev)} checked={privacyConsent} />
                        <span></span>
                        Akceptuję <Link href="/polityka-prywatnosci" rel="noreferrer noopener">politykę prywatności</Link>
                    </label>
                    {loader
                        ? <section className={styles.loaderWrapperForm}>
                            <ComponentLoader text={"Wysyłanie wiadomości"} />
                        </section>
                        : (
                            <button disabled={!privacyConsent} className={styles.button} type="submit" aria-label="Wyślij" title="Wyślij">
                                Wyślij
                            </button>
                        )}
                </section>
            </form>
        )}
    </>
    )
}