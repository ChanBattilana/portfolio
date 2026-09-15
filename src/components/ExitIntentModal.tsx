import React, { useEffect, useState } from 'react';
import { X, Mail, Send, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ExitIntentModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const targetEmail = 'channbattilana.13@gmail.com';
  const whatsappUrl = 'https://wa.me/5491136249686?text=Hola%20Santos,%20vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20conversar...';

  useEffect(() => {
    // Check if user already saw or dismissed the modal in this session
    const alreadyShown = sessionStorage.getItem('exit_intent_shown');
    if (alreadyShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when cursor moves to the top edge (closing tab / switching tabs)
      if (e.clientY <= 12 && !sessionStorage.getItem('exit_intent_shown')) {
        setIsOpen(true);
        sessionStorage.setItem('exit_intent_shown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userEmail || !userEmail.includes('@')) return;

    // 1. Save email locally in localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('portfolio_leads') || '[]');
      existing.push({
        email: userEmail,
        date: new Date().toISOString(),
      });
      localStorage.setItem('portfolio_leads', JSON.stringify(existing));
    } catch {
      // Ignore storage errors
    }

    // 2. Trigger celebratory confetti
    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffffff', '#f4f4f5', '#a1a1aa', '#27272a'],
      });
    } catch {
      // Ignore confetti errors
    }

    setSubmitted(true);

    // 3. Prepare pre-filled 1-click mailto to Santos
    const subject = encodeURIComponent('Contacto desde Portfolio — Santos Battilana');
    const body = encodeURIComponent(
      `Hola Santos,\n\nEstuve viendo tu portfolio y me gustaría ponerme en contacto contigo para conversar sobre un proyecto o consulta.\n\nMi correo de contacto es: ${userEmail}\n\n¡Saludos!`
    );
    const mailtoUrl = `mailto:${targetEmail}?subject=${subject}&body=${body}`;

    // 4. Open user's email client automatically with prefilled data
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 400);
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
        backgroundColor: 'rgba(0, 0, 0, 0.78)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        animation: 'fadeInModal 0.25s ease forwards',
      }}
      onClick={handleClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '520px',
          background: 'rgba(12, 12, 14, 0.96)',
          border: '1px solid rgba(255, 255, 255, 0.24)',
          borderRadius: '24px',
          padding: '2.5rem 2.25rem',
          position: 'relative',
          boxShadow: '0 25px 70px -10px rgba(0, 0, 0, 0.95), 0 0 40px rgba(255, 255, 255, 0.14)',
          color: '#ffffff',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Cerrar modal"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#ffffff',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <>
            {/* Header Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.22)',
                padding: '6px 14px',
                borderRadius: '100px',
                marginBottom: '1.25rem',
              }}
            >
              <Sparkles size={14} color="#ffffff" />
              <span
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  color: '#ffffff',
                }}
              >
                ¿TE VAS SIN SALUDAR?
              </span>
            </div>

            {/* Title */}
            <h3
              style={{
                fontFamily: 'Urbanist, Outfit, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: '0.85rem',
                color: '#ffffff',
              }}
            >
              ¿Tenés una idea o proyecto en mente?
            </h3>

            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.92rem',
                color: '#d4d4d8',
                lineHeight: 1.55,
                marginBottom: '1.75rem',
              }}
            >
              Dejame tu correo. Con solo <strong>un clic</strong> me llegará directamente a mi casilla para ponernos en contacto y coordinar una charla sin compromiso.
            </p>

            {/* Email Form */}
            <form onSubmit={handleSendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ position: 'relative' }}>
                <Mail
                  size={18}
                  style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#a1a1aa',
                    pointerEvents: 'none',
                  }}
                />
                <input
                  type="email"
                  required
                  placeholder="ejemplo@tuempresa.com"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px 16px 14px 46px',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '12px',
                    color: '#ffffff',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#ffffff')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)')}
                />
              </div>

              <button
                type="submit"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  width: '100%',
                  padding: '14px 20px',
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  border: 'none',
                  borderRadius: '100px',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 0 30px rgba(255, 255, 255, 0.4)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(255, 255, 255, 0.65)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.4)';
                }}
              >
                <span>Enviar correo en 1 clic</span>
                <Send size={16} />
              </button>
            </form>

            {/* Alternative quick WhatsApp */}
            <div
              style={{
                marginTop: '1.25rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              <span style={{ fontSize: '0.8rem', color: '#a1a1aa' }}>¿Preferís WhatsApp?</span>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
                style={{
                  color: '#ffffff',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  textDecoration: 'underline',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <MessageCircle size={14} />
                <span>Escribir por WhatsApp</span>
              </a>
            </div>
          </>
        ) : (
          /* Success confirmed state */
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
              }}
            >
              <CheckCircle2 size={36} color="#ffffff" />
            </div>

            <h3
              style={{
                fontFamily: 'Urbanist, sans-serif',
                fontWeight: 800,
                fontSize: '1.6rem',
                marginBottom: '0.75rem',
              }}
            >
              ¡Mail preparado!
            </h3>

            <p
              style={{
                color: '#d4d4d8',
                fontSize: '0.92rem',
                lineHeight: 1.55,
                maxWidth: '380px',
                margin: '0 auto 1.75rem auto',
              }}
            >
              Se abrió tu cliente de correo para enviarle el mensaje a Santos. Tu dirección (<strong>{userEmail}</strong>) quedó registrada.
            </p>

            <button
              onClick={handleClose}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#ffffff',
                padding: '10px 24px',
                borderRadius: '100px',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.88rem',
              }}
            >
              Cerrar ventana
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInModal {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};
