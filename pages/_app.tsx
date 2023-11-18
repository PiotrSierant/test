import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/default';
import '@splidejs/react-splide/css/core';
import '../styles/globals.css';
import { Cookies } from '../src/components/_section/cookies/cookies';
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth"
/* Tworzymy nagłówek zawierający informacje o kliencie i kluczu API */
export const headers = {
  'X-client-id': process.env.KEY_CLIENT,
  'X-API-key': process.env.KEY_API,
};
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>) {
  useEffect(() => {
    AOS.init();
    // const t = document.getElementById('cursor');
    // const e = document.getElementById('cursor2');
    // const i = document.getElementById('cursor3');
    // const cursorMoveHandler = (event: MouseEvent) => {
    //   if (t && e && i) {
    //     t.style.left = event.clientX + 'px';
    //     t.style.top = event.clientY + 'px';
    //     e.style.left = event.clientX + 'px';
    //     e.style.top = event.clientY + 'px';
    //     i.style.left = event.clientX + 'px';
    //     i.style.top = event.clientY + 'px';
    //   }
    // };
    // const addHoverClass = () => {
    //   if (e && i) {
    //     e.classList.add('hover');
    //     i.classList.add('hover');
    //   }
    // };
    // const removeHoverClass = () => {
    //   if (e && i) {
    //     e.classList.remove('hover');
    //     i.classList.remove('hover');
    //   }
    // };
    // removeHoverClass();
    // const hoverTargets = document.querySelectorAll('.hover-target');
    // for (let a = hoverTargets.length - 1; a >= 0; a--) {
    //   attachEventListeners(hoverTargets[a]);
    // }
    // function attachEventListeners(target: Element) {
    //   target.addEventListener('mouseover', addHoverClass);
    //   target.addEventListener('mouseout', removeHoverClass);
    // }
    // document.getElementsByTagName('body')[0]?.addEventListener('mousemove', cursorMoveHandler);

    // return () => {
    //   document.getElementsByTagName('body')[0]?.removeEventListener('mousemove', cursorMoveHandler);
    // };
  }, []);
  return <>
    <SessionProvider session={session}>
      <Head>
        <title>Dietetyka hormonalna kobiet - Patrycja Marszalec - Zdrowy Sukces</title>
        <meta name="description" content="Dieta w Endometriozie, PCOS, Insulinooporności. Poznaj znaczenie hormonów i zadbaj o swoje zdrowie. Sprawdź darmowego e-booka oraz e-booka dla kobiet z Endometriozą." />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#c55b71" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Dietetyka, Hormony, Zdrowie kobiet, Endometrioza, PCOS, Insulinooporność" />
        <meta name="google-site-verification" content="nhQ7wRGh348gB8SV2IMnLD5MfW6_efO8Z6eJijBOuGs" />
        <meta charSet="utf-8" />
        <meta property="og:site_name" content="Dietetyka hormonalna kobiet - Patrycja Marszalec - Zdrowy Sukces" />
        <meta property="og:title" content="Dietetyka hormonalna kobiet - Patrycja Marszalec - Zdrowy Sukces" />
        <meta property="og:description" content="Dieta w Endometriozie, PCOS, Insulinooporności.  Poznaj znaczenie hormonów i zadbaj o swoje zdrowie. Sprawdź darmowego e-booka oraz e-booka dla kobiet z Endometriozą." />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zdrowy-sukces.pl" />
        <meta property="og:image" content="https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/349484726_786793286191641_8968700245943201071_n.jpg?stp=dst-jpg_s120x120&_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=EIsEm84mLnIAX_VUmP2&_nc_ht=scontent-waw1-1.cdninstagram.com&oh=00_AfB77r1LmkcPzQeLLdQcqHG6n1tNFOu5yirjEWUZt0nNuA&oe=64EBAA95" />
        <meta name="facebook-domain-verification" content="io64xa2oasunf23oi8bxhcslcxy55z" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#c55b71" />
      </Head>
      <Script async id="onecart" src="https://zdrowysukceskoszkk.v.1cart.eu/assets/front/embeded.bundle.js" />
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        !function(f,b,e,v,n,t,s) {
          if(f.fbq) return; n = f.fbq = function() {
          n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)
        }(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
        fbq('track', 'PageView');
          `,
        }}
      />
      <Component {...pageProps} />
      <Cookies />
{/*       <div className='cursor' id="cursor"></div>
      <div className='cursor2' id="cursor2"></div>
      <div className='cursor3' id="cursor3"></div> */}
    </SessionProvider>
  </>
}
export default MyApp;
