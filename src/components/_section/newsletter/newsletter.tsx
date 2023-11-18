import Image from 'next/image';
import styles from './newsletter.module.scss';
import newsletter from '../../../assets/images/others/newsletter.png';
import { Layout } from '../layout/ComponentLayout';
import { useEffect } from 'react';
import { ComponentTitle } from '../../_basic/title-section/ComponentTitle';

export const Newsletter = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/mailerlite.js';
        script.async = true;
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <Layout id="newsletter" bg={styles.section} extendWrapper={styles.wrapper}>
            <ComponentTitle title={"Newsletter"} />
            <section className={styles.content}>
                <section className={styles.left}>
                    <Image src={newsletter} alt="newsletter" quality={100} placeholder={"blur"} />
                </section>
                <section className={styles.right}>
                    <section className="ml-form-embed"
                        data-account="2068830:q7g6v0m4c5"
                        data-form="5640757:p4k8d7">
                    </section>
                </section>
            </section>
        </Layout>
    )
}