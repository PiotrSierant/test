import { useRef, useState, useEffect } from 'react';
import { getCookies } from 'cookies-next';
import { ProductsData } from '../../../pages/sklep/index';
import { ComponentCardProduct } from '../_basic/card-product/ComponentCardProduct';
import { ComponentShopUrlPath } from './shop-url-path/ComponentShopUrlPath';
import { Layout } from '../_section/layout/ComponentLayout';
import { ComponentTitle } from '../_basic/title-section/ComponentTitle';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import animationData from '../../assets/lottie-files/no-search-result.json';
import styles from "./ComponentShopContent.module.scss";
import classNames from 'classnames';
import { ComponentLoader } from '../_basic/loader/ComponentLoader';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { useCollapse } from 'react-collapsed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useDeviceSize } from "../../hooks/useDeviceSize";

export const ComponentShopContent = ({ products }: ProductsData) => {
    const refNoSearchData = useRef<LottieRefCurrentProps>(null);
    const [query, setQuery] = useState<string>(""); /* Query do inputu */
    const [showDiets, setShowDiets] = useState<boolean>(true); /* State do filtrów, pokazuje sekcje Diety przeciwzapalne */
    const [showEbooks, setShowEbooks] = useState<boolean>(true); /* State do filtrów, pokazuje sekcje Ebooki przeciwzapalne */
    const [showPackages, setShowPackages] = useState<boolean>(true); /* State do filtrów, pokazuje sekcje Pakiety przeciwzapalne */
    const [width, height] = useDeviceSize();
    const [lastItem, setLastItem] = useState<null | string[]>(null);
    const [showLastItems, setShowLastItems] = useState<boolean>(true);
    const [isExpandedFilter, setExpandedFilter] = useState(false);
    const { getCollapseProps: getCollapseProps, getToggleProps: getToggleProps } = useCollapse({ isExpanded: isExpandedFilter });
    useEffect(() => {
        const allCookies = getCookies();
        if (allCookies && typeof allCookies === "object" && allCookies.hasOwnProperty("last_items") && typeof allCookies.last_items === 'string') {
            const list_last_items = JSON.parse(decodeURIComponent(allCookies.last_items));
            setLastItem(list_last_items);
        } else {
            setLastItem([]);
        }
    }, [])
    const data = products.filter(product => query === '' || product.name.toLowerCase().includes(query.toLowerCase()));
    const DlaPlodnosciCategories = new Set(['e8d19a80-4066-418e-a2be-3179e498532c']);
    const ebookiDlaPlodnosci = data.filter(element => DlaPlodnosciCategories.has(element.categories[0]));
    const ebooki = data.filter(element => element.categories.length === 0)
        .sort((a, b) => {
            if (a.seller_id < b.seller_id) return -1;
            if (a.seller_id > b.seller_id) return 1;
            return 0;
        });

    const ebooks = [...ebooki, ...ebookiDlaPlodnosci]

    const pakietyCategories = new Set(['901c0a4d-4f08-4707-abd3-51ca005ed24a']);
    const pakiety = data
        .filter(element => pakietyCategories.has(element.categories[0]))
        .sort((a, b) => a.seller_id < b.seller_id ? -1 : 1)


    const dietyPrzeciwzapalneCategories = new Set(['61031cdd-73e4-4eab-8b3e-67809998914e', '09ab8390-67f0-4fec-9784-4a96b255979a', 'a19e0032-bf1e-4d5a-a2e5-8e64eac147f0', '3842023a-da46-45e6-84e3-d3de29622887']);
    const dietaDlaPlodnosciCategories = new Set(['6d4f07c7-b631-4e52-bd12-d04906067191']);//nowosc
    const dietyDlaPlodnosci = data.filter(element => dietaDlaPlodnosciCategories.has(element.categories[0]));
    const dietyPrzeciwzapalne = data
        .filter(element => dietyPrzeciwzapalneCategories.has(element.categories[0]))
        .sort((a, b) => a.seller_id < b.seller_id ? -1 : 1)
        .map(({ name, ...rest }) => ({ name: name.slice(21), ...rest }));

    let diety = [...dietyPrzeciwzapalne, ...dietyDlaPlodnosci];

    const filteredProducts = products.filter(product => lastItem?.includes(product.seller_id));
    const options = {
        width: '100%',
        fixedWidth: '100%',
        rewind: true,
        gap: '0rem',
        type: 'slide',
        tag: 'section',
        drag: 'free' as const,
        arrows: true,
        pagination: true,
        autoWidth: true,
        focus: 'center' as const,
        releaseWheel: true,
        autoplay: true,
    };

    useEffect(() => {
        if (width >= 700) {
            setExpandedFilter(true)
        }
    }, [width])

    return (
        <Layout id={"shop"} bg={styles.shopContent}>
            <section className={styles.filtersSection}>
                <section className={styles.filtersWrapper}
                >
                    {width < 700 ? <section className={styles.mobileWrapper} {...getToggleProps({
                        onClick: () => setExpandedFilter((prevExpanded) => !prevExpanded),
                    })}>
                        <h3>Filtruj: </h3>
                        <FontAwesomeIcon icon={faChevronDown} width={15} />
                    </section> : <h3>Filtruj: </h3>}
                    <section className={styles.checkboxWrapper} {...getCollapseProps()} >
                        <section className={styles.filters}>
                            <input type="checkbox" id="diet" onChange={() => setShowDiets(!showDiets)} checked={showDiets} />
                            <label htmlFor="diet">
                                <span></span> Diety
                            </label>
                        </section>
                        <section className={styles.filters}>
                            <input type="checkbox" id="ebook" onChange={() => setShowEbooks(!showEbooks)} checked={showEbooks} />
                            <label htmlFor="ebook">
                                <span></span> E-booki
                            </label>
                        </section>
                        <section className={styles.filters}>
                            <input type="checkbox" id="packages" onChange={() => setShowPackages(!showPackages)} checked={showPackages} />
                            <label htmlFor="packages">
                                <span></span> Pakiety
                            </label>
                        </section>
                        {
                            lastItem !== null && filteredProducts.length > 0 && <section className={styles.filters}>
                                <input type="checkbox" id="lastItems" onChange={() => setShowLastItems(!showLastItems)} checked={showLastItems} />
                                <label htmlFor="lastItems">
                                    <span></span> Ostatnio oglądane
                                </label>
                            </section>
                        }
                    </section>
                </section>
                <ComponentShopUrlPath name={''} seller_id={''} />
            </section>

            <section className={styles.searchWrapper}>
                <input type="text" placeholder="&#x1F50E; Czego szukasz?" onChange={event => setQuery(event.target.value)} className={styles.search} />
            </section>

            {lastItem === null && <ComponentLoader text={"Ładowanie..."} />}
            {lastItem !== null && filteredProducts.length > 0 && showLastItems && query === "" && <section className={styles.gallery}>
                <ComponentTitle title={"Ostatnio oglądane"} />
                <Splide options={options}
                    hasTrack={false}
                    className={styles.splide}
                >
                    <SplideTrack>
                        {filteredProducts.map(({ name, id, short_code_uri, image, price, seller_id }) => {
                            return (
                                <SplideSlide key={id} className={styles.splideSlide}>
                                    <section className={styles.cardWrapper}>
                                        <ComponentCardProduct
                                            key={id}
                                            name={name}
                                            url={short_code_uri}
                                            img={image}
                                            price={price.formatted}
                                            seller_id={seller_id}
                                        />
                                    </section>
                                </SplideSlide>
                            )
                        })}
                    </SplideTrack>
                </Splide>
            </section>}

            {showDiets && diety.length > 0 && <section className={styles.categories}>
                <ComponentTitle title={"Diety"} />
                <section className={styles.categoriesContent}>
                    {diety.map(({ name, id, short_code_uri, image, price, seller_id }) => {
                        return <ComponentCardProduct
                            key={id}
                            name={name}
                            url={short_code_uri}
                            img={image}
                            price={price.formatted}
                            seller_id={seller_id}
                        />
                    })}
                </section>
            </section>}

            {showEbooks && ebooks.length > 0 && <section className={styles.categories}>
                <ComponentTitle title={"E-booki"} />
                {/* , styles.extendsContent */}
                <section className={classNames(styles.categoriesContent)}>
                    {ebooks.map(({ name, id, short_code_uri, image, price, seller_id }) => {
                        return <ComponentCardProduct
                            key={id}
                            name={name}
                            url={short_code_uri}
                            img={image}
                            price={price.formatted}
                            seller_id={seller_id}
                        />
                    })}
                </section>
            </section>}

            {showPackages && pakiety.length > 0 && <section className={styles.categories}>
                <ComponentTitle title={"Pakiety"} />
                <section className={styles.categoriesContent}>
                    {pakiety.map(({ name, id, short_code_uri, image, price, seller_id }) => {
                        return <ComponentCardProduct
                            key={id}
                            name={name}
                            url={short_code_uri}
                            img={image}
                            price={price.formatted}
                            seller_id={seller_id}
                        />
                    })}
                </section>
            </section>}

            {pakiety.length === 0 && ebooki.length === 0 && dietyPrzeciwzapalne.length === 0 && <section className={styles.notData}>
                <Lottie lottieRef={refNoSearchData} onComplete={() => {
                    refNoSearchData.current?.setDirection(-1)
                    refNoSearchData.current?.play()
                }} animationData={animationData} loop={true} autoPlay={true} style={{ width: '300px', height: '300px' }} />
                <p>Brak wyników wyszukiwania. Wpisz inną frazę!</p>
            </section>}
        </Layout>
    )
}