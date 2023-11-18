/* required icon */
import { faWheatAwnCircleExclamation, faCheese, faFish, faDrumstickBite, faBook, faBrain, faCircleQuestion, faReceipt } from '@fortawesome/free-solid-svg-icons';
/* photo */
import iconBreakfast from '../../assets/images/endoPhoto/icons/breakfast.svg';
import iconDessert from '../../assets/images/endoPhoto/icons/dessert.svg';
import iconDinner from '../../assets/images/endoPhoto/icons/dinner.svg';
import iconSupper from '../../assets/images/endoPhoto/icons/supper.svg';
import breakfast from '../../assets/images/endoPhoto/desktop/breakfast.jpg';
import dinner from '../../assets/images/endoPhoto/desktop/dinner.jpg';
import supper from '../../assets/images/endoPhoto/desktop/supper.jpg';
import dessert from '../../assets/images/endoPhoto/desktop/dessert.jpg';
import endo_photo from '../../assets/images/endoPhoto/desktop/endo_desktop.png';
import profile_photo from '../../assets/images/endoPhoto/desktop/profile_desktop.jpg';
import profile2_photo from '../../assets/images/endoPhoto/desktop/profile2_desktop.jpg'
/* Component Opinions */
export const opinionsData = {
    title: 'Co mówią o ENDO e-BOOKu?',
    opinions: [{
        opinion: 'Po zdiagnozowaniu endometriozy, pierwszymi sugestiami lekarza były: dieta przeciwzapalna, suplementacja i zmiana stylu życia. Łatwo powiedzieć, trudniej zrobić 🙂 Kilkudniowe przeszukiwanie Internetu niespecjalnie przybliżyło mnie do konkretnej wiedzy na ten temat. Mnogość pewnych informacji mnie przytłoczyła. ENDO e-book to był strzał w dziesiątkę. Znalazłam tam wszystkie informacje jak powinno wyglądać moje żywienie, co powinnam wykluczyć a co niekoniecznie. Początkowo gotowałam tylko podane przepisy: proste, szybkie i bez zastanawiania się. Z czasem dzięki piramidzie żywieniowej z zaleceniami zaczęłam sama układać kilkudniowe jadłospisy. A w najnowszej aktualizacji e-booka najbardziej spodobał mi się protokół suplementacyjny wraz z konkretnymi produktami - kto by to wiedział jakiej firmy, z jakim składem i w jakiej dawce wybrać? 🙂. Polecam gorąco!',
        author: 'Katharina Kuroczik',
        stars: [1, 1, 1, 1, 1],
        key_op: "KK_1",
    },
    {
        opinion: 'Dieta nigdy nie kojarzyła mi się dobrze. Same wyrzeczenia i brak przyjemności z jedzenia. Endo wymusza wprowadzenie sporych zmian żywieniowych, ale posiłki proponowane w ENDO eBOOKu pokazują, że będąc na diecie przeciwzapalnej nie tylko jesz ale odżywiasz swój wymagający organizm. Nigdy nie jadłam bardziej wymyślnie, kolorowo i różnorodnie jak teraz. Wskazówki zawarte w ENDO eBOOKu nauczyły mnie komponować szybkie i proste posiłki, a niektóre początkowo zaskakujące połączenia smakowe trafiły w nasz gust. Nasz, bo użytkownikiem ENDO eBOOKa jestem razem z mężem 🙂. I oczywiście duży plus za szatę graficzną! Każdy wzrokowiec doceni, bo przecież je się oczami.',
        author: 'Anna Wyrobisz-Papiewska',
        stars: [1, 1, 1, 1, 1],
        key_op: "AWP_2",
    }]
}
/* ComponentBuyIf */
export const buttonProps = {
    href: 'https://1ct.eu/VK0v',
    ariaLabel: 'Kupuję endo e-booka',
    text: 'Kupuję endo e-booka',
}
export const ifbuy = ['Masz stwierdzoną lub podejrzewasz, że masz endometriozę, adeniomiozę',
    'Masz bardzo bolesne miesiączki i szukasz pomocy na złagodzenie bólu',
    'Chcesz mieć gotowe strategie żywieniowe i suplementacyjne',
    'Doświadczasz niepłodności, braku owulacji',
    'Chcesz wreszcie się sobą zaopiekować',
    'Cenisz sobie skuteczne rozwiązania',
    'Jesteś gotowa na życie bez bólu',
    'Chcesz być bardziej świadoma i chcesz odżywiać się zdrowiej'
]
export const ifnotbuy = ['Nie chcesz poświęcać czasu na wdrożenie zawartych w nim wskazówek',
    'Nie jesteś pewna, że wiedza w e-booku może Ci pomóc',
    'Nie interesuje Cię temat zdrowia w endometriozie i zaburzeniach hormonalnych'
]
/* ComponentFAQ */
export const faqData = {
    title: "",
    rows: [
        {
            title: <h4>Kiedy otrzymam e-booka?</h4>,
            content: <p>E-booka otrzymasz na adres email podany w zamówieniu zaraz po dokonaniu płatności.</p>
        }, {
            title: <h4>Czy mogę wydrukować e-book?</h4>,
            content: <p>Tak, ale jedynie na swój użytek. Nie możesz kopiować i rozpowszechniać tego e-booka, ponieważ jest on objety prawami autorskimi.</p>
        }, {
            title: <h4>Czy w e-booku są przepisy z mięsem?</h4>,
            content: <p>Tak, w e-booku jest 4 przepisy z mięsem. Zawsze możesz wymienić je na strączki lub ryby.</p>
        }, {
            title: <h4>Czy w e-booku podane są konkretne suplementy diety?</h4>,
            content: <p>Tak. Chciałam Ci ułatwić wybór i oszczędzić czas. Umieściłam polecane suplementy  oraz konkretne dawki suplementów.</p>
        }, {
            title: <h4>Mam inne pytania. Jak mogę się z Tobą skontaktować?</h4>,
            content: <p>Jeśli masz inne pytania, wyślij wiadomość na adres <span>zdrowysukcesdietetyka&#64;gmail.com</span> lub skorzystaj z formularza na stronie “Kontakt”.</p>
        }
    ],
};
/* ComponentCountThings */
export const countThingData = {
    title: 'E-book zawiera 68 przepisów',
    subtitle: 'które nie powtarzają się w moich innych dietach przeciwzapalnych. Możesz rozszerzyć swoje menu o kolejne potrawy.',
    cards: [
        {
            icon: faWheatAwnCircleExclamation,
            count: 43,
            title: 'przepisy bezglutenowe',
        },
        {
            icon: faCheese,
            count: 38,
            title: 'przepisów bez nabiału',
        },
        {
            icon: faFish,
            count: 9,
            title: 'przepisów z rybą',
        },
        {
            icon: faDrumstickBite,
            count: 4,
            title: 'przepisy z mięsem',
        }
    ]
}
/* ComponentContentMoreInformation */
export const contentData = {
    textArray: ['Jeśli szukasz sposobów na złagodzenie bólu w trakcie miesiączki, owulacji czy współżycia, to jesteś we właściwym miejscu.', 'Jeśli walczysz z niepłodnością i słyszysz, że szanse na naturalną ciążę są niewielkie.', 'Jeśli marzysz, aby uniknąć kolejnej kosztownej operacji.', 'To i wiele innych korzyści możesz zyskać "tylko i aż" właściwą dietą, suplementacją i zmianą szeroko pojętego stylu życia.'],
    href: '#information',
    callToAction: 'O CZYM KONKRETNIE JEST E-BOOK?',
    ariaLabel: 'Przejdź do szczegółowych informacji o produkcie"',
}
/* ComponentWhatYouLearn */
export const whatYouLearnData = {
    firstPart: ['Przeczytasz historie kobiet chorujących na Endometriozę, których zmiana nawyków żywieniowych poprawiła komfort życia', 'Poznasz wszystkie zasady dotyczące diety, suplementacji i stylu życia', 'Otrzymasz gotowy protokół suplementacyjny', 'Otrzymasz propozycję konkretnych suplementów, które warto wybrać (ze sprawdzonym składem)', 'Jak powinna wyglądać wizyta u fizjoterapeutki uroginekologicznej'],
    secondPart: ['Jak ważna jest psychoterapia podczas diagnozy Endometriozy i Niepłodności', 'Otrzymasz 68 przepisów na śniadania, obiady, kolacje i desery wraz z pieknymi fotografiami, które zachęcą Cię do gotowania zdrowiej', 'Przy przepisach zawarłam dokładną kaloryczność potraw, ilość białka, tłuszczów i węglowodanów oraz przydatne wskazówki', 'Będziesz mogła wrócić do badań, z których korzystałam tworząc e-book - piśmiennictwo'],
    href: 'https://1ct.eu/VK0v',
    ariaLabel: 'Kupuję endo e-booka',
    text: 'Kupuję endo e-booka',
    description: 'W tym e-booku rozwiewam wszystkie wątpliwości dotyczące wpływu diety, aktywności, snu, stresu i suplmentacji na Endometriozę, obalam popularne mity na temat żywienia i daję Ci solidne informacje oparte o badania i moje doświadczenie.',
    title: 'Czego dowiesz się z tego e-booka?',
}
/* ComponentWhatFind */
export const whatFindData = {
    title: 'Przykłady przepisów, które znajdziesz w e-booku',
    contentInfo: [
        {
            title: 'ŚNIADANIA',
            icon: iconBreakfast,
            altTextIcon: "ikona śniadania",
            recipe: ['Włoski omlet z pekanami', 'Jaglanka waniliowa z owocami', 'Zimna owsianka z musem z mango', 'Łosoś w puszystym omlecie', 'Pasta z zielonego groszku', 'Orkiszowe naleśniki tiramisu', 'Racuchy z guacamole i jajkiem', 'Dutch baby z jabłkiem i jeżynami'],
            desktop: breakfast.src,
        },
        {
            title: 'OBIADY',
            icon: iconDinner,
            altTextIcon: "ikona obiadu",
            recipe: ['Łosoś na puree marchewkowym', 'Pizza red velvet z zielonym pesto', 'Pierogi orkiszowe z soczewicą', 'Frytki z surówką i kurczakiem', 'Bowl warzywny z halloumi', 'Naleśniki z serkiem kozim i porem', 'Pizza z kalafiora z czerwonym pesto', 'Kurczak po wietnamsku z surówką'],
            desktop: dinner.src,
        },
        {
            title: 'KOLACJE',
            icon: iconSupper,
            altTextIcon: "ikona kolacji",
            recipe: ['Brokułowa sałatka z sosem koperkowym', 'Placki z salsą z mango i wędzonym łososiem', 'Podpłomyki z serkiem kozim', 'Muffiny szpiankowe z marchewką', 'Sałatka z halloumi i świeżymi warzywami', 'Placki z cukinii z makrelą i dipem', 'Wege wrap z surówką i tofu', 'Pasztet z ciecierzycy i pieczarek'],
            desktop: supper.src,
        },
        {
            title: 'DESERY',
            icon: iconDessert,
            altTextIcon: "ikona deseru",
            recipe: ['Tort z kremem waniliowym', 'Praliny winogrono-czekolada', 'Szarlotka na mące jaglanej', 'Rogaliki orkiszowe z czekoladą', 'Sernik pistacjowy z truskawkami', 'Ciasto cytrynowe z cukinią i lukrem', 'Tiramisu z domowymi biszkoptami', 'Czekoladowe ciasto na zimno', 'Marchewkowe muffiny gryczane', 'Domowe żelki o smaku mango'],
            desktop: dessert.src,
        },
    ]
}
/* ComponentInformation */
export const informationData = {
    cards: [
        {
            icon: faBrain,
            title: 'Skrypt merytoryczny',
            description: `Dowiesz się czym jest Endometrioza, jak ją diagnozować, co powinnaś zmienić w diecie (co wprowadzić do diety, a niekoniecznie wykluczyć), jak powinna wyglądać podstawowa i dodatkowa suplementacja wraz z dawkami i przedstawieniem konkretnych suplementów.`,
        },
        {
            icon: faReceipt,
            title: '68 przepisów',
            description: `W e-booku znajdziesz 68 przepisów na proste, smaczne i szybkie dania o charakterze przeciwzapalnym. Receptury to pomysły na śniadania, obiady, kolacje i desery, które zawieraja oznaczenia: bezglutenowe, bez nabiału, z rybą i z mięsem. Większość przepisów jest bezglutenowa i bez nabiału. Dlaczego nie wszystkie? Bo z reguły wcale takie nie muszą być! Nie musisz stosować ścisłej diety eliminacyjnej w Endometriozie.`,
        },
        {
            icon: faBook,
            title: 'Ponad 200 stron wiedzy i przepisów!',
            description: `E-book napisałam na podstawie najnowszych badań oraz mojego 3 letniego doświadczenia w pracy z pacjentkami z zaburzeniami hormonalnymi. Nic nie da takich efektów jak jak połączenie nauki i podejścia praktycznego.
            `,
        },
        {
            icon: faCircleQuestion,
            title: 'Wskazówki od innych ekspertów',
            description: `W e-booku znajdziesz przydatne wskazówki od fizjoterapeutki uroginekologicznej w tym jak przygotować się do wizyty, oraz jak pracować z oddechem w Endometriozie. W e-booku nie zabrakło również informacji na temat wsparcia psychologicznego w chorobie - okiem psychologa specjalizującego się w zaburzeniach hormonalnych i endometriozie.`,
        },
    ]
}

/* Header data */
export const headerData = {
    idSection: 'header',
    smallText: 'ODZYSKAJ KONTROLĘ NAD ENDOMETRIOZĄ',
    title: 'Pomogę Ci odzyskać życie bez bólu, nawet jeśli do tej pory nie wyobrażałaś sobie, że będzie to jeszcze możliwe',
    description: ['Dzięki e-Bookowi szczegółowo dowiesz się jak powinno wyglądać żywienie i suplementacja w Endometriozie oraz w niepłodności związanej z tą chorobą.'],
    firstButton: {
        href: '#content',
        text: 'Sprawdź szczegóły',
        ariaLabel: 'Sprawdź szczegóły produktu Endo E-book',
    },
    secondButton: {
        href: '#packages',
        text: 'Sprawdź pakiety',
        ariaLabel: 'Sprawdź pakiety z Endo E-bookiem',
    },
    images: {
        desktop: endo_photo.src,
    }
}
/* Header data -> dlaczego stworzyłam ten ebook */
export const whyMadeData = {
    idSection: 'whyMade',
    smallText: 'DLACZEGO STWORZYŁAM TEN EBOOK?',
    description: ['Wiem jak ogromną moc w Endometriozie ma odpowiednie odżywianie i dostosowana suplementacja. Mimo, że wiedza na ten temat jest coraz większa, niestety krąży wiele mitów.', 'Moją misją jest, aby każda endowojowniczka w pierwszej kolejności zadbała o podstawy takie jak dieta i zmiana stylu życia. To aż 50 % sukcesu!', 'Wiem, że na początku może być trudno, ale wyobraź sobie jaki możesz mieć komfort włączając odżywcze produkty do diety zamiast wykluczać kolejne grupy produktów (które lubisz i nie wyobrażasz sobie ich nie jeść do końca życia).'],
    reverse: true,
    images: {
        desktop: profile_photo.src,
        clipPathImage: true,
    }
}
/* Header data -> Kto stworzył EndoEbook? */
export const whoMadeData = {
    idSection: 'whoMade',
    smallText: 'Kto stworzył EndoEbook?',
    heading: 'mgr Patrycja Marszalec',
    description: ['Dietetyczka kliniczna, specjalistka dietetyki hormonalnej, magister  dietetyki na Collegium Medicum Uniwersytetu Jagiellońskiego, twórczyni diet przeciwzapalnych, pasjonatka jedzenia. Na co dzień łączę teorię z praktyką.  Pomogłam już setkom zadowolonych pacjentek przywrócić równowagę hormonalną, czego efektem jest lepsze samopoczucie, wprowadzenie chorób w remisję, czy zajście w upragnioną ciążę.  Prywatnie pasjonatka kuchni świata, a w szczególności włoskiej, greckiej i tajskiej, pieszych wędrówek na łonie natury, oraz miłośniczka kwiatów.'],
    images: {
        desktop: profile2_photo.src,
        clipPathImage: true,
    }
}