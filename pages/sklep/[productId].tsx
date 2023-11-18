import axios from 'axios';
import Head from 'next/head';
import { GetStaticPropsContext, NextPage } from 'next';
import { Navbar } from '../../src/components/_section/navbar/navbar';
import { headers } from '../_app';
import { Footer } from '../../src/components/_section/footer/footer';
import { Product } from './index';
import { ShopProduct } from '../../src/components/shop/shopProduct/shopProduct';
import { getCookies, setCookie } from 'cookies-next';

/* Interfejs `ProductsData` opisuje dane produktu jako tablicę produktów */
/* Pole `productId` jest tablicą obiektów typu `Product` */
interface ProductsData {
    productId: Product[];
}

const Product: NextPage<ProductsData> = ({ productId }) => {
    const name = productId[0].name /* Name dla meta tagów, title */
    const desc = productId[0].short_description.slice(0, 160); /* Opis dla wyszukiwarek do 160 znaków */
    const path = `https://zdrowy-sukces.pl${productId[0].seller_id}`

    const allCookies = getCookies();
    let data = new Date();
    let dataPlusYear = data.setFullYear(data.getFullYear() + 1);

    if (allCookies && typeof allCookies === "object" && allCookies.hasOwnProperty("last_items") && typeof allCookies.last_items === 'string') {
        const list_last_items = JSON.parse(decodeURIComponent(allCookies.last_items));
        const numberOfItems = list_last_items.length;
        if (!list_last_items.includes(productId[0].seller_id)) {
            if (numberOfItems > 4) {
                list_last_items.shift();
            }
            list_last_items.push(productId[0].seller_id);
            setCookie("last_items", JSON.stringify(list_last_items), {
                expires: new Date(dataPlusYear),
            });
        }
    } else {
        setCookie("last_items", JSON.stringify([productId[0].seller_id]), {
            expires: new Date(dataPlusYear),
        });
    }

    return <>
        <Head>
            <title>{name}</title>
            <meta name="description" content={desc} />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#c55b71" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content="E-book, Dieta, Sklep, Dietetyka, Produkt" />
            <meta name="google-site-verification" content="_9ZvToYm83a1fa2AETj63b9XcKP4hsGvddoGSp-9lQA" />
            <meta charSet="utf-8" />
            <meta property="og:site_name" content="Dietetyka hormonalna kobiet - Patrycja Marszalec - Produkt" />
            <meta property="og:title" content={name} />
            <meta property="og:description" content={desc} />
            <meta property="og:locale" content="pl_PL" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={path} />
            <meta property="og:image" content="https://scontent-frx5-1.cdninstagram.com/v/t51.2885-15/e35/p320x320/97085849_166838288102412_4308183627571348059_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=100&_nc_ohc=0D-TleeJAGgAX-bf_HX&oh=d04d711ac76af63c620fc188c2da7d4a&oe=5EFB80CE" />
            <meta name="facebook-domain-verification" content="io64xa2oasunf23oi8bxhcslcxy55z" />
            <link rel="preconnect" href="https://www.googletagmanager.com" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#c55b71" />
        </Head>
        <Navbar />
        <ShopProduct products={productId} />
        <Footer />
    </>
}
export default Product;

/* Definicja funkcji `getStaticPaths` jako asynchronicznej */
export async function getStaticPaths() {
    /* Wysyłamy zapytanie GET do API z ustawionymi nagłówkami */
    const response = await axios.get('https://api.1cart.eu/v1/products/all?disabled=0', { headers })
    /* Tworzymy ścieżki dla każdego produktu, bazując na wartości `seller_id` */
    const paths = response.data.map((product: { seller_id: string }) => {
        const productId = product.seller_id;
        return {
            params: {
                productId
            }
        }
    });
    /* Zwracamy obiekt z wygenerowanymi ścieżkami i włączeniem trybu fallback */
    return {
        paths,
        fallback: false
    }
}
/* Definicja funkcji `getStaticProps` jako asynchronicznej */
export async function getStaticProps({ params }: GetStaticPropsContext<{ productId: string }>) {
    /* Sprawdzamy, czy parametr `productId` jest dostępny w ścieżce */
    if (!params?.productId) {
        /* Jeśli nie jest dostępny, przekierowujemy użytkownika do strony głównej */
        return {
            redirect: {
                destination: '/',
            },
        };
    }
    /* Wysyłamy zapytanie POST do API z ustawionymi nagłówkami i id produktu jako ciałem zapytania */
    const results = await axios.post('https://api.1cart.eu/v1/products', [params?.productId], { headers }).then(response => response.data).catch((error: any) => {
        return error.message
    });
    /* Sprawdzamy, czy zapytanie zakończyło się powodzeniem */
    if (!results) {
        /* Jeśli nie, przekierowujemy użytkownika do strony głównej */
        return {
            redirect: {
                destination: '/',
            },
        };
    }
    return {
        /* Zwracamy obiekt z danymi produktu */
        props: { productId: results }
    }
}
