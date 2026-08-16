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
      className="hero-section-container"
      style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        padding: '3.5rem 0 5rem 0',
        overflow: 'hidden',
      }}
    >
      {/* 3D Distorted Organic Mesh Blob Floating Canvas Background */}
      <Hero3DCanvas />

      <div className="container-12col" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        {/* Friendly Professional Tag */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            background: 'rgba(0, 245, 212, 0.06)',
            border: '1px solid rgba(0, 245, 212, 0.25)',
            padding: '6px 14px',
            borderRadius: '100px',
            marginBottom: '1.75rem',
            maxWidth: '100%',
          }}
        >
          <Terminal size={14} color="#00f5d4" />
          <span
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#00f5d4',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
            }}
          >
            DESARROLLO WEB & NEGOCIOS DIGITALES
          </span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }} className="hide-mobile">|</span>
          <span
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.75rem',
              color: '#8e8e93',
            }}
            className="hide-mobile"
          >
            BUENOS AIRES, ARGENTINA
          </span>
        </div>

        {/* Hero Name Title */}
        <div style={{ maxWidth: '950px' }}>
          <h1
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2.4rem, 9.5vw, 9.5rem)',
              lineHeight: 0.98,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              margin: '0 0 1.5rem 0',
              textTransform: 'uppercase',
              userSelect: 'none',
              textShadow: '0 10px 40px rgba(0, 0, 0, 0.8)',
              wordBreak: 'break-word',
            }}
          >
            SANTOS
            <br />
            BATTILANA
          </h1>

          {/* Subtitle - Easy to understand for all ages */}
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(1rem, 2.2vw, 1.4rem)',
              color: '#e0e0e6',
              maxWidth: '720px',
              lineHeight: 1.5,
              marginBottom: '2.25rem',
            }}
          >
            Desarrollador Web & Especialista en Negocios Digitales.
            <br />
            <span style={{ fontSize: '0.95em', color: '#a0a0ab', fontWeight: 300 }}>
              Creo sitios web modernos, sistemas y soluciones digitales fáciles de usar para potenciar empresas y proyectos.
            </span>
          </p>

          {/* Cyan Action Button & Clear Badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
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
                gap: '10px',
                flexWrap: 'wrap',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.8rem',
                color: '#8e8e93',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="status-dot" />
                <span style={{ color: '#f5f5f7', fontWeight: 500 }}>Disponible para nuevos proyectos</span>
              </div>
              <span style={{ color: 'rgba(255,255,255,0.15)' }}>•</span>
              <span style={{ color: '#00f5d4' }}>Graduado en UCA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

