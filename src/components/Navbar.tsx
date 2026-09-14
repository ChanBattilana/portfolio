import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [timeStr, setTimeStr] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format Buenos Aires local time
      const timeInBsAs = now.toLocaleTimeString('es-AR', {
        timeZone: 'America/Argentina/Buenos_Aires',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setTimeStr(timeInBsAs);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 80,
        width: '100%',
        backgroundColor: scrolled || mobileMenuOpen ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled || mobileMenuOpen ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid transparent',
        transition: 'all 0.3s ease',
        padding: '1rem 0',
      }}
    >
      <div className="container-12col" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand / Name Tag */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            setMobileMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            color: '#ffffff',
          }}
        >
          <span className="status-dot" />
          <span
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 800,
              fontSize: '0.92rem',
              letterSpacing: '0.5px',
              color: '#ffffff',
            }}
          >
            SANTOS BATTILANA
          </span>
          <span
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.78rem',
              color: '#a1a1aa',
              borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
              paddingLeft: '10px',
            }}
            className="hide-mobile"
          >
            PORTAFOLIO
          </span>
        </a>

        {/* Location & Realtime Clock */}
        <div
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.8rem',
            color: '#a1a1aa',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
          className="hide-mobile"
        >
          <span>BUENOS AIRES</span>
          <span style={{ color: 'rgba(255,255,255,0.25)' }}>•</span>
          <span style={{ color: '#ffffff', fontWeight: 700 }}>{timeStr} hs</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <button
            onClick={() => scrollTo('proyectos')}
            style={{
              background: 'none',
              border: 'none',
              color: '#e4e4e7',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#e4e4e7')}
          >
            Proyectos
          </button>

          <button
            onClick={() => scrollTo('sobre-mi')}
            style={{
              background: 'none',
              border: 'none',
              color: '#e4e4e7',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#e4e4e7')}
          >
            Sobre mí
          </button>

          <button
            onClick={() => scrollTo('contacto')}
            style={{
              background: 'none',
              border: 'none',
              color: '#e4e4e7',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#e4e4e7')}
          >
            Contacto
          </button>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="show-mobile"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menú de navegación"
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            color: '#ffffff',
            padding: '8px',
            borderRadius: '8px',
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            padding: '1.5rem 1rem 2rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            backgroundColor: 'rgba(0, 0, 0, 0.98)',
          }}
        >
          <button
            onClick={() => scrollTo('proyectos')}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#ffffff',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '1rem',
              fontWeight: 600,
              padding: '12px 16px',
              borderRadius: '10px',
              textAlign: 'left',
              cursor: 'pointer',
            }}
          >
            ● Proyectos
          </button>
          <button
            onClick={() => scrollTo('sobre-mi')}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#ffffff',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '1rem',
              fontWeight: 600,
              padding: '12px 16px',
              borderRadius: '10px',
              textAlign: 'left',
              cursor: 'pointer',
            }}
          >
            ● Sobre mí
          </button>
          <button
            onClick={() => scrollTo('contacto')}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#ffffff',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '1rem',
              fontWeight: 600,
              padding: '12px 16px',
              borderRadius: '10px',
              textAlign: 'left',
              cursor: 'pointer',
            }}
          >
            ● Contacto
          </button>

          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.8rem',
              color: '#a1a1aa',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '0.75rem',
              borderTop: '1px dashed rgba(255, 255, 255, 0.15)',
            }}
          >
            <span>BUENOS AIRES, ARG</span>
            <span style={{ color: '#ffffff', fontWeight: 700 }}>{timeStr} hs</span>
          </div>
        </div>
      )}
    </header>
  );
};

