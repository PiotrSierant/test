import { ComponentAvailableBadge } from "../ComponentAvailableBadge/ComponentAvailableBadge";
import styles from './ComponentPriceCard.module.scss';
import { PriceItemModel, StockData } from "../../prices";
import { ComponentOldPrice } from "../../../../_basic/old-price/ComponentOldPrice";
import { ComponentButtonCTA } from "../../../../_basic/button-link/ComponentButtonCTA";
import { ComponentCooperationWith } from "../ComponentCooperationWith/ComponentCooperationWith";
import classNames from "classnames";

interface propsType {
    model: PriceItemModel;
    index: number;
    stocks?: StockData | undefined | error;
}
interface error {
    message: string;
    errors: {
        message: string;
        field: string;
    }[];
}
export const ComponentPriceCard = ({ model, index, stocks }: propsType) => {
    const { id, name, items, price, savings, link } = model;

    const disabledButton = () => {
        if (stocks !== undefined && Array.isArray(stocks)) {
            const findProduct = stocks.filter(element => element.seller_id === id)[0];
            return !(findProduct.available_quantity > 0)
        }
        // console.log(stocks && stocks instanceof Object && "message" in stocks)
        // if (stocks && stocks instanceof Object && "message" in stocks) {
        //     return 
        // }
        return false
    }

    const listHTML = items.map((item, i) => {
        if (!item.bullets?.length) {
            return (
                <li key={name + i + index + "non-bullet-item"} className={styles["description-item"]}>
                    {item.text}
                </li>
            );
        }

        const bulletsHTML = item.bullets.map((bullet, i) =>
            <li key={name + i + index + "bullet"} className={styles["description-item-bullet"]}>{bullet.text}</li>);

        return (
            <section key={name + i + index + "bullet-item"}>
                <li className={styles["description-item"]}>{item.text}</li>
                {bulletsHTML}
            </section>
        );
    });

    return (
        <section className={styles.box}>
            <section className={styles["price-card-header"]}>
                <h3 className={styles.title}>{name}</h3>
                {id === 'konsultacja-premium' && <ComponentCooperationWith name={"Michaliną Handzlik"} />}
                {id === 'wspolpraca-dietetyczna-3-miesieczna' && <ComponentCooperationWith name={"Michaliną Handzlik"} />}
                <h4 className={styles.price}>{price}zł</h4>
                {savings && <small className={styles.savings}>oszczędzasz {savings} zł</small>}
                <ComponentOldPrice key={id + link} seller_id={id} target="prices" />
                <ComponentAvailableBadge seller_id={id} stocks={stocks} />
                <section className={classNames(styles["price-card-content"], !stocks && styles.noStock)}>
                    <ul className={styles.description}>
                        {listHTML}
                    </ul>
                </section>
                <ComponentButtonCTA key={id} href={link} ariaLabel={name} text={id === 'stacjonarna-konsultacja' ? 'Umów wizytę' : 'Dodaj do koszyka'} target={'konsultacje'} disabled={disabledButton()} />
            </section>
        </section>
    )
}
