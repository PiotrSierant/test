import { ComponentButtonCTA } from '../../_basic/button-link/ComponentButtonCTA';
import styles from './ComponentHeaderDescPhoto.module.scss';
interface itemProps {
    idSection: string;
    smallText: string;
    title?: string;
    description?: string[];
    descriptionDangerous?: {
        id: number;
        text: JSX.Element;
    }[]
    heading?: string;
    firstButton?: {
        href: string;
        text: string;
        ariaLabel: string;
    }
    secondButton?: {
        href: string;
        text: string;
        ariaLabel: string;
    }
}
interface descProps {
    items: itemProps;
}
export const ComponentHeaderDescription = ({ items }: descProps) => {
    const { smallText, title, description, heading, firstButton, secondButton, descriptionDangerous } = items;
    return (
        <section className={styles.description} data-aos="fade-up">
            <section className={styles.descriptionWrapper}>
                <small>{smallText}</small>
                {title && <h1>{title}</h1>}
                {heading && <h3>{heading}</h3>}
                {description?.map((element, index) => <p key={index}>{element}</p>)}
                {descriptionDangerous?.map((element) => (<p key={element.id} className={styles.dangerous}>{element.text}</p>))}
                {firstButton || secondButton ? (
                    <section className={styles.CTASection}>
                        {firstButton && (
                            <ComponentButtonCTA
                                href={firstButton.href}
                                ariaLabel={firstButton.ariaLabel}
                                text={firstButton.text}
                            />
                        )}
                        {secondButton && (
                            <ComponentButtonCTA
                                href={secondButton.href}
                                ariaLabel={secondButton.ariaLabel}
                                text={secondButton.text}
                            />
                        )}
                    </section>
                ) : null}
            </section>
        </section>
    )
}