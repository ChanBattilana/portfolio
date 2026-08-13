import React, { useEffect, useState } from 'react';

export const Navbar: React.FC = () => {
  const [timeStr, setTimeStr] = useState('');
  const [scrolled, setScrolled] = useState(false);

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
        backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        transition: 'all 0.3s ease',
        padding: '1.25rem 0',
      }}
    >
      <div className="container-12col" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand / Name Tag */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          data-cursor="HOME"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            color: '#f5f5f7',
          }}
        >
          <span className="status-dot" />
          <span
            style={{
              fontFamily: 'Space Mono, monospace',
              fontWeight: 700,
              fontSize: '0.9rem',
              letterSpacing: '1px',
            }}
          >
            SANTOS BATTILANA
          </span>
          <span
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.72rem',
              color: '#8e8e93',
              borderLeft: '1px solid rgba(255, 255, 255, 0.15)',
              paddingLeft: '12px',
            }}
            className="hide-mobile"
          >
            N.01 / PORTFOLIO
          </span>
        </a>

        {/* Location & Realtime Clock */}
        <div
          style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '0.75rem',
            color: '#8e8e93',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
          className="hide-mobile"
        >
          <span>BUENOS AIRES, AR</span>
          <span style={{ color: '#00f5d4', fontWeight: 600 }}>{timeStr} ART</span>
        </div>

        {/* Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <button
            onClick={() => scrollTo('proyectos')}
            data-cursor="PROYECTOS"
            style={{
              background: 'none',
              border: 'none',
              color: '#f5f5f7',
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.8rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#00f5d4')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#f5f5f7')}
          >
            <span style={{ color: '#00f5d4' }}>01.</span> Proyectos
          </button>

          <button
            onClick={() => scrollTo('sobre-mi')}
            data-cursor="SOBRE MÍ"
            style={{
              background: 'none',
              border: 'none',
              color: '#f5f5f7',
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.8rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#00f5d4')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#f5f5f7')}
          >
            <span style={{ color: '#00f5d4' }}>02.</span> Sobre mí
          </button>

          <button
            onClick={() => scrollTo('contacto')}
            data-cursor="CONTACTO"
            style={{
              background: 'none',
              border: 'none',
              color: '#f5f5f7',
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.8rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#00f5d4')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#f5f5f7')}
          >
            <span style={{ color: '#00f5d4' }}>03.</span> Contacto
          </button>
        </nav>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hide-mobile {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
