import Image from "next/image";
import styles from "./ComponentBlogPost.module.scss";
import { Post } from "../../../../pages/blog"
import { Layout } from "../layout/ComponentLayout"
// import { Editor } from "novel";
import { useSession } from 'next-auth/react'
import { ComponentTimeRead } from "./child/ComponentTimeRead";
// import { ComponentLikeWithSession } from "./child/ComponentLikeWithSession";
// import { ComponentLikeWithoutSession } from "./child/ComponentLikeWithoutSession";
// import { ComponentCommentWithSession } from "./child/ComponentCommentWithSession";
// import { ComponentCommentWithoutSession } from "./child/ComponentCommentWithoutSession";

export const ComponentBlogPost = ({ post }: { post: Post }) => {
    const formattedDate = new Date(post.createdAt).toLocaleString();
    const { data: session } = useSession();
    return (
        <Layout id={post.slug} bg={styles.background}>
            <article className={styles.wrapper}>
                <h1 className={styles.title}>{post.title}</h1>
                <section className={styles.postWrapper}>
                    <header className={styles.information}>
                        <section className={styles.authorWrapper}>
                            {post.authorId.image == "" ? <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" /></svg>
                                : <Image src={post.authorId.image} alt={`Zdjęcie profilowe ${post.authorId.name}`} width={20} height={20} />}
                            <h3>
                                {post.authorId.surname
                                    ? `${post.authorId.name} ${post.authorId.surname}`
                                    : post.authorId.name
                                }
                            </h3>
                        </section>
                        <section className={styles.time}>
                            <p>{formattedDate}</p>
                            <section className={styles.contentReadAndLike}>
                                <ComponentTimeRead time={post.timeRead} />
                                <span>|</span>
                                {/* {session?.user.id == undefined && <ComponentLikeWithoutSession postId={post._id} />}
                                {session?.user.id != undefined && <ComponentLikeWithSession session={session.user.id} postId={post._id} />} */}
                            </section>
                        </section>
                    </header>
                    <Image src={post.image} alt={post.title} width={842} height={300} className={styles.headImage} />
                    <section className={styles.categoryWrapper}>
                        {post.category.map(category => {
                            return (
                                <span key={category.value}>{category.value}</span>
                            )
                        })}
                    </section>
                    <main className="tiptap ProseMirror novel-prose-lg novel-prose-stone dark:novel-prose-invert prose-headings:novel-font-title novel-font-default focus:novel-outline-none blog-post" dangerouslySetInnerHTML={{ __html: post.content }} />
                    <div style={{ display: 'none', pointerEvents: 'none' }}>
                        {/* <Editor /> */}
                    </div>
                </section>
            </article>
            {/* <section className={styles.wrapper}>
                {session?.user.id == undefined && <ComponentCommentWithoutSession postId={post._id} />}
                {session?.user.id != undefined && <ComponentCommentWithSession session={session.user.id} roles={session.user.roles} postId={post._id} />}
            </section> */}
        </Layout>
    )
}



// const useAllData = (postId: string) => {
//     // const [likes, setLikes] = useState();
//     const [comments, setComments] = useState();


//     // likes
//     return { comments };
// };