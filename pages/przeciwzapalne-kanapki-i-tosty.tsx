import Head from 'next/head';
import type { NextPage } from 'next';
import { Navbar } from '../src/components/_section/navbar/navbar';
import { ComponentHeaderDescPhoto } from '../src/components/_section/SP-header-desc-and-photo/ComponentHeaderDescPhoto';
import { CustomLottieAnimate } from '../src/components/SandwichesAndToasts/custom-lottie';
import { ComponentContentTitle } from '../src/components/_section/SP-content-title/ComponentContentTitle';
import { ComponentLine } from '../src/components/_basic/line/ComponentLine';
import { ComponentWhatYouLearn } from '../src/components/_section/SP-what-you-learn/ComponentWhatYouLearn';
import { ComponentWhatIsInside } from '../src/components/SandwichesAndToasts/ComponentWhatIsInside';
import { ComponentBuyIf } from '../src/components/_section/SP-buy-if/ComponentBuyIf';
import { ComponentCountThings } from '../src/components/_section/SP-count-thing/ComponentCountThings';
import { ComponentWhatFind } from '../src/components/_section/SP-what-find-splide/ComponentWhatFind';
import { ComponentOpinions } from '../src/components/_basic/opinion/ComponentOpinions';
import { ComponentPircingCard } from '../src/components/_section/SP-pircing-card/ComponentPircingCard';
import { ComponentFAQ } from '../src/components/_basic/faq/ComponentFAQ';
import { Footer } from '../src/components/_section/footer/footer';
import { items, opinionsData, buttonProps, ifbuy, ifnotbuy, countThingData, faqData, contentData, whatYouLearnData, data, headerData, whyMadeData, whoMadeData } from '../src/components/SandwichesAndToasts/data';
import animationData from '../src/assets/lottie-files/sandwitches.json';
const SandwichesAndToasts: NextPage = () => {
    return (
        <>
            <Head>
                <title>Zdrowy Sukces - Przeciwzapalne kanapki i tosty</title>
                <meta name="description" content="Znajdziesz w nim kilkadziesiąt przepisów na zbilansowane kanapki o charakterze przeciwzapalnym, z niskim ładunkiem glikemicznym, które pomogą Ci jeść bardziej odżywczo, wspierając przy tym Twoje zdrowie hormonalne." />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#c55b71" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="google-site-verification" content="_9ZvToYm83a1fa2AETj63b9XcKP4hsGvddoGSp-9lQA" />
                <meta name="keywords" content="Zdrowie hormonalne, Przeciwzapalne, Kanapki, Tosty, Żywność funkcjonalna, Niski ładunek glikemiczny, Odżywcze, Zbilansowane, Dieta przeciwzapalna, Zdrowe odżywianie." />
                <meta property="og:title" content="Zdrowy Sukces - Przeciwzapalne kanapki i tosty" />
                <meta property="og:site_name" content="Przeciwzapalne kanapki i tosty" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://zdrowy-sukces.pl/przeciwzapalne-kanapki-i-tosty" />
                <meta property="og:description" content="Znajdziesz w nim kilkadziesiąt przepisów na zbilansowane kanapki o charakterze przeciwzapalnym, z niskim ładunkiem glikemicznym, które pomogą Ci jeść bardziej odżywczo, wspierając przy tym Twoje zdrowie hormonalne." />
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
            <CustomLottieAnimate animationData={animationData} />
            <ComponentContentTitle contentData={contentData} />
            <ComponentLine />
            <ComponentWhatYouLearn whatYouLearnData={whatYouLearnData} />
            <ComponentHeaderDescPhoto items={whyMadeData} />
            <ComponentWhatIsInside />
            <ComponentBuyIf buttonProps={buttonProps} ifbuy={ifbuy} ifnotbuy={ifnotbuy} />
            <ComponentCountThings countThingData={countThingData} />
            <ComponentWhatFind data={data} />
            <ComponentOpinions opinions={opinionsData.opinions} title={opinionsData.title} />
            <ComponentPircingCard items={items} />
            <ComponentHeaderDescPhoto items={whoMadeData} />
            <ComponentFAQ faqData={faqData} />
            <Footer />
        </>
    )
}
export default SandwichesAndToasts