import Head from "next/head";
import { NextPage } from "next";
import { Navbar } from '../../src/components/_section/navbar/navbar';
import { ComponentLogin } from '../../src/components/_section/account/ComponentLogin';
import { GetSessionParams } from "next-auth/react";
import { getSession } from 'next-auth/react';
export async function getServerSideProps(context: GetSessionParams | undefined) {
    const session = await getSession(context);
    if (session) {
        return {
            redirect: {
                destination: '/panel',
                permanent: false,
            },
        };
    }
    return {
        props: {},
    };
}
const Login: NextPage = () => {
    return (
        <>
            <Head>
                <title>Zdrowy Sukces - logowanie</title>
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="google" content="nositelinkssearchbox" />
                <meta name="google" content="notranslate" />
                <meta name="description" content="Zdrowy Sukces - logowanie" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#c55b71" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="google-site-verification" content="_9ZvToYm83a1fa2AETj63b9XcKP4hsGvddoGSp-9lQA" />
                <meta name="keywords" content="Dieta i suplementacja w zaburzeniach hormonalnych kobiet." />
                <meta property="og:title" content="Zdrowy Sukces - logowanie" />
                <meta property="og:site_name" content="Zdrowy Sukces - logowanie" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://zdrowy-sukces.pl/account/login" />
                <meta property="og:description" content="Zdrowy Sukces - logowanie" />
                <meta property="og:image" content="https://scontent-frx5-1.cdninstagram.com/v/t51.2885-15/e35/p320x320/97085849_166838288102412_4308183627571348059_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=100&_nc_ohc=0D-TleeJAGgAX-bf_HX&oh=d04d711ac76af63c620fc188c2da7d4a&oe=5EFB80CE" />
                <link rel="preconnect" href="https://www.googletagmanager.com" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#c55b71" />
            </Head>
            <Navbar />
            <ComponentLogin />
        </>
    )
}
export default Login;