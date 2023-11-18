import Image from 'next/image';
import Link from 'next/link';
import styles from "./ComponentCardProduct.module.scss";
import { ComponentOldPrice } from '../old-price/ComponentOldPrice';
import { ComponentButtonCTA } from '../button-link/ComponentButtonCTA';
import { shimmer } from '../../../helpers/shimmer';
import { toBase64 } from '../../../helpers/toBase64';
import classnames from 'classnames';
interface Product {
    name: string;
    url: string;
    img: string;
    seller_id: string;
    price: string;
}

export const ComponentCardProduct = ({ name, url, img, price, seller_id }: Product) => {
    let newItems = [
        'diety-i-kompendium-w-nieplodnosci-kobiet-i-mezczyzn',
        'diety-wspierajace-plodnosc-kobiet-i-mezczyzn',
        'dieta-i-kompendium-w-nieplodnosci-kobiet',
        'dieta-i-kompendium-w-nieplodnosci-mezczyzn',
        'dieta-wspierajaca-plodnosc-kobiet',
        'dieta-wspierajaca-plodnosc-mezczyzn'
    ];
    return (
        <section className={classnames(styles.section, newItems.includes(seller_id) && styles.newItem)} data-aos="fade-up">
            <Link href={`/pl/sklep/${seller_id}`} aria-label={name} className={styles.link} rel="noreferrer noopener">
                <Image
                    src={img}
                    alt={name}
                    width={175}
                    height={230}
                    className={styles.images}
                    quality={100}
                    placeholder={'blur'}
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(175, 230))}`}
                />
                <div className={styles.overlay}>
                    <button className={styles.cta}>
                        <span aria-hidden="true">Sprawdź produkt</span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>
                </div>
            </Link>
            <p aria-hidden="true">{price}</p>
            <ComponentOldPrice seller_id={seller_id} target={'card'} />
            <h3>{name}</h3>
            <ComponentButtonCTA href={url} ariaLabel={name} animate={false} target={'konsultacje'} text={'Dodaj do koszyka'} />
        </section>
    )
}