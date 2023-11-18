import { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import styles from './ComponentWhatFindCategory.module.scss';
import { ComponentMealInfo } from './ComponentMealInfo';
import { Layout } from '../layout/ComponentLayout';
interface RecipeInfo {
    title: string;
    icon: string;
    altTextIcon: string;
    recipe: string[];
    desktop: string;
}
interface ContentInfo {
    title: string;
    contentInfo: RecipeInfo[];
}
export const ComponentWhatFindCategory = ({ title, contentInfo }: ContentInfo) => {
    const [numberCard, setNumberCard] = useState<number>(0);
    return <Layout id={"whatFind"} bg={styles.WhatFind} extendWrapper={styles.WhatFindWrapper}>
        <section className={styles.heading} data-aos="fade-up">
            <h2>{title}</h2>
        </section>
        <ul className={styles.menu} data-aos="fade-up">
            {contentInfo.map((element, index: number) => {
                return <li key={index + element.title} onClick={() => setNumberCard(index)} className={styles.iconBox}>
                    <span className={classNames(styles.iconf, styles.iconFill)}>
                        <Image src={element.icon} alt={element.altTextIcon} width={30} height={30} className={styles.iconify} quality={100} />
                    </span>
                </li>
            })}
        </ul>
        {contentInfo.map((element, index: number) => {
            return (<section className={styles.content} key={index} >
                {numberCard === index && <>
                    <picture className={styles.imageContener} data-aos="fade-right" data-aos-duration="2000">
                        <Image src={element.desktop} alt={`Zdjęcie śniadania, który znajduję się w endo ebooku`} width={756} height={945} quality={100} />
                    </picture>
                    <ComponentMealInfo title={element.title} recipe={element.recipe} />
                </>}
            </section>
            )
        })}
    </Layout>
}