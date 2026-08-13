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
        padding: '3rem 0',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        className="container-12col"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}
      >
        {/* Left Monospaced Copyright */}
        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', color: '#8e8e93' }}>
          <div>© 2026 SANTOS BATTILANA. ALL RIGHTS RESERVED.</div>
          <div style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.25)', marginTop: '4px' }}>
            Desarrollador full-stack & Gestión de Negocios Digitales (UCA, Buenos Aires)
          </div>
        </div>

        {/* Middle Tech Specs */}
        <div
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.72rem',
            color: '#00f5d4',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
          className="hide-mobile"
        >
          <span>GRID: 12-COL MODULAR</span>
          <span>•</span>
          <span>STATUS: ONLINE</span>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          data-cursor="TOP"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#ffffff',
            padding: '8px 16px',
            borderRadius: '100px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.75rem',
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
          <span>VOLVER ARRIBA</span>
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
};
