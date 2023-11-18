import styles from "./ComponentHeaderImage.module.scss";
import Image from 'next/image';
import images from "../../../assets/images/dlaPlodnosci/header_large.png";
import imagesMobile from "../../../assets/images/dlaPlodnosci/header_mobile.png";
import { toBase64 } from '../../../helpers/toBase64';
import { shimmer } from '../../../helpers/shimmer';
import { Layout } from '../layout/ComponentLayout';
import { useDeviceSize } from "../../../hooks/useDeviceSize";
export const ComponentHeaderImage = ({ smallText, title, description }: { smallText: string, title: string, description: string[] }) => {
    const [width, height] = useDeviceSize();
    return (
        <Layout id={"header"} bg={width < 800 ? styles.backgroundM : styles.background} extendWrapper={styles.wrapper}>
            {!width && <Image
                src={images}
                alt={`Zdjęcie produktu`}
                priority
                quality={100}
                data-aos="fade-up"
                placeholder={'blur'}
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1414, 2000))}`} />}
            {width < 800 ? (<>
                <Image
                    src={imagesMobile}
                    alt={`Zdjęcie produktu`}
                    priority
                    quality={100}
                    data-aos="fade-up"
                    placeholder={'blur'}
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1414, 2000))}`} />
                <small>{smallText}</small>
                <h1>{title}</h1>
                {description.map(element => {
                    return <p key={element}>{element}</p>
                })}
            </>) : (
                <Image
                    src={images}
                    alt={`Zdjęcie produktu`}
                    priority
                    quality={100}
                    data-aos="fade-up"
                    placeholder={'blur'}
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1414, 2000))}`} />
            )}
        </Layout>
    )
}