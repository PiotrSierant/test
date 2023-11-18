import styles from './ComponentLoader.module.scss';
export const ComponentLoader = ({ text }: { text: string }) => {
    return (
        <div className={styles.loader}>
            <section className={styles.circleWrapper}>
                <div className={styles.loader__circle} />
                <div className={styles.loader__circle} />
                <div className={styles.loader__circle} />
                <div className={styles.loader__circle} />
                <div className={styles.loader__circle} />
            </section>
            <p>{text}</p>
        </div>
    )
}