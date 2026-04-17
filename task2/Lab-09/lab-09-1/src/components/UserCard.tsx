import { memo } from 'react'

interface User {
    id: number
    name: string
    email: string
}

interface UserCardProps {
    user: User
}

// WITHOUT memo (commented out):
// Every time Dashboard re-renders (e.g. count changes),
// this component would also re-render even though `user` didn't change.
//
// export function UserCard({ user }: UserCardProps) {
//   console.log('%c[UserCard] ❌ Re-rendered (no memo)', 'color: red')
//   return <div>{user.name}</div>
// }

// WITH memo:
// React compares previous and next props. If user object reference
// hasn't changed, this component is SKIPPED entirely.
// Ch. 10, p. 156
export const UserCard = memo(function UserCard({ user }: UserCardProps) {
    console.log('%c[UserCard] ✅ Rendered (with memo)', 'color: green')

    return (
        <div className="card">
            <div className="card-badge">React.memo</div>
            <div className="card-avatar">{user.name[0]}</div>
            <h3 className="card-name">{user.name}</h3>
            <p className="card-email">{user.email}</p>
            <p className="card-id">User ID: #{user.id}</p>
            <p className="card-note">
                🟢 This card only re-renders when <code>user</code> prop changes.
            </p>
        </div>
    )
})

// BONUS: Custom comparison function (Ch. 10, p. 156)
// Return true  → props are "equal" → skip re-render
// Return false → props changed    → re-render
export const UserCardWithCompare = memo(
    function UserCardWithCompare({ user }: UserCardProps) {
        console.log('%c[UserCardWithCompare] Rendered', 'color: purple')
        return (
            <div className="card">
                <h3>{user.name}</h3>
                <p>{user.email}</p>
            </div>
        )
    },
    (prevProps, nextProps) => {
        // Only re-render if id OR name changed (ignoring email changes)
        return (
            prevProps.user.id === nextProps.user.id &&
            prevProps.user.name === nextProps.user.name
        )
    }
)