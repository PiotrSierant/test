import { Layout } from "../layout/ComponentLayout";
import styles from './ComponentYouAreLogged.module.scss';
export const ComponentYouAreLogged = ({ text }: { text: string }) => {
    return (
        <Layout id={"Zalogowany"} bg={styles.background} extendWrapper={styles.wrapper}>
            <h1 className={styles.information}>Jesteś już {text}</h1>
        </Layout>
    )
}