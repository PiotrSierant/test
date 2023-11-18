import { Layout } from '../layout/ComponentLayout';
import styles from './ComponentContentTitle.module.scss';
interface contentProps {
    title?: string;
    textArray: string[];
}
interface contentData {
    contentData: contentProps;
}
export const ComponentContentTitle = ({ contentData }: contentData) => {
    const { title, textArray } = contentData;
    return (
        <Layout id={'content'} bg={styles.sandwitchesContent} extendWrapper={styles.sandwitchesContentWrapper}>
            {title && <h2 data-aos="fade-up">{title}</h2>}
            <section className={styles.list}>
                {textArray.map((element, index) => <h3 key={index} data-aos="fade-up">{element}</h3>)}
            </section>
        </Layout>
    )
}