import { useState } from 'react'
import { Dashboard } from './components/Dashboard'
import { ParentComponent } from './components/Button'
import './index.css'

export default function App() {
    const [view, setView] = useState('dashboard')

    return (
        <div className="app">
            <header className="app-header">
                <h1>⚡ Lab 9.1 – React Performance Optimization</h1>
                <nav className="app-nav">
                    <button
                        className={view === 'dashboard' ? 'active' : ''}
                        onClick={() => setView('dashboard')}
                    >
                        Dashboard (memo + useMemo)
                    </button>
                    <button
                        className={view === 'callback' ? 'active' : ''}
                        onClick={() => setView('callback')}
                    >
                        useCallback Demo
                    </button>
                </nav>
            </header>
            <main className="app-main">
                {view === 'dashboard' ? <Dashboard /> : <ParentComponent />}
            </main>
        </div>
    )
}