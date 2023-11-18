import styles from './ComponentWhatFind.module.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { ComponentWhatFindImage } from './ComponentWhatFindImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Layout } from '../layout/ComponentLayout';
interface splideElementTitle {
    title: string;
    imageDesktop: string;
}
interface ContentProps {
    title: string;
    subtitle: string;
    sandwiches: string[];
    splideElement: splideElementTitle[];
}
interface Data {
    data: ContentProps;
}
export const ComponentWhatFind = ({ data }: Data) => {
    const { title, subtitle, sandwiches, splideElement } = data
    return (
        <Layout id={"whatFind"} bg={styles.WhatFind} extendWrapper={styles.WhatFindWrapper}>
            <section className={styles.heading} data-aos="fade-up">
                <h2>{title}</h2>
            </section>
            <section className={styles.content}>
                <section className={styles.left}>
                    <Splide
                        options={{
                            width: '100%',
                            fixedWidth: '100%',
                            rewind: true,
                            gap: '2rem',
                            type: 'fade',
                            tag: 'section',
                            drag: 'free',
                            arrows: false,
                            pagination: true,
                            autoWidth: true,
                            focus: 'center',
                            releaseWheel: true,
                            autoplay: true,
                            perPage: 1,
                            interval: 3000,
                            pauseOnHover: true,
                        }}
                        className={styles.container}>
                        {splideElement.map(element => {
                            return <SplideSlide key={element.title} className={styles.sliderFlex}>
                                <ComponentWhatFindImage
                                    imageDesktop={element.imageDesktop}
                                    title={element.title}
                                />
                            </SplideSlide>
                        })}
                    </Splide>
                </section>
                <section className={styles.right}>
                    <h3 data-aos="fade-up">{subtitle}</h3>
                    <ul className={styles.sandwichesTitleList}>
                        {sandwiches.map((element, index) => {
                            return <li key={index} data-aos="fade-up">
                                <FontAwesomeIcon icon={faCircle} style={{ color: '#be3760' }} width={8} />
                                <p dangerouslySetInnerHTML={{ __html: element }}></p>
                            </li>
                        })}
                    </ul>
                </section>
            </section>
        </Layout>

    );
}