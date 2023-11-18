import Link from 'next/link';
import styles from './shopProduct.module.scss';
import { faShoppingBasket, faCoins, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComponentOldPrice } from '../../_basic/old-price/ComponentOldPrice';
import { ComponentButtonCTA } from '../../_basic/button-link/ComponentButtonCTA';

interface productDesc {
    short_code_uri: string;
    name: string;
    short_description: string;
    price: {
        formatted: string;
    };
    seller_id: string;
}
export const ShopProductDesc = ({ short_code_uri, name, short_description, price, seller_id }: productDesc) => {
    return <section className={styles.desc}>
        <section className={styles.infoAndAcction}>
            <p className={styles.price}><FontAwesomeIcon width={15} height={20} icon={faCoins} />{price.formatted}</p>
            <p className={styles.price}><FontAwesomeIcon width={15} height={15} icon={faFilePdf} />Produkt Elektroniczny</p>
            <Link
                href={short_code_uri}
                rel="noopener noreferrer"
                className={styles.knowMore}>
                <FontAwesomeIcon width={15} height={15} icon={faShoppingBasket} />
                Dodaj do koszyka
            </Link>
        </section>

        <ComponentOldPrice seller_id={seller_id} />
        <p className={styles.short_description}>{short_description}</p>
        <ComponentButtonCTA href={short_code_uri} ariaLabel={name} text={'Dodaj do koszyka'} />
    </section>
}