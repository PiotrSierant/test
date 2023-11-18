import { Layout } from '../layout/ComponentLayout';
import styles from './ComponentHeaderDescPhoto.module.scss';
import { ComponentHeaderDescription } from './ComponentHeaderDescription';
import { ComponentHeaderPhoto } from './ComponentHeaderPhoto';
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
    reverse?: boolean;
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
    images: {
        desktop: string;
        clipPathImage?: boolean;
        shadow?: boolean;
    }
}
interface descProps {
    items: itemProps;
}

export const ComponentHeaderDescPhoto = ({ items }: descProps) => {
    return (
        <Layout id={items.idSection} bg={styles.header} extendWrapper={items.reverse ? styles.headerWrapper : styles.headerWrapperReverse}>
            <ComponentHeaderPhoto images={items.images} />
            <ComponentHeaderDescription items={items} />
        </Layout>

    )
}