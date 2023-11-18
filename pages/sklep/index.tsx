import axios from 'axios';
import Image from 'next/image';
import Head from 'next/head';
import { headers } from '../_app';
import type { NextPage } from 'next';
import { Footer } from '../../src/components/_section/footer/footer';
import { ComponentShopContent } from '../../src/components/shop/ComponentShopContent';
import { Navbar } from '../../src/components/_section/navbar/navbar';

/* Interfejs 'Product' definiuje obiekt, który reprezentuje informacje o produkcie */
export interface Product {
    id: string;
    seller_id: string;
    short_code_uri: string;
    name: string;
    short_description: string;
    image: string;
    images: {
        id: string;
        position: number;
        image: string;
        image_thumbnail: string;
    }
    price: {
        formatted: string;
    }
    categories: string[];
}
/* Interfejs ProductsData zawiera tablicę produktów. */
export interface ProductsData {
    products: Product[];
}

const Shop: NextPage<ProductsData> = ({ products }) => {
    return (<>
        <Head>
            <title>Zdrowy Sukces Sklep - Diety, E-booki - Endometrioza, PCOS, Insulinooporność</title>
            <meta name="description" content="W naszym sklepie internetowym znajdziesz specjalistyczne diety dla Endometriozy, PCOS i Insulinooporności oraz e-booki dla zdrowego stylu życia. Dieta i suplementacja w zaburzeniach hormonalnych kobiet" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#c55b71" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content="Dieta, E-book, Diety kobiet, Endo Ebook, Zdrowie Kobiety, IO" />
            <meta name="google-site-verification" content="_9ZvToYm83a1fa2AETj63b9XcKP4hsGvddoGSp-9lQA" />
            <meta charSet="utf-8" />
            <meta property="og:site_name" content="Zdrowy-Sukces Sklep - Diety, E-booki - Endometrioza, PCOS, Insulinooporność" />
            <meta property="og:title" content="Zdrowy-Sukces Sklep - Diety, E-booki - Endometrioza, PCOS, Insulinooporność" />
            <meta property="og:description" content="W naszym sklepie internetowym znajdziesz specjalistyczne diety dla Endometriozy, PCOS i insulinooporności oraz e-booki dla zdrowego stylu życia. Kup teraz i popraw swoje zdrowie." />
            <meta property="og:locale" content="pl_PL" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://zdrowy-sukces.pl/sklep" />
            <meta property="og:image" content="https://scontent-frx5-1.cdninstagram.com/v/t51.2885-15/e35/p320x320/97085849_166838288102412_4308183627571348059_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=100&_nc_ohc=0D-TleeJAGgAX-bf_HX&oh=d04d711ac76af63c620fc188c2da7d4a&oe=5EFB80CE" />
            <meta name="facebook-domain-verification" content="io64xa2oasunf23oi8bxhcslcxy55z" />
            <link rel="preconnect" href="https://www.googletagmanager.com" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#c55b71" />
        </Head>
        <noscript><Image height="1" width="1" style={{ display: 'none' }} src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`} alt={'fb pixel'} /></noscript>
        <Navbar />
        <ComponentShopContent products={products} />
        <Footer />
    </>
    )
}
export default Shop
/* Funkcja `getStaticProps` pobiera dane produktów z API i filtruje je */
export async function getStaticProps() {
    /* Pobieranie danych produktów z API, mapowanie ich i zwrócenie błędu, jeśli nie uda się pobrać danych */
    /* Zwrócenie danych produktów jako właściwość `products` w obiekcie `props` */

    const response = await axios.get('https://api.1cart.eu/v1/products/all?disabled=0', { headers })
        .then((response: { data: Product[]; }) => response.data.map((element: Product) => ({
            id: element.id,
            seller_id: element.seller_id,
            short_code_uri: element.short_code_uri,
            name: element.name,
            short_description: element.short_description,
            images: element.images,
            image: element.image,
            price: element.price,
            categories: element.categories
        })))
        .catch((error: any) => {
            return error.message
        });

    return {
        props: { products: response },
    }
}

