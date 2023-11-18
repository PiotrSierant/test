import Image from 'next/image';
import styles from './shopProduct.module.scss';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { toBase64 } from '../../../helpers/toBase64';
import { shimmer } from '../../../helpers/shimmer';
interface productGalery {
    name: string;
    images: {
        [x: string]: any;
        id: string;
        position: number;
        image: string;
        image_thumbnail: string;
    }
}
export const ShopProductGalery = ({ name, images }: productGalery) => {
    const options = {
        type: 'loop',
        gap: '1rem',
        autoplay: true,
        pauseOnHover: false,
        resetProgress: false,
        height: 'auto',
        focus: "center" as const,
        autoWidth: true,
    };
    return <section className={styles.gallery}>
        <Splide
            options={options}
            hasTrack={false}
            className={styles.splide}
        >
            <SplideTrack>
                {images.map((element: { image: string, position: number }) => {
                    return (
                        <SplideSlide className={styles.splideSlide} key={element.position}>
                            <Image
                                src={element.image}
                                alt={name}
                                width={1410} height={2000}
                                className={styles.imageSlide}
                                priority={true}
                                placeholder={'blur'}
                                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1414, 2000))}`}
                                quality={100}
                            />
                        </SplideSlide>
                    )
                })}
            </SplideTrack>
        </Splide>
    </section >
} 