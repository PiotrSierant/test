import classnames from 'classnames';
import styles from '../ComponentPricing.module.scss';
export const ComponentTitle = () => {
    return (
        <section className={classnames(styles.text_center, styles.wrapper)}>
            <div className={styles.section_title}>
                <div className={styles.title_effect}>
                    <div className={classnames(styles.bar, styles.bar_top)} />
                    <div className={classnames(styles.bar, styles.bar_right)} />
                    <div className={classnames(styles.bar, styles.bar_bottom)} />
                    <div className={classnames(styles.bar, styles.bar_left)} />
                </div>
                <h6>Dieta i kompendium w niepłodności</h6>
                <h2 className={styles.title}>Wybierz opcję dla siebie</h2>
                <p>Przed Tobą różnorodność wariantów i opcji dostępnych dla moich produktów. Znajdź idealną konfigurację, która spełni Twoje potrzeby i preferencje. Oto możliwości, które masz do wyboru:</p>
            </div>
        </section>
    )
}