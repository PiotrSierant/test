import styles from './ComponentTitle.module.scss';

export const ComponentTitle = ({ title }: { title: string }) => {
    return (
        <section className={styles.titleWrapper}>
            <h2>{title}</h2>
            <hr />
        </section>
    )
}
