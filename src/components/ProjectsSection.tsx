import React, { useState } from 'react';
import { ExternalLink, ShoppingBag, Trophy, ArrowUpRight, Globe, Lock } from 'lucide-react';

interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  url: string;
  displayUrl: string;
  icon: React.ReactNode;
  metrics: { label: string; value: string }[];
  accentColor: string;
  previewImage: string;
}

export const ProjectsSection: React.FC = () => {
  const [activeModal, setActiveModal] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'dedicar',
      number: '01',
      title: 'Dedicar',
      subtitle: 'Regalos corporativos & Catálogo digital B2B',
      description:
        'Plataforma comercial y catálogo digital interactivo para Dedicar, empresa líder en regalos empresariales y productos personalizados importados en Argentina. Experiencia de compra B2B ágil y cotizaciones inmediatas.',
      tags: ['E-Commerce B2B', 'Catálogo Digital', 'Grabado Láser', 'Logística'],
      url: 'https://dedicar-arg.com',
      displayUrl: 'dedicar-arg.com',
      icon: <ShoppingBag size={22} color="#ffffff" />,
      metrics: [
        { label: 'CATÁLOGO', value: 'Importados & Stock' },
        { label: 'PERSONALIZACIÓN', value: 'Láser & Serigrafía' },
        { label: 'COTIZACIÓN', value: 'B2B Inmediata' },
      ],
      accentColor: '#ffffff',
      previewImage: './previews/dedicar.png',
    },
    {
      id: 'champagnat',
      number: '02',
      title: 'Champagnat Resultados',
      subtitle: 'Marcadores, posiciones y resultados en vivo para Rugby URBA',
      description:
        'Plataforma web en tiempo real para Club Champagnat Rugby. Marcadores en directo de Plantel Superior y Juveniles, fixtures, tablas de posiciones y estadísticas del torneo URBA Top 14.',
      tags: ['En Vivo', 'Rugby URBA', 'Top 14', 'PWA Realtime'],
      url: 'https://champa-resultados.pages.dev',
      displayUrl: 'champa-resultados.pages.dev',
      icon: <Trophy size={22} color="#ffffff" />,
      metrics: [
        { label: 'ACTUALIZACIÓN', value: 'En vivo al instante' },
        { label: 'CATEGORÍAS', value: 'Plantel Superior & Juv.' },
        { label: 'DISPONIBILIDAD', value: '99.9% Online' },
      ],
      accentColor: '#ffffff',
      previewImage: './previews/champa.png',
    },
  ];

  return (
    <section
      id="proyectos"
      className="projects-section-container"
      style={{
        padding: '5rem 0',
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div className="container-12col">
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="mono-label" style={{ marginBottom: '0.75rem' }}>
            <span style={{ color: '#ffffff' }}>●</span> PROYECTOS DESTACADOS
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '1.25rem',
            }}
          >
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
              Soluciones digitales de alto impacto
            </h2>

            <span
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.85rem',
                color: '#d4d4d8',
              }}
            >
              ( Casos de éxito en producción )
            </span>
          </div>
        </div>

        {/* 2 Glassmorphism Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card project-card-item"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                borderRadius: '16px',
                transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              <div>
                {/* Card Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 12,
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {project.icon}
                    </div>

                    <div>
                      <span
                        style={{
                          fontFamily: 'DM Sans, sans-serif',
                          fontSize: '0.72rem',
                          color: '#a1a1aa',
                          letterSpacing: '0.5px',
                        }}
                      >
                        N.{project.number}
                      </span>
                      <h3
                        style={{
                          fontFamily: 'Urbanist, Outfit, sans-serif',
                          fontWeight: 800,
                          fontSize: '1.5rem',
                          color: '#ffffff',
                          margin: 0,
                          lineHeight: 1.1,
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      textDecoration: 'none',
                      transition: 'all 0.25s ease',
                      flexShrink: 0,
                    }}
                    title={`Abrir ${project.displayUrl}`}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#ffffff';
                      e.currentTarget.style.color = '#000000';
                      e.currentTarget.style.boxShadow = '0 0 20px rgba(255,255,255,0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                {/* Subtitle & Description */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.82rem',
                      color: '#ffffff',
                      fontWeight: 600,
                      marginBottom: '0.4rem',
                    }}
                  >
                    ( {project.subtitle} )
                  </div>
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.9rem',
                      color: '#a1a1aa',
                      lineHeight: 1.55,
                      margin: 0,
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Real Browser Index Preview Window ("Pantallita del index") */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="browser-preview-frame"
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    borderRadius: 12,
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    backgroundColor: '#0c0c0e',
                    overflow: 'hidden',
                    marginBottom: '1.5rem',
                    position: 'relative',
                    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.65)',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.45)';
                    e.currentTarget.style.boxShadow = '0 16px 40px rgba(0, 0, 0, 0.85), 0 0 24px rgba(255, 255, 255, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.65)';
                  }}
                >
                  {/* Browser Chrome Bar */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 12px',
                      backgroundColor: 'rgba(24, 24, 27, 0.95)',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {/* Traffic Light Dots */}
                    <div style={{ display: 'flex', gap: '6px', alignItems: 'center', width: '50px' }}>
                      <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#ff5f56', opacity: 0.9 }} />
                      <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#ffbd2e', opacity: 0.9 }} />
                      <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#27c93f', opacity: 0.9 }} />
                    </div>

                    {/* Address Bar Pill */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        padding: '3px 12px',
                        borderRadius: '100px',
                        fontSize: '11px',
                        fontFamily: 'DM Sans, sans-serif',
                        color: '#ffffff',
                      }}
                    >
                      <Lock size={10} color="#22c55e" />
                      <span style={{ fontWeight: 500 }}>{project.displayUrl}</span>
                    </div>

                    {/* Live indicator badge */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', width: '50px', justifyContent: 'flex-end' }}>
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          backgroundColor: '#22c55e',
                          boxShadow: '0 0 8px #22c55e',
                        }}
                      />
                      <span style={{ fontSize: '10px', color: '#a1a1aa', fontFamily: 'DM Sans, sans-serif' }}>
                        Live
                      </span>
                    </div>
                  </div>

                  {/* Browser Screen Content Preview */}
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '16 / 9.5',
                      overflow: 'hidden',
                      backgroundColor: '#050505',
                    }}
                  >
                    <img
                      src={project.previewImage}
                      alt={`Index de ${project.title}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top center',
                        display: 'block',
                        transition: 'transform 0.4s ease',
                      }}
                      className="preview-screen-img"
                    />

                    {/* Hover Floating Action Pill */}
                    <div
                      className="preview-hover-overlay"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 0.25s ease',
                        backdropFilter: 'blur(3px)',
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          backgroundColor: '#ffffff',
                          color: '#000000',
                          padding: '8px 18px',
                          borderRadius: '100px',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          fontFamily: 'DM Sans, sans-serif',
                          boxShadow: '0 4px 20px rgba(255, 255, 255, 0.4)',
                        }}
                      >
                        <Globe size={15} />
                        Visitar index en vivo
                        <ArrowUpRight size={15} />
                      </span>
                    </div>
                  </div>
                </a>

                {/* Metrics row */}
                <div
                  className="project-metrics-grid"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))',
                    gap: '12px',
                    marginBottom: '1.25rem',
                    borderTop: '1px dashed rgba(255, 255, 255, 0.12)',
                    paddingTop: '1rem',
                  }}
                >
                  {project.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div
                        style={{
                          fontFamily: 'DM Sans, sans-serif',
                          fontSize: '9px',
                          color: '#a1a1aa',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                        }}
                      >
                        {m.label}
                      </div>
                      <div
                        style={{
                          fontFamily: 'DM Sans, sans-serif',
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          color: '#ffffff',
                        }}
                      >
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags Row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-badge">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal Preview if triggered */}
      {activeModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
          }}
          onClick={() => setActiveModal(null)}
        >
          <div
            className="glass-card project-modal-content"
            style={{
              maxWidth: '680px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '2rem',
              borderColor: '#ffffff',
              boxShadow: '0 20px 60px rgba(0,0,0,0.9), 0 0 30px rgba(255,255,255,0.15)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {activeModal.icon}
                <h3
                  style={{
                    fontFamily: 'Urbanist, sans-serif',
                    fontWeight: 800,
                    fontSize: '1.6rem',
                    color: '#ffffff',
                    margin: 0,
                  }}
                >
                  {activeModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                style={{
                  background: 'none',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#ffffff',
                  borderRadius: '50%',
                  width: 32,
                  height: 32,
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              >
                ✕
              </button>
            </div>

            <div
              style={{
                borderRadius: '10px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.2)',
                marginBottom: '1.5rem',
              }}
            >
              <img
                src={activeModal.previewImage}
                alt={activeModal.title}
                style={{ width: '100%', display: 'block' }}
              />
            </div>

            <p style={{ color: '#d4d4d8', lineHeight: 1.6, marginBottom: '2rem' }}>
              {activeModal.description}
            </p>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href={activeModal.url}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ textDecoration: 'none', width: '100%', justifyContent: 'center' }}
              >
                <span>Visitar {activeModal.displayUrl}</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .browser-preview-frame:hover .preview-screen-img {
          transform: scale(1.03);
        }
        .browser-preview-frame:hover .preview-hover-overlay {
          opacity: 1 !important;
        }
        @media (max-width: 768px) {
          .projects-section-container {
            padding: 3.5rem 0 !important;
          }
          .project-card-item {
            padding: 1.25rem !important;
          }
          .project-modal-content {
            padding: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
};
