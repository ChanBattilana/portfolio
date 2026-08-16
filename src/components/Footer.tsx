import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        backgroundColor: '#050505',
        padding: '2.5rem 0',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        className="container-12col footer-content"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.25rem',
        }}
      >
        {/* Left Copyright */}
        <div className="footer-copyright" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', color: '#8e8e93' }}>
          <div>© 2026 SANTOS BATTILANA. TODOS LOS DERECHOS RESERVADOS.</div>
          <div style={{ fontSize: '0.75rem', color: '#a0a0ab', marginTop: '4px' }}>
            Desarrollo Web & Gestión de Negocios Digitales • UCA, Buenos Aires
          </div>
        </div>

        {/* Middle location tag */}
        <div
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.8rem',
            color: '#00f5d4',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
          className="hide-mobile"
        >
          <span className="status-dot" />
          <span>SANTOS BATTILANA</span>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          data-cursor="INICIO"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#ffffff',
            padding: '8px 18px',
            borderRadius: '100px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.8rem',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#00f5d4';
            e.currentTarget.style.color = '#050505';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.color = '#ffffff';
          }}
        >
          <span>Volver arriba</span>
          <ArrowUp size={14} />
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column !important;
            text-align: center !important;
            align-items: center !important;
          }
        }
      `}</style>
    </footer>
  );
};

