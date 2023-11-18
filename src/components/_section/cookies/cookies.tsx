import styles from './cookies.module.scss';
import { setCookie, getCookie } from 'cookies-next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCollapse } from 'react-collapsed';
export const Cookies = () => {
    const [cookieState, setCookieState] = useState<string | undefined>(undefined);
    const [showCookie, setShowCookie] = useState<boolean>(true);
    const [pref, setPref] = useState<boolean>(false);
    const [switchChecked, setSwitchChecked] = useState<boolean>(true);
    const [isExpanded1, setExpanded1] = useState(false);
    const [isExpanded2, setExpanded2] = useState(false);
    const [isExpanded3, setExpanded3] = useState(false);
    const { getCollapseProps: getCollapseProps1, getToggleProps: getToggleProps1 } = useCollapse({ isExpanded: isExpanded1 });
    const { getCollapseProps: getCollapseProps2, getToggleProps: getToggleProps2 } = useCollapse({ isExpanded: isExpanded2 });
    const { getCollapseProps: getCollapseProps3, getToggleProps: getToggleProps3 } = useCollapse({ isExpanded: isExpanded3 });
    useEffect(() => {
        const results = getCookie('cookies');
        setCookieState(results);
    }, [])

    useEffect(() => {
        if (cookieState == 'accept') {
            setShowCookie(false)
        } else {
            setShowCookie(true)
        }
    }, [cookieState])

    const handleClickPref = () => {
        setPref(true)
    }

    const handleClickAccept = () => {
        let data = new Date();
        let dataPlusYear = data.setFullYear(data.getFullYear() + 1);
        setCookie('cookies', 'accept', {
            expires: new Date(dataPlusYear),
        });
        setShowCookie(false);
    };

    const handleSwitchChecked = () => {
        setSwitchChecked(!switchChecked)
    }

    if (pref) {
        return (
            <section className={styles.cookie_card}>
                <p className={styles.collapse} onClick={() => setPref(false)}>
                    <span className={styles.title}>Preferencje plików cookie</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </p>
                <p className={styles.description}>
                    Ta strona wykorzystuje pliki cookies w celu zapewnienia prawidłowego działania
                    poszczególnych jej funkcji (pliki cookies własne) oraz pliki cookies pochodzące od
                    podmiotów trzecich w celu korzystania z narzędzi zewnętrznych (1koszyk, MailerLite). Do informacji, które są gromadzone w plikach cookies od
                    podmiotów trzecich, mają dostęp dostawcy wymienionych narzędzi zewnętrznych.</p>

                <div className={styles.collapseWrapper}>
                    <p
                        {...getToggleProps1({
                            onClick: () => setExpanded1((prevExpanded) => !prevExpanded),
                        })}
                        className={styles.collapse}
                    >

                        <span>1. Pliki cookies niezbędne do świadczenia usług drogą elektroniczną</span>
                        {isExpanded1 ? <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>}
                    </p>
                    <section {...getCollapseProps1()}>
                        <small>Te pliki cookies pozostaną aktywne zawsze i nie masz możliwości wyboru w tym zakresie,
                            ponieważ są to pliki cookies, dzięki którym w sposób prawidłowy funkcjonują m.in.
                            formularze na stronie oraz mechanizm autoryzacji do konta użytkownika. Dodatkowo w tych
                            plikach cookies zapisana zostanie informacja o Twoich ustawieniach plików cookies.</small>
                    </section>
                </div>
                <div className={styles.collapseWrapper}>
                    <p
                        {...getToggleProps2({
                            onClick: () => setExpanded2((prevExpanded) => !prevExpanded),
                        })}
                        className={styles.collapse}
                    >
                        <span>2. Sklep</span>
                        {isExpanded2 ? <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>}
                    </p>
                    <section {...getCollapseProps2()}>
                        <small>Sklep korzysta z zewnętrznego serwisu 1koszyk.pl do przetwarzania zamówień i płatności. Aby dokonać zakupu wymagane jest podanie niezbędnych informacji, takich jak email. Podczas procesu transakcyjnego serwis 1koszyk.pl może gromadzić informacje dotyczące Twojego zamówienia, takie jak przedmioty kupione i kwota transakcji. Wszystkie przetwarzane dane są chronione zgodnie z polityką prywatności serwisu 1koszyk.pl.</small>
                    </section>
                </div>
                <div className={styles.collapseWrapper}>
                    <p
                        {...getToggleProps3({
                            onClick: () => setExpanded3((prevExpanded) => !prevExpanded),
                        })}
                        className={styles.collapse}
                    >
                        <span>3. Newsletter</span>
                        {isExpanded3 ? <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>}
                    </p>
                    <section {...getCollapseProps3()}>
                        <small>Na stronie znajdziesz formularze pozwalające Ci zapisać się do mojego newslettera. Formularz wykorzystuje do swojego prawidłowego działania pliki cookies pochodzące od dostawcy systemu newsletterowego MailerLite. Dostawca może uzyskiwać dostęp do informacji gromadzonych w plikach cookies oraz Twojego adresu IP. Informacje te wykorzystywane są w celu zapewnienia prawidłowego działania formularza oraz w celach analitycznych. Możesz wyłączyć pliki cookies związane z newsletterem. W takiej sytuacji nie będziesz w stanie zapisać się do newslettera.</small>
                    </section>
                </div>
            </section>
        )
    }

    if (showCookie) {
        return (
            <section className={styles.cookie_card}>
                <span className={styles.title}>🍪 Informacja o plikach cookie</span>
                <p className={styles.description}>Używamy plików cookie, aby zapewnić najlepszą jakość korzystania z naszej witryny. <Link href="/polityka-prywatnosci" rel="noreferrer noopener">Przeczytaj politykę plików cookies</Link>.</p>
                <section className={styles.actions}>
                    <button className={styles.pref} onClick={handleClickPref}>
                        Zarządzaj swoimi preferencjami
                    </button>
                    <button className={styles.accept} onClick={handleClickAccept}>
                        Akceptuj
                    </button>
                </section>
            </section>
        )
    }
    return null
}
