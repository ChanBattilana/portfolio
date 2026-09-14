import React from 'react';
import { GraduationCap, Briefcase, Code, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="sobre-mi"
      className="about-section-container"
      style={{
        padding: '5rem 0',
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      {/* Subtle White Ambient Spotlight */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          right: '0%',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, transparent 65%)',
          pointerEvents: 'none',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />

      <div className="container-12col" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="mono-label" style={{ marginBottom: '0.75rem' }}>
            <span style={{ color: '#ffffff' }}>●</span> SOBRE MÍ
          </div>
          <h2
            style={{
              fontFamily: 'Urbanist, Outfit, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 4.2vw, 3.5rem)',
              color: '#ffffff',
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            Tecnología moderna + Visión de negocios
          </h2>
        </div>

        {/* Grid layout: Left Main Paragraph, Right Stats & Background Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2.5rem',
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
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                color: '#ffffff',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}
            >
              Soy desarrollador web y estudiante de Negocios Digitales en la{' '}
              <strong style={{ color: '#ffffff', fontWeight: 700, borderBottom: '1px solid rgba(255, 255, 255, 0.6)' }}>
                UCA (Universidad Católica Argentina, Buenos Aires)
              </strong>
              . Mi objetivo es unir la programación moderna con la estrategia para crear sitios web y sistemas digitales exitosos, rápidos y sencillos de usar.
            </p>

            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                color: '#d4d4d8',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}
            >
              Diseño páginas web, tiendas online y aplicaciones a medida enfocadas en resolver necesidades reales, mejorar ventas y brindar una excelente experiencia a cada visitante.
            </p>

            {/* Core Pillars Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.25rem',
              }}
              className="col-mobile-12 grid-mobile-1"
            >
              <div
                style={{
                  padding: '1.5rem',
                  borderRadius: 14,
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  transition: 'border-color 0.25s, transform 0.25s',
                }}
              >
                <Code size={22} color="#ffffff" style={{ marginBottom: '12px' }} />
                <h4 style={{ fontFamily: 'Urbanist, Outfit, sans-serif', color: '#ffffff', fontSize: '1.1rem', margin: '0 0 8px 0', fontWeight: 700 }}>
                  Desarrollo Web Completo
                </h4>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', color: '#d4d4d8', margin: 0, lineHeight: 1.5 }}>
                  Creación de páginas web y aplicaciones modernas que cargan al instante y funcionan de forma impecable en celulares y computadoras.
                </p>
              </div>

              <div
                style={{
                  padding: '1.5rem',
                  borderRadius: 14,
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  transition: 'border-color 0.25s, transform 0.25s',
                }}
              >
                <Briefcase size={22} color="#ffffff" style={{ marginBottom: '12px' }} />
                <h4 style={{ fontFamily: 'Urbanist, Outfit, sans-serif', color: '#ffffff', fontSize: '1.1rem', margin: '0 0 8px 0', fontWeight: 700 }}>
                  Estrategia de Negocios
                </h4>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', color: '#d4d4d8', margin: 0, lineHeight: 1.5 }}>
                  Planificación digital, optimización de tiendas online y mejoras en los procesos de atención y conversión de clientes.
                </p>
              </div>
            </div>
          </div>

          {/* Academic & Technical Background Inverted White Card (5 columns) */}
          <div
            style={{
              gridColumn: 'span 5',
            }}
            className="col-mobile-12"
          >
            <div
              className="about-uca-card"
              style={{
                padding: '2.25rem',
                backgroundColor: '#ffffff',
                color: '#09090b',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.95)',
                boxShadow: '0 25px 60px -10px rgba(0, 0, 0, 0.8), 0 0 45px rgba(255, 255, 255, 0.25)',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1.75rem' }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '12px',
                    backgroundColor: '#09090b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <GraduationCap size={26} color="#ffffff" />
                </div>
                <div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: '#52525b', fontWeight: 700, letterSpacing: '0.6px' }}>
                    ESTUDIANTE UNIVERSITARIO
                  </div>
                  <h3 style={{ fontFamily: 'Urbanist, Outfit, sans-serif', color: '#09090b', fontSize: '1.4rem', fontWeight: 800, margin: 0 }}>
                    UCA Buenos Aires
                  </h3>
                </div>
              </div>

              {/* Data Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ borderBottom: '1px solid rgba(0,0,0,0.08)', paddingBottom: '1rem' }}>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: '#71717a', fontWeight: 600 }}>
                    UNIVERSIDAD
                  </span>
                  <div style={{ color: '#09090b', fontWeight: 700, fontSize: '1.05rem', marginTop: '4px' }}>
                    Universidad Católica Argentina (UCA)
                  </div>
                  <span style={{ fontSize: '0.85rem', color: '#52525b' }}>Buenos Aires, Argentina • Carrera en curso</span>
                </div>

                <div style={{ borderBottom: '1px solid rgba(0,0,0,0.08)', paddingBottom: '1rem' }}>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: '#71717a', fontWeight: 600 }}>
                    ESPECIALIDADES
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#18181b', fontWeight: 600 }}>
                      <CheckCircle2 size={16} color="#000000" />
                      <span>Gestión de Negocios Digitales (En curso)</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#18181b', fontWeight: 600 }}>
                      <CheckCircle2 size={16} color="#000000" />
                      <span>Desarrollo de Software Web</span>
                    </div>
                  </div>
                </div>

                <div>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: '#71717a', fontWeight: 600 }}>
                    TECNOLOGÍAS QUE UTILIZO
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '10px' }}>
                    {['React', 'TypeScript', 'Node.js', 'Next.js', 'Bases de datos', 'Tiendas Online', 'E-commerce', 'Diseño Web'].map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontFamily: 'DM Sans, sans-serif',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          padding: '5px 12px',
                          borderRadius: '100px',
                          background: '#09090b',
                          color: '#ffffff',
                          transition: 'all 0.2s ease',
                          cursor: 'default',
                        }}
                      >
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
        @media (max-width: 768px) {
          .about-section-container {
            padding: 3.5rem 0 !important;
          }
          .about-uca-card {
            padding: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
};

