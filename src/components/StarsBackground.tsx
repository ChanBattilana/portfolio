import React, { useEffect, useRef } from 'react';

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  dx: number;
  dy: number;
  opacity: number;
  active: boolean;
}

export const StarsBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Pre-rendered offscreen canvases for silky 120 FPS performance on Mac
    let offscreenStatic: HTMLCanvasElement | null = document.createElement('canvas');
    let offscreenTwinkle: HTMLCanvasElement | null = document.createElement('canvas');

    const generateOffscreenLayers = () => {
      if (!offscreenStatic || !offscreenTwinkle) return;
      offscreenStatic.width = width;
      offscreenStatic.height = height;
      offscreenTwinkle.width = width;
      offscreenTwinkle.height = height;

      const sCtx = offscreenStatic.getContext('2d');
      const tCtx = offscreenTwinkle.getContext('2d');
      if (!sCtx || !tCtx) return;

      sCtx.clearRect(0, 0, width, height);
      tCtx.clearRect(0, 0, width, height);

      // Star density
      const totalStars = Math.min(Math.floor((width * height) / 10000), 160);

      for (let i = 0; i < totalStars; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const radius = Math.random() * 1.3 + 0.4;
        const isTwinkle = i % 2 === 0;
        const targetCtx = isTwinkle ? tCtx : sCtx;

        targetCtx.beginPath();
        targetCtx.arc(x, y, radius, 0, Math.PI * 2);
        targetCtx.fillStyle = '#ffffff';
        targetCtx.globalAlpha = Math.random() * 0.5 + 0.3;
        targetCtx.fill();

        // Subtle soft aura for bright stars
        if (radius > 1.2) {
          targetCtx.beginPath();
          targetCtx.arc(x, y, radius * 2.2, 0, Math.PI * 2);
          targetCtx.fillStyle = 'rgba(255, 255, 255, 0.12)';
          targetCtx.fill();
        }
      }
    };

    generateOffscreenLayers();

    // Shooting stars system
    let shootingStar: ShootingStar = {
      x: 0,
      y: 0,
      length: 0,
      speed: 0,
      dx: 0,
      dy: 0,
      opacity: 0,
      active: false,
    };

    let nextShootingStarTime = Date.now() + 5000;

    const spawnShootingStar = () => {
      const angle = Math.PI / 4 + (Math.random() * 0.16 - 0.08);
      const speed = Math.random() * 6 + 7;
      shootingStar = {
        x: Math.random() * (width * 0.7),
        y: Math.random() * (height * 0.35),
        length: Math.random() * 70 + 60,
        speed,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        opacity: 0.85,
        active: true,
      };
      nextShootingStarTime = Date.now() + Math.random() * 9000 + 6000;
    };

    let animId: number;
    let isVisible = true;

    const render = () => {
      if (!isVisible) return;

      ctx.clearRect(0, 0, width, height);

      // Draw pre-rendered static star field (instantaneous GPU bit-blit)
      if (offscreenStatic) {
        ctx.globalAlpha = 0.85;
        ctx.drawImage(offscreenStatic, 0, 0);
      }

      // Draw twinkling star field with smooth sine modulation
      if (offscreenTwinkle) {
        const time = Date.now() * 0.0018;
        ctx.globalAlpha = 0.4 + Math.sin(time) * 0.35;
        ctx.drawImage(offscreenTwinkle, 0, 0);
      }

      // Handle rare shooting star
      const now = Date.now();
      if (!shootingStar.active && now > nextShootingStarTime) {
        spawnShootingStar();
      }

      if (shootingStar.active) {
        shootingStar.x += shootingStar.dx;
        shootingStar.y += shootingStar.dy;
        shootingStar.opacity -= 0.015;

        if (shootingStar.opacity <= 0 || shootingStar.x > width || shootingStar.y > height) {
          shootingStar.active = false;
        } else {
          ctx.save();
          ctx.beginPath();
          const gradient = ctx.createLinearGradient(
            shootingStar.x,
            shootingStar.y,
            shootingStar.x - shootingStar.dx * 5,
            shootingStar.y - shootingStar.dy * 5
          );
          gradient.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.opacity})`);
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.5;
          ctx.moveTo(shootingStar.x, shootingStar.y);
          ctx.lineTo(
            shootingStar.x - shootingStar.dx * 5,
            shootingStar.y - shootingStar.dy * 5
          );
          ctx.stroke();
          ctx.restore();
        }
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    // Debounced Resize handler
    let resizeTimer: number;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        generateOffscreenLayers();
      }, 150);
    };

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        animId = requestAnimationFrame(render);
      } else {
        cancelAnimationFrame(animId);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      offscreenStatic = null;
      offscreenTwinkle = null;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1,
        transform: 'translateZ(0)',
        willChange: 'transform',
      }}
    />
  );
};
