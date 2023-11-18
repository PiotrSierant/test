import styles from './diet.module.scss';
import { Layout } from "../layout/ComponentLayout";
import { ComponentTitle } from '../../_basic/title-section/ComponentTitle';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { ComponentSplideElement } from './child/ComponentSplideElement';
import { diets } from './data.js';

export const Diet = () => {
    const options = {
        type: 'loop',
        gap: '1rem',
        autoplay: false,
        pauseOnHover: false,
        resetProgress: false,
        height: 'auto',
    };

    return (
        <Layout id={"diets"} bg={styles.background}>
            <ComponentTitle title={"Diety"} />
            <Splide
                options={options}
                hasTrack={false}
                className={styles.splide}
            >
                <div style={{ position: 'relative' }}>
                    <SplideTrack>
                        {diets.map(item => {
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