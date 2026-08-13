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
      subtitle: 'Catálogo, pedidos, logística',
      description:
        'Plataforma integral de gestión de producto, catálogo digital interactivo, procesamiento de pedidos en tiempo real y trazabilidad logística automatizada para empresas en crecimiento.',
      tags: ['Web', 'E-commerce', 'Producto', 'Gestión'],
      url: 'https://dedicar.app',
      displayUrl: 'dedicar.app',
      icon: <ShoppingBag size={22} color="#00f5d4" />,
      metrics: [
        { label: 'PROCESAMIENTO', value: '< 100ms' },
        { label: 'PRODUCTOS', value: '10,000+' },
        { label: 'EFICIENCIA', value: '+45%' },
      ],
      accentColor: '#00f5d4',
      previewType: 'dedicar',
    },
    {
      id: 'champagnat',
      number: '02',
      title: 'Champagnat Resultados',
      subtitle: 'URBA Top 14 results & Realtime match tracker',
      description:
        'Sistema de transmisión de marcadores en tiempo real, tabla de posiciones automatizada, estadísticas de jugadores y notificaciones instantáneas para la URBA Top 14 de Rugby.',
      tags: ['React', 'Realtime', 'Deportes', 'Cloudflare'],
      url: 'https://champagnat-resultados.urba.ar',
      displayUrl: 'champagnat-resultados.urba.ar',
      icon: <Trophy size={22} color="#00f2fe" />,
      metrics: [
        { label: 'LATENCIA', value: 'Real-Time' },
        { label: 'INFRAESTRUCTURA', value: 'Edge Cloudflare' },
        { label: 'DISPONIBILIDAD', value: '99.99%' },
      ],
      accentColor: '#00f2fe',
      previewType: 'champa',
    },
  ];

  return (
    <section
      id="proyectos"
      style={{
        padding: '7rem 0',
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div className="container-12col">
        {/* Section Header */}
        <div style={{ marginBottom: '4rem' }}>
          <div className="mono-label" style={{ marginBottom: '0.75rem' }}>
            <span style={{ color: '#00f5d4' }}>01 —</span> PROYECTOS SELECCIONADOS
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
          >
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
              Soluciones digitales de alto impacto
            </h2>

            <span
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.8rem',
                color: '#8e8e93',
              }}
            >
              ( 02 CASOS DE ESTUDIO )
            </span>
          </div>
        </div>

        {/* 2 Glassmorphism Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              data-cursor="VER DETALLES"
              onClick={() => setActiveModal(project)}
              style={{
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '520px',
                cursor: 'pointer',
              }}
            >
              {/* Card Top Info */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.75rem',
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
                        backgroundColor: 'rgba(0, 245, 212, 0.08)',
                        border: '1px solid rgba(0, 245, 212, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {project.icon}
                    </div>

                    <div>
                      <span
                        style={{
                          fontFamily: 'Space Mono, monospace',
                          fontSize: '0.75rem',
                          color: '#00f5d4',
                        }}
                      >
                        N.{project.number}
                      </span>
                      <h3
                        style={{
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                          fontWeight: 800,
                          fontSize: '1.75rem',
                          color: '#ffffff',
                          margin: 0,
                          lineHeight: 1.1,
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
                    data-cursor="OPEN LINK"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = project.accentColor;
                      e.currentTarget.style.color = '#050505';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                {/* Subtitle & Description */}
                <div style={{ marginBottom: '2rem' }}>
                  <div
                    style={{
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '0.82rem',
                      color: '#00f5d4',
                      marginBottom: '0.75rem',
                    }}
                  >
                    ( {project.subtitle} )
                  </div>
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.95rem',
                      color: '#a0a0ab',
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
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    backgroundColor: 'rgba(5, 7, 10, 0.8)',
                    padding: '1.25rem',
                    marginBottom: '2rem',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                      paddingBottom: '8px',
                      marginBottom: '12px',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f56' }} />
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffbd2e' }} />
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#27c93f' }} />
                    </div>
                    <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#00f5d4' }}>
                      {project.displayUrl}
                    </span>
                  </div>

                  {project.previewType === 'dedicar' ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#f5f5f7' }}>
                        <span>Catálogo Digital #4092</span>
                        <span style={{ color: '#00f5d4' }}>● Stock Sincronizado</span>
                      </div>
                      <div style={{ height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 3 }}>
                        <div style={{ width: '80%', height: '100%', background: '#00f5d4', borderRadius: 3 }} />
                      </div>
                      <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                        <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.05)', padding: '2px 6px', borderRadius: 4 }}>
                          Logística 24/7
                        </span>
                        <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.05)', padding: '2px 6px', borderRadius: 4 }}>
                          Checkout WhatsApp / Card
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '12px', color: '#fff', fontWeight: 600 }}>URBA TOP 14 - FECHA 08</span>
                        <span style={{ fontSize: '10px', background: '#00f2fe', color: '#000', padding: '2px 6px', borderRadius: 4, fontWeight: 700 }}>
                          LIVE 80'
                        </span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.03)', padding: '8px', borderRadius: 6 }}>
                        <span style={{ fontSize: '12px', color: '#00f5d4' }}>Champagnat</span>
                        <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '14px', fontWeight: 700, color: '#fff' }}>24 — 19</span>
                        <span style={{ fontSize: '12px', color: '#8e8e93' }}>CUBA</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Metrics row */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '12px',
                    marginBottom: '2rem',
                    borderTop: '1px dashed rgba(255, 255, 255, 0.1)',
                    paddingTop: '1rem',
                  }}
                >
                  {project.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: '#8e8e93' }}>
                        {m.label}
                      </div>
                      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.85rem', fontWeight: 700, color: '#ffffff' }}>
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
            backgroundColor: 'rgba(5, 5, 5, 0.85)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
          onClick={() => setActiveModal(null)}
        >
          <div
            className="glass-card"
            style={{
              maxWidth: '640px',
              width: '100%',
              padding: '3rem',
              borderColor: '#00f5d4',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {activeModal.icon}
                <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '2rem', color: '#fff', margin: 0 }}>
                  {activeModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                style={{
                  background: 'none',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#fff',
                  borderRadius: '50%',
                  width: 32,
                  height: 32,
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>
            </div>

            <p style={{ color: '#a0a0ab', lineHeight: 1.6, marginBottom: '2rem' }}>
              {activeModal.description}
            </p>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href={activeModal.url}
                target="_blank"
                rel="noreferrer"
                className="btn-cyan"
                style={{ textDecoration: 'none' }}
              >
                <span>Visitar sitio web oficial</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
