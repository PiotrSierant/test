import styles from './ComponentWhatFindCategory.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
export const ComponentMealInfo = ({ title, recipe }: { title: string, recipe: string[] }) => {
    return <section className={styles.endoEbookMealCard}>
        <h3 data-aos="fade-up">{title}</h3>
        <ul>
            {recipe.map((element, index) => {
                return <li key={index} data-aos="fade-up">
                    <FontAwesomeIcon icon={faCircle} style={{ color: '#be3760' }} width={8} />
                    <p>{element}</p>
                </li>
            })}
        </ul>
    </section>
}