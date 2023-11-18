import { ReactNode } from 'react';
import styles from './ComponentLayout.module.scss';
import classNames from 'classnames';
interface LayoutProps {
    children: ReactNode;
    id: string;
    bg?: string;
    extendWrapper?: string;
}

export const Layout = ({ children, id, bg, extendWrapper }: LayoutProps) => {
    return (
        <section id={id} className={classNames(styles.layout, bg && bg)}>
            <section className={classNames(styles.wrapper, extendWrapper && extendWrapper)}>
                {children}
            </section>
        </section>
    )
}