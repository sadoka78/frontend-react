import { useMemo } from 'react'

interface AnalyticsChartProps {
    items: string[]
}

// Simulates an expensive calculation (10 million iterations).
function calculateAnalytics(items: string[]): number {
    console.log('%c[AnalyticsChart] 🔢 calculateAnalytics() running...', 'color: orange')
    let result = 0
    for (let i = 0; i < 10_000_000; i++) {
        result += Math.sqrt(i)
    }
    return result + items.length
}

export function AnalyticsChart({ items }: AnalyticsChartProps) {
    // WITHOUT useMemo (commented out):
    // calculateAnalytics() runs on EVERY render — pure wasted CPU.
    //
    // const analytics = calculateAnalytics(items)

    // WITH useMemo:
    // Only recalculates when `items` array reference changes.
    // Ch. 10, p. 160
    const analytics = useMemo(() => calculateAnalytics(items), [items])

    console.log('%c[AnalyticsChart] 📊 Component rendered', 'color: blue')

    const formatted = analytics.toLocaleString('en-US', { maximumFractionDigits: 0 })

    return (
        <div className="card card--chart">
            <div className="card-badge">useMemo</div>
            <h3>Analytics</h3>

            <div className="chart-bars">
                <div className="bar" style={{ height: '60%' }}><span>Q1</span></div>
                <div className="bar" style={{ height: '80%' }}><span>Q2</span></div>
                <div className="bar" style={{ height: '45%' }}><span>Q3</span></div>
                <div className="bar" style={{ height: '90%' }}><span>Q4</span></div>
            </div>

            <div className="chart-value">
                <p>Computed value: <strong>{formatted}</strong></p>
                <p>Items tracked: <strong>{items.length}</strong></p>
            </div>

            <p className="card-note">
                🟡 Expensive calc (10M iterations) runs only when{' '}
                <code>items</code> changes. Not on every parent re-render.
            </p>
        </div>
    )
}