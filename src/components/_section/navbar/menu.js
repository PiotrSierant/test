import { faInstagram, faFacebookF, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import logo from "../../../assets/images/header_logo.png";
import Home from '../../../assets/menu/Home.svg';
import Ebooks from '../../../assets/menu/Ebooks.svg';
import Contact from '../../../assets/menu/Contact.svg';
import Us from '../../../assets/menu/Us.svg';
import Cooperation from '../../../assets/menu/Cooperation.svg';
import Shop from '../../../assets/menu/Shop.svg';

export const logoData = {
    id: 1,
    icon: logo.src,
    altIcon: 'Logo marki Zdrowy-Sukces. Kliknij aby przejść na stronę główną',
    title: '',
    href: 'https://zdrowy-sukces.pl/',
    ariaLabel: 'Kliknij w logo i przejdź na stronę główną.'
}
export const socials = [
    {
        id: 2,
        icon: faFacebookF,
        href: 'https://www.facebook.com/dietetykzdrowysukces',
        ariaLabel: 'Kliknij w ikonę i przejdź do profilu na facebook.'
    },
    {
        id: 3,
        icon: faInstagram,
        href: 'https://www.instagram.com/zdrowy_sukces/',
        ariaLabel: 'Kliknij w ikonę i przejdź do profilu na Instagramie.'
    },
    {
        id: 4,
        icon: faTiktok,
        href: 'https://www.tiktok.com/@diet.zdrowy.sukces?is_from_webapp=1&sender_device=pc',
        ariaLabel: 'Kliknij w ikonę i przejdź do profilu na Tiktok.'
    },
]
export const menu = [
    {
        id: 13,
        icon: Home.src,
        title: 'Strona główna',
        href: '/',
        ariaLabel: 'Przejdź do strony głównej.',
        subMenu: [],
    },
    {
        id: 5,
        icon: Ebooks.src,
        title: "Ebook'i",
        href: '',
        ariaLabel: 'Rozwijane menu.',
        subMenu: [
            {
                id: 6,
                icon: faMinus,
                title: 'Endo e-book',
                href: '/endo-ebook',
                ariaLabel: "Przejdź do strony z EndoEbook'iem",
                isNew: false,
            },
            {
                id: 7,
                icon: faMinus,
                title: 'Przeciwzapalne kanapki',
                href: '/przeciwzapalne-kanapki-i-tosty',
                ariaLabel: 'Przejdź do strony z ebookiem "Przeciwzapalne kanapki i tosty"',
                isNew: false,
            },
            {
                id: 14,
                icon: faMinus,
                title: 'Diety dla płodności',
                href: '/dieta-dla-plodnosci',
                ariaLabel: 'Przejdź do strony "Droga do płodności - Kompendium i dieta"',
                isNew: true,
            },
            {
                id: 8,
                icon: faMinus,
                title: 'Darmowy e-book',
                href: '/#newsletter',
                ariaLabel: 'Przejdź do sekcji darmowy e-book',
                isNew: false,
            },
        ]
    },
    {
        id: 9,
        icon: Contact.src,
        title: 'Kontakt',
        href: '/#contact',
        ariaLabel: 'Przejdź do sekcji "Kontakt".',
        subMenu: [],
    },
    {
        id: 10,
        icon: Us.src,
        title: 'O nas',
        href: '/o-nas',
        ariaLabel: 'Przejdź do sekcji "O nas".',
        subMenu: [],
    },
    {
        id: 11,
        icon: Cooperation.src,
        title: 'Konsultacje',
        href: '/#help',
        ariaLabel: 'Przejdź do sekcji "Konsultacje".',
        subMenu: [],
    },
    {
        id: 12,
        icon: Shop.src,
        title: 'Sklep',
        href: '/sklep',
        ariaLabel: 'Przejdź do sekcji "Sklep".',
        subMenu: [],
    },
]