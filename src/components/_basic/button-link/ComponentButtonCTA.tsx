import Link from "next/link";
import styles from './ComponentButtonCTA.module.scss';
import { useRouter } from 'next/router';
import classNames from "classnames";
interface linkType {
    href: string;
    ariaLabel: string;
    text: string;
    color?: string;
    animate?: boolean;
    useRouterFunc?: boolean;
    target?: string;
    disabled?: boolean;
}
export const ComponentButtonCTA = ({ href, ariaLabel, text, color, animate, useRouterFunc, target, disabled }: linkType) => {
    const router = useRouter();
    const handleOnClick = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (useRouterFunc) {
            router.back();
        } else {
            router.push(href);
        }
    };
    if (target) {
        return <Link className={classNames(styles.cta, styles.konsultacje, disabled && styles.disabledLink)} href={href} aria-label={ariaLabel} rel="noreferrer noopener" aria-hidden="true" target="_blank">{text}</Link>
    }
    if (href === '') {
        return (
            <Link className={styles.cta} href={href} onClick={handleOnClick} aria-label={ariaLabel} rel="noreferrer noopener" aria-hidden="true" data-aos="fade-up">{text}</Link>
        )
    }
    if (color === 'dark' && !animate) {
        return (
            <Link className={styles.ctadark} href={href} aria-label={ariaLabel} rel="noreferrer noopener" aria-hidden="true">{text}</Link>
        )
    }
    if (color === 'dark') {
        return (
            <Link className={styles.ctadark} href={href} aria-label={ariaLabel} rel="noreferrer noopener" aria-hidden="true" data-aos="fade-up">{text}</Link>
        )
    }
    if (!animate) {
        return (
            <Link className={styles.cta} href={href} aria-label={ariaLabel} aria-hidden="true" rel="noreferrer noopener">{text}</Link>
        )
    }
    return (
        <Link className={styles.cta} href={href} aria-label={ariaLabel} rel="noreferrer noopener" aria-hidden="true" data-aos="fade-up">{text}</Link>
    )
}