import React from 'react';
import { ArrowDownRight, Terminal } from 'lucide-react';
import { Hero3DCanvas } from './Hero3DCanvas';

export const HeroSection: React.FC = () => {
  const scrollToProjects = () => {
    const el = document.getElementById('proyectos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        padding: '4rem 0 6rem 0',
        overflow: 'hidden',
      }}
    >
      {/* 3D Distorted Organic Mesh Blob Floating Canvas Background */}
      <Hero3DCanvas />

      <div className="container-12col" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        {/* Editorial Header Monospaced Tag */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(0, 245, 212, 0.06)',
            border: '1px solid rgba(0, 245, 212, 0.25)',
            padding: '6px 14px',
            borderRadius: '100px',
            marginBottom: '2rem',
          }}
        >
          <Terminal size={14} color="#00f5d4" />
          <span
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.78rem',
              color: '#00f5d4',
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            N.01 ( editorial portfolio )
          </span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
          <span
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.75rem',
              color: '#8e8e93',
            }}
          >
            LATAM 2026
          </span>
        </div>

        {/* Hero Name Title */}
        <div style={{ maxWidth: '950px' }}>
          <h1
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(4.2rem, 9.5vw, 9.5rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              margin: '0 0 1.75rem 0',
              textTransform: 'uppercase',
              userSelect: 'none',
              textShadow: '0 10px 40px rgba(0, 0, 0, 0.8)',
            }}
          >
            SANTOS
            <br />
            BATTILANA
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(1.15rem, 2.2vw, 1.65rem)',
              color: '#a0a0ab',
              maxWidth: '680px',
              lineHeight: 1.4,
              marginBottom: '3rem',
            }}
          >
            Desarrollador full-stack | Gestión de Negocios Digitales
          </p>

          {/* Surgical Cyan-Aquamarine Action Button & Badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <button
              onClick={scrollToProjects}
              className="btn-cyan"
              data-cursor="EXPLORAR"
            >
              <span>Ver proyectos</span>
              <ArrowDownRight size={18} />
            </button>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.78rem',
                color: '#8e8e93',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="status-dot" />
                <span style={{ color: '#f5f5f7' }}>Disponible para proyectos</span>
              </div>
              <span style={{ color: 'rgba(255,255,255,0.15)' }}>•</span>
              <span>UCA Alumni</span>
            </div>
          </div>
        </div>

        {/* Technical Coordinates Footnote */}
        <div
          style={{
            position: 'absolute',
            bottom: '-3.5rem',
            left: '2rem',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.72rem',
            color: 'rgba(255, 255, 255, 0.25)',
            display: 'flex',
            gap: '24px',
          }}
          className="hide-mobile"
        >
          <span>SPEC: 12-COL MODULAR</span>
          <span>COORDS: 34.6037° S, 58.3816° W</span>
          <span>STACK: REACT / THREEJS / CLOUDFLARE</span>
        </div>
      </div>
    </section>
  );
};
