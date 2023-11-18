import styles from './ComponentCardInformation.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
interface Card {
    icon: IconProp;
    title: string;
    description: string;
}
export const ComponentCard = ({ icon, title, description }: Card) => {
    return (
        <section className={styles.card} data-aos="fade-up">
            <section className={styles.titleSection}>
                <section className={styles.iconSection}>
                    <FontAwesomeIcon icon={icon} />
                </section>
                <h3>{title}</h3>
            </section>
            <p>{description}</p>
        </section>
    )
}