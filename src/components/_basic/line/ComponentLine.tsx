import { SVGProps } from "react";
import styles from './ComponentLine.module.scss';
export const ComponentLine = (props: SVGProps<SVGSVGElement>) => {
    return (
        <section className={styles.svgLineSection}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="none"
                viewBox="0 0 1440 560"
                {...props}
            >
                <g mask="url(&quot;#SvgjsMask1144&quot;)" fill="none">
                    <path
                        d="M -626.2229764823003,238 C -554.22,260.6 -410.22,353 -266.22297648230034,351 C -122.22,349 -50.22,231.8 93.77702351769966,228 C 237.78,224.2 309.78,326 453.77702351769966,332 C 597.78,338 669.78,256.2 813.7770235176997,258 C 957.78,259.8 1048.53,341.4 1173.7770235176997,341 C 1299.02,340.6 1386.76,273 1440,256"
                        stroke="rgba(190, 55, 96, 1)"
                        strokeWidth="5"
                    ></path>
                </g>
                <defs>
                    <mask id="SvgjsMask1144">
                        <rect width="1440" height="560" fill="#ffffff"></rect>
                    </mask>
                </defs>
            </svg>
        </section>
    );
};
