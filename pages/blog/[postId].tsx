import { GetStaticPropsContext, NextPage } from 'next';
import Post from '../../models/post';
import User from '../../models/user';
import connectDBMongoose from "../../lib/dbConnect";

import { Navbar } from '../../src/components/_section/navbar/navbar';
import { Footer } from '../../src/components/_section/footer/footer';
import { ComponentBlogPost } from '../../src/components/_section/blog/ComponentBlogPost';
export interface PostProps {
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
const BlogPost: NextPage<PostProps> = (post) => {
  return (
    <>
      <Navbar />
      <h1 style={{ padding: '120px' }}>{post.title}</h1>
      <ComponentBlogPost post={post} />
      <Footer />
    </>
  )
}

export default BlogPost;

export async function getStaticPaths() {
  await connectDBMongoose();
  try {
    const posts = await Post.find({})
      .select("slug")
      .exec();

    const paths = posts.map((post: { slug: string; }) => {
      const postId = post.slug;
      return {
        params: {
          postId
        }
      }
    });

    return {
      paths,
      fallback: false
    }
  } catch (error) {
    console.log(error)
    return {
      paths: [],
      fallback: false
    }
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext<{ postId: string }>) {
  if (!params?.postId) {
    return {
      redirect: {
        destination: '/blog',
      },
    };
  }

  await connectDBMongoose();
  try {
    const post = await Post
      .findOne({ slug: params.postId })
      .populate({
        path: "authorId",
        select: "name surname image",
        model: User
      })
      .select("title slug image content timeRead category authorId likes createdAt")
      .exec();

    if (Object.getOwnPropertySymbols(post).length === 0 && Object.keys(post).length === 0) {
      return {
        redirect: {
          destination: '/blog',
        },
      };
    }

    return {
      props: JSON.parse(JSON.stringify(post))
    }

  } catch (error) {
    console.log(error)
    return {
      redirect: {
        destination: '/blog',
      },
    };
  }
}
