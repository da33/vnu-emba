import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '核心價值', href: '#about' },
    { name: '特色課程', href: '#curriculum' },
    { name: '精英師資', href: '#faculty' },
    { name: '傑出校友', href: '#alumni' },
    { name: '招生資訊', href: '#admission' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, zIndex: 1000,
        backgroundColor: isScrolled || isMobileMenuOpen ? 'rgba(10, 25, 47, 0.98)' : 'transparent',
        borderBottom: isScrolled ? '1px solid rgba(197, 160, 89, 0.2)' : 'none',
        transition: 'all 0.3s ease',
        padding: isScrolled ? '0.75rem 0' : '1.25rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo Area */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '36px', height: '36px', backgroundColor: 'var(--accent)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: '900', color: 'var(--primary)', fontSize: '1.2rem'
          }}>V</div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span style={{ fontSize: '1.1rem', fontWeight: '900', color: 'white', letterSpacing: '0.1em' }}>VANUNG</span>
            <span style={{ fontSize: '0.65rem', color: 'var(--accent)', fontWeight: '700', letterSpacing: '0.2em' }}>EMBA</span>
          </div>
        </a>

        {/* Desktop Navigation - Hidden on Mobile */}
        <nav className="desktop-only" style={{ alignItems: 'center', gap: '2.5rem' }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} style={{ fontSize: '0.85rem', fontWeight: '600', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.05em' }}>
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-premium">預約面談</a>
        </nav>

        {/* Mobile Toggle - Hidden on Desktop */}
        <button
          className="mobile-only"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          backgroundColor: 'var(--primary)', padding: '2rem',
          display: 'flex', flexDirection: 'column', gap: '1.5rem',
          borderBottom: '2px solid var(--accent)'
        }} className="mobile-only">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.1rem', fontWeight: '700', color: 'white', textAlign: 'center' }}>
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="btn-premium" style={{ textAlign: 'center' }}>預約面談</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
