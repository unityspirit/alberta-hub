/**
 * Alberta Shirani International Academy — Quantum Sacred Geometry Canvas
 * Ultra-lightweight 60fps ambient background with golden & emerald particles
 */

(function () {
  const canvas = document.getElementById('quantum-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particles = [];
  const PARTICLE_COUNT = Math.min(Math.floor((width * height) / 18000), 75);
  const CONNECTION_DIST = 135;
  let mouse = { x: null, y: null, radius: 160 };

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.radius = Math.random() * 2 + 1;
      this.baseColor = Math.random() > 0.4 ? 'rgba(212, 175, 55,' : (Math.random() > 0.5 ? 'rgba(16, 185, 129,' : 'rgba(245, 158, 11,');
      this.alpha = Math.random() * 0.6 + 0.2;
      this.angle = Math.random() * Math.PI * 2;
      this.spinSpeed = (Math.random() - 0.5) * 0.015;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.angle += this.spinSpeed;

      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;

      // Mouse gentle repel
      if (mouse.x !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 1.5;
          this.y -= (dy / dist) * force * 1.5;
        }
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);

      // Sacred Geometry diamond mote
      ctx.beginPath();
      ctx.moveTo(0, -this.radius * 1.8);
      ctx.lineTo(this.radius, 0);
      ctx.moveTo(0, this.radius * 1.8);
      ctx.lineTo(-this.radius, 0);
      ctx.closePath();

      ctx.fillStyle = `${this.baseColor} ${this.alpha})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = `${this.baseColor} 0.5)`;
      ctx.fill();

      ctx.restore();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECTION_DIST) {
          const alpha = (1 - dist / CONNECTION_DIST) * 0.16;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Subtle Radial Glow in Center
    const grad = ctx.createRadialGradient(width / 2, height / 2, 50, width / 2, height / 2, Math.max(width, height) * 0.7);
    grad.addColorStop(0, 'rgba(16, 185, 129, 0.04)');
    grad.addColorStop(0.5, 'rgba(212, 175, 55, 0.02)');
    grad.addColorStop(1, 'rgba(8, 11, 16, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    drawConnections();
    requestAnimationFrame(animate);
  }

  animate();
})();
