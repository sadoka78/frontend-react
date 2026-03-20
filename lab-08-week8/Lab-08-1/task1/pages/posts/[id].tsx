import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { Post, Author } from "@/types";
import { getAllPosts, getPostById, getAuthorById } from "@/lib/api";

interface PostProps {
    post: Post;
    author: Author;
    generatedAt: string;
}

export default function PostPage({ post, author, generatedAt }: PostProps) {
    return (
        <main style={{ maxWidth: 800, margin: "0 auto", padding: "32px 16px", fontFamily: "sans-serif" }}>
            <Link href="/" style={{ color: "#555", fontSize: 14 }}>
                ← Back to all posts
            </Link>

            <article style={{ marginTop: 24 }}>
                <h1>{post.title}</h1>

                <div style={{ display: "flex", gap: 16, color: "#666", fontSize: 14, marginBottom: 8 }}>
                    <span>👤 {author.name}</span>
                    <span>⏱ {post.readTime} min read</span>
                    <span>📅 {post.date}</span>
                </div>

                <p style={{ fontSize: 13, color: "#888" }}>
                    ⚡ SSG page — generated at: {generatedAt}
                </p>

                <hr style={{ margin: "24px 0", borderColor: "#eee" }} />

                <p style={{ lineHeight: 1.8, fontSize: 16 }}>{post.content}</p>

                <div style={{ marginTop: 24 }}>
                    {post.tags.map((tag) => (
                        <span
                            key={tag}
                            style={{
                                background: "#e8f4fd",
                                color: "#0070f3",
                                borderRadius: 4,
                                padding: "4px 10px",
                                fontSize: 13,
                                marginRight: 8,
                            }}
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                <div
                    style={{
                        marginTop: 32,
                        padding: 20,
                        background: "#f9f9f9",
                        borderRadius: 8,
                        border: "1px solid #eee",
                    }}
                >
                    <h3 style={{ margin: "0 0 8px" }}>About the author</h3>
                    <p style={{ margin: 0, color: "#555" }}>
                        <strong>{author.name}</strong> — {author.bio}
                    </p>
                </div>
            </article>
        </main>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getAllPosts();
    return {
        paths: posts.map((post) => ({ params: { id: post.id } })),
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post = await getPostById(params?.id as string);
    if (!post) return { notFound: true };

    const author = await getAuthorById(post.author);
    if (!author) return { notFound: true };

    return {
        props: {
            post,
            author,
            generatedAt: new Date().toISOString(),
        },
        revalidate: 60,
    };
};