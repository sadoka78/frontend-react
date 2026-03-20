import { Post, Author } from "@/types";

const authors: Author[] = [
    {
        id: "1",
        name: "John Doe",
        bio: "Tech writer and JavaScript enthusiast",
        avatar: "/avatars/john.jpg",
    },
    {
        id: "2",
        name: "Jane Smith",
        bio: "React expert and UI/UX designer",
        avatar: "/avatars/jane.jpg",
    },
];

const posts: Post[] = [
    {
        id: "1",
        title: "Getting Started with Next.js",
        content:
            "Next.js is a React framework that enables server-side rendering and static site generation. It provides a great developer experience with features like file-based routing, API routes, and built-in CSS support. In this post we explore the basics of setting up a Next.js project and understanding the Pages Router.",
        author: "1",
        date: "2026-03-01",
        tags: ["nextjs", "react", "ssr"],
        readTime: 5,
    },
    {
        id: "2",
        title: "Understanding SSR vs SSG",
        content:
            "Server-Side Rendering (SSR) renders pages on every request, while Static Site Generation (SSG) builds pages once at build time. SSR is ideal for user-specific or frequently changing content. SSG is best for content that rarely changes like blog posts or documentation. ISR combines both approaches.",
        author: "2",
        date: "2026-03-03",
        tags: ["ssr", "ssg", "performance"],
        readTime: 7,
    },
    {
        id: "3",
        title: "React Hooks Deep Dive",
        content:
            "React Hooks changed how we write React components. useState manages local state, useEffect handles side effects, and custom hooks let us reuse stateful logic across components. Understanding when and how to use each hook is key to writing performant React applications.",
        author: "1",
        date: "2026-03-05",
        tags: ["react", "hooks"],
        readTime: 6,
    },
];

export async function getAllPosts(): Promise<Post[]> {
    return posts;
}

export async function getPostById(id: string): Promise<Post | undefined> {
    return posts.find((p) => p.id === id);
}

export async function getAuthorById(id: string): Promise<Author | undefined> {
    return authors.find((a) => a.id === id);
}