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
      {/* Radiant White Ambient Glow Backdrop */}
      <div
        style={{
          position: 'absolute',
          top: '5%',
          left: '0%',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.02) 50%, transparent 75%)',
          pointerEvents: 'none',
          filter: 'blur(60px)',
          zIndex: 1,
        }}
      />

      {/* 3D Distorted Liquid Chrome Mesh Blob Floating Canvas Background */}
      <Hero3DCanvas />

      <div className="container-12col" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        {/* Friendly Professional Tag */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            padding: '6px 14px',
            borderRadius: '100px',
            marginBottom: '1.75rem',
            maxWidth: '100%',
          }}
        >
          <Terminal size={14} color="#ffffff" />
          <span
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#ffffff',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
            }}
          >
            DESARROLLO WEB & NEGOCIOS DIGITALES
          </span>
          <span style={{ color: 'rgba(255,255,255,0.25)' }} className="hide-mobile">|</span>
          <span
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.75rem',
              color: '#a1a1aa',
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
              textShadow: '0 10px 40px rgba(0, 0, 0, 0.9)',
              wordBreak: 'break-word',
            }}
          >
            SANTOS
            <br />
            BATTILANA
          </h1>

          {/* Subtitle - High contrast and crystal clarity */}
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(1rem, 2.2vw, 1.4rem)',
              color: '#f4f4f5',
              maxWidth: '720px',
              lineHeight: 1.5,
              marginBottom: '2.25rem',
            }}
          >
            Desarrollador Web & Especialista en Negocios Digitales.
            <br />
            <span style={{ fontSize: '0.95em', color: '#a1a1aa', fontWeight: 300 }}>
              Creo sitios web modernos, sistemas y soluciones digitales fáciles de usar para potenciar empresas y proyectos.
            </span>
          </p>

          {/* High-contrast Pure White Pill Button & Status Badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <button
              onClick={scrollToProjects}
              className="btn-primary"
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
                color: '#a1a1aa',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="status-dot" />
                <span style={{ color: '#ffffff', fontWeight: 500 }}>Disponible para nuevos proyectos</span>
              </div>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span>
              <span
                style={{
                  color: '#ffffff',
                  background: 'rgba(255, 255, 255, 0.08)',
                  padding: '3px 10px',
                  borderRadius: '100px',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                }}
              >
                Graduado en UCA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

