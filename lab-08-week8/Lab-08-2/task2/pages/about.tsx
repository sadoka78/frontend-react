import { GetStaticProps } from "next";
import Link from "next/link";

interface AboutProps {
    generatedAt: string;
}

export default function About({ generatedAt }: AboutProps) {
    return (
        <main style={{ maxWidth: 700, margin: "0 auto", padding: "32px 16px", fontFamily: "sans-serif" }}>
            <Link href="/dashboard">← Back to Dashboard</Link>

            <h1 style={{ marginTop: 24 }}>About Us</h1>

            <div
                style={{
                    background: "#e8f5e9",
                    border: "1px solid #a5d6a7",
                    borderRadius: 8,
                    padding: "12px 16px",
                    marginBottom: 24,
                    fontSize: 13,
                }}
            >
                ⚡ <strong>SSG page</strong> — built once at build time.<br />
                Generated at: <strong>{generatedAt}</strong><br />
                This timestamp never changes until next build.
            </div>

            <p style={{ lineHeight: 1.8 }}>
                This is a static about page. It was generated at build time and served
                as plain HTML. No server processing happens on each visit — it is
                blazing fast.
            </p>

            <p style={{ lineHeight: 1.8 }}>
                Compare with the <Link href="/about-ssr">SSR version</Link> — refresh
                both pages and watch the timestamps. The SSG timestamp stays the same;
                the SSR timestamp updates on every refresh.
            </p>
        </main>
    );
}

// Runs ONCE at build time
export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            generatedAt: new Date().toISOString(),
        },
    };
};