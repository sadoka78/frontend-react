import { GetStaticProps } from "next";
import Link from "next/link";
import { Post } from "@/types";
import { getAllPosts } from "@/lib/api";

interface HomeProps {
    posts: Post[];
    generatedAt: string;
}

export default function Home({ posts, generatedAt }: HomeProps) {
    return (
        <main style={{ maxWidth: 800, margin: "0 auto", padding: "32px 16px", fontFamily: "sans-serif" }}>
            <h1>📝 My Blog</h1>
            <p style={{ color: "#666", fontSize: 13 }}>
                ⚡ SSG page — generated at build time: {generatedAt} (ISR: revalidates every 60s)
            </p>

            <ul style={{ listStyle: "none", padding: 0, marginTop: 32 }}>
                {posts.map((post) => (
                    <li
                        key={post.id}
                        style={{
                            border: "1px solid #e0e0e0",
                            borderRadius: 8,
                            padding: "20px 24px",
                            marginBottom: 16,
                        }}
                    >
                        <Link href={`/posts/${post.id}`} style={{ textDecoration: "none", color: "#1a1a1a" }}>
                            <h2 style={{ margin: "0 0 8px" }}>{post.title}</h2>
                        </Link>
                        <p style={{ color: "#555", fontSize: 14, margin: "0 0 8px" }}>
                            By {post.author} · {post.readTime} min read · {post.date}
                        </p>
                        <div>
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    style={{
                                        background: "#f0f0f0",
                                        borderRadius: 4,
                                        padding: "2px 8px",
                                        fontSize: 12,
                                        marginRight: 6,
                                        color: "#333",
                                    }}
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getAllPosts();
    return {
        props: {
            posts,
            generatedAt: new Date().toISOString(),
        },
        revalidate: 60,
    };
};