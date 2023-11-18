import styles from './bestseller.module.scss';
import { Layout } from "../layout/ComponentLayout";
import { ComponentTitle } from '../../_basic/title-section/ComponentTitle';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { ComponentSplideElement } from './child/ComponentSplideElement';
import { bestsellers } from './data.js';

export const Bestseller = () => {
    const options = {
        type: 'loop',
        gap: '1rem',
        autoplay: true,
        pauseOnHover: true,
        resetProgress: false,
        height: 'auto',
    };

    return (
        <Layout id={"bestseller"} bg={styles.background}>
            <ComponentTitle title={"Bestsellery"} />
            <Splide
                options={options}
                hasTrack={false}
                className={styles.splide}
            >
                <div style={{ position: 'relative' }}>
                    <SplideTrack>

                        {bestsellers.map(item => {
                            return (
                                <SplideSlide className={styles.splideSlide} key={item.id}>
                                    <ComponentSplideElement
                                        title={item.title}
                                        description={item.description}
                                        textCta={item.textCta}
                                        link={item.link}
                                        image1={item.image1}
                                        image2={item.image2}
                                        alt1={item.alt1}
                                        alt2={item.alt2}
                                    />
                                </SplideSlide>
                            )
                        })}


                    </SplideTrack>
                </div>

                <div className="splide__progress">
                    <div className="splide__progress__bar" />
                </div>
            </Splide>
        </Layout>
    )
}