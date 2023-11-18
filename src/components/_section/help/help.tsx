import { Layout } from '../layout/ComponentLayout';
import { ComponentTitle } from '../../_basic/title-section/ComponentTitle';
import styles from './help.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import wykup from '../../../assets/images/icons/wykup.svg';
import wykonaj from '../../../assets/images/icons/wykonaj.svg';
import wypelnij from '../../../assets/images/icons/wypelnij.svg';
import Image from 'next/image';
import imageProfilePatty from '../../../assets/images/profile/patrycja.png';
import imageProfileMichalina from '../../../assets/images/profile/michalina.png';
const helpWith = [
    ['Endometrioza', 'Niskie AMH', 'Niepłodność', 'Brak owulacji', 'Przygotowanie do ciąży', 'Anemia', 'Ciągłe zmęczenie'],
    ['Bolesne miesiączki', 'Mięśniaki macicy', 'PCOS', 'Uporczywy PMS', 'Insulinooporność', 'Hiperandrogenizm', 'Hiperprolaktynemia'],
    ['Choroby tarczycy', 'Choroby autoimmunologiczne', 'Nadwaga', 'Otyłość', 'Niedowaga'],
];

const howLook = [
    {
        title: "Wykup",
        desc: (
            <>
                <span>Wykup konsultację lub współpracę dietetyczną</span>, by uzyskać indywidualne wsparcie i spersonalizowany plan żywieniowy, dopasowany do Twoich celów i potrzeb zdrowotnych.
            </>
        ),
        icon: wykup,
        iconAlt: 'Ikona "wykup"',
    },
    {
        title: "Wypełnij",
        desc: (
            <>
                <span>Wypełnij kwestionariusz zdrowotno-żywieniowy.</span> Ten szczegółowy formularz pomoże nam lepiej poznać Twoje aktualne nawyki żywieniowe, preferencje kulinarne, stan zdrowia oraz cele, jakie chciałabyś osiągnąć. <p>Po opłaceniu konsultacji lub współpracy otrzymasz link do kalendarza i kwestionariusz.</p>
            </>
        ),
        icon: wypelnij,
        iconAlt: 'Ikona "wypełnij"'
    },
    {
        title: "Wykonaj",
        desc: (
            <>
                <span>Wykonaj badania</span>, dzięki nim, będziemy miały kompleksowy obraz Twojego stanu zdrowia. <p>Po opłaceniu konsultacji lub współpracy otrzymasz plik z informacjami na temat niezbędnych badań do wykonania.</p>
            </>
        ),
        icon: wykonaj,
        iconAlt: 'Ikona "Wykonaj"'
    },
];

const specjalist = [
    {
        id: 1,
        name: "Patrycja Marszalec",
        email: "zdrowysukcesdietetyka@gmail.com",
        image: imageProfilePatty,
    },
    {
        id: 2,
        name: "Michalina Handzlik",
        email: "handzlik.michalina@gmail.com",
        image: imageProfileMichalina,
    }
];

export const Help = () => {
    return (
        <Layout id="help" bg={styles.background}>
            <ComponentTitle title={'Przed konsultacją'} />
            <h3 className={styles.subTitle}>Jakie problemy pomagamy rozwiązać?</h3>
            <section className={styles.cardWrapper}>
                {helpWith.map((arr, index) => {
                    return (
                        <section key={index} className={styles.card}>
                            <ul>
                                {arr.map((item, index) => {
                                    return (
                                        <li key={index} className={styles.element}>
                                            <FontAwesomeIcon icon={faCircle} width={6} />
                                            <p>{item}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </section>
                    )
                })}
            </section>
            <h3 className={styles.subTitle}>Jak wygląda współpraca?</h3>
            <section className={styles.cardWrapper}>
                {howLook.map((element, index) => {
                    return (
                        <section key={index} className={styles.card2}>
                            <section className={styles.title}>
                                <Image src={element.icon} width={25} height={25} alt={element.iconAlt} quality={100} />
                                <h5>{element.title}</h5>
                            </section>
                            {element.desc}
                        </section>
                    )
                })}
            </section>
            <h3 className={styles.subTitle}>Prosimy o przesłanie wypełnionego kwestionariusza na odpowiedni adres e-mail</h3>
            <small className={styles.subTitleSmall}>Jeśli współpracujesz z:</small>
            <section className={styles.cardWrapper3}>
                {specjalist.map((element, index) => {
                    return (
                        <section key={index} className={styles.card3}>
                            <section className={styles.title}>
                                <Image src={element.image} width={100} height={100} alt={'Profilowe'} quality={100} />
                                <h5>{element.name}</h5>
                            </section>
                            <p>{element.email}</p>
                        </section>
                    )
                })}
            </section>

        </Layout>
    )
}
