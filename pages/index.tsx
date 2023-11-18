import { NextPage } from 'next';
import { Navbar } from '../src/components/_section/navbar/navbar';
import { Hero } from '../src/components/_section/hero/hero';
import { About } from '../src/components/_section/about/about';
import { Bestseller } from '../src/components/_section/bestseller/bestseller';
import { Diet } from '../src/components/_section/diet/diet';
import { Help } from '../src/components/_section/help/help';
import { Prices } from '../src/components/_section/prices/prices';
import { Social } from '../src/components/_section/social/Social';
import { Contact } from '../src/components/_section/contact/contact';
import { Opinion } from '../src/components/_section/opinion/Opinion';
import { Certificates } from '../src/components/_section/certificates/certificates';
import { Newsletter } from '../src/components/_section/newsletter/newsletter';
import { Footer } from '../src/components/_section/footer/footer';
import Image from 'next/image';
const Home: NextPage = () => {
  return (
    <>
      {/* Zainicjowanie Facebook Pixel na stronie internetowej. Facebook Pixel to narzędzie, które pozwala na śledzenie i zbieranie danych o użytkownikach, aby umożliwić reklamodawcom lepsze targetowanie reklam i lepsze zrozumienie skuteczności reklam. */}
      <noscript><Image height="1" width="1" style={{ display: 'none' }} src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`} alt={'fb pixel'} /></noscript>
      <Navbar />
      <Hero />
      <About />
      <Bestseller />
      <Diet />
      <Help />
      <Prices />
      <Social />
      <Contact />
      <Opinion />
      <Certificates />
      <Newsletter />
      <Footer />
    </>
  )
}
export default Home;