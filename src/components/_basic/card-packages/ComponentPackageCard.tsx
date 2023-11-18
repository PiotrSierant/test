import Image from 'next/image';
import styles from './ComponentPackageCard.module.scss';
import Link from 'next/link';
import { Package } from '../../../../pages/endo-ebook';
import { ComponentButtonCTA } from '../button-link/ComponentButtonCTA';
import { ComponentOldPrice } from '../old-price/ComponentOldPrice';
import { shimmer } from '../../../helpers/shimmer';
import { toBase64 } from '../../../helpers/toBase64';
export const ComponentPackageCard = ({ name, image, price, seller_id, short_code_uri }: Package) => {
    return <section className={styles.card} data-aos="fade-up">
        <Link href={`/pl/sklep/${seller_id}`} aria-label={name} className={styles.link} rel="noreferrer noopener">
            <Image src={image} alt={name} width={175} height={230} className={styles.images} quality={100} placeholder={'blur'}
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(175, 230))}`} />
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
        <section className={styles.description}>
            <p aria-hidden="true">{price.formatted}</p>
            <ComponentOldPrice seller_id={seller_id} target={'card'} />
            <h3 className={styles.name}>{name}</h3>
        </section>
        <section className={styles.ctaSection}>
            <ComponentButtonCTA href={short_code_uri} ariaLabel={name} animate={false} text={'Dodaj do koszyka'} />
        </section>
    </section>
}