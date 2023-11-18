import Head from 'next/head';
import { NextPage } from 'next';
import { Navbar } from '../src/components/_section/navbar/navbar';
import { Us } from '../src/components/_section/us/us';
import { Footer } from '../src/components/_section/footer/footer';
const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>O nas - Zdrowy-Sukces - Poznaj mój zespół i najlepszych specjalistów w Dietetyce Hormonalnej Kobiet</title>
                <meta name="description" content="O nas - Zdrowy-Sukces - poznaj mój zespół ekspertów w dziedzinie Dietetyki Hormonalnej Kobiet. Dowiedz się, jakie korzyści niesie za sobą dieta w endometriozie, PCOS oraz insulinooporności. Pomożemy Ci zrozumieć znaczenie hormonów i zadbać o Twoje zdrowie." />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#c55b71" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="google-site-verification" content="_9ZvToYm83a1fa2AETj63b9XcKP4hsGvddoGSp-9lQA" />
                <meta name="keywords" content="Zdrowy Sukces, Endo Ebook, endometrioza, e-book dla kobiet, zdrowy styl życia, objawy endometriozy, radzenie sobie z chorobą, kompendium wiedzy, sukces w walce z chorobą." />
                <meta property="og:title" content="O nas - Zdrowy-Sukces - Poznaj mój zespół i najlepszych specjalistów w Dietetyce Hormonalnej Kobiet" />
                <meta property="og:site_name" content="O nas - Zdrowy-Sukces - Poznaj mój zespół i najlepszych specjalistów w Dietetyce Hormonalnej Kobiet" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://zdrowy-sukces.pl/endo-ebook" />
                <meta property="og:description" content="O nas - Zdrowy-Sukces - poznaj mój zespół ekspertów w dziedzinie Dietetyki Hormonalnej Kobiet. Dowiedz się, jakie korzyści niesie za sobą dieta w endometriozie, PCOS oraz insulinooporności. Pomożemy Ci zrozumieć znaczenie hormonów i zadbać o Twoje zdrowie." />
                <meta property="og:image" content="https://scontent-frx5-1.cdninstagram.com/v/t51.2885-15/e35/p320x320/97085849_166838288102412_4308183627571348059_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=100&_nc_ohc=0D-TleeJAGgAX-bf_HX&oh=d04d711ac76af63c620fc188c2da7d4a&oe=5EFB80CE" />
                <link rel="preconnect" href="https://www.googletagmanager.com" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#c55b71" />
            </Head>
            <Navbar />
            <Us />
            <Footer />
        </>
    )
}
export default Home;