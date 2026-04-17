import { GetStaticProps } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/api";
import { Post } from "@/types";

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <main>
      <h1>My Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: { posts },
    revalidate: 60, // ISR
  };
};