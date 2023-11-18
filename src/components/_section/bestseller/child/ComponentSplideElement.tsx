import styles from './ComponentSplideElement.module.scss'
import Image from 'next/image';
import { ComponentButtonHello } from '../../../_basic/button-hello/ComponentButtonHello';
import { toBase64 } from '../../../../helpers/toBase64';
import { shimmer } from '../../../../helpers/shimmer';

interface BestsellerProps {
    title: string;
    description: string;
    textCta: string;
    link: string;
    image1: string;
    alt1: string;
    image2: string;
    alt2: string;
}

export const ComponentSplideElement = ({ title, description, textCta, link, image1, image2, alt1, alt2 }: BestsellerProps) => {

    return (
        <ul className={styles.wrapperSlide}>
            <li className={styles.description}>
                <h4>{title}</h4>
                <p>{description}</p>
                <ComponentButtonHello text={textCta} link={link} />
            </li>
            <li>
                <Image src={image1} alt={alt1} width={1414} height={2000} priority={true} placeholder={'blur'} blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1414, 2000))}`} quality={100} />
            </li>
            <li>
                <Image src={image2} alt={alt2} width={1414} height={2000} priority={true} placeholder={'blur'} blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1414, 2000))}`} quality={100} />
            </li>
        </ul>
    )
}