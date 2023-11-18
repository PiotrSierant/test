import styles from './ComponentPircingCard.module.scss';
import { ComponentCard } from '../../_basic/card-pircing/ComponentCardPricing';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Layout } from '../layout/ComponentLayout';
interface Item {
    plan: string;
    title: string;
    image: string;
    listItem: string[];
    price: string;
    promoPrice: string;
    icon: IconProp;
    href: string;
    seller_id: string;
    isPromo: boolean;
}
interface ItemProps {
    items: Item[];
}
export const ComponentPircingCard = ({ items }: ItemProps) => {
    return (
        <Layout id={'packages'} bg={styles.pircingSection} extendWrapper={styles.pircingSectionWrapper}>
            {items.map((element, index) => {
                return (
                    <ComponentCard
                        key={index}
                        plan={element.plan}
                        title={element.title}
                        image={element.image}
                        listItem={element.listItem}
                        price={element.price}
                        promoPrice={element.promoPrice}
                        icon={element.icon}
                        index={index}
                        href={element.href}
                        seller_id={element.seller_id}
                        isPromo={element.isPromo}
                    />
                )
            })}
        </Layout>
    )
}