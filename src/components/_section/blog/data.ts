import { validateTitle, validateSlug, validateContent, validateCategory, validateIdAuthor, validateImage, validateTimeRead } from '../../../helpers/validate';

export const categoryList = [
    { value: 'Hormony', label: "Hormony" },
    { value: 'Dieta', label: "Dieta" },
    { value: 'Zdrowie', label: "Zdrowie" },
    { value: 'Płodność', label: "Płodność" },
    { value: "Endometrioza", label: "Endometrioza" },
    { value: "PCOS", label: "PCOS" },
    { value: "Insulinooporność", label: "Insulinooporność" },
    { value: 'Przepisy', label: "Przepisy" },
    { value: "Fotografia", label: "Fotografia" },
    { value: "Ebook", label: "Ebook" },
    { value: "Badania naukowe dotyczące hormonów i żywienia", label: "Badania naukowe dotyczące hormonów i żywienia" },
    { value: "Zrównoważony styl życia a hormony", label: "Zrównoważony styl życia a hormony" },
    { value: "Odpowiedzi na pytania od czytelników bloga", label: "Odpowiedzi na pytania od czytelników bloga" },
    { value: "Opowieści o osobach, które osiągnęły sukces w regulacji hormonów i zdrowym odżywianiu", label: "Opowieści o osobach, które osiągnęły sukces w regulacji hormonów i zdrowym odżywianiu" },
    { value: "Informacje o nadchodzących wydarzeniach, webinarach, kursach itp.", label: "Informacje o nadchodzących wydarzeniach, webinarach, kursach itp." },
]

export const validators = {
    title: validateTitle,
    image: validateImage,
    slug: validateSlug,
    content: validateContent,
    timeRead: validateTimeRead,
    category: validateCategory,
    idAuthor: validateIdAuthor,
}