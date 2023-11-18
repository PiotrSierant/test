import { Layout } from "../layout/ComponentLayout"
import styles from './Opinion.module.scss';
import { ZnanyLekarz } from "../opinion/ZnanyLekarz";
import { ComponentTitle } from "../../_basic/title-section/ComponentTitle";
export const Opinion = () => {
    return (
        <Layout id={"Opinion"} bg={styles.background}>
            <ComponentTitle title={"Opinie"} />
            <ZnanyLekarz />
        </Layout>
    )
}