import styles from './ComponentCooperationWith.module.scss';
export const ComponentCooperationWith = ({ name }: { name: string }) => {
    return (
        <small>Konsultacja z dietetyczką
            <span className={styles.savings} style={{ fontSize: '14px' }}>
                &nbsp;{name}
            </span>
        </small>
    )
}