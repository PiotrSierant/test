import Link from 'next/link';
import styles from './ComponentButtonHello.module.scss';
export const ComponentButtonHello = ({ text, link }: { text: string, link: string }) => {
    return (
        <Link href={link} className={styles.cta}>
            <p className={styles.hover_underline_animation}>{text}</p>
            <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
            </svg>
        </Link>
    )
} 