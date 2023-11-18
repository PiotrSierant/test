import Link from 'next/link';
import { Layout } from '../layout/ComponentLayout';
import styles from './account.module.scss';
import { FormEvent, useState } from 'react';
import classnames from 'classnames';
import { validateEmail, validateName, validatePassword, validateSurname } from '../../../helpers/validate';
import { useRouter } from 'next/router';
import { ComponentLoader } from '../../_basic/loader/ComponentLoader';
import { encryptingDataRegister } from '../../../helpers/cryptoFunctions';

const validators = {
    email: validateEmail,
    password: validatePassword,
    name: validateName,
    surname: validateSurname
}
type FieldType = "email" | "name" | "surname" | "password";
export interface FormInformation {
    name: string;
    surname: string;
    email: string;
    password: string;
}
const sendRegisterUser = async (formValues: FormInformation) => {
    try {
        const res = await fetch('../api/account/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(encryptingDataRegister(formValues))
        })
        const data = await res.json();
        const { error, success } = data;
        if (success) {
            return data
        }
        if (error || !res.ok) {
            throw new Error(error);
        }
    }
    catch (err: any) {
        throw new Error(err.message);
    }
}

export const ComponentRegister = () => {
    const [formValues, setFormValues] = useState<FormInformation>(
        { email: "", password: "", name: "", surname: "" }
    )
    const [validationError, setValidationError] = useState({ email: false, password: false, name: false, surname: false });
    const [errorMessage, setErrorMessage] = useState<boolean>(false);
    const [successMessage, setSuccessMessage] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const onChange = (key: string, value: any) => {
        setFormValues(prev => ({ ...prev, ...{ [key]: value } }))
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrorMessage(false);
        setValidationError({ email: false, password: false, name: false, surname: false });
        const error = { ...validationError };
        for (const [field, value] of Object.entries(formValues)) {
            error[field as FieldType] = validators[field as FieldType](value);
        }
        setValidationError(error);
        if (Object.values(error).filter(Boolean).length) return
        setLoading(true);
        sendRegisterUser(formValues)
            .then(() => {
                setSuccessMessage(true);
                setTimeout(() => {
                    router.push('/account/login')
                }, 3000);
            })
            .catch(() => { setErrorMessage(true) })
            .finally(() => setLoading(false))
    }

    return (
        <Layout id={"Rejestracja"} bg={styles.background}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <p className={styles.form_title}>Rejestracja</p>
                <section className={styles.group}>
                    <input
                        id="e-mail"
                        placeholder="Adres e-mail"
                        type="email"
                        minLength={3}
                        maxLength={64}
                        required
                        autoComplete={"off"}
                        onChange={(evt) => onChange("email", evt.target.value)}
                        className={classnames(styles.input, { [styles.invalid]: validationError["email"] })}
                    />
                    <label htmlFor="e-mail">Adres e-mail</label>
                </section>
                <section className={styles.group}>
                    <input
                        id="name"
                        placeholder="Imię"
                        type="text"
                        minLength={3}
                        maxLength={64}
                        required
                        autoComplete={"off"}
                        onChange={(evt) => onChange("name", evt.target.value)}
                        className={classnames(styles.input, { [styles.invalid]: validationError["name"] })}
                    />
                    <label htmlFor="e-mail">Imię</label>
                </section>
                <section className={styles.group}>
                    <input
                        id="surname"
                        placeholder="Nazwisko"
                        type="text"
                        minLength={3}
                        maxLength={64}
                        required
                        autoComplete={"off"}
                        onChange={(evt) => onChange("surname", evt.target.value)}
                        className={classnames(styles.input, { [styles.invalid]: validationError["surname"] })}
                    />
                    <label htmlFor="surname">Nazwisko</label>
                </section>
                <section className={styles.group}>
                    <input
                        id="password"
                        placeholder="Hasło"
                        type="password"
                        minLength={3}
                        maxLength={64}
                        required
                        autoComplete={"off"}
                        onChange={(evt) => onChange("password", evt.target.value)}
                        className={classnames(styles.input, { [styles.invalid]: validationError["password"] })}
                    />
                    <label htmlFor="name">Hasło</label>
                </section>
                <button type="submit" className={classnames(loading && styles.loadingButton)}>
                    {loading ? <ComponentLoader text={''} /> : 'Zarejestruj'}
                </button>
                {errorMessage && <section className={styles.error_msg}>
                    <i className="fa fa-times-circle"></i>
                    Podano nieprawidłowe lub istniejące dane!
                </section>}
                {successMessage && <section className={styles.success_msg}>
                    <i className="fa fa-check"></i>
                    Pomyślnie zarejestrowano - trwa przekierowanie
                </section>}
                <p className={styles.signup_link}>
                    Masz już konto?
                    <Link href="https://zdrowy-sukces.pl/account/login" rel="noreferrer noopener">Zaloguj się</Link>
                </p>
            </form>
        </Layout>
    )
}