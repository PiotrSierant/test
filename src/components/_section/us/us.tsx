import styles from './us.module.scss'
import Image from 'next/image';
import profile from '../../../assets/images/profile/patrycja.png';
import profileMichalina from '../../../assets/images/profile/michalina.png';
import Lottie from 'lottie-react';
import animationData from '../../../assets/lottie-files/line-separator.json'
import classNames from 'classnames';
import { Layout } from '../layout/ComponentLayout';
export const Us = () => {
    const debajl = ['Jestem magistrem dietetyki i pasjonatką pysznego jedzenia. Skończyłam studia na Wydziale Lekarskim Collegium Medicum Uniwersytetu Jagiellońskiego w Krakowie. Interesują się głównie dietetyką hormonalną i oraz dietoterapią wspierającą płodność.', 'W swojej pracy działam kompleksowo. Uważam, że żywienie jest ważne, ale to tylko jeden element układanki, której efektem jest zdrowie ogólne i równowaga hormonalna. Mocno zwracam uwagę na szukanie przyczyn zaburzeń hormonalnych, ponieważ tylko w taki sposób mamy szansę na długotrwały sukces. Obecnie w większości gabinetów ginekologicznych nie ma działania pod przyczynę, a jedynie występuje "maskowanie objawów". Pewnie nie raz już usłyszałaś, że taka Twoja uroda, tak już musi być, musi Pani z tym żyć... Prawie wszystko można ogarnąć, jednak miej tę świadomość, że na to potrzebny będzie czas.', 'Na co dzień łączę teorię z praktyką. Pomogłam już setkom zadowolonych pacjentek przywrócić równowagę hormonalną, czego efektem jest lepsze samopoczucie, wprowadzenie chorób w remisję, czy zajście w upragnioną ciążę.', 'Prywatnie pasjonatka kuchni świata, a w szczególności włoskiej, greckiej i tajskiej, pieszych wędrówek na łonie natury, oraz miłośniczka kwiatów. Marzy mi się domek pod lasem, z dala od tłumu ludzi, w zaciszu, gdzie będę mogła rozkminać o hormonalnych zagwostkach i po prostu odpoczywać.'
    ]
    const debajl2 = ['Jestem dyplomowanym dietetykiem. Ukończyłam studia magisterskie na Uniwersytecie Medycznym we Wrocławiu, a swoje doświadczenie zyskałam dzięki praktykom dietetycznym w trakcie trwania studiów, w pracy jako asystentka dietetyka oraz dzięki swoim indywidualnym współpracom z pacjentkami.', 'Na co dzień wspieram kobiece zdrowie hormonalne – za pomocą odpowiednio dobranej diety staram się w naturalny sposób pomagać z zaburzeniami hormonalnymi. Prowadzę kobiety zmagające się przede wszystkim z PCOS, insulinoopornością, zaburzeniami miesiączkowania, trądzikiem, ale także endometriozą, niedoczynnością tarczycy, Hashimoto, hiperprolaktynemią czy nadwagą. Bardzo chętnie pomogę również tym kobietom, które chciałyby świadomie przygotować swój organizm do ciąży.', ' Prywatnie uwielbiam podróże (szczególnie te organizowane na własną rękę – bez walizek, za to z wielkim plecakiem i głową otwartą na nowe przygody), dobre włoskie jedzenie oraz jogę.']
    return (
        <Layout id={"o-nas"} bg={styles.us}>
            <section className={styles.wrapper}>
                <h1>mgr Patrycja Marszalec</h1>
                <h3>Założycielka marki Zdrowy Sukces</h3>
                <hr />
                <section className={styles.first}>
                    <section className={styles.content}>
                        {debajl.map((element, index) => {
                            return (
                                <p key={index}>
                                    {element}
                                </p>
                            )
                        })}
                    </section>
                    <section className={styles.photo}>
                        <Image
                            src={profile}
                            alt="Zdjęcie profilowe Patrycji"
                            quality={100}
                            width={1400}
                            height={2000}
                            placeholder={"blur"}
                        />
                    </section>
                </section>
                <section className={styles.separator}>
                    <Lottie
                        animationData={animationData}
                        loop={true}
                        autoPlay={true}
                    />
                </section>
                <h5>Mój zespół</h5>
                <h2>Poznaj inne specjalistki:</h2>
                <h1>mgr Michalina Handzlik</h1>
                <hr />
                <section className={classNames(styles.first, styles.second)}>
                    <section className={styles.content}>
                        {debajl2.map((element, index) => {
                            return (
                                <p key={index}>
                                    {element}
                                </p>
                            )
                        })}
                    </section>
                    <section className={styles.photo}>
                        <Image
                            src={profileMichalina}
                            alt="Zdjęcie profilowe Michaliny"
                            quality={100}
                            width={1400}
                            height={2000}
                            placeholder={"blur"}
                        />
                    </section>
                </section>
            </section>
        </Layout>
    )
}