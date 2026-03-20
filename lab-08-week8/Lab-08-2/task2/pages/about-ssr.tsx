import { GetServerSideProps } from "next";
import Link from "next/link";

interface AboutSSRProps {
    fetchedAt: string;
}

export default function AboutSSR({ fetchedAt }: AboutSSRProps) {
    return (
        <main style={{ maxWidth: 700, margin: "0 auto", padding: "32px 16px", fontFamily: "sans-serif" }}>
            <Link href="/dashboard">← Back to Dashboard</Link>

            <h1 style={{ marginTop: 24 }}>About Us (SSR)</h1>

            <div
                style={{
                    background: "#fff3e0",
                    border: "1px solid #ffcc80",
                    borderRadius: 8,
                    padding: "12px 16px",
                    marginBottom: 24,
                    fontSize: 13,
                }}
            >
                🔄 <strong>SSR page</strong> — rendered on EVERY request.<br />
                Fetched at: <strong>{fetchedAt}</strong><br />
                Refresh the page — this timestamp changes every time!
            </div>

            <p style={{ lineHeight: 1.8 }}>
                This is the SSR version of the about page. Even though the content is
                identical to the SSG version, it hits the server on every request.
                For static content like this, SSR is wasteful — SSG is the right choice.
            </p>

            <p style={{ lineHeight: 1.8 }}>
                Compare: <Link href="/about">SSG version</Link> has a fixed timestamp.
                This SSR version shows a new timestamp on every refresh.
            </p>

            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 24, fontSize: 14 }}>
                <thead>
                    <tr style={{ background: "#f5f5f5" }}>
                        <th style={{ padding: "8px 12px", textAlign: "left", border: "1px solid #ddd" }}>Feature</th>
                        <th style={{ padding: "8px 12px", textAlign: "left", border: "1px solid #ddd" }}>SSG</th>
                        <th style={{ padding: "8px 12px", textAlign: "left", border: "1px solid #ddd" }}>SSR</th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        ["When renders", "Build time", "Every request"],
                        ["Speed", "⚡ Fastest", "🐢 Slower"],
                        ["Data freshness", "Old until rebuild", "Always fresh"],
                        ["Server load", "None", "Every request"],
                        ["Best for", "Blog, docs", "Dashboard, auth"],
                    ].map(([feature, ssg, ssr]) => (
                        <tr key={feature}>
                            <td style={{ padding: "8px 12px", border: "1px solid #ddd" }}>{feature}</td>
                            <td style={{ padding: "8px 12px", border: "1px solid #ddd", color: "#0a7c42" }}>{ssg}</td>
                            <td style={{ padding: "8px 12px", border: "1px solid #ddd", color: "#d97706" }}>{ssr}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}

// Runs on EVERY request — notice the difference vs getStaticProps
export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            fetchedAt: new Date().toISOString(),
        },
    };
};