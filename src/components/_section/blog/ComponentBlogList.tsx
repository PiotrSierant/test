import Link from "next/link";
import Image from "next/image";
import styles from "./ComponentBlogList.module.scss";
import { PostsProps } from "../../../../pages/blog";
import { Layout } from "../layout/ComponentLayout";
import { ComponentTimeRead } from "./child/ComponentTimeRead";
import { ComponentAuthorPost } from "./child/ComponentAuthorPost";
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export const ComponentBlogList = ({ posts }: PostsProps) => {

    return (
        <Layout id={"posts_list"} bg={styles.background} extendWrapper={styles.wrapper}>
            <ul className={styles.blogListWrapper}>
                {posts.map(post => {
                    return (
                        <Link href={"blog/" + post.slug} key={post.slug}>
                            <li>
                                <section className={styles.imageWrapper}>
                                    <Image src={post.image} alt={post.title} width={842} height={300} />
                                </section>
                                <section className={styles.contentWrapper}>
                                    <section className={styles.contentHeaderInfo}>
                                        <section className={styles.contentReadAndLike}>
                                            <ComponentTimeRead time={post.timeRead} />
                                            <span>|</span>
                                            <small>
                                                <FontAwesomeIcon icon={faHeart} width={13} height={13} />
                                                {post.likes.length}
                                            </small>
                                        </section>
                                        <ComponentAuthorPost author={post.authorId.name} image={post.authorId.image} />
                                    </section>
                                    <h3>{post.title}</h3>
                                    <section className={styles.categoryWrapper}>
                                        {post.category.map(category => {
                                            return (
                                                <span key={category.value}>{category.value}</span>
                                            )
                                        })}
                                    </section>
                                    <article>
                                        {post.content}
                                    </article>
                                </section>
                            </li>
                        </Link>
                    )
                })}
            </ul>
        </Layout>
    )
}