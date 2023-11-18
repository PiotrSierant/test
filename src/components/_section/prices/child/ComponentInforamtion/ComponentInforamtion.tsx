import { useState, useEffect } from 'react';
import styles from './ComponentInforamtion.module.scss';
import Countdown, { zeroPad } from 'react-countdown';
export const ComponentInforamtion = () => {
    const [isClient, setIsClient] = useState<boolean>(false);
    const [completed, setCompleted] = useState<boolean>(false);

    useEffect(() => {
        setIsClient(true)
    }, []);

    const handleComplete = () => {
        setCompleted(true);
    }
    // Date and time (your time zone): czwartek, 4 stycznia 2024 16:00:00 GMT+01:00
    // https://www.epochconverter.com/
    return (
        <section className={styles.information}>
            {completed ? <section>
                <p>Zapraszam na konsultację!</p>
            </section>
                :
                <section className={styles.countdownWrapper}>
                    <p> Z radością informuję, że kolejny termin zapisów na konsultacje będzie możliwy już za: </p>
                    {isClient && <Countdown date={1704380400000} onComplete={handleComplete} renderer={renderer} />}
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
