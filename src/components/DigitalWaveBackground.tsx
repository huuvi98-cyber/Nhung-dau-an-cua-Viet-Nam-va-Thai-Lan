import React, { useEffect, useRef } from 'react';

export const DigitalWaveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 900);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Floating glowing orbs (bokeh lights like in 2427092.jpg)
    const orbs = Array.from({ length: 18 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 22 + 8,
      speedX: (Math.random() - 0.5) * 0.35,
      speedY: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.5 + 0.3,
      hue: Math.random() > 0.4 ? '56, 189, 248' : '14, 165, 233', // Sky to light cyan
    }));

    let step = 0;

    const render = () => {
      step += 0.015;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw animated bokeh glowing orbs
      orbs.forEach((orb) => {
        orb.x += orb.speedX;
        orb.y += orb.speedY;

        if (orb.x < -40) orb.x = width + 40;
        if (orb.x > width + 40) orb.x = -40;
        if (orb.y < -40) orb.y = height + 40;
        if (orb.y > height + 40) orb.y = -40;

        const pulse = Math.sin(step * 1.5 + orb.x) * 0.2 + 0.8;
        const currentAlpha = orb.alpha * pulse;

        const grad = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.radius * 2.5
        );
        grad.addColorStop(0, `rgba(${orb.hue}, ${currentAlpha})`);
        grad.addColorStop(0.5, `rgba(${orb.hue}, ${currentAlpha * 0.35})`);
        grad.addColorStop(1, `rgba(${orb.hue}, 0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius * 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Bright white-cyan core
        ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha * 0.75})`;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, Math.max(1.5, orb.radius * 0.2), 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Draw glowing cybernetic waving particle ribbon grid (matching 2427092.jpg)
      const rows = 14;
      const cols = Math.floor(width / 16) + 6;
      const baseY = height * 0.68;

      for (let r = 0; r < rows; r++) {
        const rowProgress = r / rows;
        const depthAlpha = 0.25 + rowProgress * 0.75;
        const yOffset = (r - rows / 2) * 12;

        for (let c = 0; c <= cols; c++) {
          const x = (c / cols) * width;
          // Compound sine waves for realistic organic undulation
          const wave1 = Math.sin(c * 0.14 + step + r * 0.18) * 36;
          const wave2 = Math.cos(c * 0.08 - step * 0.7 + r * 0.12) * 22;
          const wave3 = Math.sin(c * 0.04 + step * 0.5) * 18;

          const y = baseY + yOffset + wave1 + wave2 + wave3 + rowProgress * 65;

          // Particle sizing & color gradient
          const isHighlight = (c + r * 3) % 11 === 0;
          const radius = isHighlight ? 2.5 : 1.2 + rowProgress * 0.8;

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);

          if (isHighlight) {
            ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, depthAlpha * 1.2)})`;
            ctx.shadowColor = '#38bdf8';
            ctx.shadowBlur = 8;
          } else {
            ctx.fillStyle = `rgba(56, 189, 248, ${depthAlpha * 0.85})`;
            ctx.shadowBlur = 0;
          }
          ctx.fill();
        }
      }

      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep Royal Blue Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#02091f] via-[#051a4a] to-[#0a276b]" />

      {/* Cybernetic Waving Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-90"
      />

      {/* Ambient bottom glowing cyber wave overlay */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#0284c7]/20 via-sky-500/10 to-transparent mix-blend-screen" />

      {/* Top vignetting for crisp text contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(2,9,31,0.5)_0%,transparent_70%)]" />
    </div>
  );
};
