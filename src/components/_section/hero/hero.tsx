import { TypeAnimation } from 'react-type-animation';
import { Layout } from '../layout/ComponentLayout';
import styles from './hero.module.scss';
import Link from 'next/link';
export const Hero = () => {
    return (
        <Layout id={'hero'} bg={styles.background}>
            <section className={styles.wrapper}>
                <h1>Zdrowy Sukces</h1>
                <section className={styles.dancing}>Konsultacje - Ebooki - Diety</section>
                <TypeAnimation
                    aria-hidden="true"
                    aria-label="​Zapraszam na indywidualne konsultacje, które pozwolą Ci wprowadzić dobre nawyki żywieniowe i poprawić jakość życia. ​Sięgnij po moje specjalistyczne e-booki, które pomogą Ci zadbać o Twoje zdrowie. Odkryj gotowe diety i cenne porady, które wspierają równowagę hormonalną. Odzyskaj równowagę hormonalną, popraw komfort życia w endometriozie i zwiększ swoje szanse na sukces w drodze do macierzyństwa."
                    preRenderFirstString={true}
                    wrapper={'h2'}
                    sequence={[
                        '​Zapraszam na indywidualne konsultacje, które pozwolą Ci wprowadzić dobre nawyki żywieniowe i poprawić jakość życia.',
                        5000,
                        '​Sięgnij po moje specjalistyczne e-booki, które pomogą Ci zadbać o Twoje zdrowie. Odkryj gotowe diety i cenne porady, które wspierają równowagę hormonalną.',
                        4000,
                        'Odzyskaj równowagę hormonalną, popraw komfort życia w endometriozie i zwiększ swoje szanse na sukces w drodze do macierzyństwa.',
                        3000,
                    ]}
                    speed={40}
                    deletionSpeed={99}
                    repeat={0}
                />
                <section className={styles.actionWrapper}>
                    <p>
                        <Link href={"#help"} className="hover-target">Konsultacje</Link>
                        <Link href={"#Social"} className="hover-target">Fotografie</Link>
                        <Link href={"#bestseller"} className="hover-target">Ebooki</Link>
                    </p>
                </section>
            </section>
        </Layout >
    )
}