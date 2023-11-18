import Lottie from 'lottie-react';
import animationData from '../../../assets/lottie-files/not-found.json'
import styles from './notFound.module.scss';
import { ComponentButtonCTA } from '../../_basic/button-link/ComponentButtonCTA';

export const ComponentNotFound = () => {

    return <main className={styles.notfound}>
        <section className={styles.notfoundWrapper}>
            <Lottie animationData={animationData} />
            <h1 className={styles.title}>Strona, której szukasz nie została odnaleziona.</h1>
            <section className={styles.action}>
                <ComponentButtonCTA href={"/"} ariaLabel={"Przejdź do strony głównej"} text={"Strona Główna"} animate={true} />
                <ComponentButtonCTA href={""} ariaLabel={"Przejdź do poprzedniej strony"} text={"Powrót"} useRouterFunc={true} />
            </section>
        </section>
    </main>
}