import styles from './ComponentOpinions.module.scss';
import { ComponentOpinionsCard } from './ComponentOpinionCard';
import { Layout } from '../../_section/layout/ComponentLayout';
interface TypeOpinion {
    author: string;
    stars: number[];
    opinion: string;
    key_op: string;
}
interface TypeOpinionsCard {
    title: string;
    opinions: TypeOpinion[];
}
export const ComponentOpinions = ({ opinions, title }: TypeOpinionsCard) => {
    return <Layout id={"opinions"} bg={styles.options} extendWrapper={styles.optionsWrapper}>
        <h2 data-aos="fade-up">{title}</h2>
        <section className={styles.opinionSection}>
            {opinions.map((element, index) => (
                <ComponentOpinionsCard key={index} element={element} id={index} />
            ))}
        </section>
    </Layout>

}
