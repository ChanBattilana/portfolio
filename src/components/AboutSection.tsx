import React from 'react';
import { GraduationCap, Briefcase, Code, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="sobre-mi"
      style={{
        padding: '7rem 0',
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        backgroundColor: 'rgba(5, 7, 10, 0.4)',
      }}
    >
      <div className="container-12col">
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="mono-label" style={{ marginBottom: '0.75rem' }}>
            <span style={{ color: '#00f5d4' }}>02 —</span> SOBRE MÍ
          </div>
          <h2
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              color: '#ffffff',
              letterSpacing: '-0.03em',
              margin: 0,
            }}
          >
            Ingeniería de software + Visión de negocios
          </h2>
        </div>

        {/* Grid layout: Left Main Paragraph, Right Stats & Background Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Main Narrative Paragraph (7 columns) */}
          <div
            style={{
              gridColumn: 'span 7',
            }}
            className="col-mobile-12"
          >
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '1.2rem',
                color: '#e0e0e6',
                lineHeight: 1.7,
                marginBottom: '1.75rem',
              }}
            >
              Soy desarrollador full-stack y especialista en gestión de negocios digitales formado en la{' '}
              <strong style={{ color: '#00f5d4', fontWeight: 600 }}>
                UCA (Universidad Católica Argentina, Buenos Aires)
              </strong>
              . Mi trabajo se sitúa en la intersección exacta entre la precisión técnica del desarrollo de software moderno y la visión estratégica operacional de los productos digitales.
            </p>

            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '1.05rem',
                color: '#a0a0ab',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
              }}
            >
              Diseño e implemento arquitecturas web robustas, sistemas en tiempo real y aplicaciones web escalables orientadas a optimizar procesos de negocio, conversión de ecommerce y experiencia de usuario.
            </p>

            {/* Core Pillars Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.5rem',
              }}
              className="col-mobile-12"
            >
              <div
                style={{
                  padding: '1.5rem',
                  borderRadius: 12,
                  background: 'rgba(255, 255, 255, 0.025)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <Code size={20} color="#00f5d4" style={{ marginBottom: '12px' }} />
                <h4 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#fff', fontSize: '1.1rem', margin: '0 0 8px 0' }}>
                  Full-Stack Architecture
                </h4>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', color: '#8e8e93', margin: 0, lineHeight: 1.5 }}>
                  Desarrollo frontend React/TypeScript, APIs REST/GraphQL, bases de datos y despliegue continuo en el edge.
                </p>
              </div>

              <div
                style={{
                  padding: '1.5rem',
                  borderRadius: 12,
                  background: 'rgba(255, 255, 255, 0.025)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <Briefcase size={20} color="#00f2fe" style={{ marginBottom: '12px' }} />
                <h4 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#fff', fontSize: '1.1rem', margin: '0 0 8px 0' }}>
                  Gestión de Negocios
                </h4>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', color: '#8e8e93', margin: 0, lineHeight: 1.5 }}>
                  Modelado de negocios digitales, optimización de conversión, estrategia de producto y métricas operacionales.
                </p>
              </div>
            </div>
          </div>

          {/* Academic & Technical Background Card (5 columns) */}
          <div
            style={{
              gridColumn: 'span 5',
            }}
            className="col-mobile-12"
          >
            <div
              className="glass-card"
              style={{
                padding: '2.5rem',
                border: '1px solid rgba(0, 245, 212, 0.2)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}>
                <GraduationCap size={26} color="#00f5d4" />
                <div>
                  <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.72rem', color: '#00f5d4' }}>
                    FORMACIÓN ACADÉMICA
                  </div>
                  <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#fff', fontSize: '1.35rem', margin: 0 }}>
                    UCA Buenos Aires
                  </h3>
                </div>
              </div>

              {/* Data Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '1rem' }}>
                  <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.75rem', color: '#8e8e93' }}>
                    INSTITUCIÓN
                  </span>
                  <div style={{ color: '#fff', fontWeight: 500, marginTop: '4px' }}>
                    Universidad Católica Argentina (UCA)
                  </div>
                  <span style={{ fontSize: '0.82rem', color: '#8e8e93' }}>Buenos Aires, Argentina</span>
                </div>

                <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '1rem' }}>
                  <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.75rem', color: '#8e8e93' }}>
                    DISCIPLINAS CLAVE
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#e0e0e6' }}>
                      <CheckCircle2 size={14} color="#00f5d4" />
                      <span>Gestión de Negocios Digitales</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#e0e0e6' }}>
                      <CheckCircle2 size={14} color="#00f5d4" />
                      <span>Ingeniería & Desarrollo Full-Stack</span>
                    </div>
                  </div>
                </div>

                <div>
                  <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.75rem', color: '#8e8e93' }}>
                    TECNOLOGÍAS & HERRAMIENTAS
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '10px' }}>
                    {['React', 'TypeScript', 'Node.js', 'Next.js', 'Cloudflare', 'PostgreSQL', 'Three.js', 'Tailwind', 'E-commerce API'].map((tech) => (
                      <span key={tech} className="tag-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .col-mobile-12 {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
};
