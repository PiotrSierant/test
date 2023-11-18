import Head from 'next/head';
import type { NextPage } from 'next';
import { Navbar } from '../src/components/_section/navbar/navbar';
import { ComponentHeaderDescPhoto } from '../src/components/_section/SP-header-desc-and-photo/ComponentHeaderDescPhoto';
import { ComponentContentTitle } from '../src/components/_section/SP-content-title/ComponentContentTitle';
import { ComponentLine } from '../src/components/_basic/line/ComponentLine';
import { ComponentInformation } from '../src/components/_section/SP-information-card/ComponentInformation';
import { ComponentWhatIsInsideMen } from "../src/components/forFertility/ComponentWhatIsInsideMen";
import { ComponentWhatYouLearn } from '../src/components/_section/SP-what-you-learn/ComponentWhatYouLearn';
import { ComponentWhatIsInsideWomen } from "../src/components/forFertility/ComponentWhatIsInsideWomen";
import { ComponentFAQ } from '../src/components/_basic/faq/ComponentFAQ';
import { ComponentSpisTresci } from '../src/components/_basic/faq/ComponentSpisTresci';
import { Footer } from '../src/components/_section/footer/footer';
import { headerData, contentData, informationData, whyMadeData, pakietPozwoliCiData, whoMadeData, faqData, opinionsData, spisTresci } from '../src/components/forFertility/data';
import { ComponentHeaderImage } from '../src/components/_section/SP-header-image/ComponentHeaderImage';
import { ComponentPricing } from '../src/components/_section/SP-pricing/ComponentPricing';
import { ComponentOpinions } from '../src/components/_basic/opinion/ComponentOpinions';

const ForFertility: NextPage = () => {
    return (
        <>
            <Head>
                <title>Droga do płodności - Kompendium i dieta - Zdrowy-Sukces</title>
                <meta name="description" content="Droga do Płodności - Odkryj przyczyny niepłodności i przygotuj się do zdrowej ciąży dzięki kompendium wiedzy i specjalnej diecie. Znajdź praktyczne rozwiązania w moich poradnikach dla przyszłej roli mamy i taty!" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#c55b71" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="google-site-verification" content="_9ZvToYm83a1fa2AETj63b9XcKP4hsGvddoGSp-9lQA" />
                <meta name="keywords" content="Płodność, Niepłodność, Przyczyny niepłodności, Dieta a płodność, Poradniki o płodności, Przygotowanie do ciąży, Rolia przyszłych rodziców, Zdrowa ciąża, Kompendium wiedzy o płodności, Rodzicielstwo, Porady dla par starających się o dziecko, Odkrywanie przyczyn niepłodności, Zdrowy styl życia a płodność, Suplementacja a płodność, Praktyczne rozwiązania w niepłodności" />
                <meta property="og:title" content="Droga do płodności - Kompendium i dieta - Zdrowy-Sukces" />
                <meta property="og:site_name" content="Droga do płodności - Kompendium i dieta - Zdrowy-Sukces" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://zdrowy-sukces.pl/dieta-dla-plodnosci" />
                <meta property="og:description" content="Droga do Płodności - Odkryj przyczyny niepłodności i przygotuj się do zdrowej ciąży dzięki kompendium wiedzy i specjalnej diecie. Znajdź praktyczne rozwiązania w moich poradnikach dla przyszłej roli mamy i taty!" />
                <meta property="og:image" content="https://scontent-frx5-1.cdninstagram.com/v/t51.2885-15/e35/p320x320/97085849_166838288102412_4308183627571348059_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=100&_nc_ohc=0D-TleeJAGgAX-bf_HX&oh=d04d711ac76af63c620fc188c2da7d4a&oe=5EFB80CE" />
                <link rel="preconnect" href="https://www.googletagmanager.com" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#c55b71" />
            </Head>
            <Navbar />
            <ComponentHeaderImage smallText={headerData.smallText} title={headerData.title} description={headerData.description} />
            <ComponentContentTitle contentData={contentData} />
            <ComponentLine />
            <ComponentInformation cards={informationData.cards} />
            <ComponentSpisTresci faqData={spisTresci} />
            <ComponentWhatIsInsideMen />
            <ComponentHeaderDescPhoto items={whyMadeData} />
            <ComponentWhatYouLearn whatYouLearnData={pakietPozwoliCiData} />
            <ComponentWhatIsInsideWomen />
            <ComponentPricing />
            <ComponentOpinions opinions={opinionsData.opinions} title={opinionsData.title} />
            <ComponentHeaderDescPhoto items={whoMadeData} />
            <ComponentFAQ faqData={faqData} />
            <Footer />
        </>
    )
}

export default ForFertility;