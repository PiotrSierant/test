import styles from './ComponentBuyIf.module.scss';
import { ComponentButtonCTA } from '../../_basic/button-link/ComponentButtonCTA';
import { Layout } from '../layout/ComponentLayout';
interface BuyIfProps {
    [key: string]: string;
}
interface EndoEbookConditions {
    map(arg0: (element: string, index: number) => JSX.Element): import("react").ReactNode;
    [index: number]: string;
}
interface EndoEbookProps {
    ifbuy: EndoEbookConditions;
    ifnotbuy: EndoEbookConditions;
}
interface propsBuyIf extends EndoEbookProps {
    buttonProps: BuyIfProps;
}
export const ComponentBuyIf = ({ buttonProps, ifbuy, ifnotbuy }: propsBuyIf) => {
    const { href, ariaLabel, text } = buttonProps;
    return (
        <Layout id={"buyIf"} bg={styles.endoBuyIf} extendWrapper={styles.endoBuyIfWrapper}>
            <section className={styles.listwrapper}>
                <section className={styles.buy}>
                    <h3 data-aos="fade-up">Kup e-book jeśli...</h3>
                    <ul>
                        {ifbuy.map((element, index) => {
                            return <li key={index} data-aos="fade-up">
                                <span>♦</span><p>{element}</p>
                            </li>
                        })}
                    </ul>
                </section>
                <section className={styles.buy}>
                    <h3 data-aos="fade-up">Nie kupuj e-book jeśli...</h3>
                    <ul>
                        {ifnotbuy.map((element, index) => {
                            return <li key={index} data-aos="fade-up">
                                <span>♦</span><p>{element}</p>
                            </li>
                        })}
                    </ul>
                </section>
            </section>
            <ComponentButtonCTA href={href} ariaLabel={ariaLabel} text={text} animate={true} />
        </Layout>
    )
}