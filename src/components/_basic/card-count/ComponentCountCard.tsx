import styles from './ComponentCountCard.module.scss';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const ComponentCountCard = ({ count, title, icon }: { count: number, title: string, icon: IconProp }) => {
    return <section className={styles.card} data-aos="fade-up">
        <FontAwesomeIcon icon={icon} />
        <h3>{count}</h3>
        <p>{title}</p>
    </section>
}