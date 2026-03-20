import { GetServerSideProps } from "next";
import Link from "next/link";
import { User, Notification, getCurrentUser, getUserNotifications, getUserAnalytics } from "@/lib/api";

interface DashboardProps {
    user: User;
    notifications: Notification[];
    analytics: {
        pageViews: number;
        sessions: number;
        bounceRate: number;
    };
    currentTime: string;
}

const badge: Record<string, string> = {
    info: "#0070f3",
    success: "#0a7c42",
    warning: "#d97706",
};

export default function Dashboard({ user, notifications, analytics, currentTime }: DashboardProps) {
    const unreadCount = notifications.filter((n) => !n.read).length;

    return (
        <main style={{ maxWidth: 900, margin: "0 auto", padding: "32px 16px", fontFamily: "sans-serif" }}>
            <p style={{ fontSize: 12, color: "#888", marginBottom: 24 }}>
                🔄 SSR page — data fetched on every request at: {currentTime}
            </p>

            {/* Header */}
            <header
                style={{
                    background: "#1a1a2e",
                    color: "#fff",
                    borderRadius: 12,
                    padding: "24px 32px",
                    marginBottom: 24,
                }}
            >
                <h1 style={{ margin: 0 }}>Welcome, {user.name} 👋</h1>
                <p style={{ margin: "8px 0 0", color: "#aaa", fontSize: 14 }}>
                    {user.email} · Role: <strong style={{ color: "#7c83fd" }}>{user.role}</strong>
                </p>
            </header>

            {/* Analytics */}
            <section style={{ marginBottom: 24 }}>
                <h2>📊 Analytics</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                    {[
                        { label: "Page Views", value: analytics.pageViews.toLocaleString() },
                        { label: "Sessions", value: analytics.sessions.toLocaleString() },
                        { label: "Bounce Rate", value: `${analytics.bounceRate.toFixed(1)}%` },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            style={{
                                border: "1px solid #e0e0e0",
                                borderRadius: 8,
                                padding: "20px 24px",
                                textAlign: "center",
                            }}
                        >
                            <div style={{ fontSize: 28, fontWeight: 700 }}>{stat.value}</div>
                            <div style={{ color: "#666", fontSize: 14, marginTop: 4 }}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Notifications */}
            <section style={{ marginBottom: 24 }}>
                <h2>🔔 Notifications ({unreadCount} unread)</h2>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {notifications.map((notif) => (
                        <li
                            key={notif.id}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                                padding: "12px 16px",
                                marginBottom: 8,
                                borderRadius: 8,
                                background: notif.read ? "#fafafa" : "#f0f7ff",
                                border: `1px solid ${notif.read ? "#eee" : "#bde0ff"}`,
                            }}
                        >
                            <span
                                style={{
                                    background: badge[notif.type],
                                    color: "#fff",
                                    borderRadius: 4,
                                    padding: "2px 8px",
                                    fontSize: 11,
                                    fontWeight: 700,
                                    textTransform: "uppercase",
                                }}
                            >
                                {notif.type}
                            </span>
                            <span style={{ flex: 1 }}>{notif.message}</span>
                            <span style={{ fontSize: 12, color: "#999" }}>{notif.createdAt}</span>
                            {!notif.read && (
                                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#0070f3", display: "inline-block" }} />
                            )}
                        </li>
                    ))}
                </ul>
            </section>

            <footer style={{ color: "#999", fontSize: 13 }}>
                Last updated: {currentTime} ·{" "}
                <Link href="/about">About (SSG)</Link> ·{" "}
                <Link href="/about-ssr">About (SSR)</Link>
            </footer>
        </main>
    );
}

// SSR: runs on EVERY request — data is always fresh
// This is why SSR is used for dashboards, not SSG
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    // In a real app: check cookies/session here
    // const session = await getSession(req)
    // if (!session) return { redirect: { destination: '/login', permanent: false } }

    const user = getCurrentUser();
    const [notifications, analytics] = await Promise.all([
        getUserNotifications(user.id),
        getUserAnalytics(user.id),
    ]);

    return {
        props: {
            user,
            notifications,
            analytics,
            currentTime: new Date().toISOString(),
        },
    };
};