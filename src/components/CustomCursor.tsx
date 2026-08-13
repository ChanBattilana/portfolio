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
    // Only enable on desktop fine pointer devices
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

    // Fast, responsive, snappy render loop (high lerp factor 0.65 for direct tracking)
    let animId: number;
    const render = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.65;
      pos.current.y += (target.current.y - pos.current.y) * 0.65;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0)`;
      }
      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) ${
          isHovered ? 'scale(1.5)' : 'scale(1)'
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
      {/* Snappy Precision Outer Ring (No crosshair ticks) */}
      <div
        ref={cursorRingRef}
        style={{
          position: 'fixed',
          top: -12,
          left: -12,
          width: 24,
          height: 24,
          borderRadius: '50%',
          border: isHovered ? '1.5px solid #00f5d4' : '1px solid rgba(255, 255, 255, 0.35)',
          backgroundColor: isHovered ? 'rgba(0, 245, 212, 0.12)' : 'transparent',
          boxShadow: isHovered ? '0 0 15px rgba(0, 245, 212, 0.5)' : 'none',
          transition: 'border-color 0.15s, background-color 0.15s, box-shadow 0.15s',
          willChange: 'transform',
        }}
      />

      {/* Instant Center Point Dot */}
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
          boxShadow: isHovered ? '0 0 10px #00f5d4' : '0 0 4px rgba(255,255,255,0.5)',
          willChange: 'transform',
        }}
      />

      {/* Hover text label with clean rounded DM Sans font */}
      {hoverText && (
        <div
          style={{
            position: 'fixed',
            transform: `translate3d(${target.current.x + 16}px, ${target.current.y + 16}px, 0)`,
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 600,
            fontSize: '11px',
            color: '#00f5d4',
            background: 'rgba(10, 12, 16, 0.95)',
            border: '1px solid rgba(0, 245, 212, 0.3)',
            padding: '3px 10px',
            borderRadius: '100px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
          }}
        >
          {hoverText}
        </div>
      )}
    </div>
  );
};
