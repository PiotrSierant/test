/* required icon */
import { faFaceSmileWink, faFaceSmileBeam, faFaceLaughBeam, faCookieBite, faCheese, faFish, faDrumstickBite } from '@fortawesome/free-solid-svg-icons';
/* photo */
import basic from '../../assets/images/sandwitchesPhoto/card/basic.png';
import extend from '../../assets/images/sandwitchesPhoto/card/extend.png';
import premium from '../../assets/images/sandwitchesPhoto/card/premium.png';
import photo01 from '../../assets/images/sandwitchesPhoto/desktop/sandwiches_photo_01.jpg';
import photo02 from '../../assets/images/sandwitchesPhoto/desktop/sandwiches_photo_02.jpg';
import photo03 from '../../assets/images/sandwitchesPhoto/desktop/sandwiches_photo_03.jpg';
import photo04 from '../../assets/images/sandwitchesPhoto/desktop/sandwiches_photo_04.jpg';
import header_desktop from '../../assets/images/sandwitchesPhoto/desktop/header_photo.png';
import profile_desktop from '../../assets/images/sandwitchesPhoto/desktop/sandwitches_profile_desktop.jpg';
import profile2_desktop from '../../assets/images/sandwitchesPhoto/desktop/sandwitches_profile2_desktop.jpg';
/* ComponentPricesCard */
export const items = [
    {
        plan: 'Podstawowy',
        title: 'Przeciwzapalne kanapki i tosty',
        image: basic.src,
        listItem: ['E-Book “Przeciwzapalne kanapki i tosty”', '45 przepisów na kanapki'],
        price: 'Cena regularna 99 zł',
        promoPrice: '69',
        icon: faFaceSmileWink,
        href: 'https://1ct.eu/VOOLD',
        seller_id: 'przeciwzapalne-kanapki-i-tosty',
        isPromo: false,
    },
    {
        plan: 'Rozszerzony',
        title: 'Poprawa płodności',
        image: extend.src,
        listItem: ['E-Book “Przeciwzapalne kanapki i tosty”', '45 przepisów na kanapki', 'E-Book “Dieta przeciwzapalna 1800 kcal – PCOS, IO, Płodność”', '28 przepisów'],
        price: 'Cena regularna 189 zł',
        promoPrice: '159',
        icon: faFaceSmileBeam,
        href: 'https://1ct.eu/RppaR',
        seller_id: 'przeciwzapalne-kanapki-i-tosty-kopia-1',
        isPromo: false,
    },
    {
        plan: 'Premium',
        title: 'Lepsze samopoczucie w Endometriozie',
        image: premium.src,
        listItem: ['E-Book “Przeciwzapalne kanapki i tosty”', '45 przepisów na kanapki', 'ENDO e-BOOK – eBook specjalistyczny dla kobiet z Endometriozą', '68 przepisów', 'Skrypt merytoryczny z którego dowiesz się o żywieniu i suplementacji', 'Protokół suplementacji z konkretnymi preparatami, aby ułatwić Ci wybór', 'Wskazówki fizjoterapeutki uroginekologicznej', 'Wskazówki Psycholog specjalizującej się w Endometriozie i niepłodności'],
        price: 'Cena regularna: 319 zł',
        promoPrice: '289',
        icon: faFaceLaughBeam,
        href: 'https://1ct.eu/mllL5',
        seller_id: 'przeciwzapalne-kanapki-i-tosty-or-endo-e-book',
        isPromo: false,
    },
]
/* ComponentOpinion */
export const opinionsData = {
    title: 'Co mówią o e-booku "Przeciwzapalne kanapki i tosty"?',
    opinions: [
        {
            opinion: 'Tak naprawdę nie wiem od czego zacząć. Ten e-book to po prostu totalne ZŁOTO! Przepisy sprawiają, że proste kanapki stają się TURBO ODŻYWCZĄ propozycją na posiłek dla wszystkich kobiet! Produkty są dobrane w taki sposób, że można dostarczyć sobie z nimi wszystko, to co kochają HORMONY – te kanapki wprost krzyczą: MAM PRZECIWZAPALNY CHARAKTER, ZJEDZ MNIE. Dodatkowo każdy składnik jest dobrany starannie tak, aby komponował się z całością. Nie mówiąc już o zdjęciach! Ten e-book jest po prostu przepiękny, kadry jakie Patrycji udało się złapać to majstersztyk, a szata graficzna jest tak przyjemna dla oka, że trudno się oderwać od przeglądania tego e-booka. To co uważam za ogromny plus to fakt, że Patrycja uwzględniła na początku ogólne wskazówki jak komponować zdrowe kanapki, co powinno się w nich znaleźć oraz na czym powinny bazować – to super pomoc przy próbach komponowania swoich własnych kanapek. Naprawdę polecam tego e-booka z całego serducha. Te przepisy pokazują, że kanapki rzeczywiście mogą mieć MOC i  mogą wspierać gospodarkę hormonalną każdej z Nas.',
            author: 'Michalina Handzlik',
            stars: [1, 1, 1, 1, 1],
            key_op: "MH_1",
        },
        {
            opinion: 'E-book "przeciwzapalne kanapki i tosty" to wspaniałe źródło inspiracji dla każdego, kto chce wprowadzić zdrowe nawyki żywieniowe do swojego życia! Jestem pod wrażeniem talentu i pasji Patrycji. Przepisy są nie tylko zdrowe, ale także bardzo smaczne i oryginalne. Autorka ma wspaniałe podejście do tematu zdrowego stylu życia i dzieli się swoją wiedzą w sposób przystępny i zrozumiały. Gorąco polecam ten ebook każdemu, kto chce zdrowo się odżywiać i czerpać przyjemność z jedzenia!!! 🙃🙃🙃💪',
            author: 'Paulina Kurkowska',
            stars: [1, 1, 1, 1, 1],
            key_op: "PK_2",
        },
        {
            opinion: 'Osobiście bardzo lubię kanapki, ale brakowało mi na nie pomysłu. Chętnie przetestuję nowe przepisy, zwłaszcza że e-book bardzo mi się podoba. Jestem perfekcjonistką i lubię estetycznie wydane e-booki. Myślę, że jest to ogromny krok do poprawy mojego zdrowia, bo przecież prościej się już chyba nie da? Prawda? Podobają mi sie ciekawostki i wskazówki dotyczące zdrowia - fajne dopełnienie! Orzechowe tosty z truskawkami - pycha!',
            author: 'Magdalena Krasowska',
            stars: [1, 1, 1, 1, 1],
            key_op: "MK_3",
        },
        {
            opinion: '"Bardzo duży wybór przepisów, każdy z pewnością trafi na swoje smaki, niesamowicie pysznie wyglądające zdjęcia, które z samego spojrzenia powodują chęć spróbowania! 🙂 Dobrze zaprezentowane składniki żywieniowe, które należy wkomponować do swojej ENDOdiety, całokształt ebooka na najwyższym poziomie.  Polecam!!!"',
            author: 'Agnieszka Kapusta',
            stars: [1, 1, 1, 1, 1],
            key_op: "AK_4",
        },
    ]
}
/* ComponentBuyIf */
export const buttonProps = {
    href: 'https://1ct.eu/VOOLD',
    ariaLabel: 'Kupuję e-booka "Przeciwzapalne kanapki i tosty',
    text: 'Kupuję e-booka',
}
export const ifbuy = [
    'Chcesz zdobyć nowe pomysły na kanapki',
    'Chcesz jeść przeciwzapalnie i czuć się w pełni zdrowa',
    'Cierpisz na Insulinooporność i do tej pory myślałaś, że nie możesz jeść pieczywa',
    'Chorujesz na Endometriozę i chcesz włączyć przeciwzapalne kanapki',
    'Nie chcesz jeść monotonnych posiłków, a brakuje Ci pomysłów na nowe rozwiązania',
    'Jesteś gotowa dołożyć tą cegiełkę, żeby poprawić funkcjonowanie Twoich hormonów',
    'Nie masz czasu na gotowanie czasochłonnych posiłków',
]
export const ifnotbuy = [
    'Nie lubisz kanapek',
    'Nie jesteś gotowa do działania',
    'Nie jesteś pewna, czy chcesz uregulować hormony',
    'Wolisz zażywać masę leków i suplementów',
]
/* ComponentFAQ */
export const faqData = {
    title: "",
    rows: [
        {
            title: <h4>Kiedy otrzymam e-booka?</h4>,
            content: <p>Ebooka otrzymasz na adres email podany w zamówieniu zaraz po dokonaniu płatności.</p>
        }, {
            title: <h4>Czy mogę wydrukować e-book?</h4>,
            content: <p>Tak, ale jedynie na swój użytek. Nie możesz kopiować i rozpowszechniać tego e-booka, ponieważ jest on objety prawami autorskimi.</p>
        }, {
            title: <h4>Czy kanapki sprawdzą się, jeśli mam stwierdzoną insulinooporność?</h4>,
            content: <p>Tak. Kanapki są bardzo dobrze zbilansowane i wszystkie posiadają niski ładunek glikemiczny.</p>
        }, {
            title: <h4>Czy kanapki sprawdzą się, jeśli mam stwierdzoną Endometriozę?</h4>,
            content: <p>Tak. To kolejna cegiełka do tego, aby Twoja dieta miała charakter przeciwzapalny oraz aby wyeliminować niedobory pokarmowe.</p>
        }, {
            title: <h4>Czy kanapki sprawdzą się, jeśli chcę wesprzeć swoją płodność?</h4>,
            content: <p>Oczywiście! To bardzo dobra baza menu. Kanapki są dobrze zbilansowane, posiadają niski ładunek glikemiczny, a składniki charakter przeciwzapalny. Te wszystkie elementy są kluczowe dla wsparcia płodności.</p>
        }, {
            title: <h4>Mam inne pytania. Jak mogę się z Tobą skontaktować?</h4>,
            content: <p>Jeśli masz inne pytania, wyślij wiadomość na adres <span>zdrowysukcesdietetyka&#64;gmail.com</span> lub skorzystaj z formularza na stronie “Kontakt”.</p>
        }
    ],
};
/* ComponentCountThing */
export const countThingData = {
    title: 'E-book zawiera 45 przepisów',
    subtitle: 'które nie powtarzają się w moich innych dietach przeciwzapalnych. Możesz rozszerzyć swoje menu o kolejne potrawy.',
    cards: [
        {
            icon: faCookieBite,
            count: 6,
            title: 'przepisy na słodko',
        },
        {
            icon: faCheese,
            count: 20,
            title: 'przepisów bez nabiału',
        },
        {
            icon: faFish,
            count: 4,
            title: 'przepisów z rybą',
        },
        {
            icon: faDrumstickBite,
            count: 7,
            title: 'przepisy z mięsem',
        }
    ]
}
/* ComponentContentTitle */
export const contentData = {
    title: '“Przeciwzapalne kanapki i tosty” stworzyłam dla osób, które:',
    textArray: ['Chcą odżywiać się zdrowo, ale nie chcą rezygnować z pysznego jedzenia', 'Chcą mieć więcej pomysłów na kanapki', 'Chcą wprowadzić większą różnorodność do swojego menu', 'Chcą zadbać o pracę gospodarki hormonalnej', 'Chcą wyregulować pracę gospodarki węglowodanowej', 'Chcą zadbać o pracę swoich jelit', 'Chcą zadbać o lepsze samopoczucie', 'Nie maja pomysłów na inne kanapki niż kanapka z szynką i serem'],
}
/* ComponentWhatYouLearn */
export const whatYouLearnData = {
    firstPart: ['Jak komponować przeciwzapalne kanapki i tosty', 'Jak powinna wyglądać kanapka, gdy cierpisz na insulinooporność', 'Czym kierować się przy wyborze pieczywa', 'Na co zwracać uwagę przy wyborze pieczywa bezglutenowego'],
    secondPart: ['Poznasz ciekawostki dotyczące produktów i składników odżywczych oraz dowiesz się o ich wpływie na Twoje zdrowie hormonalne i zdrowie ogólne', 'Dowiesz się jak samodzielnie komponować odżywcze i różnorodne kanapki', 'Poznasz 45 przeciwzapalnych przepisów na kanapki'],
    href: 'https://1ct.eu/VOOLD',
    ariaLabel: 'Kupuję e-booka "Przeciwzapalne kanapki i tosty',
    text: 'Kupuję e-booka',
    description: 'W tym e-booku daję Ci wskazówki jak bilansować zdrowe i odżywcze kanapki, które pomogą Ci wesprzeć pracę Twojego organizmu, uregulować tempo wypróżnień, dodać energii. Pokazuję, że kanapka może być szybkim i sycącym posiłkiem, który przy tym wszystkim wspiera płodność.',
    title: 'Czego dowiesz się z tego e-booka?',
}
/* ComponentWhatFind */
export const data = {
    title: 'Przepisy, które znajdziesz w e-booku “Przeciwzapalne kanapki i tosty”?',
    subtitle: 'Przeciwzapalne kanapki',
    sandwiches: [
        '<strong>Śródziemnomorska pajda</strong> z pieczonymi pomidorkami',
        'Kanapka <strong>grilled turkey</strong> z suszonymi pomidorami i domowym pesto',
        'Orzechowe tosty z truskawkami i <strong>cynamonem</strong>',
        '<strong>Azjatycka kanapka</strong> z chrupiącym tofu',
        'Włoski tost z <strong>burattą</strong> i pieczonymi pomidorkami',
        'Łosoś w słodkiej marynacie z halloumi i <strong>pieczarkami</strong>',
        '<strong>Boczniaki w bułce</strong> w ostrej marynacie z indykiem',
        'Tosty francuskie z ricottą i <strong>malinami</strong>',
        '<strong>Burger</strong> z łososiem szparagami i mozzarellą',
        'Avo bułka z <strong>wędzoną makrelą</strong>',
        'I wiele więcej...'
    ],
    splideElement: [{
        title: 'Chlebek z riccottą, truskawkami i pistacją',
        imageDesktop: photo01.src,
    },
    {
        title: 'Twarogowa bułeczka z brunatną pieczarką i orzechami',
        imageDesktop: photo02.src,
    },
    {
        title: 'Bruschietta ze świeżymi pomidorami',
        imageDesktop: photo03.src,
    },
    {
        title: 'Kanapka z serami, awokado i mixem sałat',
        imageDesktop: photo04.src,
    }],
}
/* Header data */
export const headerData = {
    idSection: 'header',
    smallText: '45 POMYSŁÓW NA KANAPKI',
    title: 'E-book “Przeciwzapalne kanapki i tosty” - jedz szybkie i smaczne kanapki, które pomogą Ci osiągnąć równowagę hormonalną.',
    description: ['Znajdziesz w nim przepisy na dobrze zbilansowane kanapki o charakterze przeciwzapalnym, z niskim ładunkiem glikemicznym, które pomogą Ci jeść bardziej odżywczo, wspierając przy tym Twoje zdrowie hormonalne.'],
    firstButton: {
        href: '#content',
        text: 'Sprawdź szczegóły',
        ariaLabel: 'Sprawdź szczegóły produktu "Przeciwzapalne kanapki i Tosty"',
    },
    secondButton: {
        href: '#packages',
        text: 'Sprawdź pakiety',
        ariaLabel: 'Sprawdź pakiety z "Przeciwzapalne kanapki i Tosty"',
    },
    images: {
        desktop: header_desktop.src,
    }
}
/* Header data -> dlaczego stworzyłam ten ebook */
export const whyMadeData = {
    idSection: 'whyMade',
    smallText: 'DLACZEGO STWORZYŁAM TEN E-BOOK?',
    description: ['Analizując na konsultacjach dzienniczki żywieniowe moich pacjentek zauważyłam, że mają one problem z jedzeniem odżywczych posiłków i często mówią, że brak im czasu na zdrowe gotowanie. Chcę odczarować ten punkt widzenia i pragnę pokazać Ci, że możesz jeść dobrze zbilansowane potrawy, które przygotujesz w zaledwie kilka minut. Kanapki to według mnie posiłek bazowy każdej diety, jednak wiele z nas nie ma na nie innego pomysłu niż kanapka z serem, szynką i pomidorem.', 'Chcę pomóc Ci w walce z zaburzoną gospodarką hormonalną, gospodarką węglowodanową i pokazać zdrowe alternatywy do tradycyjnych kanapek i tostów.', 'Wiem, że na początku nie jest prosto zmienić swoje nawyki żywieniowe, ponieważ sama wiele lat trochę błądziłam. Teraz nie wyobrażam sobie odżywiać się inaczej.', 'Mój e-book zawiera przepisy na kanapki i tosty, które zawierają składniki o właściwościach przeciwzapalnych, takie jak orzechy, nasiona, awokado, owoce, warzywa, kiełki, oliwa z oliwek, strączki i wiele innych. Składniki te pomagają wzmocnić organizm i przeciwdziałać stanom zapalnym.'],
    reverse: true,
    images: {
        desktop: profile_desktop.src,
        clipPathImage: true,
    }
}
/* Header data -> Kto stworzył e-book? */
export const whoMadeData = {
    idSection: 'whoMade',
    smallText: 'Kto stworzył e-book',
    heading: 'mgr Patrycja Marszalec',
    description: ['Dietetyczka kliniczna, specjalistka dietetyki hormonalnej, magister  dietetyki na Collegium Medicum Uniwersytetu Jagiellońskiego, twórczyni diet przeciwzapalnych, pasjonatka jedzenia. Na co dzień łączę teorię z praktyką.  Pomogłam już setkom zadowolonych pacjentek przywrócić równowagę hormonalną, czego efektem jest lepsze samopoczucie, wprowadzenie chorób w remisję, czy zajście w upragnioną ciążę.  Prywatnie pasjonatka kuchni świata, a w szczególności włoskiej, greckiej i tajskiej, pieszych wędrówek na łonie natury, oraz miłośniczka kwiatów.'],
    images: {
        desktop: profile2_desktop.src,
        clipPathImage: true,
    }
}