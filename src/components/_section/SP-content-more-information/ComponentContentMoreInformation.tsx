import styles from './ComponentContentMoreInformation.module.scss';
import { ComponentButtonCTA } from '../../_basic/button-link/ComponentButtonCTA';
import { Layout } from '../layout/ComponentLayout';
interface contentProps {
    textArray: string[];
    href: string;
    callToAction: string;
    ariaLabel: string;
}
interface contentData {
    contentData: contentProps;
}
export const ComponentContentMoreInformation = ({ contentData }: contentData) => {
    const { textArray, href, callToAction, ariaLabel } = contentData;
    return (
        <Layout id={'content'} bg={styles.endoContent} extendWrapper={styles.endoContentWrapper}>
            <section className={styles.list}>
                {textArray.map((element, index) => {
                    if (index == 3) {
                        return <h3 data-aos="fade-up" key={index}>{element}</h3>
                    }
                    return <h2 key={index} data-aos="fade-up">{element}</h2>
                })}
            </section>
            <ComponentButtonCTA
                href={href}
                ariaLabel={ariaLabel}
                text={callToAction}
                animate={true}
            />
        </Layout>
    )
}