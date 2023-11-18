import styles from '../ComponentCreatePost.module.scss';
export const ComponentErrorMessage = ({ validationError, submitError }: any) => {
    const { title, image, slug, content, category, idAuthor } = validationError

    if (submitError) {
        return (
            <section className={styles.error_msg}>
                <p>Coś poszło nie tak podczas przesyłania danych.
                    Sprawdź czy wszystko zostało dodane lub skontaktuj się z Administratorem.</p>
            </section>
        )
    }

    if (title || slug || image || content || category || idAuthor) {
        return (<section className={styles.error_msg}>
            <h3>Musimy poprawić parę rzeczy zanim dodamy ten post:</h3>
            {title && <p>• Tytuł jest niepoprawny. Wymagania min 3 znaki, max 124.</p>}
            {slug && <p>• Slug jest niepoprawny. Wymagania min 3 znaki, max 124</p>}
            {image && <p>• Brak głównego obrazu.</p>}
            {content && <p>• Kontent posta został nie zmieniony lub jest pusty</p>}
            {category && <p>• Brak wybranych kategorii</p>}
            {idAuthor && <p>• A kim jest autor i co on tu robi?</p>}
        </section>
        )
    }
    return null
}