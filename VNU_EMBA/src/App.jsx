import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import Curriculum from './components/Curriculum';
import BusinessCTA from './components/BusinessCTA';
import Faculty from './components/Faculty';
import Admission from './components/Admission';
import Alumni from './components/Alumni';
import Contact from './components/Contact';

function App() {
    return (
        <div className="app-container">
            <Cursor />
            <Navbar />
            <Hero />
            <ValueProp />
            <Curriculum />
            <BusinessCTA />
            <Faculty />
            <Alumni />
            <Admission />
            <Contact />

            {/* Simple Footer */}
            <footer style={{ backgroundColor: 'var(--primary)', padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                <div className="container">
                    <div style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1rem' }}>萬能科技大學 EMBA</div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>© 2026 Vanung University EMBA. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
