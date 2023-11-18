import { useState, useCallback, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import Lightbox from "react-image-lightbox";
import styles from './ComponentWhatIsInside.module.scss';
import { Layout } from "../_section/layout/ComponentLayout";

import "react-image-lightbox/style.css";
function importAll(r: __WebpackModuleApi.RequireContext) {
    return r.keys().map(r);
}
const clamp = (value: number, clampAt = 30) => {
    if (value > 0) {
        return value > clampAt ? clampAt : value;
    } else {
        return value < -clampAt ? -clampAt : value;
    }
};
export const ComponentWhatIsInsideMen = () => {
    const [images, setImages] = useState<string[]>([]);
    const [imagesFHD, setImagesFHD] = useState<string[]>([]);
    const [modalUrl, setModalUrl] = useState<string | null>(null);
    const [openedCertificateIndex, setOpenedCertificateIndex] = useState<number>(0);
    const [style, set] = useSpring(() => ({
        transform: "perspective(500px) rotateY(0deg)"
    }));
    const bind = useScroll((event) => {
        set({
            transform: `perspective(500px) rotateY(${event.scrolling ? clamp(event.delta[0]) : 0}deg)`,
        });
    });
    useEffect(() => {
        if (images.length) {
            return;
        }
        const thumbnails = importAll(
            require.context(
                "../../assets/images/dlaPlodnosci/men/mini",
                false,
                /^\.\/.*$/,
                "lazy"
            )
        );
        Promise.all(thumbnails).then((modules) => {
            const srcArr: string[] = modules.map((module: any) => module.default.src)
            setImages(srcArr);
        });
    }, [images]);
    useEffect(() => {
        if (imagesFHD.length) {
            return;
        }
        const imagesFull = importAll(
            require.context(
                "../../assets/images/dlaPlodnosci/men/fhd",
                false,
                /^\.\/.*$/,
                "lazy"
            )
        );
        Promise.all(imagesFull).then((modules) => {
            const srcArr: string[] = modules.map((module: any) => module.default.src)
            setImagesFHD(srcArr);
        });
    }, [imagesFHD]);
    const handleCertificateClick = useCallback(
        (e: any) => {
            const src: string = e.target.style.backgroundImage.replace(
                /^url\(['"](.+)['"]\)/,
                "$1"
            );
            const index = images.indexOf(src);
            setModalUrl(imagesFHD[index]);
            setOpenedCertificateIndex(index);
        },
        [images, imagesFHD]
    );
    const closeImagePreview = useCallback(() => {
        setOpenedCertificateIndex(0);
        setModalUrl(null);
    }, []);
    const nextImage = useCallback(() => {
        const index = (openedCertificateIndex + 1) % imagesFHD.length;
        setOpenedCertificateIndex(index);
        setModalUrl(imagesFHD[index]);
    }, [imagesFHD, openedCertificateIndex]);
    const prevImage = useCallback(() => {
        const index = (openedCertificateIndex + imagesFHD.length - 1) % imagesFHD.length;
        setOpenedCertificateIndex(index);
        setModalUrl(imagesFHD[index]);
    }, [imagesFHD, openedCertificateIndex]);
    return (
        <Layout id="whatInside" bg={styles.whatinside}>
            <h2 data-aos="fade-up">Zobacz dietę i kompendium w niepłodności mężczyzn</h2>
            <section className={styles.container} {...bind()} data-aos="fade-up">
                {images.map((src) => (
                    <animated.div
                        onClick={handleCertificateClick}
                        key={src}
                        className={styles.card}
                        style={{
                            ...style,
                            backgroundImage: `url(${src})`,
                        }}
                    />
                ))}
            </section>
            {modalUrl && (
                <Lightbox
                    nextSrc={images[(openedCertificateIndex + 1) % images.length]}
                    prevSrc={
                        images[(openedCertificateIndex + images.length - 1) % images.length]
                    }
                    onMovePrevRequest={prevImage}
                    onMoveNextRequest={nextImage}
                    mainSrc={modalUrl}
                    onCloseRequest={closeImagePreview}
                />
            )}
        </Layout>
    );
};