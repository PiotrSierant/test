import classNames from 'classnames';
import Link from 'next/link'
import styles from './ComponentShopUrlPath.module.scss'
/* interfejs pathUrl z właściwościami name i seller_id */
interface pathUrl {
    name: string;
    seller_id: string;
}
export const ComponentShopUrlPath = ({ name, seller_id }: pathUrl) => {
    /* dynamiczny adres url */
    const url = `/sklep/${seller_id}`
    return <section className={classNames(name === '' && styles.wrapper, name !== '' && styles.wrapperTwo)}>
        <Link href="/" rel="noreferrer noopener" className={styles.link}>Strona Główna</Link>
        <span className={styles.slash}>/</span>
        <Link href="/sklep" rel="noreferrer noopener" className={styles.link}>Sklep</Link>
        {name !== '' && <span className={styles.slash}>/</span>}
        {name !== '' && <Link href={url} rel="noreferrer noopener" className={styles.link}>{name}</Link>}
    </section>
}