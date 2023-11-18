import styles from './ComponentLoader.module.scss';
import Lottie from 'lottie-react';
import animation from '../../../assets/lottie-files/loading-mashrooms.json';
import { ComponentLoaderText } from './ComponentLoaderText';

export const ComponentLoader = ({ createPost = false }: { createPost?: boolean }) => {
    if (createPost) {
        return (
            <section className={styles.wrapperCreatePost}>
                <Lottie animationData={animation} loop={true} autoPlay={true} />
                <h1>Trwa dodawanie...</h1>
            </section>
        )
    }
    return (
        <section className={styles.wrapper}>
            <Lottie animationData={animation} loop={true} autoPlay={true} />
            <ComponentLoaderText />
        </section>
    )
}