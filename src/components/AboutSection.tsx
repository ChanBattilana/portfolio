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
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        backgroundColor: 'rgba(5, 7, 10, 0.4)',
      }}
    >
      <div className="container-12col">
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="mono-label" style={{ marginBottom: '0.75rem' }}>
            <span style={{ color: '#00f5d4' }}>●</span> SOBRE MÍ
          </div>
          <h2
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 4.5vw, 3.8rem)',
              color: '#ffffff',
              letterSpacing: '-0.03em',
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
                color: '#e0e0e6',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}
            >
              Soy desarrollador web y especialista en negocios digitales graduado de la{' '}
              <strong style={{ color: '#00f5d4', fontWeight: 600 }}>
                UCA (Universidad Católica Argentina, Buenos Aires)
              </strong>
              . Mi objetivo es unir la programación moderna con la estrategia para crear sitios web y sistemas digitales exitosos, rápidos y sencillos de usar.
            </p>

            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                color: '#a0a0ab',
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
                  padding: '1.25rem',
                  borderRadius: 12,
                  background: 'rgba(255, 255, 255, 0.025)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <Code size={20} color="#00f5d4" style={{ marginBottom: '12px' }} />
                <h4 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#fff', fontSize: '1.05rem', margin: '0 0 8px 0' }}>
                  Desarrollo Web Completo
                </h4>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', color: '#8e8e93', margin: 0, lineHeight: 1.5 }}>
                  Creación de páginas web y aplicaciones modernas que cargan al instante y funcionan de forma impecable en celulares y computadoras.
                </p>
              </div>

              <div
                style={{
                  padding: '1.25rem',
                  borderRadius: 12,
                  background: 'rgba(255, 255, 255, 0.025)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <Briefcase size={20} color="#00f2fe" style={{ marginBottom: '12px' }} />
                <h4 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#fff', fontSize: '1.05rem', margin: '0 0 8px 0' }}>
                  Estrategia de Negocios
                </h4>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', color: '#8e8e93', margin: 0, lineHeight: 1.5 }}>
                  Planificación digital, optimización de tiendas online y mejoras en los procesos de atención y conversión de clientes.
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
              className="glass-card about-uca-card"
              style={{
                padding: '2rem',
                border: '1px solid rgba(0, 245, 212, 0.2)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.75rem' }}>
                <GraduationCap size={26} color="#00f5d4" />
                <div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: '#00f5d4', fontWeight: 600 }}>
                    FORMACIÓN PROFESIONAL
                  </div>
                  <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#fff', fontSize: '1.25rem', margin: 0 }}>
                    UCA Buenos Aires
                  </h3>
                </div>
              </div>

              {/* Data Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '1rem' }}>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: '#8e8e93' }}>
                    UNIVERSIDAD
                  </span>
                  <div style={{ color: '#fff', fontWeight: 500, marginTop: '4px' }}>
                    Universidad Católica Argentina (UCA)
                  </div>
                  <span style={{ fontSize: '0.82rem', color: '#8e8e93' }}>Buenos Aires, Argentina</span>
                </div>

                <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '1rem' }}>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: '#8e8e93' }}>
                    ESPECIALIDADES
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#e0e0e6' }}>
                      <CheckCircle2 size={14} color="#00f5d4" />
                      <span>Gestión de Negocios Digitales</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#e0e0e6' }}>
                      <CheckCircle2 size={14} color="#00f5d4" />
                      <span>Desarrollo de Software Web</span>
                    </div>
                  </div>
                </div>

                <div>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: '#8e8e93' }}>
                    TECNOLOGÍAS QUE UTILIZO
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '10px' }}>
                    {['React', 'TypeScript', 'Node.js', 'Next.js', 'Bases de datos', 'Tiendas Online', 'E-commerce', 'Diseño Web'].map((tech) => (
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

