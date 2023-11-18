import Image from "next/image";
import classNames from "classnames";
import styles from './ComponentHeaderDescPhoto.module.scss';
import { toBase64 } from "../../../helpers/toBase64";
import { shimmer } from "../../../helpers/shimmer";
interface imagesProps {
    images: {
        desktop: string;
        clipPathImage?: boolean;
        shadow?: boolean;
    }
}
export const ComponentHeaderPhoto = ({ images }: imagesProps) => {
    return (
        <Image
            src={images.desktop}
            alt={`Zdjęcie produktu`}
            className={classNames(styles.endoPhoto, images.clipPathImage && styles.extraStyle, images.shadow && styles.shadow)}
            width={707} height={1000}
            priority
            quality={100}
            data-aos="fade-up"
            placeholder={'blur'}
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1414, 2000))}`} />
    )
}