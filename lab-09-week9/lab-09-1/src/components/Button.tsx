import { useState, useCallback, memo } from 'react'

interface ButtonProps {
    onClick: () => void
    label: string
    variant?: 'primary' | 'secondary'
}

// Memoized Button — only re-renders if onClick or label changes.
// Without useCallback in parent, onClick is NEW every render
// → memo sees "prop changed" → re-renders anyway. Wasted.
// Ch. 10, p. 166
export const Button = memo(function Button({ onClick, label, variant = 'primary' }: ButtonProps) {
    console.log(`%c[Button "${label}"] 🔘 Rendered`, 'color: #e91e63')
    return (
        <button className={`btn btn--${variant}`} onClick={onClick}>
            {label}
        </button>
    )
})

export function ParentComponent() {
    const [count, setCount] = useState(0)
    const [message, setMessage] = useState('')

    // WITHOUT useCallback (commented out):
    // handleClick is a brand-new function object every render.
    // Even with memo on Button, React sees a new prop → re-renders.
    //
    // const handleClick = () => setMessage('Button clicked!')

    // WITH useCallback:
    // Same function reference across renders → memo works correctly.
    const handleClick = useCallback(() => {
        setMessage('Button clicked! ✅')
    }, [])

    const handleIncrement = useCallback(() => {
        setCount((c) => c + 1)
    }, [])

    const handleReset = useCallback(() => {
        setCount(0)
        setMessage('')
    }, [])

    return (
        <div className="callback-demo">
            <div className="callback-header">
                <h2>useCallback Demo</h2>
                <p>
                    All three buttons are wrapped in <code>React.memo</code>.
                    Because their <code>onClick</code> handlers are stabilized with{' '}
                    <code>useCallback</code>, they do <strong>not</strong> re-render
                    when <code>count</code> changes. Check the console!
                </p>
            </div>

            <div className="callback-state">
                <span className="state-label">Count:</span>
                <span className="counter-value">{count}</span>
                {message && <span className="callback-message">{message}</span>}
            </div>

            <div className="callback-buttons">
                <Button onClick={handleClick} label="Click me" />
                <Button onClick={handleIncrement} label="Increment" />
                <Button onClick={handleReset} label="Reset" variant="secondary" />
            </div>

            <div className="callback-explanation">
                <h4>Why does this matter?</h4>
                <ul>
                    <li>
                        <code>memo</code> alone is not enough — if you pass an unstable
                        function, memo is bypassed.
                    </li>
                    <li>
                        <code>useCallback</code> + <code>memo</code> together = child
                        components only re-render when truly necessary.
                    </li>
                    <li>
                        Always include all values used inside the callback in the deps array.
                    </li>
                </ul>
            </div>
        </div>
    )
}