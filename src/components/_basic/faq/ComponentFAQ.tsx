import { Layout } from '../../_section/layout/ComponentLayout';
import styles from './ComponentFAQ.module.scss';
import Faq from 'react-faq-component';
interface FAQData {
    title: string;
    rows: {
        title: JSX.Element;
        content: JSX.Element;
    }[];
}
interface FAQProps {
    faqData: FAQData;
}
export const ComponentFAQ = ({ faqData }: FAQProps) => {
    return (
        <Layout id={"faq"} bg={styles.faq} extendWrapper={styles.faqWrapper}>
            <small className={styles.small} data-aos="fade-up">F.A.Q.</small>
            <h2 data-aos="fade-up">Najczęściej zadawane pytania</h2>
            <p data-aos="fade-up" className={styles.paragraph}>Chcę pomóc Ci w podjęciu decyzji, dlatego zebrałam najczęściej zadawane pytania. Pamiętaj, że zawsze możesz do mnie napisać.</p>
            <Faq data={faqData} />
        </Layout>
    )
}