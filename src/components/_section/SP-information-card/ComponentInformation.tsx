import styles from './ComponentInformation.module.scss';
import { ComponentCard } from '../../_basic/card-inforamtion/ComponentCardInformation';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Layout } from '../layout/ComponentLayout';
interface CardItemProp {
    cards: {
        icon: IconProp;
        title: string;
        description: string;
    }[];
}
export const ComponentInformation = ({ cards }: CardItemProp) => {
    return (
        <Layout id={"information"} bg={styles.endoCards} extendWrapper={styles.endoCardsWrapper} >
            {cards.map((element, index) => {
                const { icon, title, description } = element
                return <ComponentCard key={index} icon={icon} title={title} description={description} />
            })}
        </Layout>
    )
}