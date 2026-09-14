import React, { useState } from 'react';
import { Mail, Copy, Check, Send, ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

const LinkedinIcon = ({ size = 20, color = '#ffffff' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const email = 'channbattilana.13@gmail.com';
  const linkedinUrl = 'https://linkedin.com/in/santos-battilana';
  const whatsappNumber = '+54 9 11 3456-7890';
  const whatsappUrl = 'https://wa.me/5491134567890?text=Hola%20Santos,%20vi%20tu%20portfolio...';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    confetti({ particleCount: 45, spread: 60, origin: { y: 0.8 }, colors: ['#ffffff', '#f4f4f5', '#a1a1aa', '#27272a'] });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setFormSent(true);
    confetti({ particleCount: 75, spread: 80, origin: { y: 0.7 }, colors: ['#ffffff', '#f4f4f5', '#a1a1aa', '#27272a'] });
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section
      id="contacto"
      className="contact-section-container"
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
            <span style={{ color: '#ffffff' }}>●</span> CONTACTO
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
            Iniciemos una conversación
          </h2>
          <p style={{ color: '#d4d4d8', fontSize: '1rem', marginTop: '0.75rem', maxWidth: '600px' }}>
            ¿Tienes una idea, consulta o proyecto en mente? Escríbeme directamente por cualquier medio.
          </p>
        </div>

        {/* Contact Links & Quick Ping Form Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Direct Contact Cards (6 columns) */}
          <div style={{ gridColumn: 'span 6' }} className="col-mobile-12">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Email Card */}
              <div
                className="glass-card contact-item-card"
                style={{
                  padding: '1.5rem 1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: 0, flex: 1 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={20} color="#ffffff" />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', color: '#a1a1aa', letterSpacing: '0.5px' }}>
                      EMAIL DIRECTO
                    </div>
                    <a
                      href={`mailto:${email}`}
                      className="text-break"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        textDecoration: 'none',
                        display: 'block',
                      }}
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  style={{
                    background: copiedEmail ? '#ffffff' : 'rgba(255, 255, 255, 0.08)',
                    border: copiedEmail ? '1px solid #ffffff' : '1px solid rgba(255, 255, 255, 0.2)',
                    color: copiedEmail ? '#000000' : '#ffffff',
                    padding: '8px 16px',
                    borderRadius: '100px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    transition: 'all 0.2s ease',
                    flexShrink: 0,
                    boxShadow: copiedEmail ? '0 0 20px rgba(255,255,255,0.4)' : 'none',
                  }}
                >
                  {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedEmail ? 'COPIADO' : 'COPIAR'}</span>
                </button>
              </div>

              {/* LinkedIn Card */}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="glass-card contact-item-card"
                style={{
                  padding: '1.5rem 1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  textDecoration: 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: 0 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <LinkedinIcon size={20} color="#ffffff" />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', color: '#a1a1aa', letterSpacing: '0.5px' }}>
                      PERFIL PROFESIONAL
                    </div>
                    <div
                      className="text-break"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        color: '#ffffff',
                      }}
                    >
                      linkedin.com/in/santos-battilana
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    flexShrink: 0,
                    transition: 'all 0.2s ease',
                  }}
                >
                  <ArrowUpRight size={18} />
                </div>
              </a>

              {/* WhatsApp / Phone Card */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="glass-card contact-item-card"
                style={{
                  padding: '1.5rem 1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  textDecoration: 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: 0 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <MessageSquare size={20} color="#ffffff" />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', color: '#a1a1aa', letterSpacing: '0.5px' }}>
                      WHATSAPP DIRECTO
                    </div>
                    <div
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        color: '#ffffff',
                      }}
                    >
                      {whatsappNumber}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    flexShrink: 0,
                    transition: 'all 0.2s ease',
                  }}
                >
                  <ArrowUpRight size={18} />
                </div>
              </a>
            </div>
          </div>

          {/* Quick Message Form (6 columns) */}
          <div style={{ gridColumn: 'span 6' }} className="col-mobile-12">
            <form
              onSubmit={handleSubmit}
              className="glass-card contact-form-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
                <Sparkles size={18} color="#ffffff" />
                <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#ffffff', fontSize: '1.2rem', margin: 0, fontWeight: 700 }}>
                  Enviar mensaje directo
                </h3>
              </div>

              {formSent ? (
                <div
                  style={{
                    padding: '2rem',
                    textAlign: 'center',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid #ffffff',
                    borderRadius: '12px',
                    color: '#ffffff',
                    fontFamily: 'DM Sans, sans-serif',
                    boxShadow: '0 0 30px rgba(255,255,255,0.2)',
                  }}
                >
                  <Check size={32} style={{ marginBottom: '8px' }} />
                  <div style={{ fontWeight: 700 }}>¡MENSAJE ENVIADO CON ÉXITO!</div>
                  <div style={{ fontSize: '0.78rem', color: '#a1a1aa', marginTop: '6px' }}>
                    Te responderé a la brevedad.
                  </div>
                </div>
              ) : (
                <>
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '0.75rem',
                        color: '#a1a1aa',
                        marginBottom: '6px',
                        fontWeight: 600,
                      }}
                    >
                      NOMBRE / EMPRESA
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre o empresa"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: '#09090b',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        borderRadius: '8px',
                        color: '#ffffff',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '0.75rem',
                        color: '#a1a1aa',
                        marginBottom: '6px',
                        fontWeight: 600,
                      }}
                    >
                      EMAIL DE CONTACTO
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: '#09090b',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        borderRadius: '8px',
                        color: '#ffffff',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '0.75rem',
                        color: '#a1a1aa',
                        marginBottom: '6px',
                        fontWeight: 600,
                      }}
                    >
                      MENSAJE
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Detalles sobre tu proyecto o consulta..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: '#09090b',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        borderRadius: '8px',
                        color: '#ffffff',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.95rem',
                        outline: 'none',
                        resize: 'none',
                      }}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem', width: '100%', justifyContent: 'center' }}>
                    <span>Enviar mensaje</span>
                    <Send size={16} />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-section-container {
            padding: 3.5rem 0 !important;
          }
          .contact-item-card {
            padding: 1.25rem 1rem !important;
          }
          .contact-form-card {
            padding: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
};

