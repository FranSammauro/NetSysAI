import { useState, useEffect } from "react";
import { analyzeURL } from "../services/api";

function HomePage({ goLogin }) {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleAnalyze = async () => {
    if (!url) return;

    if (!token) {
      alert("Tenés que iniciar sesión para analizar URLs");
      return;
    }

    setLoading(true);
    setResult(null);

    const res = await analyzeURL(url);

    setResult(res);
    setLoading(false);
  };

  useEffect(() => {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 212, 255, 0.5)';
        ctx.fill();
      }
    }

    function initParticles() {
      particles = [];
      const numParticles = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    }

    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      connectParticles();
      animationId = requestAnimationFrame(animate);
    }

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div>
      <canvas id="particles-canvas"></canvas>

      {/* 🔥 NAV SIMPLE */}
      {token ? (
        <div className="user-bar">
          <span>Sesión activa</span>
          <button onClick={handleLogout} className="logout-btn">
            Cerrar sesión
          </button>
        </div>
      ) : (
        <button onClick={goLogin} className="login-btn">
          Login / Registro
        </button>
      )}

      <section className="hero">
        <div className="hero-content">
          <h1>
            Protege tu mundo digital con{" "}
            <span className="highlight glitch">NetSys AI</span>
          </h1>

          <p>
            Detecta amenazas, phishing y vulnerabilidades en segundos.
          </p>

          <div className="analyzer-box">
            <div className="input-wrapper">
              <input
                type="text"
                className="analyzer-input"
                placeholder="Pega un link..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />

              <button
                className={`analyze-btn ${loading ? "scanning" : ""}`}
                onClick={handleAnalyze}
              >
                {loading ? "Analizando..." : "Analizar ahora"}
              </button>
            </div>

            {result && (
              <div
                className={`result-box ${
                  result.status === "safe"
                    ? "safe"
                    : result.status === "suspicious"
                    ? "warning"
                    : "danger"
                }`}
              >
                <span className="result-icon">
                  {result.status === "safe"
                    ? "✔"
                    : result.status === "suspicious"
                    ? "⚠"
                    : "✖"}
                </span>

                <span className="result-text">
                  {result.reason}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;