import { PriceItemModel } from "./prices";
export const prices: PriceItemModel[] = [
    {
        id: "jednorazowa-konsultacja-dietetyczna",
        name: "Konsultacja premium",
        price: 299,
        link: 'https://1ct.eu/0Y5G',
        items: [
            {
                text: "Rozmowa trwająca około 60 minut, która obejmuje:",
                bullets: [
                    { text: "Szczegółowy wywiad" },
                    { text: "Analizę wyników badań" },
                    { text: "Analizę dotychczasowego żywienia" },
                    { text: "Indywidualną strategię dalszego działania" },
                    { text: "Zalecenia stylu życia dopasowane dla Ciebie" },
                    { text: "Zalecenia żywieniowe w danej jednostce chorobowej" },
                    { text: "Plan suplementacji z uwzględnieniem konkretnych preparatów" },
                    { text: "Podsumowanie konsultacji w pliku pdf" },
                ],
            },
            {
                text: "Podczas konsultacji odpowiem na Twoje pytania"
            },
        ],
    },
    {
        id: "wspolpraca-dietetyczna-miesieczna",
        name: "Pakiet 1 miesiąc",
        price: 449,
        link: 'https://1ct.eu/RJWx',
        items: [
            {
                text:
                    "Wywiad w formie formularza w pliku Word + możliwość dodatkowych pytań mailowo lub telefonicznie",
            },
            { text: "Jeden indywidualny 14-dniowy jadłospis" },
            { text: "Jedna konsultacja w formie rozmowy telefonicznej lub rozmowy wideo" },
            {
                text: "Notatka pdf zawierająca:",
                bullets: [
                    { text: "Omówienie dotychczasowego żywienia" },
                    { text: "Zalecenia indywidualne" },
                    { text: "Zalecenia w danej jednostce chorobowej" },
                    { text: "Omówienie wyników badań" },
                    { text: "Listę zakupów" },
                ],
            },
            { text: "W ciągu naszej współpracy mamy stały kontakt poprzez e-mail" },
        ],
    },
    {
        id: "wspolpraca-dietetyczna-3-miesieczna",
        name: "Pakiet 3 miesiące",
        price: 899,
        link: 'https://1ct.eu/Y3W4',
        savings: 448,
        items: [
            {
                text:
                    "Wywiad w formie formularza w pliku Word + możliwość dodatkowych pytań mailowo lub telefonicznie",
            },
            { text: "Trzy indywidualne 14-dniowe jadłospisy" },
            { text: "Trzy konsultacje w formie rozmowy telefonicznej lub rozmowy wideo" },
            {
                text: "Notatka pdf zawierająca:",
                bullets: [
                    { text: "Omówienie dotychczasowego żywienia" },
                    { text: "Zalecenia indywidualne" },
                    { text: "Zalecenia w danej jednostce chorobowej" },
                    { text: "Omówienie wyników badań" },
                    { text: "Listę zakupów" },
                ],
            },
            { text: "W ciągu naszej współpracy mamy stały kontakt poprzez e-mail" },
        ],
    },
    {
        id: "konsultacja-gold",
        name: "Konsultacja Gold",
        price: 399,
        link: 'https://1ct.eu/B774D',
        items: [
            {
                text:
                    "Konsultacja odbywa się w sobotę lub niedzielę",
            },
            {
                text: "Konsultacja gold to rozmowa trwająca około 90 minut, która obejmuje:",
                bullets: [
                    { text: "Szczegółowy wywiad" },
                    { text: "Analizę wyników badań" },
                    { text: "Analizę dotychczasowego żywienia" },
                    { text: "Indywidualną strategię dalszego działania" },
                    { text: "Zalecenia stylu życia dopasowane dla Ciebie" },
                    { text: "Zalecenia żywieniowe w danej jednostce chorobowej" },
                    { text: "Plan suplementacji z uwzględnieniem konkretnych preparatów" },
                    { text: "Podsumowanie konsultacji w pliku pdf" },
                    { text: "Podczas konsultacji odpowiem na Twoje pytania" },
                ],
            },

        ],
    },

    {
        id: "konsultacja-premium",
        name: "Konsultacja premium",
        price: 299,
        link: 'hhttps://1ct.eu/zwwPp',
        items: [
            {
                text: "Rozmowa trwająca około 60 minut, która obejmuje:",
                bullets: [
                    { text: "Szczegółowy wywiad" },
                    { text: "Analizę wyników badań" },
                    { text: "Analizę dotychczasowego żywienia" },
                    { text: "Indywidualną strategię dalszego działania" },
                    { text: "Zalecenia stylu życia dopasowane dla Ciebie" },
                    { text: "Zalecenia żywieniowe w danej jednostce chorobowej" },
                    { text: "Plan suplementacji z uwzględnieniem konkretnych preparatów" },
                    { text: "Podsumowanie konsultacji w pliku pdf" },
                ],
            },
            {
                text: "Podczas konsultacji odpowiem na Twoje pytania"
            },
        ],
    },
];

export const stationary: PriceItemModel[] = [
    {
        id: "stacjonarna-konsultacja",
        name: "Konsultacja stacjonarna",
        price: 299,
        link: 'http://www.fizjo-strefa.pl/oferta/dietetyka/',
        items: [
            {
                text: "Rozmowa trwająca około 60 minut, która obejmuje:",
                bullets: [
                    { text: "Szczegółowy wywiad" },
                    { text: "Analizę wyników badań" },
                    { text: "Analizę dotychczasowego żywienia" },
                    { text: "Indywidualną strategię dalszego działania" },
                    { text: "Zalecenia stylu życia dopasowane dla Ciebie" },
                    { text: "Zalecenia żywieniowe w danej jednostce chorobowej" },
                    { text: "Plan suplementacji" },
                ],
            },
            {
                text: "Podczas konsultacji odpowiem na Twoje pytania"
            },
        ],
    },
] 