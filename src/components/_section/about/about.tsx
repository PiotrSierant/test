import Image from 'next/image';
import { Layout } from '../layout/ComponentLayout';
import styles from './about.module.scss';
import image from '../../../assets/images/profile/ABOUT_PHOTO.png';
import Link from 'next/link';
import PBWA from "../../../assets/images/others/PBWA.png"

export const About = () => {
    return (
        <Layout id={'about'} bg={styles.background} extendWrapper={styles.about}>
            <section className={styles.description}>
                <section className={styles.headerWrapper}>
                    <section className={styles.headerTitle}>
                        <h3>
                            Cześć! Nazywam się
                        </h3>
                        <h2>
                            Patrycja Marszalec
                        </h2>
                        <small>
                            mgr, dietetyk kliniczny, spec. dietetyka hormonalna
                        </small>
                    </section>
                    <Image src={PBWA} alt={"Lider kompleksowej pomocy dietetycznej przywracającej równowagę hormonalną!"} width={630} height={630} quality={100} placeholder={"blur"} />
                </section>

                <article>
                    <p>
                        Witaj na mojej stronie, gdzie znajdziesz moje bestsellerowe e-booki skupiające się na specyficznych wyzwaniach związanych z niepłodnością i endometriozą. Moje e-booki stanowią wyczerpujące źródło wiedzy, zawierające praktyczne porady i rozwiązania, które pomagają Ci zrozumieć i radzić sobie z tymi trudnościami. Wiedza teoretyczna to jedno, ale moją pasją jest pomaganie Ci w praktycznym wdrażaniu tej wiedzy w życie. Dlatego powstały gotowe diety o charakterze przeciwzapalnym, które Cię w tym wesprą.
                    </p>
                    <p>
                        Zapraszam Cię również na mój profil na Instagramie <Link href={"https://www.instagram.com/zdrowy_sukces/"} target="_blank" rel="noopener noreferrer" aria-label="Przejdź do mojego profilu na instagramie.">@zdrowy_sukces</Link>, gdzie znajdziesz mnóstwo wartościowych treści i informacji na temat hormonów oraz radzenia sobie z zaburzeniami hormonalnymi poprzez odpowiednią dietę i styl życia. Odkryjesz tam również wiele ciekawych przepisów na przeciwzapalne dania, które wesprą Twoje codzienne dbanie o zdrowie.
                    </p>
                    <p>
                        Wierzę, że wiedza i wsparcie są kluczem do sukcesu w osiąganiu zdrowia i równowagi hormonalnej. Dlatego oferuję również konsultacje, podczas których dowiesz się wszystkiego, czego potrzebujesz, aby dbać o swoje hormony, wspierać płodność, a także czerpać radość z gotowania i zdrowego odżywiania.
                    </p>
                    <p>
                        Zachęcam Cię, abyś została tu na dłużej i czerpała inspirację z moich treści, e-booków i przepisów. Razem stworzymy przestrzeń, w której zdrowie i dobre samopoczucie będą na pierwszym miejscu. Zapraszam do odkrywania, eksplorowania i rozwijania się razem ze mną!
                    </p>
                </article>
            </section>
            <section className={styles.photo}>
                <Image src={image} alt={"Zdjęcie profilowe - Patrycja Marszalec"} width={800} height={800} quality={100} placeholder={"blur"} />
            </section>
        </Layout>
    )
}