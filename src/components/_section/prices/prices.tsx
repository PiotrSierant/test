import { useEffect, useState } from "react";
import styles from './prices.module.scss';
import { prices, stationary } from './data';
import { Layout } from '../layout/ComponentLayout';
import { ComponentTitle } from '../../_basic/title-section/ComponentTitle';
import { ComponentInforamtion } from './child/ComponentInforamtion/ComponentInforamtion';
import { ComponentPriceCard } from './child/ComponentPriceCard/ComponentPriceCard';
interface Item {
    text: string;
    bullets?: { text: string }[];
}
export interface PriceItemModel {
    id: string;
    name: string;
    price: number;
    link: string;
    savings?: number;
    items: Item[];
}
export interface Stock {
    seller_id: string;
    available_quantity: number;
}
export interface StockData {
    stocks?: Stock[];
}
interface error {
    message: string;
    errors: {
        message: string;
        field: string;
    }[];
}
export const Prices = () => {
    const [stocks, setStocks] = useState<StockData | error>();
    useEffect(() => {
        const fetchStocks = async () => {
            const response = await fetch("/api/stocks");
            const data = await response.json();
            setStocks(data);
        };
        fetchStocks();
    }, []);
    return (
        <Layout id={"konsultacje"} bg={styles.background}>
            <ComponentTitle title={"Konsultacje"} />
            <ComponentInforamtion />
            <section className={styles["prices-box"]}>
                {prices.map((model, index) => <ComponentPriceCard key={index} model={model} index={index} stocks={stocks} />)}
                {stationary.map((model, index) => <ComponentPriceCard key={model.id} model={model} index={index} />)}
            </section>
        </Layout >
    )
}
