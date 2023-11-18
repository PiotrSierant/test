import whymade from '../../assets/images/dlaPlodnosci/whymade.png';
import whomade from '../../assets/images/dlaPlodnosci/whomade.png';
import headerPhoto from '../../assets/images/dlaPlodnosci/header.png';
import photo_1 from "../../assets/images/dlaPlodnosci/packages/1.png";
import photo_2 from "../../assets/images/dlaPlodnosci/packages/2.png";
import photo_3 from "../../assets/images/dlaPlodnosci/packages/3.png";
import photo_4 from "../../assets/images/dlaPlodnosci/packages/4.png";
import photo_5 from "../../assets/images/dlaPlodnosci/packages/5.png";
import photo_6 from "../../assets/images/dlaPlodnosci/packages/6.png";
import { faBook, faBrain, faCircleQuestion, faReceipt } from '@fortawesome/free-solid-svg-icons';

export const headerData = {
    idSection: 'header',
    smallText: 'POZNAJ PRZYCZYNY NIEPŁODNOŚCI',
    title: 'Niepłodność staje się coraz większym wyzwaniem, dotykając wiele par. To problem, który można pokonać dzięki wiedzy, wsparciu i wdrożeniu odpowiednich działań',
    description: ['Pomogę Ci spełnić Twoje największe marzenie o rodzicielstwie! Moje e-booki wspierające płodność JEJ i JEGO  zapewnią kompleksową opiekę nad Twoim zdrowiem, jakością komórek jajowych i plemników oraz odkryją  przyczyny potencjalnych wyzwań związanych z niepłodnością. Dzięki wyjątkowym schematom krok po kroku  dowiesz się, jak profesjonalnie przygotować się do zdrowej ciąży. Jestem tu, aby Ci pomóc w osiągnięciu tego  wyjątkowego celu!'],
    firstButton: {
        href: '#content',
        text: 'Sprawdź szczegóły',
        ariaLabel: 'Sprawdź szczegóły',
    },
    secondButton: {
        href: '#packages',
        text: 'Sprawdź pakiety',
        ariaLabel: 'Sprawdź pakiety',
    },
    images: {
        desktop: headerPhoto.src,
        shadow: true,
    }
};

export const contentData = {
    textArray: [
        'Jeśli cały czas szukasz przyczyny niepłodności',
        'Jeśli lekarz nie daje ci nadziei na naturalną ciążę',
        'Jeśli marzysz, aby ktoś w końcu pokierował cię na właściwą drogę',
        'Jeśli jesteś po kilku nieudanych próbach in vitro',
        'Jeśli jakość nasienia jest zaburzona',
        'Jeśli chcesz maksymalnie przygotować się do ciąży',
        'Jeśli chcesz, zrobić wszystko, aby twoja ciąża przebiegała zdrowo i bez powikłań',
        'Jeśli chcesz zrozumieć znaczenie wpływu diety na zdrowie'
    ],
};

export const informationData = {
    cards: [
        {
            icon: faBrain,
            title: 'Skrypt merytoryczny',
            description: `Odkryjesz główne przyczyny niepłodności, co umożliwi Ci skuteczniejsze, przyczynowe działanie. Dzięki temu  zaoszczędzisz czas i unikniesz niepotrzebnych wydatków. Ponadto, dowiesz się, jak odpowiednio dostosować  suplementację z perspektywy JEJ i JEGO, aby w pełni przygotować się do zdrowej i udanej ciąży. Informacje w  ebookach pomogą Ci podejść do tego procesu z większą pewnością i nadzieją na osiągnięcie upragnionego celu  - rodzicielstwa!`,
        },
        {
            icon: faReceipt,
            title: '56 przepisów',
            description: `Oprócz teorii liczy się praktyka. W ebookach znajdziesz przeciwzapalne receptury o niskim ładunku  glikemicznym wpisujące się w schemat diety śródziemnomorskiej. Zaproponowane diety są bogato odżywcze,  co sprawi, że zachodząc w ciążę będziesz mieć o 90 % mniejsze ryzyko niedoborów! Żywienie dla JEJ i JEGO  jest ogromnie ważne - to jakość komórki jajowej i dobra jakość nasienia – bez tego się nie uda! `,
        },
        {
            icon: faBook,
            title: 'Ponad 360 stron',
            description: `E-book napisałam na podstawie najnowszych badań oraz mojego 5 letniego doświadczenia w pracy z  pacjentami. Nic nie da takich efektów, jak połączenie nauki i podejścia praktycznego.`,
        },
        {
            icon: faCircleQuestion,
            title: 'Gotowe rozwiązania',
            description: `Podaję gotowe rozwiązania, schematy działań i podpowiadam badania, które warto wykonać. Pomagam  zinterpretować wyniki badań seminogramu i lepiej zrozumieć fizjologię rozrodu.`,
        },
    ]
};

export const whyMadeData = {
    idSection: 'whyMade',
    smallText: 'DLACZEGO STWORZYŁAM TEN EBOOK?',
    descriptionDangerous: [{
        id: 1,
        text: (
            <span>
                <strong>Wiedza i Edukacja:</strong> Chcę dostarczyć konkretne i wiarygodne informacje na temat niepłodności kobiet i  mężczyzn. Wiedza jest kluczowa, aby lepiej zrozumieć tę trudną sytuację i podjąć świadome decyzje dotyczące  zdrowia reprodukcyjnego.
            </span>
        ),
    },
    {
        id: 2,
        text: (
            <span>
                <strong>Wsparcie dla Par:</strong> Niepłodność może być emocjonalnie i fizycznie wyczerpująca zarówno dla kobiet, jak i  mężczyzn oraz ich związków. Chcę dostarczyć narzędzi i wskazówek, które pomogą parom przystąpić do  leczenia niepłodności z większą pewnością siebie i nadzieją na sukces.
            </span>
        ),
    }, {
        id: 3,
        text: (
            <span>
                <strong>Ograniczenie Stresu:</strong> Stworzenie świadomego planu działania i zrozumienie przyczyn niepłodności może  pomóc ograniczyć stres związany z tym stanem. Chcę pomóc osobom z niepłodnością w zarządzaniu stresem.
            </span>
        ),
    }, {
        id: 4,
        text: (
            <span>
                <strong>Skuteczne Działania:</strong> Chcę, aby osoby korzystające z tych e-booków mogły podejmować świadome decyzje  dotyczące swojego zdrowia reprodukcyjnego. Zrozumienie przyczyn i opcji leczenia jest kluczowe dla  podejmowania skutecznych działań.
            </span>
        ),
    }, {
        id: 5,
        text: (
            <span>
                <strong>Promowanie Zdrowia Reprodukcyjnego:</strong> Zdrowie reprodukcyjne jest fundamentalne. Już przed ciążą jesteś w  stanie wpłynąć na potencjalne dysfunkcje u Twojego dziecka.
            </span>
        ),
    }, {
        id: 6,
        text: (
            <span>
                <strong>Dostępność Informacji:</strong> Dostęp do wartościowych informacji na temat niepłodności jest istotny. Chcę, aby te  e-booki były dostępne dla jak największej liczby osób, które potrzebują wsparcia w walce z problemami  niepłodności. Niesamowicie denerwuje mnie brak przekazywania wiedzy w gabinetach lekarskich lub  przekazywanie szczątkowych informacji.
            </span>
        ),
    }, {
        id: 7,
        text: (
            <i>Wierzę, że te e-booki pomogą osobom zainteresowanym zdrowiem reprodukcyjnym w lepszym zrozumieniu i  radzeniu sobie z wyzwaniami związanymi z niepłodnością. Moim celem jest dostarczenie rzetelnych i  pomocnych informacji, które pozwolą osiągnąć lepsze rezultaty i polepszyć jakość życia.</i>
        )
    }
    ],
    reverse: true,
    images: {
        desktop: whymade.src,
        clipPathImage: true,
    }
};
export const pakietPozwoliCiData = {
    firstPart: ['Poznać przyczyny niepłodności po stronie JEJ i JEGO', 'Z e-booków dowiesz się dużo więcej niż na jednej konsultacji lekarskiej', 'Skrócić drogę do macierzyństwa', 'Ukierunkować swoje działanie na przyczynę (niepłodności)', 'Poprawić jakość komórki jajowej (szczególnie ważne przy niskim AMH)', 'Poprawić jakość plemników'],
    secondPart: ['Dowiedzieć się jakie badania warto wykonać szukając przyczyn niepłodności', 'Dobrać odpowiednią suplementację, bez ryzyka wydawania pieniędzy w “błoto”', 'Z e-booków dowiesz się więcej niż na jednej konsultacji ze mną', 'Przy przepisach zawarłam dokładną kaloryczność potraw, ilość białka, tłuszczów i węglowodanów oraz  przydatne wskazówki', 'Będziesz mogła wrócić do badań, z których korzystałam tworząc e-book - piśmiennictwo', 'Otrzymujesz ode mnie gwarancję satysfakcji'],
    href: 'https://1ct.eu/alP6y',
    ariaLabel: 'Kupuję pakiet ebooków',
    text: 'Kupuję pakiet',
    description: 'Niepłodność to walka, która uczyni Cię silniejszą, wytrwalszą i bardziej empatyczną, ale nie definiuje tego, kim jesteś i co możesz osiągnąć -  rób wszystko, aby Twoje działania przybliżały Cię do wymarzonego celu.',
    title: 'Pakiet e-booków pozwoli Ci:',
};

export const whoMadeData = {
    idSection: 'whoMade',
    smallText: 'Kto stworzył diety dla płodności?',
    heading: 'mgr Patrycja Marszalec',
    description: ['Dietetyczka kliniczna, specjalistka dietetyki hormonalnej, magister dietetyki na Collegium Medicum Uniwersytetu Jagiellońskiego, twórczyni diet przeciwzapalnych, bestsellerowego e-booka dla kobiet chorujących na endometriozę. Na co dzień łączę teorię z praktyką. Pomogłam już setkom zadowolonych pacjentek przywrócić równowagę hormonalną, czego efektem jest lepsze samopoczucie, wprowadzenie chorób w remisję czy zajście w upragnioną ciążę. Prywatnie pasjonatka kuchni świata, a w szczególności włoskiej, greckiej i tajskiej, pieszych wędrówek na łonie natury, oraz miłośniczka kwiatów.'],
    images: {
        desktop: whomade.src,
        clipPathImage: true,
    }
};

export const faqData = {
    title: "",
    rows: [
        {
            title: <h4>Kiedy otrzymam e-booka?</h4>,
            content: <p>E-booka otrzymasz na adres email podany w zamówieniu zaraz po dokonaniu płatności. Jeśli e-book nie dotrze na Twoją skrzynkę, sprawdź spam i oferty.</p>
        }, {
            title: <h4>Czy mogę wydrukować e-book?</h4>,
            content: <p>Tak, ale jedynie na swój użytek. Nie możesz kopiować i rozpowszechniać tego e-booka, ponieważ jest on objęty prawami autorskimi.</p>
        }, {
            title: <h4>Czy przepisy w diecie dla kobiet i mężczyzn się powtarzają?</h4>,
            content: <p>Nie, są to inne przepisy, jednak często bazujemy na podobnych składnikach. Na przykład zarówno w diecie dla kobiet jak i mężczyzn znajduje się jarmuż jako baza posiłku (sałatki), ale z innymi dodatkami. To proste ułatwienie. Kupując dwie diety masz więcej przepisów, które możesz rotować z partnerem.</p>
        }, {
            title: <h4>Jak zmienić kaloryczność diety i obliczyć swoje zapotrzebowanie energetyczne?</h4>,
            content: <p>To proste Wystarczy, że wpiszesz w google kalkulator kalorii. Kolejno na dowolnej stronie podstaw swoje dane. Jeśli Twoja masa ciała jest w normie, to nie dodawaj dodatkowych kcal i nie odejmuj. Jeśli zależy Ci na przytyciu to do wartości z diety (2000, 2500 kcal) dodaj 200, 300, 500 kcal. Tak samo postępuj w drugą stronę. W ebookach podpowiadam co dodać (lub odjąć) z posiłku, aby kaloryczność była inna.</p>
        }, {
            title: <h4>Czy można kupić tylko kompendium (bez diety)?</h4>,
            content: <p>Nie. Z kompendium dowiesz się o teorii, ważnych składnikach dla płodności i produktach propłodnościowych. Jednak równie ważna będzie tutaj praktyka, czyli wdrożenie dobrze zbilansowanej diety. Nie wyobrażam sobie, abyś wiedziała wszystko na temat płodności JEJ i JEGO, a nie wiedziała do końca jak wdrożyć to w życie.</p>
        }, {
            title: <h4>Czy e-book sprawdzi się dla kobiet chorujących na endometriozę?</h4>,
            content: <p>Oczywiście! Jeden z kluczowych mechanizmów wpływających na obniżoną płodność w tej chorobie to stan zapalny. Celem diety przeciwzapalnej jest redukcja zapalenia. Zarówno ta, jak i inne moje diety opierają się o dietę śródziemnomorską - królową żywienia przeciwzapalnego. Zanim jednak zaczniesz pracę z tymi e bookami, to chciałabym polecić Ci fundament w endometriozie jakim jest ENDO e-BOOK. Znajdziesz tam więcej informacji poświęconych stricte endometriozie.</p>
        }, {
            title: <h4>Czy możemy wspólnie gotować posiłki i wymieniać je pomiędzy dietami?</h4>,
            content: <p>Tak. Do tego was zachęcam. Możecie wymieniać posiłki pomiędzy dietą dla płodności KOBIET i dietą dla płodności MĘŻCZYZN. Nie musisz gotować na dwa garnki, możecie jeść wspólnie.</p>
        }, {
            title: <h4>Mój partner na problem z żylakami powrózka nasiennego. Czy ta dieta jest dla niego?</h4>,
            content: <p>Jasne, że tak. Żylaki powrózka nasiennego mogą bardzo negatywnie wpływać na jakość i ilość nasienia. Tutaj sprawdzi się zarówno kompendium wiedzy jak i dieta dla płodności mężczyzn.</p>
        }, {
            title: <h4>Mam inne pytania. Jak mogę się z Tobą skontaktować?</h4>,
            content: <p>Jeśli masz inne pytania, wyślij wiadomość na adres zdrowysukcesdietetyka&#64;gmail.com lub skorzystaj z formularza na stronie “Kontakt”.</p>
        }
    ],
};

export const spisTresci = {
    title: "",
    rows: [
        {
            title: <h4>Spis treści Dieta i kompendium w niepłodności kobiet</h4>,
            content: <ul>
                <li><span>•</span>Wstęp</li>
                <li><span>•</span>Oś podwzgórze - przysadka - jajniki</li>
                <li><span>•</span>Cykl menstruacyjny</li>
                <li><span>•</span>Oogeneza</li>
                <li><span>•</span>Aktywność fizyczna</li>
                <li><span>•</span>Nadwaga i otyłość</li>
                <li><span>•</span>Niedowaga</li>
                <li><span>•</span>Niski cholesterol</li>
                <li><span>•</span>Insulinooporność</li>
                <li><span>•</span>Zespół policystycznych jajników</li>
                <li><span>•</span>Anemia, niedokrwistość</li>
                <li><span>•</span>Niedoczynność tarczycy i hashimoto</li>
                <li><span>•</span>Nadczynność tarczycy</li>
                <li><span>•</span>Hiperprolaktynemia</li>
                <li><span>•</span>Polipy endometrialne</li>
                <li><span>•</span>Mięśniaki macicy</li>
                <li><span>•</span>Przerost endometrium</li>
                <li><span>•</span>Cienkie endometrium</li>
                <li><span>•</span>Sen i melatonina</li>
                <li><span>•</span>Zespół Ashermana</li>
                <li><span>•</span>Endometrioza</li>
                <li><span>•</span>Adenomioza</li>
                <li><span>•</span>Przedwczesna niewydolność jajników</li>
                <li><span>•</span>Wpływ stresu na hormony i płodność</li>
                <li><span>•</span>Sen i melatonina</li>
                <li><span>•</span>Endocrine disruptors - związki endokrynnie czynne</li>
                <li><span>•</span>Niskie amh</li>
                <li><span>•</span>Mikrobiom pochwy</li>
                <li><span>•</span>Jelita - centrum dowodzenia</li>
                <li><span>•</span>Bakterie chorobotwórcze*</li>
                <li><span>•</span>Wirus hpv</li>
                <li><span>•</span>Wysoka homocysteina</li>
                <li><span>•</span>Trombofilie, mutacje</li>
                <li><span>•</span>Celiakia</li>
                <li><span>•</span>Pasożyty</li>
                <li><span>•</span>Candida albicans</li>
                <li><span>•</span>Stan jamy ustnej</li>
                <li><span>•</span>Inne</li>
                <li><span>•</span>Model żywienia</li>
                <li><span>•</span>Protokoły suplementacyjne</li>
                <li><span>•</span>Dieta</li>
                <li><span>•</span>Informacje do diety</li>
                <li><span>•</span>Zmiana kaloryczności</li>
            </ul>
        },
        {
            title: <h4>Przykładowe posiłki z diety wspierającej płodność kobiet</h4>,
            content: <ul>
                <ul><strong>Poniedziałek</strong></ul>
                <li><span>•</span> Krem z marchewki i pora</li>
                <li><span>•</span> Orzechowy jogurt chia z cynamonem i płatkami</li>
                <ul><strong>Wtorek</strong></ul>
                <li><span>•</span> Tagiatelle bolognese z burattą</li>
                <li><span>•</span> Delikatny kurczak na jarmużu z awokado</li>
                <ul><strong>Środa</strong></ul>
                <li><span>•</span> Żelazowy koktajl ze szpinakiem</li>
                <li><span>•</span> Pieczony łosoś z chipsami z jarmużu</li>
                <ul><strong>Czwartek</strong></ul>
                <li><span>•</span> Grzanka z masłem orzecho-wym i dżemem</li>
                <li><span>•</span> Omlet obiadowy z awokado, jajkiem poche i burattą</li>
                <ul><strong>Piątek</strong></ul>
                <li><span>•</span> Fasola jaś z jajkiem poche i suszonymi pomidorami</li>
                <li><span>•</span> Dorsz na ziemniaczkach z sosem bazyliowym i groszkiem</li>
                <ul><strong>Sobota</strong></ul>
                <li><span>•</span> Śniadaniowe tosty z pomidorem i szpinakiem</li>
                <li><span>•</span> Łosoś z pesto pietruszkowym</li>
                <ul><strong>Niedziela</strong></ul>
                <li><span>•</span> Waniliowy pudding chia z malinowym musem</li>
                <li><span>•</span> Strączkowa zupa z suszonymi pomidorami</li>
            </ul>
        },
        {
            title: <h4>Spis treści Dieta i kompendium w niepłodności mężczyzn</h4>,
            content: <ul>
                <li><span>•</span> Wstęp</li>
                <li><span>•</span> Oś podwzgórze - przysadka - jadra</li>
                <li><span>•</span> Spermatogeneza</li>
                <li><span>•</span> (Nie)płodność</li>
                <li><span>•</span> Testosteron</li>
                <li><span>•</span> Stres oksydacyjny</li>
                <li><span>•</span> Palenie papierosów</li>
                <li><span>•</span> Alkohol</li>
                <li><span>•</span> Anaboliki</li>
                <li><span>•</span> Temperatura a płodność</li>
                <li><span>•</span> Kawa</li>
                <li><span>•</span> Wpływ stresu na męską płodność</li>
                <li><span>•</span> Sen i melatonina</li>
                <li><span>•</span> Choroby tarczycy</li>
                <li><span>•</span> Hiperprolaktynemia</li>
                <li><span>•</span> Zaburzenia w gospodarce węglowodanowej</li>
                <li><span>•</span> Otyłość a płodność</li>
                <li><span>•</span> Dyslipidemia</li>
                <li><span>•</span> Choroby wątroby</li>
                <li><span>•</span> Choroby autoimmunologiczne</li>
                <li><span>•</span> Aktywność fizyczna</li>
                <li><span>•</span> Żylaki powrózka nasiennego</li>
                <li><span>•</span> Przeciwciała przeciwplemnikowe</li>
                <li><span>•</span> Hemochromatoza</li>
                <li><span>•</span> Mukowiscydoza</li>
                <li><span>•</span> Zespół Klinefertera</li>
                <li><span>•</span> Mikrobiota</li>
                <li><span>•</span> Wirus HPV</li>
                <li><span>•</span> Związki endokrynnie czynne</li>
                <li><span>•</span> Płodność po 40 r. ż</li>
                <li><span>•</span> Oncofertility</li>
                <li><span>•</span> Covid-19</li>
                <li><span>•</span> Jak przygotować się do badania nasienia</li>
                <li><span>•</span> Jak interpretować wyniki badań</li>
                <li><span>•</span> Wzorce żywieniowe</li>
                <li><span>•</span> Zaplanuj swoją dietę</li>
                <li><span>•</span> Suplementacja</li>
                <li><span>•</span> Badania</li>
                <li><span>•</span> Dieta</li>
                <li><span>•</span> Informacje do diety</li>
                <li><span>•</span> Zmiana kaloryczności</li>
            </ul>
        },
        {
            title: <h4>Przykładowe posiłki z diety wspierającej płodność mężczyzn</h4>,
            content: <ul>
                <ul><strong>Poniedziałek</strong></ul>
                <li><span>•</span> Gulasz z wołowiną i ziemniakami</li>
                <li><span>•</span> Brokułowa zupa krem z selerem naciowym</li>
                <ul><strong>Wtorek</strong></ul>
                <li><span>•</span> Omlet śródziemnomorski z zielonymi warzywami</li>
                <li><span>•</span> Sałatka z grillowanym halloumi i soczewicą</li>
                <ul><strong>Środa</strong></ul>
                <li><span>•</span> Różowy koktajl antyoksydacyjny</li>
                <li><span>•</span> Dorsz w śmietanie z pieczonymi pomidorami</li>
                <ul><strong>Czwartek</strong></ul>
                <li><span>•</span> Żytnia pajda z plastrami awokado</li>
                <li><span>•</span> Burger z wołowiną i awo</li>
                <ul><strong>Piątek</strong></ul>
                <li><span>•</span> Śniadaniowa sałatka z tuńczykiem</li>
                <li><span>•</span> Wietnamska sałatka bun z chrupiacym tofu</li>
                <ul><strong>Sobota</strong></ul>
                <li><span>•</span> Domowa zupka chińska</li>
                <li><span>•</span> Kurczak tika masala z podpłomykiem</li>
                <ul><strong>Niedziela</strong></ul>
                <li><span>•</span> Kanapki z jajkem poche</li>
                <li><span>•</span> Likopenowa szakszuka z fasolą czerwoną i soczewicą</li>
            </ul>
        },
    ],
};

export const products = [
    {
        "name": "Dieta i kompendium w niepłodności mężczyzn",
        "price": 399,
        "pricePromo": false, // 349,
        "desc": [
            "Dieta przeciwzapalna wspierająca płodność mężczyzn",
            "28 przepisów przyjaznych płodności męskiej",
            "Kompendium w niepłodności mężczyzn",
            "Skrypt merytoryczny z omówieniem przyczyn niepłodności po stronie mężczyzn",
            "Gotowe schematy działań",
            "Gotowe rozwiązania suplementacyjne"
        ],
        "images": photo_1.src,
        "seller_id": 'dieta-i-kompendium-w-nieplodnosci-mezczyzn',
        "href": "https://1ct.eu/N6E9o",
    },
    {
        "name": "Dieta i kompendium w niepłodności kobiet",
        "price": 459,
        "pricePromo": false, // 409
        "desc": [
            "Dieta przeciwzapalna wspierająca płodność kobiet",
            "28 przepisów przyjaznych gospodarce hormonalnej",
            "Skrypt merytoryczny z omówieniem przyczyn niepłodności po stronie kobiet",
            "Gotowe schemty działań",
            "Gotowe rozwiązania suplementacyjne"
        ],
        "images": photo_2.src,
        "seller_id": 'dieta-i-kompendium-w-nieplodnosci-kobiet',
        "href": "https://1ct.eu/gKPGz",
    },
    {
        "name": "Pakiet w niepłodności",
        "price": 799,
        "pricePromo": false, // 649,
        "includes": ["Dieta i kompendium w niepłodności kobiet",
            "Dieta i kompendium w niepłodności mężczyzn"],
        "desc": [
            "Dieta przeciwzapalna wspierająca płodność kobiet",
            "Dieta przeciwzapalna wspierająca płodność mężczyzn",
            "28 przepisów przyjaznych gospodarce hormonalnej",
            "28 przepisów przyjaznych płodności męskiej",
            "Skrypt merytoryczny z omówieniem przyczyn niepłodności po stronie kobiet",
            "Skrypt merytoryczny z omówieniem przyczyn niepłodności po stronie mężczyzn",
            "Gotowe schemty działań dla NIEJ i dla NIEGO",
            "Gotowe rozwiązania suplementacyjne NIEJ i dla NIEGO"
        ],
        "images": photo_3.src,
        "seller_id": 'diety-i-kompendium-w-nieplodnosci-kobiet-i-mezczyzn',
        "href": "https://1ct.eu/alP6y",
    },
    {
        "name": "Dieta wspierająca płodność mężczyzn",
        "price": 139,
        "pricePromo": false, // 119,
        "desc": [
            "Dieta przeciwzapalna wspierająca płodność mężczyzn",
            "28 przepisów przyjaznych płodności męskiej"
        ],
        "images": photo_4.src,
        "seller_id": 'dieta-wspierajaca-plodnosc-mezczyzn',
        "href": "https://1ct.eu/x3OvP",
    },
    {
        "name": "Dieta wspierająca płodność kobiet",
        "price": 139,
        "pricePromo": false, // 119,
        "desc": [
            "Dieta przeciwzapalna wspierająca płodność kobiet",
            "28 przepisów przyjaznych gospodarce hormonalnej kobiet"
        ],
        "images": photo_5.src,
        "seller_id": 'dieta-wspierajaca-plodnosc-kobiet',
        "href": "https://1ct.eu/7Xk5d",
    },
    {
        "name": "Pakiet diet",
        "price": 259,
        "pricePromo": false, // 219,
        "includes": ["Dieta wspierająca płodność kobiet",
            "Dieta wspierająca płodność mężczyzn"],
        "desc": [
            "Dieta przeciwzapalna wspierająca płodność kobiet",
            "Dieta przeciwzapalna wspierająca płodność mężczyzn",
            "28 przepisów przyjaznych płodności męskiej",
            "28 przepisów przyjaznych gospodarce hormonalnej kobiet"
        ],
        "images": photo_6.src,
        "seller_id": 'diety-wspierajace-plodnosc-kobiet-i-mezczyzn',
        "href": "https://1ct.eu/q7XkW",
    }
];

export const opinionsData = {
    title: 'Poznaj opinie',
    opinions: [
        {
            opinion: "Wszystkie treści umieszczane przez Patrycję w sieci są tworzone z ogromną pasją, zaangażowaniem i starannością. I tak też jest w przypadku ebooka „Dieta i kompendium wiedzy w niepłodności żeńskiej”. Oprócz rozłożenia tematu niepłodności żeńskiej na czynniki pierwsze w środku ebooka znajdziemy również protokoły suplementacyjne oraz propozycje dań wraz z przepięknymi zdjęciami posiłków. W mojej ocenie to obowiązkowa lektura zarówno dla specjalistów, jak i pacjentów zainteresowanych pogłębieniem wiedzy nt. terapii niepłodności. Cieszę się, że mogłam dołożyć swoją cegiełkę do stworzenia tego ebooka 😊",
            author: "Michalina Mróz",
            stars: [1, 1, 1, 1, 1],
            key_op: "MM_1",
        },
        {
            opinion: 'To nie pierwszy e-book Patrycji, z którym mam przyjemność się zapoznać i tym razem również jestem zachwycona. Ebook "Kompendium w niepłodności kobiet" to powinna być obowiązkowa lektura dla każdej kobiety, nie ważne czy będzie się starać w tym momencie o dziecko czy zmaga się z niepłodnością, czy poprostu chce poszerzyć swoją wiedzę. Oprócz informacji, które pomogą nam lepiej zrozumieć nas i nasze ciało, otrzymujemy masę pysznych (ZDROWYCH) posiłków, które zadowolą nawet najbardziej oporne osoby w gotowaniu 😉 Przepięknie zaprojektowane grafiki  dopełnią to wszystko. Bardzo polecam zakup, na pewno się nie zawiedziecie!',
            author: 'Gosia Kozak',
            stars: [1, 1, 1, 1, 1],
            key_op: "GK_2",
        },
        {
            opinion: 'Niesamowity ogrom wiedzy połączony z przepyszną dietą w jednym. Jest to obowiązkowa pozycja do przeczytania dla każdej kobiety zmagającej się z niepłodnością i nie tylko. Zawiera więcej informacji niż można uzyskać podczas długotrwałej pracy ze specjalistami. Gorąco polecam! ',
            author: 'Kasia Kamińska',
            stars: [1, 1, 1, 1, 1],
            key_op: "KK_3",
        },
        {
            opinion: 'Polecam p. Patrycję z całego serca. Przesympatyczna osoba, pełna empatii i zaangażowania. Spotkanie w przyjemnej atmosferze, w przestrzeni całkowitej akceptacji, uważności, a także zrozumienia. Podczas konsultacji p. Patrycja prowadzi szczegółowy wywiad, odpowiada na wszystkie pytania, wyniki że zleconych badań omawia dokładnie z pacjentem okazując przy tym ogrom cierpliwości oraz zrozumienia dla indywidualnej sytuacji. W sposób zrozumiały tłumaczy wszystkie aspekty dotyczące żywienia. Dodam że diety p. Patrycji są mega smaczne, zróżnicowane i proste w przygotowaniu. Miła a zarazem kompetentna osoba. Źródło: Znany Lekarz',
            author: 'Małgorzata B.',
            stars: [1, 1, 1, 1, 1],
            key_op: "MB_4",
        },
        {
            opinion: 'Konsultacja online- punktualnie, plus za przypomnienie mailowe. Ogrom wiedzy, solidne przygotowanie do omówienia konsultacji. 60 minut- w moim przypadku było 1 godz i 40 minut konsultacji, bez pośpiechu, bez stresu, że już trzeba kończyć bo godzina minęła. Wyniki badań lepiej omówione niż z lekarzami, z którymi miałam styczność do tej pory. Więcej wyjaśnień przyczyny skutków i dalszego postępowania. Rozmowa szczera bez ocen z konkretnymi zaleceniami. Podsumowanie wizyty na 26 stron! Nie trzeba notować wszystko jest tam zawarte. Ciepła, dobra i sympatyczna osoba. Cieszę się i jestem ogromnie wdzięczna za to spotkanie! Bardzo polecam na pewno wrócę! Źródło: Znany Lekarz',
            author: 'Anna',
            stars: [1, 1, 1, 1, 1],
            key_op: "An_5",
        },
        {
            opinion: 'Jeśli jest tu ktoś, kto czyta opinie, bo zastanawia się, czy iść do Pani Patrycji na konsultację, powiem jedno: niech się zapisuje czym prędzej, bo miejsca rozchodzą się jak świeże bułeczki (ostatnio nie było nic wolnego po 15 sekundach!). Dziś zrozumiałam dlaczego. Pani Patrycja podeszła do mojego przypadku holistycznie. Dokładnie przeanalizowała wyniki badań (a było tego dużo, bo leczę się od prawie 2 lat), dokonała obszernego wywiadu, dotyczącego mojego stylu życia, ale też sfery psychicznej, i dała konkretne zalecenia, których nigdy nie przedstawił mi żaden z lekarzy. Ogólnie nigdy wcześniej żaden lekarz się na mnie tak nie skupił, nie wyjaśnił niemal każdego wyniku, nie dał tak potrzebnego w tej sytuacji wsparcia, co Pani Patrycja, i to w dodatku w ciągu jednego spotkania. Dodam, że nasza konsultacja się przeciągnęła, ale Pani Patrycja nie patrzyła na zegarek. Pani Patrycjo, jeszcze raz z całego serca dziękuję! Wdrażam zalecenia i wiem, że przyniosą wspaniałe efekty! Źródło: Znany Lekarz',
            author: 'Magdalena',
            stars: [1, 1, 1, 1, 1],
            key_op: "Ma_6",
        },
        {
            opinion: 'Do Patrycji zgłosiłam się dawno, gdy była na początku swojej drogi. Ułożyła mi przepyszny, bardzo szybki i prosty jadłospis. Mam prawie wszystkie ebooki. Dzięki jej pomocy moje koszmarne dni zelżały, choć nie sądziłam, że to zadziała. To cudowna osoba, która słucha i skutecznie pomaga, pod warunkiem, że przestrzegamy wydanych zaleceń. Kontakt fantastyczny i konkretny. Czy mogę polecić - oczywiście, że tak. I zostaję na dłużej. Patrycjo, dziękuję za przywrócenie mi komfortu życia. Źródło: Znany Lekarz',
            author: 'Agnieszka',
            stars: [1, 1, 1, 1, 1],
            key_op: "Ag_7",
        },
        {
            opinion: 'Serdecznie polecam Patrycję! Pełen profesjonalizm, indywidualne podejście, wsparcie, przekazany ogrom wiedzy. Na każdej wizycie szczegółowo omawiane wyniki badań, odpowiedź na każde najdrobniejsze pytanie. Po wizycie email ze szczegółowym podsumowaniem naszego spotkania i zaleceniami co dalej. Przez 6 miesięcy współpracy dowiedziałam się więcej o swoim organiźmie niż mogłam sobie wyobrazić. Jedyne czego żałuję to to że nie umówiłam się na konsultacje dużo wcześniej.. Ale nigdy nie jest za późno żeby o siebie zawalczyć! Z całego serca polecam! :) Źródło: Znany Lekarz',
            author: 'Monika',
            stars: [1, 1, 1, 1, 1],
            key_op: "Mo_8",
        },
        {
            opinion: 'Patrycja wyróżnia się pełnym profesjonalizem, empatią i dużym zaangażowaniem w pomoc w osiągnięciu celów zdrowotnych. Na spotkaniu zostało wszystko szczegółowo omówione, po spotkaniu dostałam bardzo dużą notatkę podsumowującą spotkanie. Jestem bardzo zadowolona i każdemu gorąco polecam współpracę z Patrycją! :) Źródło: Znany Lekarz',
            author: 'Ola',
            stars: [1, 1, 1, 1, 1],
            key_op: "Ol_9",
        },
        {
            opinion: 'Polecam Panią Patrycję z całego serca. Trafiłam na jej profil na Instagramie i FB. Pani Patrycja w prosty sposób tłumaczy wszystko dla osoby która nie ma wiedzy biologiczno-chemicznej jest wszystko zrozumiałe. Ogrom wiedzy, ciekawe posty i zaangażowanie. Konsultacja przebiegła w miłej atmosferze. Kontakt emailowy od samego początku bardzo dobry, po zgłoszeniu moich dolegliwości Pani Patrycja zaleciła dodatkowe badania, które wiele wyjaśniają, a dla lekarzy jest wszystko w normie. Przez cały okres diagnozy i leczenia, nikt nie przekazał mi tylu przydatnych informacji, co Pani Patrycja w trakcie jednego spotkania. Po zakończonej konsultacji dostałam opis wszystkich badań z zaleceniami oraz rozpiskę suplementacji. Takich treści jak przekazuje Pani Patrycja powinni uczyć w szkołach. Serdecznie POLECAM. Źródło: Znany Lekarz',
            author: 'Barbara B-Z',
            stars: [1, 1, 1, 1, 1],
            key_op: "BZ_10",
        },
        {
            opinion: 'Pani Patrycja jest wzorem specjalisty. Takie zaangażowanie powinno przyświecać wszystkim lekarzom, którzy do tej pory mnie zbywali... Pani Patrycja na spotkaniu wykazała się ogromem wiedzy, zrozumienia, wszystko skrupulatnie wyjaśniła. Opracowała kroki, jakie muszę wdrożyć, żeby poprawić wyniki badań . Polecam wszystkim! Źródło: Znany Lekarz',
            author: 'Magdalena B',
            stars: [1, 1, 1, 1, 1],
            key_op: "MB_11",
        },
    ]
}
