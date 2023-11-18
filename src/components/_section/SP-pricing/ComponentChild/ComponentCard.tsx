import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import styles from './ComponentCards.module.scss';
import { ComponentButtonCTA } from '../../../_basic/button-link/ComponentButtonCTA';
import Image from 'next/image';
import { ComponentOldPrice } from '../../../_basic/old-price/ComponentOldPrice';

interface PropsType {
    name: string;
    price: number;
    pricePromo: boolean;
    desc: string[];
    includes?: string[];
    images: string;
    seller_id: string;
    href: string;
}

export const ComponentCard = ({ name, price, pricePromo, desc, includes, images, seller_id, href }: PropsType) => {
    return (
        <section className={styles.price_table} data-content={`url(${images})`}>
            <Image src={images} alt={"Zdjęcie produktu"} className={styles.imageBackround} width={700} height={1000} />
            <h5 className={styles.price_inside}>Dla&nbsp;Płodności</h5>
            <header className={styles.price_header}>
                <h3 className={styles.price_title}>{name}</h3>
                <section className={styles.price_value}>
                    {pricePromo ? (
                        <h2><span>{price}zł</span>&nbsp;{pricePromo}zł</h2>
                    ) : (
                        <h2>{price}zł</h2>
                    )}
                </section>
                <ComponentOldPrice seller_id={seller_id} />
            </header>
            <div className={styles.price_list}>
                {includes && <ul className={styles.list_unstyled}>
                    {includes.map((element) => {
                        return (
                            <li key={element} style={{ marginBottom: "0" }}><strong>{element}</strong></li>
                        )
                    })}
                </ul>}
                <ul className={styles.list_unstyled}>
                    {desc.map((element, index) => {
                        return (
                            <li key={index}><FontAwesomeIcon icon={faMinus} width={15} height={15} />{element}</li>
                        )
                    })}
                </ul>
            </div>
            <section className={styles.button}>
                <ComponentButtonCTA href={href} ariaLabel={'Dodaj do koszyka'} text={'Dodaj do koszyka'} />
            </section>
        </section>
    )
}
