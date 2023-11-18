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
export const ComponentSpisTresci = ({ faqData }: FAQProps) => {
    return (
        <Layout id={"faq"} bg={styles.faq} extendWrapper={styles.faqWrapper}>
            <small className={styles.small} data-aos="fade-up">Sprawdź spis treści i przykładowe posiłki</small>
            <Faq data={faqData} />
        </Layout>
    )
}