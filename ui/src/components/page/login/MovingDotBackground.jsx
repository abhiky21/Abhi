import { useEffect, useRef } from "react";

export default function MovingDotBackground() {
  const canvasRef = useRef(null);

  // 🔧 TUNING VARIABLES (touch only these)
  const DOT_COUNT = 15;
  const DOT_RADIUS = 2; // bigger so they're visible on light backgrounds
  const SPEED = 7; // a bit faster so motion is obvious
  const TRAIL_ALPHA = 0.12; // ↓ smaller = longer trail (keep subtle)
  const DOT_COLOR = "rgba(56, 189, 248, 1)"; // darker blue for strong contrast

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const dots = Array.from({ length: DOT_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
    }));
    let rafId = null;

    function animate() {
      // trail effect
      ctx.fillStyle = `rgba(224,242,254,${TRAIL_ALPHA})`; // bg-sky-100 RGB
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.shadowBlur = 16;
      ctx.shadowColor = DOT_COLOR;

      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;

        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;

        ctx.save(); // 🔐 isolate glow state

        ctx.beginPath();
        ctx.arc(d.x, d.y, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = DOT_COLOR;
        ctx.shadowBlur = 16;
        ctx.shadowColor = DOT_COLOR;
        ctx.fill();

        ctx.restore(); // 🔓 restore clean state
      });

      rafId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
}
