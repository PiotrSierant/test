import { Layout } from "../layout/ComponentLayout";
import styles from './ComponentDenied.module.scss';
import Lottie from 'lottie-react';
// import animation from '../../../assets/lottie-files/access.json';
import animation from '../../../assets/lottie-files/loading-mashrooms.json';

export const ComponentDenied = ({ text }: { text?: string }) => {
    return (
        <Layout id={'no-access'} bg={styles.background} extendWrapper={styles.wrapper}>
            {/* <h4 className={styles.information}>{text || "Brak dostępu! Trwa przekierowanie..."}</h4> */}
            <Lottie animationData={animation} loop={true} autoPlay={true} />
            <h4>{text || "Brak dostępu! Trwa przekierowanie..."}</h4>
        </Layout>
    )
}