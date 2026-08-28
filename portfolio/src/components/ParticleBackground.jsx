import React, { useEffect, useRef } from "react";

export default function ParticleBackground({ isDark }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const particleCount = Math.min(Math.floor(window.innerWidth / 15), 75);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2.0 + 1.2,
        alpha: Math.random() * 0.5 + 0.4,
      });
    }

    let mouse = { x: null, y: null, radius: 160 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Distinct, vibrant color palette for dark vs light modes
      // Dark mode: Bright Cyan (56, 189, 248)
      // Light mode: High-contrast Vibrant Azure Blue / Indigo (14, 116, 219)
      const colorBase = isDark ? "56, 189, 248" : "14, 116, 219";

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx = -p.vx;
        if (p.y < 0 || p.y > height) p.vy = -p.vy;

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, isDark ? p.radius : p.radius * 1.15, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(${colorBase}, ${p.alpha * 0.75})`
          : `rgba(${colorBase}, ${p.alpha * 0.85})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - dist / 140) * (isDark ? 0.22 : 0.32);
            ctx.strokeStyle = `rgba(${colorBase}, ${lineAlpha})`;
            ctx.lineWidth = isDark ? 0.7 : 0.9;
            ctx.stroke();
          }
        }

        // Mouse connection & magnet effect
        if (mouse.x !== null && mouse.y !== null) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < mouse.radius) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            const mAlpha = (1 - mDist / mouse.radius) * (isDark ? 0.35 : 0.45);
            ctx.strokeStyle = `rgba(${colorBase}, ${mAlpha})`;
            ctx.lineWidth = isDark ? 1.0 : 1.2;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500"
      style={{ opacity: isDark ? 0.75 : 0.85 }}
    />
  );
}