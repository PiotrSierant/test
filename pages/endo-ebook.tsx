import Head from 'next/head';
import axios from 'axios';
import type { NextPage } from 'next';
import { headers } from './_app';
import { Navbar } from '../src/components/_section/navbar/navbar';
import { ComponentHeaderDescPhoto } from '../src/components/_section/SP-header-desc-and-photo/ComponentHeaderDescPhoto';
import { ComponentContentMoreInformation } from '../src/components/_section/SP-content-more-information/ComponentContentMoreInformation';
import { ComponentLine } from '../src/components/_basic/line/ComponentLine';
import { ComponentInformation } from '../src/components/_section/SP-information-card/ComponentInformation';
import { ComponentWhatYouLearn } from '../src/components/_section/SP-what-you-learn/ComponentWhatYouLearn';
import { ComponentEndoWhatIsInside } from '../src/components/EndoEbook/ComponentWhatIsInside';
import { ComponentBuyIf } from '../src/components/_section/SP-buy-if/ComponentBuyIf';
import { ComponentCountThings } from '../src/components/_section/SP-count-thing/ComponentCountThings';
import { ComponentWhatFindCategory } from '../src/components/_section/SP-what-find-category/ComponentWhatFindCategory';
import { ComponentOpinions } from '../src/components/_basic/opinion/ComponentOpinions';
import { ComponentPackages } from '../src/components/_section/SP-packages-card/ComponentPackages';
import { ComponentFAQ } from '../src/components/_basic/faq/ComponentFAQ';
import { Footer } from '../src/components/_section/footer/footer';
import { opinionsData, buttonProps, ifbuy, ifnotbuy, faqData, countThingData, contentData, whatYouLearnData, whatFindData, informationData, headerData, whyMadeData, whoMadeData } from '../src/components/EndoEbook/data';

export interface Package {
    id: string;
    seller_id: string;
    short_code_uri: string;
    name: string;
    image: string;
    price: {
        formatted: string;
    }
    categories: string[];
}
/* Interfejs PackagesData zawiera tablicę produktów. */
export interface PackagesData {
    packages: Package[];
}
const EndoEbook: NextPage<PackagesData> = ({ packages }) => {
    return (
        <>
            <Head>
                <title>Endo Ebook - specjalistyczny e-book dla kobiet z endometriozą</title>
                <meta name="description" content="Endo e-book to kompendium wiedzy dla kobiet z endometriozą. Zawiera praktyczne porady dotyczące zdrowego stylu życia, diety przeciwzapalnej i suplementacji w endometriozie. Dodatkowo znajdziesz w nim aż 68 przepisów!" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#c55b71" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="google-site-verification" content="_9ZvToYm83a1fa2AETj63b9XcKP4hsGvddoGSp-9lQA" />
                <meta name="keywords" content="Zdrowy Sukces, Endo Ebook, endometrioza, e-book dla kobiet, zdrowy styl życia, objawy endometriozy, radzenie sobie z chorobą, kompendium wiedzy, sukces w walce z chorobą." />
                <meta property="og:title" content="Zdrowy Sukces - Endo Ebook - specjalistyczny e-book dla kobiet z endometriozą" />
                <meta property="og:site_name" content="Zdrowy Sukces - Endo Ebook" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://zdrowy-sukces.pl/endo-ebook" />
                <meta property="og:description" content="Endo e-book to kompendium wiedzy dla kobiet z endometriozą. Zawiera praktyczne porady dotyczące zdrowego stylu życia, diety przeciwzapalnej i suplementacji w endometriozie. Dodatkowo znajdziesz w nim aż 68 przepisów!" />
                <meta property="og:image" content="https://scontent-frx5-1.cdninstagram.com/v/t51.2885-15/e35/p320x320/97085849_166838288102412_4308183627571348059_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=100&_nc_ohc=0D-TleeJAGgAX-bf_HX&oh=d04d711ac76af63c620fc188c2da7d4a&oe=5EFB80CE" />
                <link rel="preconnect" href="https://www.googletagmanager.com" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#c55b71" />
            </Head>
            <Navbar />
            <ComponentHeaderDescPhoto items={headerData} />
            <ComponentContentMoreInformation contentData={contentData} />
            <ComponentLine />
            <ComponentInformation cards={informationData.cards} />
            <ComponentWhatYouLearn whatYouLearnData={whatYouLearnData} />
            <ComponentHeaderDescPhoto items={whyMadeData} />
            <ComponentEndoWhatIsInside />
            <ComponentBuyIf buttonProps={buttonProps} ifbuy={ifbuy} ifnotbuy={ifnotbuy} />
            <ComponentCountThings countThingData={countThingData} />
            <ComponentWhatFindCategory title={whatFindData.title} contentInfo={whatFindData.contentInfo} />
            <ComponentOpinions opinions={opinionsData.opinions} title={opinionsData.title} />
            <ComponentPackages packages={packages} />
            <ComponentHeaderDescPhoto items={whoMadeData} />
            <ComponentFAQ faqData={faqData} />
            <Footer />
        </>
    )
}
export default EndoEbook;

export async function getStaticProps() {
    /* Pobieranie danych produktów z API, mapowanie ich i zwrócenie błędu, jeśli nie uda się pobrać danych */
    /* Zwrócenie danych produktów jako właściwość `packages` w obiekcie `props` */
    const response = await axios.get('https://api.1cart.eu/v1/products/all?disabled=0&category=901c0a4d-4f08-4707-abd3-51ca005ed24a', { headers })
        .then((response: { data: Package[]; }) => response.data.map((element: Package) => ({
            id: element.id,
            seller_id: element.seller_id,
            short_code_uri: element.short_code_uri,
            name: element.name,
            image: element.image,
            price: element.price,
            categories: element.categories
        })))
        .catch((error: any) => {
            return error.message
        });

    return {
        props: { packages: response },
    }
}