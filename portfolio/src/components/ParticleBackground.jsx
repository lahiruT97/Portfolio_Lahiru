import React, { useEffect, useRef } from "react";

export default function ParticleBackground({ isDark }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = window.innerWidth < 768;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Balanced particle count for silky-smooth 60fps on mobile
    const particleCount = isMobile
      ? Math.min(Math.floor(window.innerWidth / 22), 22)
      : Math.min(Math.floor(window.innerWidth / 16), 65);

    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 1.0,
        alpha: Math.random() * 0.4 + 0.4,
      });
    }

    let mouse = { x: null, y: null, radius: 150, radiusSq: 22500 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    }

    const maxDist = isMobile ? 100 : 130;
    const maxDistSq = maxDist * maxDist;
    const colorBase = isDark ? "56, 189, 248" : "14, 116, 219";

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const len = particles.length;
      for (let i = 0; i < len; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx = -p.vx;
        if (p.y < 0 || p.y > height) p.vy = -p.vy;

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, isDark ? p.radius : p.radius * 1.1, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(${colorBase}, ${p.alpha * 0.75})`
          : `rgba(${colorBase}, ${p.alpha * 0.85})`;
        ctx.fill();

        // Connect nearby particles using squared distance (avoids Math.sqrt)
        for (let j = i + 1; j < len; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - distSq / maxDistSq) * (isDark ? 0.22 : 0.3);
            ctx.strokeStyle = `rgba(${colorBase}, ${lineAlpha})`;
            ctx.lineWidth = isDark ? 0.6 : 0.8;
            ctx.stroke();
          }
        }

        // Mouse hover interaction (desktop only)
        if (!isMobile && mouse.x !== null && mouse.y !== null) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const mDistSq = mdx * mdx + mdy * mdy;
          if (mDistSq < mouse.radiusSq) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            const mAlpha = (1 - mDistSq / mouse.radiusSq) * (isDark ? 0.35 : 0.45);
            ctx.strokeStyle = `rgba(${colorBase}, ${mAlpha})`;
            ctx.lineWidth = isDark ? 1.0 : 1.2;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Defer animation loop so main thread can finish initial paint first
    const timer = setTimeout(() => {
      animationFrameId = requestAnimationFrame(render);
    }, 50);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
      if (!isMobile) {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500 will-change-transform"
      style={{ opacity: isDark ? 0.75 : 0.85 }}
    />
  );
}
