import styles from './shopProduct.module.scss'
import { ProductsData } from '../../../../pages/sklep/index';
import { ShopProductGalery } from './shopProductGalery';
import { ShopProductDesc } from './shopProductDesc';
import { ComponentShopUrlPath } from '../shop-url-path/ComponentShopUrlPath';
import { Layout } from '../../_section/layout/ComponentLayout';
import { ComponentTitle } from '../../_basic/title-section/ComponentTitle';

export const ShopProduct = ({ products }: ProductsData) => {
    const { short_code_uri, name, short_description, images, price, seller_id } = products[0];
    return (
        <Layout id={seller_id} bg={styles.background}>
            <section className={styles.wrapper}>
                <ComponentShopUrlPath name={name} seller_id={seller_id} />
                <ComponentTitle title={name} />
                <ShopProductGalery name={name} images={images} />
                <ShopProductDesc
                    short_code_uri={short_code_uri}
                    name={name}
                    short_description={short_description}
                    price={price}
                    seller_id={seller_id}
                />
            </section>
        </Layout>
    )
}