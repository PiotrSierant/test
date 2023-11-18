import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "next/image";
import styles from './ComponentCardPricing.module.scss';
import classNames from 'classnames';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ComponentOldPrice } from '../old-price/ComponentOldPrice';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { ComponentButtonCTA } from '../button-link/ComponentButtonCTA';
import { shimmer } from '../../../helpers/shimmer';
import { toBase64 } from '../../../helpers/toBase64';
interface Item {
    plan: string;
    title: string;
    image: string;
    listItem: string[];
    price: string;
    promoPrice: string;
    isPromo: boolean;
    icon: IconProp;
    index: number;
    href: string;
    seller_id: string;
}
export const ComponentCard = ({ plan, title, image, listItem, price, promoPrice, icon, index, href, seller_id, isPromo }: Item) => {
    return (
        <article className={classNames(styles.card__content, styles.grid, index === 1 && styles.card_avg_one, index === 2 && styles.card_avg_two)} data-aos="fade-up">
            {isPromo && <section className={styles.card__pricing}>
                <section className={classNames(styles.card__pricing_number)}>
                    {promoPrice}<span className={styles.card__pricing_symbol}>zł</span>
                </section>
            </section>
            }
            {isPromo && <div className={styles.card__pricing_t}></div>}
            <header className={styles.card__header}>
                <span className={styles.card__header_subtitle}>{plan}</span>
                <div className={styles.card__header_circle}>
                    <FontAwesomeIcon icon={icon} width={30} height={30} />
                </div>
                <Image src={image} alt={`Zdjęcie produktu`} width={200} height={200} priority quality={100} placeholder={'blur'}
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1414, 2000))}`} />
                <h1 className={styles.card__header_title}>{title}</h1>
            </header>
            <section className={styles.price__section}>
                {isPromo
                    ? <h4 className={styles.price__section__head}>{price}</h4>
                    : <h4 className={styles.price__secrion__head__no__promo}>{price}</h4>
                }
                <ComponentOldPrice seller_id={seller_id} />
            </section>
            <ul className={classNames(styles.card__list, styles.grid)}>
                {listItem.map((element, index) => {
                    return <li key={element + index} className={styles.card__list_item}>
                        <FontAwesomeIcon icon={faCircleCheck} width={15} height={15} />
                        <p className={styles.card__list_description}>{element}</p>
                    </li>
                })}
            </ul>
            <section className={styles.buttonSection}>
                <ComponentButtonCTA href={href} ariaLabel={''} text={'Dodaj do koszyka'} animate={false} />
            </section>
        </article>
    )
}