import styles from './ComponentLoader.module.scss';
import Lottie from 'lottie-react';
import animation from '../../../assets/lottie-files/loading-mashrooms.json';
import { ComponentLoaderText } from './ComponentLoaderText';

export const ComponentLoader = () => {
    return (
        <section className={styles.wrapper}>
            <Lottie animationData={animation} loop={true} autoPlay={true} />
            <ComponentLoaderText />
        </section>
    )
}