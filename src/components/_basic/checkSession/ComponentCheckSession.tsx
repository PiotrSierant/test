import { useSession } from "next-auth/react";
import { ReactNode } from 'react';
import { ComponentLoader } from "../loader/ComponentLoader";
import { Layout } from "../../_section/layout/ComponentLayout";
import styles from './ComponentCheckSession.module.scss';
export const ComponentCheckSession = ({ children, locate }: { children: ReactNode; locate?: string }) => {
    const { data: session } = useSession();

    if (session && locate) {
        return (
            <Layout id={'panel'} bg={styles.background} extendWrapper={styles.wrapper}>
                {children}
            </Layout>
        )
    }

    if (session) {
        return (
            <section>
                {children}
            </section>
        )
    }
    return (
        <Layout id={'panel'} bg={styles.background} extendWrapper={styles.wrapper}>
            <ComponentLoader text={"Ładowanie..."} />
        </Layout>
    )
}