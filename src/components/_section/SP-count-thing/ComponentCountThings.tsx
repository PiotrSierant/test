import styles from './ComponentCountThings.module.scss';
import { ComponentCountCard } from '../../_basic/card-count/ComponentCountCard';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Layout } from '../layout/ComponentLayout';
interface Card {
    icon: IconProp;
    count: number;
    title: string;
}
interface CountThingData {
    title: string;
    subtitle: string;
    cards: Card[];
}
interface ItemProps {
    countThingData: CountThingData;
}
export const ComponentCountThings = ({ countThingData }: ItemProps) => {
    const { title, subtitle, cards } = countThingData;
    return (
        <Layout id={'countThings'} bg={styles.endoCount} extendWrapper={styles.endoCountWrapper}>
            <section className={styles.heading}>
                <h2 data-aos="fade-up">{title}</h2>
                <small data-aos="fade-up">{subtitle}</small>
            </section>

            <section className={styles.counter}>
                {cards.map((element, index) => {
                    const { title, count, icon } = element
                    return <ComponentCountCard key={title + index} count={count} title={title} icon={icon} />
                })}
            </section>
        </Layout>
    )
}