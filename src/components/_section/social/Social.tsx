import { Layout } from "../layout/ComponentLayout"
import styles from './Social.module.scss';
import { ZnanyLekarz } from "../opinion/ZnanyLekarz";
import { ComponentTitle } from "../../_basic/title-section/ComponentTitle";
import { Instagram } from "./Instagram";
import Image from "next/image";
export const Social = () => {
    return (
        <Layout id={"Social"} bg={styles.background}>
            <ComponentTitle title={"Instagram"} />
            <Instagram />
        </Layout>
    )
}