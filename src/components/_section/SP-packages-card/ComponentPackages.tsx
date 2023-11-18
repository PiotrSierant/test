import { Splide, SplideSlide } from '@splidejs/react-splide';
import { ComponentPackageCard } from '../../_basic/card-packages/ComponentPackageCard';
import { PackagesData } from '../../../../pages/endo-ebook';
import styles from './ComponentPackages.module.scss';
import { Layout } from '../layout/ComponentLayout';
export const ComponentPackages = ({ packages }: PackagesData) => {
    return (
        <Layout id={"packages"} bg={styles.packages} extendWrapper={styles.packagesWrapper}>
            <small className={styles.small} data-aos="fade-up">Wybierz pakiet dla siebie</small>
            <h2 data-aos="fade-up">ENDO e-BOOK  w pakietach</h2>
            <Splide options={{
                width: '100%',
                fixedWidth: '100%',
                rewind: true,
                gap: '2rem',
                type: 'loop',
                tag: 'section',
                drag: 'free',
                arrows: true,
                pagination: true,
                autoWidth: true,
                focus: 'center',
                releaseWheel: true,
                autoplay: true,
            }} data-aos="fade-up">
                {
                    packages.map(element => {
                        return (
                            <SplideSlide key={element.id} className={styles.sliderFlex}>
                                <ComponentPackageCard name={element.name} image={element.image} price={element.price} id={element.id} seller_id={element.seller_id} short_code_uri={element.short_code_uri} categories={element.categories} />
                            </SplideSlide>
                        );
                    })
                }
            </Splide>
        </Layout>
    )
}