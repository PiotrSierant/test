import Image from 'next/image';
import styles from './ComponentWhatFindImage.module.scss';
interface ImageTypes {
    imageDesktop: string;
    title: string;
}
export const ComponentWhatFindImage = ({ imageDesktop, title }: ImageTypes) => {
    return <picture className={styles.imageWrapper} data-aos="fade-right" data-aos-duration="1000">
        <Image src={imageDesktop} alt={title} className={styles.image} fill quality={100} />
    </picture>
}