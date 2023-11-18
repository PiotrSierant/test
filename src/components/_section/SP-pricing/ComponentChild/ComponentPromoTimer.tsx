import { useState, useEffect } from 'react';
import styles from './ComponentPromoTimer.module.scss';
import Countdown, { zeroPad } from 'react-countdown';
export const ComponentPromoTimer = () => {
    const [isClient, setIsClient] = useState<boolean>(false);
    const [completed, setCompleted] = useState<boolean>(false);

    useEffect(() => {
        setIsClient(true)
    }, []);

    const handleComplete = () => {
        setCompleted(true);
    }
    if (completed) {
        return null
    }
    return (
        <section className={styles.information}>
            {!completed && <section className={styles.countdownWrapper}>
                <p>Koniec promocji za: </p>
                {isClient && <Countdown date={1697752799000} onComplete={handleComplete} renderer={renderer} />}
            </section>
            }
        </section>
    )
}
type TimerTypes = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}
const renderer = ({ days, hours, minutes, seconds }: TimerTypes) => {
    return (
        <section className={styles.timer}>
            <p>
                {zeroPad(days)}
                <small>dni</small>
            </p>
            <p>
                {zeroPad(hours)}
                <small>godzin</small>
            </p>
            <p>
                {zeroPad(minutes)}
                <small>minut</small>
            </p>
            <p>
                {zeroPad(seconds)}
                <small>sekund</small>
            </p>

        </section>
    )
}
