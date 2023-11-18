import styles from './ComponentAvailableBadge.module.scss';
import { StockData } from '../../prices';
import classNames from 'classnames';
import { ComponentLoader } from '../../../../_basic/loader/ComponentLoader';
interface propsType {
    seller_id: string;
    stocks: StockData | undefined | error;
}
interface error {
    message: string;
    errors: {
        message: string;
        field: string;
    }[];
}
export const ComponentAvailableBadge = ({ seller_id, stocks }: propsType) => {
    if (!stocks) {
        return null
    }
    if (stocks && stocks instanceof Object && "message" in stocks) {
        return (
            <section className={styles.badge}>
                <p className={styles.noAvailabe}>
                    Wystąpił błąd
                </p>
                <hr className={classNames(styles.noAvailabe, styles.positionLine)} />
            </section>
        )
    }

    if (stocks !== undefined && Array.isArray(stocks)) {
        const acceptedSellerIds = new Set(["wspolpraca-dietetyczna-miesieczna", "wspolpraca-dietetyczna-3-miesieczna", "jednorazowa-konsultacja-dietetyczna", "konsultacja-gold", "konsultacja-premium"]);
        const filteredStocks = stocks.filter(element => acceptedSellerIds.has(element.seller_id))
        return (
            <div>
                {filteredStocks.map(element => {
                    if (seller_id === element.seller_id) {
                        return (
                            <section key={element.seller_id} className={styles.badge}>
                                <p className={element.available_quantity === 0
                                    ? styles.noAvailabe
                                    : styles.available}>
                                    Dostępne: {element.available_quantity}szt.
                                </p>
                                <hr className={classNames(element.available_quantity === 0 ? styles.noAvailabe : styles.available, styles.positionLine)} />
                            </section>
                        )
                    }
                })}
            </div>
        )
    }
    return <section className={styles.loaderWrapper}>
        <ComponentLoader text={"Ładowanie"} />
    </section>
}