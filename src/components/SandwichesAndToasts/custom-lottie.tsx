import Lottie, { LottieComponentProps, LottieRefCurrentProps, Action, InteractivityProps } from 'lottie-react';
import styles from './custom-lottie.module.scss'
import { useRef } from 'react';
import { Layout } from '../_section/layout/ComponentLayout';
export const CustomLottieAnimate = ({ animationData }: LottieComponentProps) => {
    const lottieRef = useRef<LottieRefCurrentProps>(null);
    const interactivity = {
        mode: "scroll",
        actions: [
            {
                visibility: [0, 0.2],
                type: "stop",
                frames: [0]
            },
            {
                visibility: [0.2, 0.60],
                type: "seek",
                frames: [0, 60]
            },
            {
                visibility: [0.60, 1.0],
                type: "stop",
                frames: [60, 100]
            }
        ] as Action[],
    } as InteractivityProps;

    return (
        <Layout id={"animate_id"} bg={styles.lottie} extendWrapper={styles.lottieWrapper} data-aos='fade-in'>
            <Lottie lottieRef={lottieRef} animationData={animationData} loop={false} interactivity={interactivity} />
        </Layout>
    )
} 