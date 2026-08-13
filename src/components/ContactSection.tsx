import React, { useState } from 'react';
import { Mail, Copy, Check, Send, ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

const LinkedinIcon = ({ size = 20, color = '#00f2fe' }: { size?: number; color?: string }) => (
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
    confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setFormSent(true);
    confetti({ particleCount: 70, spread: 80, origin: { y: 0.7 } });
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section
      id="contacto"
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
            <span style={{ color: '#00f5d4' }}>03 —</span> CONTACTO
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
            Iniciemos una conversación
          </h2>
        </div>

        {/* Contact Links & Quick Ping Form Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Direct Contact Cards (6 columns) */}
          <div style={{ gridColumn: 'span 6' }} className="col-mobile-12">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Email Card */}
              <div
                className="glass-card"
                style={{
                  padding: '1.75rem 2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: 'rgba(0, 245, 212, 0.08)',
                      border: '1px solid rgba(0, 245, 212, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Mail size={20} color="#00f5d4" />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.72rem', color: '#8e8e93' }}>
                      EMAIL DIRECTO
                    </div>
                    <a
                      href={`mailto:${email}`}
                      style={{
                        fontFamily: 'Space Mono, monospace',
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        textDecoration: 'none',
                      }}
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  data-cursor="COPIAR EMAIL"
                  style={{
                    background: copiedEmail ? 'rgba(0, 245, 212, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                    border: copiedEmail ? '1px solid #00f5d4' : '1px solid rgba(255, 255, 255, 0.1)',
                    color: copiedEmail ? '#00f5d4' : '#ffffff',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '0.75rem',
                    transition: 'all 0.2s ease',
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
                className="glass-card"
                data-cursor="LINKEDIN"
                style={{
                  padding: '1.75rem 2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textDecoration: 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: 'rgba(0, 242, 254, 0.08)',
                      border: '1px solid rgba(0, 242, 254, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <LinkedinIcon size={20} color="#00f2fe" />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.72rem', color: '#8e8e93' }}>
                      PERFIL PROFESIONAL
                    </div>
                    <div
                      style={{
                        fontFamily: 'Space Mono, monospace',
                        fontSize: '0.95rem',
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
                    background: 'rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
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
                className="glass-card"
                data-cursor="WHATSAPP"
                style={{
                  padding: '1.75rem 2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textDecoration: 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: 'rgba(14, 239, 183, 0.08)',
                      border: '1px solid rgba(14, 239, 183, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <MessageSquare size={20} color="#0eefb7" />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.72rem', color: '#8e8e93' }}>
                      WHATSAPP DIRECTO
                    </div>
                    <div
                      style={{
                        fontFamily: 'Space Mono, monospace',
                        fontSize: '0.95rem',
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
                    background: 'rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
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
              className="glass-card"
              style={{
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
                <Sparkles size={18} color="#00f5d4" />
                <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#fff', fontSize: '1.3rem', margin: 0 }}>
                  Enviar mensaje directo
                </h3>
              </div>

              {formSent ? (
                <div
                  style={{
                    padding: '2rem',
                    textAlign: 'center',
                    background: 'rgba(0, 245, 212, 0.1)',
                    border: '1px solid #00f5d4',
                    borderRadius: '12px',
                    color: '#00f5d4',
                    fontFamily: 'Space Mono, monospace',
                  }}
                >
                  <Check size={32} style={{ marginBottom: '8px' }} />
                  <div>¡MENSAJE ENVIADO CON ÉXITO!</div>
                  <div style={{ fontSize: '0.78rem', color: '#8e8e93', marginTop: '6px' }}>
                    Te responderé a la brevedad.
                  </div>
                </div>
              ) : (
                <>
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontFamily: 'Space Mono, monospace',
                        fontSize: '0.75rem',
                        color: '#8e8e93',
                        marginBottom: '6px',
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
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px',
                        color: '#fff',
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
                        fontFamily: 'Space Mono, monospace',
                        fontSize: '0.75rem',
                        color: '#8e8e93',
                        marginBottom: '6px',
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
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px',
                        color: '#fff',
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
                        fontFamily: 'Space Mono, monospace',
                        fontSize: '0.75rem',
                        color: '#8e8e93',
                        marginBottom: '6px',
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
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.95rem',
                        outline: 'none',
                        resize: 'none',
                      }}
                    />
                  </div>

                  <button type="submit" className="btn-cyan" style={{ marginTop: '0.5rem', justifyContent: 'center' }}>
                    <span>Enviar mensaje</span>
                    <Send size={16} />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
