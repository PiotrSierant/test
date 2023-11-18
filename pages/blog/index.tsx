import Post from '../../models/post';
import User from '../../models/user';
import connectDBMongoose from "../../lib/dbConnect";

import Image from 'next/image';
import Head from 'next/head';
import Lottie from "lottie-react";
import animation from "../../src/assets/lottie-files/blog-empty.json"
import type { NextPage } from 'next';
import { Footer } from '../../src/components/_section/footer/footer';
import { Navbar } from '../../src/components/_section/navbar/navbar';
import { ComponentBlogList } from '../../src/components/_section/blog/ComponentBlogList';
import { Layout } from "../../src/components/_section/layout/ComponentLayout"

export interface Post {
    _id: string;
    title: string;
    image: string;
    slug: string;
    content: string;
    timeRead: string;
    category: {
        label: string;
        value: string;
    }[];
    authorId: {
        _id: string;
        name: string;
        surname: string;
        image: string;
    },
    likes: string[];
    createdAt: string;
    updatedAt: string;
}
export interface PostsProps {
    posts: Post[];
}
export async function getStaticProps() {
    await connectDBMongoose();
    try {
        const posts = await Post.find({}).populate({
            path: "authorId",
            select: "name surname image",
            model: User
        })
            .select("title slug image content timeRead category authorId likes createdAt")
            .sort({ _id: -1 })
            .exec();

        const data = posts.map((element) => {
            element._id = element._id.toString();

            if (element.authorId) {
                element.authorId._id = element.authorId._id.toString();
            }
            element.createdAt = element.createdAt.toString();
            element.content = element.content.replace(/(<([^>]+)>)/ig, '').slice(0, 180) + '...'
            return element
        }).map((post) => {
            return post.toJSON();
        });

        return {
            props: {
                posts: JSON.parse(JSON.stringify(data))
            },
            revalidate: 3600
        }
    } catch (error) {
        console.error("Błąd podczas pobierania postów:", error);
        return {
            props: { posts: [] }, revalidate: 3600
        }
    }
}
const Blog: NextPage<PostsProps> = ({ posts }: PostsProps) => {
    if (posts == undefined || posts.length == 0) {
        return (
            <>
                <Navbar />
                <Layout id={"posts_list"} bg={"blog-list-background"} extendWrapper={"blog-list-background-wrapper"} >
                    <Lottie animationData={animation} loop={true} autoPlay={true} />
                    <h4>Brak postów na blogu</h4>
                </Layout>
                <Footer />
            </>
        )
    }
    return (<>
        <Head>
            <title>Zdrowy Sukces Blog </title>
            <meta name="description" content="W naszym sklepie internetowym znajdziesz specjalistyczne diety dla Endometriozy, PCOS i Insulinooporności oraz e-booki dla zdrowego stylu życia. Dieta i suplementacja w zaburzeniach hormonalnych kobiet" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#c55b71" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content="Dieta, E-book, Diety kobiet, Endo Ebook, Zdrowie Kobiety, IO" />
            <meta name="google-site-verification" content="_9ZvToYm83a1fa2AETj63b9XcKP4hsGvddoGSp-9lQA" />
            <meta charSet="utf-8" />
            <meta property="og:site_name" content="Zdrowy-Sukces Blog" />
            <meta property="og:title" content="Zdrowy-Sukces Blog" />
            <meta property="og:description" content="W naszym sklepie internetowym znajdziesz specjalistyczne diety dla Endometriozy, PCOS i insulinooporności oraz e-booki dla zdrowego stylu życia. Kup teraz i popraw swoje zdrowie." />
            <meta property="og:locale" content="pl_PL" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://zdrowy-sukces.pl/sklep" />
            <meta property="og:image" content="https://scontent-frx5-1.cdninstagram.com/v/t51.2885-15/e35/p320x320/97085849_166838288102412_4308183627571348059_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=100&_nc_ohc=0D-TleeJAGgAX-bf_HX&oh=d04d711ac76af63c620fc188c2da7d4a&oe=5EFB80CE" />
            <meta name="facebook-domain-verification" content="io64xa2oasunf23oi8bxhcslcxy55z" />
            <link rel="preconnect" href="https://www.googletagmanager.com" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#c55b71" />
        </Head>
        <noscript><Image height="1" width="1" style={{ display: 'none' }} src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`} alt={'fb pixel'} /></noscript>
        <Navbar />
        {posts.map(post => (
            <li key={post._id}>{post.title}</li>
        ))}
        <ComponentBlogList posts={posts} />
        <Footer />
    </>
    )
}
export default Blog