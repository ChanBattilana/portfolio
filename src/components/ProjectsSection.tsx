import React, { useState } from 'react';
import { ExternalLink, ShoppingBag, Trophy, ArrowUpRight } from 'lucide-react';

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
  previewType: 'dedicar' | 'champa';
}

export const ProjectsSection: React.FC = () => {
  const [activeModal, setActiveModal] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'dedicar',
      number: '01',
      title: 'Dedicar',
      subtitle: 'Catálogo digital, pedidos y logística',
      description:
        'Plataforma web para negocios que permite publicar productos en un catálogo digital interactivo, recibir pedidos de clientes y coordinar envíos de forma rápida y sencilla.',
      tags: ['Web', 'Tienda Online', 'Catálogo', 'Gestión de ventas'],
      url: 'https://dedicar.app',
      displayUrl: 'dedicar.app',
      icon: <ShoppingBag size={22} color="#ffffff" />,
      metrics: [
        { label: 'VELOCIDAD', value: 'Instantánea' },
        { label: 'PRODUCTOS', value: 'Más de 10.000' },
        { label: 'EFICIENCIA', value: '+45% ventas' },
      ],
      accentColor: '#ffffff',
      previewType: 'dedicar',
    },
    {
      id: 'champagnat',
      number: '02',
      title: 'Champagnat Resultados',
      subtitle: 'Marcadores y posiciones en vivo para Rugby URBA',
      description:
        'Aplicación web que transmite resultados en directo, posiciones actualizadas automáticamente y estadísticas de partidos para seguir el torneo URBA Top 14.',
      tags: ['Web', 'En Vivo', 'Deportes', 'Estadísticas'],
      url: 'https://champagnat-resultados.urba.ar',
      displayUrl: 'champagnat-resultados.urba.ar',
      icon: <Trophy size={22} color="#ffffff" />,
      metrics: [
        { label: 'ACTUALIZACIÓN', value: 'En vivo al instante' },
        { label: 'PLATAFORMA', value: 'Web & Celular' },
        { label: 'DISPONIBILIDAD', value: '99.9% online' },
      ],
      accentColor: '#ffffff',
      previewType: 'champa',
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
              ( Casos de éxito reales )
            </span>
          </div>
        </div>

        {/* 2 Glassmorphism Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card project-card-item"
              onClick={() => setActiveModal(project)}
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backgroundColor: 'rgba(255, 255, 255, 0.045)',
              }}
            >
              {/* Card Top Info */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.5rem',
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
                        width: 44,
                        height: 44,
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
                          fontSize: '0.75rem',
                          color: '#d4d4d8',
                        }}
                      >
                        N.{project.number}
                      </span>
                      <h3
                        style={{
                          fontFamily: 'Urbanist, Outfit, sans-serif',
                          fontWeight: 800,
                          fontSize: '1.55rem',
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
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      textDecoration: 'none',
                      transition: 'all 0.25s ease',
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#ffffff';
                      e.currentTarget.style.color = '#000000';
                      e.currentTarget.style.boxShadow = '0 0 20px rgba(255,255,255,0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                {/* Subtitle & Description */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.82rem',
                      color: '#ffffff',
                      fontWeight: 600,
                      marginBottom: '0.5rem',
                    }}
                  >
                    ( {project.subtitle} )
                  </div>
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.92rem',
                      color: '#a1a1aa',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Simulated UI Glass Mockup Card Preview Graphic */}
                <div
                  style={{
                    borderRadius: 12,
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backgroundColor: 'rgba(10, 10, 12, 0.9)',
                    padding: '1rem',
                    marginBottom: '1.5rem',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                      paddingBottom: '8px',
                      marginBottom: '12px',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffffff', opacity: 0.3 }} />
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffffff', opacity: 0.5 }} />
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffffff', opacity: 0.8 }} />
                    </div>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: '#ffffff', letterSpacing: '0.5px' }}>
                      {project.displayUrl}
                    </span>
                  </div>

                  {project.previewType === 'dedicar' ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#ffffff' }}>
                        <span style={{ fontWeight: 500 }}>Catálogo Digital #4092</span>
                        <span style={{ color: '#ffffff', opacity: 0.9 }}>● Sincronizado</span>
                      </div>
                      <div style={{ height: 6, background: 'rgba(255,255,255,0.08)', borderRadius: 3 }}>
                        <div style={{ width: '80%', height: '100%', background: '#ffffff', borderRadius: 3, boxShadow: '0 0 10px rgba(255,255,255,0.5)' }} />
                      </div>
                      <div style={{ display: 'flex', gap: '6px', marginTop: '4px', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.08)', color: '#ffffff', padding: '2px 8px', borderRadius: 4 }}>
                          Logística 24/7
                        </span>
                        <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.08)', color: '#ffffff', padding: '2px 8px', borderRadius: 4 }}>
                          Checkout WhatsApp / Card
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '11px', color: '#ffffff', fontWeight: 600 }}>URBA TOP 14 - FECHA 08</span>
                        <span style={{ fontSize: '10px', background: '#ffffff', color: '#000000', padding: '2px 6px', borderRadius: 4, fontWeight: 700 }}>
                          LIVE 80'
                        </span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.04)', padding: '8px 12px', borderRadius: 6, border: '1px solid rgba(255,255,255,0.08)' }}>
                        <span style={{ fontSize: '11px', color: '#ffffff', fontWeight: 600 }}>Champagnat</span>
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 700, color: '#ffffff' }}>24 — 19</span>
                        <span style={{ fontSize: '11px', color: '#a1a1aa' }}>CUBA</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Metrics row */}
                <div
                  className="project-metrics-grid"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))',
                    gap: '12px',
                    marginBottom: '1.5rem',
                    borderTop: '1px dashed rgba(255, 255, 255, 0.12)',
                    paddingTop: '1rem',
                  }}
                >
                  {project.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        {m.label}
                      </div>
                      <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', fontWeight: 700, color: '#ffffff' }}>
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

      {/* Project Modal Preview */}
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
              maxWidth: '640px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '2rem',
              borderColor: '#ffffff',
              boxShadow: '0 20px 60px rgba(0,0,0,0.9), 0 0 30px rgba(255,255,255,0.15)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {activeModal.icon}
                <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '1.6rem', color: '#ffffff', margin: 0 }}>
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

            <p style={{ color: '#a1a1aa', lineHeight: 1.6, marginBottom: '2rem' }}>
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
                <span>Visitar sitio web oficial</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
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

