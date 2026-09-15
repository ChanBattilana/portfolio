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
      {/* Radiant White Ambient Glow Backdrop (smooth multi-stop gradient without costly blur filter) */}
      <div
        style={{
          position: 'absolute',
          top: '2%',
          left: '-2%',
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.08) 25%, rgba(255, 255, 255, 0.02) 50%, transparent 70%)',
          pointerEvents: 'none',
          transform: 'translateZ(0)',
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
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            padding: '7px 16px',
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
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '0.8px',
              textTransform: 'uppercase',
            }}
          >
            DESARROLLO WEB & NEGOCIOS DIGITALES
          </span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }} className="hide-mobile">|</span>
          <span
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.75rem',
              color: '#d4d4d8',
            }}
            className="hide-mobile"
          >
            BUENOS AIRES, ARGENTINA
          </span>
        </div>

        {/* Hero Name Title with Modern Subtle Double-TT Harmony (Urbanist) */}
        <div style={{ maxWidth: '850px' }}>
          <h1
            style={{
              fontFamily: 'Urbanist, Outfit, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2.1rem, 5.4vw, 4.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.015em',
              color: '#ffffff',
              margin: '0 0 1.5rem 0',
              textTransform: 'uppercase',
              userSelect: 'none',
              textShadow: '0 10px 40px rgba(0, 0, 0, 0.95)',
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
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#ffffff',
              maxWidth: '680px',
              lineHeight: 1.55,
              marginBottom: '2.25rem',
            }}
          >
            Desarrollador Web & Especialista en Negocios Digitales.
            <br />
            <span style={{ fontSize: '0.95em', color: '#d4d4d8', fontWeight: 300 }}>
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
                color: '#d4d4d8',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="status-dot" />
                <span style={{ color: '#ffffff', fontWeight: 600 }}>Disponible para nuevos proyectos</span>
              </div>
              <span style={{ color: 'rgba(255,255,255,0.25)' }}>•</span>
              <span
                style={{
                  color: '#ffffff',
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '4px 12px',
                  borderRadius: '100px',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                }}
              >
                Estudiante en UCA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

