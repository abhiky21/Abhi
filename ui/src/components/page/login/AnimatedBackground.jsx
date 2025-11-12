import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const particles = [];
    const particleCount = 80;

    const random = (min, max) => Math.random() * (max - min) + min;

    class Particle {
      constructor() {
        this.x = random(0, width);
        this.y = random(0, height);
        this.radius = random(4, 8);
        this.speedX = random(-0.3, 0.3);
        this.speedY = random(-0.5, -0.1);
        this.alpha = random(0.2, 0.6);
        this.icon = ["📚", "✏", "🎓", "🖍"][Math.floor(Math.random() * 4)];
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.y < 0) this.y = height;
        if (this.x > width) this.x = 0;
        if (this.x < 0) this.x = width;
      }
      draw() {
        ctx.font = `${this.radius * 2}px Arial`;
        ctx.globalAlpha = this.alpha;
        ctx.fillText(this.icon, this.x, this.y);
        ctx.globalAlpha = 1;
      }
    }

    for (let i = 0; i < particleCount; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0" />;
}
