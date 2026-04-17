import { memo } from 'react'

// No props → never needs to re-render when parent's count changes.
export const ActivityFeed = memo(function ActivityFeed() {
    console.log('%c[ActivityFeed] 📋 Rendered', 'color: teal')

    const activities = [
        { id: 1, icon: '🚀', text: 'Deployment completed', time: '2 min ago' },
        { id: 2, icon: '👤', text: 'New user signed up', time: '5 min ago' },
        { id: 3, icon: '💳', text: 'Payment processed', time: '12 min ago' },
        { id: 4, icon: '⚠️', text: 'Error rate spike detected', time: '1 hr ago' },
    ]

    return (
        <div className="card card--feed">
            <div className="card-badge">React.memo</div>
            <h3>Activity Feed</h3>
            <ul className="feed-list">
                {activities.map((a) => (
                    <li key={a.id} className="feed-item">
                        <span className="feed-icon">{a.icon}</span>
                        <span className="feed-text">{a.text}</span>
                        <span className="feed-time">{a.time}</span>
                    </li>
                ))}
            </ul>
            <p className="card-note">
                🟢 No props — this feed never re-renders when parent updates.
            </p>
        </div>
    )
})