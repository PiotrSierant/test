import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.scss';
import logo from '../../../assets/images/header_logo.png';
import { Layout } from '../layout/ComponentLayout';
export const Footer = () => {
    return (
        <Layout id="stopka" bg={styles.background}>
            <section className={styles.logo}>
                <Image src={logo} alt="logo" priority quality={100} placeholder={"blur"} />
            </section>
            <section className={styles.text}>Zdrowy Sukces | mgr Patrycja Marszalec</section>
            <section className={styles.privacy}>
                <Link href="/polityka-prywatnosci" rel="noreferrer noopener">Polityka prywatności</Link> | <Link href="/regulamin" rel="noreferrer noopener">Regulamin</Link>
            </section>
        </Layout>
    )

}