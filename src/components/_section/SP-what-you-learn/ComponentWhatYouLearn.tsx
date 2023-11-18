import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './ComponentWhatYouLearn.module.scss';
import { ComponentButtonCTA } from '../../_basic/button-link/ComponentButtonCTA';
import { Layout } from '../layout/ComponentLayout';
interface whatYouLearnProps {
    firstPart: string[];
    secondPart: string[];
    href: string;
    ariaLabel: string;
    text: string;
    description: string;
    title: string;
}
interface whatYouLearnData {
    whatYouLearnData: whatYouLearnProps;
}
export const ComponentWhatYouLearn = ({ whatYouLearnData }: whatYouLearnData) => {
    const { firstPart, secondPart, href, ariaLabel, text, description, title } = whatYouLearnData;

    return (
        <Layout id={"whatLearn"} bg={styles.WhatYouLearn} extendWrapper={styles.WhatYouLearnWrapper}>
            <h2 data-aos="fade-up">{title}</h2>
            <section className={styles.listwrapper}>
                <ul className={styles.buy}>
                    {firstPart.map((element, index) => {
                        return <li key={index} data-aos="fade-up">
                            <FontAwesomeIcon icon={faCircleCheck} width={15} className={styles.pink} />
                            <p>{element}</p>
                        </li>
                    })}
                </ul>
                <ul className={styles.buy}>
                    {secondPart.map((element, index) => {
                        return <li key={index} data-aos="fade-up">
                            <FontAwesomeIcon icon={faCircleCheck} width={15} className={styles.pink} />
                            <p>{element}</p>
                        </li>
                    })}
                </ul>
            </section>

            <section className={styles.description}>
                <h4 data-aos="fade-up">{description}</h4>
                <ComponentButtonCTA href={href} ariaLabel={ariaLabel} text={text} color={'dark'} animate={true} />
            </section>
        </Layout>

    )
}