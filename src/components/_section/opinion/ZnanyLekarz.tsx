import styles from './Opinion.module.scss';
import { useEffect } from 'react';
export const ZnanyLekarz = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/znanylekarz.js';
        script.async = true;
        document.head.appendChild(script);
        return () => {
            document.head.removeChild(script);
        };
    }, []);
    return (
        <section id="zl-widget-s" className={styles.doctor}>
            <a
                id="zl-url"
                className="zl-url"
                href="https://www.znanylekarz.pl/patrycja-marszalec/dietetyk/krakow"
                rel="nofollow"
                data-zlw-doctor="patrycja-marszalec"
                data-zlw-type="big"
                data-zlw-opinion="true"
                data-zlw-hide-branding="true"
            >
                Patrycja Marszalec - ZnanyLekarz.pl
            </a>
        </section>
    )
}