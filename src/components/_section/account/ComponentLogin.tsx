import Link from 'next/link';
import { Layout } from '../layout/ComponentLayout';
import styles from './account.module.scss';
import { useState, FormEvent } from 'react';
import { validateEmail, validatePasswordShort } from '../../../helpers/validate';
import classnames from 'classnames';
import { loginWithCredentials } from '../../../services/auth/loginUser';
import { useRouter } from 'next/router';
import { AxiosError } from 'axios';
import { ComponentLoader } from '../../_basic/loader/ComponentLoader';
import { encryptingDataLogin } from '../../../helpers/cryptoFunctions';
import { ComponentGoogleButton } from '../../_basic/social-button/ComponentGoogleButton';
import { ComponentFacebookButton } from '../../_basic/social-button/ComponentFacebookButton';
const validators = {
    email: validateEmail,
    password: validatePasswordShort
}
type FieldType = "email" | "password";

export const ComponentLogin = () => {
    const [formValues, setFormValues] = useState<{ email: string, password: string }>({ email: "", password: "" })
    const [validationError, setValidationError] = useState({ email: false, password: false });
    const [loading, setLoading] = useState<boolean>(false);
    const [submitError, setSubmitError] = useState("");
    const router = useRouter()

    const onChange = (key: string, value: any) => {
        setFormValues(prev => ({ ...prev, ...{ [key]: value } }))
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const error = { ...validationError };
        for (const [field, value] of Object.entries(formValues)) {
            error[field as FieldType] = validators[field as FieldType](value);
        }
        setValidationError(error);
        if (Object.values(error).filter(Boolean).length) return
        try {
            setLoading(true);
            let { email, password } = formValues;
            email = email.toLowerCase();

            const loginRes = await loginWithCredentials(encryptingDataLogin({ email, password }))

            if (loginRes && !loginRes.ok) {
                setSubmitError(loginRes.error || "")
            }
            else {
                router.push("/panel")
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                const errorMsg = error.response?.data?.error
                setSubmitError(errorMsg)
            }
        }
        setLoading(false)
    }

    return (
        <Layout id={"Logowanie"} bg={styles.background} extendWrapper={styles.wrapper}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <p className={styles.form_title}>Logowanie</p>
                <section className={styles.group}>
                    <input
                        id="e-mail"
                        placeholder="Adres e-mail"
                        type="email"
                        minLength={3}
                        maxLength={64}
                        required
                        autoComplete={"on"}
                        onChange={(evt) => onChange("email", evt.target.value)}
                        className={classnames(styles.input, { [styles.invalid]: validationError["email"] })}
                    />
                    <label htmlFor="e-mail">Adres e-mail</label>
                </section>
                <section className={styles.group}>
                    <input
                        id="password"
                        placeholder="Hasło"
                        type="password"
                        minLength={3}
                        maxLength={64}
                        required
                        autoComplete={"on"}
                        onChange={(evt) => onChange("password", evt.target.value)}
                        className={styles.input}
                    />
                    <label htmlFor="name">Hasło</label>
                </section>
                <button type="submit" className={classnames(loading && styles.loadingButton)}>
                    {loading ? <ComponentLoader text={''} /> : 'Zaloguj'}
                </button>
            </form>
            <ComponentGoogleButton text={"Zaloguj się za pomocą Google"} />
            <ComponentFacebookButton text={"Zaloguj się za pomocą Facebook"} />
            {submitError && <section className={styles.error_msg}>
                <i className="fa fa-times-circle"></i>
                Podano nieprawidłowe dane!
            </section>}
            <p className={styles.signup_link}>
                Nie masz konta?
                <Link href="https://zdrowy-sukces.pl/account/register" rel="noreferrer noopener">Zarejestruj się</Link>
            </p>
        </Layout>
    )
}