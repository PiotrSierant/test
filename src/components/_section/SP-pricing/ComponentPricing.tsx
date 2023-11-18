import { Layout } from '../layout/ComponentLayout';
import styles from './ComponentPricing.module.scss';
import { ComponentTitle } from './ComponentChild/ComponentTitle';
import { ComponentCanvas } from './ComponentChild/ComponentCanvas';
import { ComponentCards } from './ComponentChild/ComponentCards';
import { ComponentPromoTimer } from './ComponentChild/ComponentPromoTimer';

export const ComponentPricing = () => {

    return (
        <Layout id={'pricing'} bg={styles.background} >
            <ComponentCanvas />
            <ComponentTitle />
            <ComponentPromoTimer />
            <ComponentCards />
        </Layout>
    )
} 