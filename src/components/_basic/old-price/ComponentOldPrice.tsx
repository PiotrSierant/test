import { oldPrice } from '../../../old_price';
import styles from './ComponentOldPrice.module.scss';
import classNames from 'classnames';
export const ComponentOldPrice = ({ seller_id, target = '' }: { seller_id: string, target?: string }) => {
    const productOldPrice = oldPrice.filter(element => element.seller_id === seller_id)[0]

    return <section className={classNames(styles.small, target !== '' && styles.wrapperOldPrice, target === 'prices' && styles.prices)}>
        <small aria-hidden="true">Najniższa cena w ostatnich 30 dniach: {productOldPrice.old_price}</small>
    </section>
}