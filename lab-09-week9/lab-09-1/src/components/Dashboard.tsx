import { useState } from 'react'
import { UserCard } from './UserCard'
import { AnalyticsChart } from './AnalyticsChart'
import { ActivityFeed } from './ActivityFeed'

interface User {
    id: number
    name: string
    email: string
}

export function Dashboard() {
    const [count, setCount] = useState(0)

    // These values NEVER change — only count changes when button is clicked.
    // Without memo, all children re-render anyway on every count increment.
    // With memo, children skip re-render because their props didn't change.
    const [user] = useState<User>({
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
    })

    const [items] = useState(['item1', 'item2', 'item3'])

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <h2>Dashboard</h2>
                <div className="counter-section">
                    <p className="counter-label">
                        Counter: <span className="counter-value">{count}</span>
                    </p>
                    <p className="hint">
                        👇 Click Increment — watch the console. Optimized children do NOT re-render.
                    </p>
                    <button className="btn-primary" onClick={() => setCount((c) => c + 1)}>
                        Increment Counter
                    </button>
                </div>
            </div>

            <div className="dashboard-grid">
                {/* Task 2: UserCard wrapped with React.memo */}
                <UserCard user={user} />

                {/* Task 3: AnalyticsChart uses useMemo for expensive calculation */}
                <AnalyticsChart items={items} />

                {/* ActivityFeed has no props — memo prevents re-render */}
                <ActivityFeed />
            </div>
        </div>
    )
}