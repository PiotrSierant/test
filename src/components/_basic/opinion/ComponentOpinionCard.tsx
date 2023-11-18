import styles from './ComponentOpinionCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ComponentOpinionModal } from './ComponentOpinionModal';

interface TypeOpinion {
    author: string;
    stars: number[];
    opinion: string;
    key_op: string;
}
interface TypeOpinionsCard {
    element: TypeOpinion;
    id: number;
}
export const ComponentOpinionsCard = ({ element, id }: TypeOpinionsCard) => {
    const { opinion, author, stars, key_op } = element;
    return (
        <section className={styles.card} data-aos="fade-up">
            <h3 className={styles.author}>
                {author}
            </h3>
            <section className={styles.stars}>
                {stars.map((_: any, index: React.Key | null | undefined) => (
                    <FontAwesomeIcon key={index} icon={faStar} width={10} height={10} />
                ))}
                <small>({stars.length}/{stars.length})</small>
            </section>

            <section className={styles.infos}>
                <p className={styles.description}>
                    {opinion}
                </p>
            </section>
            <ComponentOpinionModal
                key_op={key_op}
                author={author}
                stars={stars}
                opinion={opinion} />
        </section>
    )
}
