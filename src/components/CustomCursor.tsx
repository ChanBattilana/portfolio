import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable on desktop/fine pointers
    if (window.matchMedia('(pointer: coarse)').matches) return;

    document.body.classList.add('custom-cursor-active');
    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseOver = (e: MouseEvent) => {
      const targetEl = e.target as HTMLElement | null;
      if (!targetEl) return;

      const interactive = targetEl.closest('a, button, input, textarea, .glass-card, [data-cursor]');
      if (interactive) {
        setIsHovered(true);
        const label = interactive.getAttribute('data-cursor');
        setHoverText(label);
      } else {
        setIsHovered(false);
        setHoverText(null);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth inertia render loop
    let animId: number;
    const render = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0)`;
      }
      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) ${
          isHovered ? 'scale(1.8)' : 'scale(1)'
        }`;
      }

      animId = requestAnimationFrame(render);
    };
    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isHovered]);

  if (!isVisible) return null;

  return (
    <div style={{ pointerEvents: 'none', position: 'fixed', inset: 0, zIndex: 99999 }}>
      {/* Precision Inertia Crosshair Ring */}
      <div
        ref={cursorRingRef}
        style={{
          position: 'fixed',
          top: -16,
          left: -16,
          width: 32,
          height: 32,
          borderRadius: '50%',
          border: isHovered ? '1px solid #00f5d4' : '1px solid rgba(255, 255, 255, 0.25)',
          backgroundColor: isHovered ? 'rgba(0, 245, 212, 0.08)' : 'transparent',
          boxShadow: isHovered ? '0 0 15px rgba(0, 245, 212, 0.4)' : 'none',
          transition: 'border-color 0.2s, background-color 0.2s, box-shadow 0.2s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          willChange: 'transform',
        }}
      >
        {/* Subtle Crosshair indicator ticks */}
        <div style={{ position: 'absolute', top: -3, left: '50%', width: 1, height: 4, background: isHovered ? '#00f5d4' : 'rgba(255,255,255,0.3)', transform: 'translateX(-50%)' }} />
        <div style={{ position: 'absolute', bottom: -3, left: '50%', width: 1, height: 4, background: isHovered ? '#00f5d4' : 'rgba(255,255,255,0.3)', transform: 'translateX(-50%)' }} />
        <div style={{ position: 'absolute', left: -3, top: '50%', width: 4, height: 1, background: isHovered ? '#00f5d4' : 'rgba(255,255,255,0.3)', transform: 'translateY(-50%)' }} />
        <div style={{ position: 'absolute', right: -3, top: '50%', width: 4, height: 1, background: isHovered ? '#00f5d4' : 'rgba(255,255,255,0.3)', transform: 'translateY(-50%)' }} />
      </div>

      {/* Instant Center Point */}
      <div
        ref={cursorDotRef}
        style={{
          position: 'fixed',
          top: -3,
          left: -3,
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: isHovered ? '#00f5d4' : '#ffffff',
          boxShadow: isHovered ? '0 0 8px #00f5d4' : 'none',
          willChange: 'transform',
        }}
      />

      {/* Hover text preview label if supplied */}
      {hoverText && (
        <div
          style={{
            position: 'fixed',
            transform: `translate3d(${target.current.x + 20}px, ${target.current.y + 20}px, 0)`,
            fontFamily: 'Space Mono, monospace',
            fontSize: '10px',
            color: '#00f5d4',
            background: 'rgba(5, 5, 5, 0.9)',
            border: '1px solid rgba(0, 245, 212, 0.3)',
            padding: '2px 8px',
            borderRadius: '4px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            whiteSpace: 'nowrap',
          }}
        >
          {hoverText}
        </div>
      )}
    </div>
  );
};
