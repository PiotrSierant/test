import styles from './ComponentCards.module.scss';
import { ComponentCard } from './ComponentCard';
import { products } from "../../../forFertility/data";
export const ComponentCards = () => {
    return (
        <section className={styles.wrapperCards}>
            {products.map((element, index) => {
                const { name, price, pricePromo, desc, includes, images, seller_id, href } = element;
                return (
                    <ComponentCard key={index} name={name} price={price} pricePromo={pricePromo} desc={desc} includes={includes} images={images} seller_id={seller_id} href={href} />
                )
            })}
        </section>
    )
}