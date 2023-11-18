import { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
        min: 4
    },
    slug: {
        type: String,
        required: true,
        min: 4,
        index: true,
    },
    image: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
        min: 6
    },
    timeRead: {
        type: String,
        required: true,
    },
    category: {
        index: true,
        type: [
            {
                value: {
                    type: String,
                    required: true,
                    enum: [
                        'Hormony',
                        'Dieta',
                        'Zdrowie',
                        'Płodność',
                        "Endometrioza",
                        "PCOS",
                        "Insulinooporność",
                        'Przepisy',
                        "Fotografia",
                        "Ebook",
                        "Badania naukowe dotyczące hormonów i żywienia",
                        "Zrównoważony styl życia a hormony",
                        "Odpowiedzi na pytania od czytelników bloga",
                        "Opowieści o osobach, które osiągnęły sukces w regulacji hormonów i zdrowym odżywianiu",
                        "Informacje o nadchodzących wydarzeniach, webinarach, kursach itp."
                    ]
                },
                label: {
                    type: String,
                    required: true
                }
            }
        ]
    },
    authorId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    likes: {
        type: [Schema.Types.ObjectId],
        ref: "User",
        default: []
    }
}, { timestamps: true })

const Post = models.Post || model("Post", PostSchema)

export default Post

// Hormony i zdrowie:

// Porady dotyczące regulacji hormonów
// Związki między hormonami a zdrowiem
// Jak dieta wpływa na hormonalną równowagę
// Płodność i dieta:

// Zdrowa dieta a płodność
// Żywienie a przygotowanie do ciąży
// Dieta w ciąży i po porodzie
// Kulinaria:

// Przepisy i dania zrównoważone żywieniowo
// Dieta i gotowanie dla zdrowia hormonalnego
// Alternatywne diety (np. wegetariańska, wegańska) a hormony
// E-booki:

// Recenzje i opisy dostępnych e-booków
// Publikacje na temat hormonów, płodności i zdrowego odżywiania
// Wskazówki dotyczące korzystania z ebooków
// Konsultacje dietetyczne:

// Informacje na temat oferowanych konsultacji
// Opinie i historie sukcesu klientów
// Porady ogólne dotyczące zdrowego odżywiania
// Zdrowy tryb życia:

// Zrównoważony styl życia a hormony
// Porady dotyczące ćwiczeń i relaksacji
// Zdrowe nawyki żywieniowe na co dzień
// Badania i naukowe odkrycia:

// Aktualne badania naukowe dotyczące hormonów i żywienia
// Omówienie wyników badań i ich implikacji
// Rozwiewanie mitów na podstawie nauki
// Pytania i odpowiedzi od czytelników:

// Odpowiedzi na pytania od czytelników bloga
// Rozwiewanie wątpliwości i udzielanie porad
// Historie sukcesu:

// Opowieści o osobach, które osiągnęły sukces w regulacji hormonów i zdrowym odżywianiu
// Inspirujące historie klientów
// Aktualności i wydarzenia:

// Informacje o nadchodzących wydarzeniach, webinarach, kursach itp.
// Aktualności z dziedziny dietetyki i zdrowia hormonalnego