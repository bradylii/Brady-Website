"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles"; // or loadSlim for smaller bundle

export default function Home() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine); // initialize features
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: { color: "transparent" },
      particles: {
        number: { value: 80 },
        color: { value: "#ffffff" },
        links: {
          enable: true,
          color: "#8888ff",
          distance: 150,
          opacity: 0.4,
          width: 1,
        },
        move: { enable: true, speed: 1 },
        size: { value: { min: 1, max: 3 } },
        opacity: { value: 0.5 },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          repulse: { distance: 100 },
          push: { quantity: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null; // wait until engine is ready

  return (
    <div className="hero-container">
      <Particles id="tsparticles" options={options} />
      <section className="hero">
        <h1 className="hero-title">Brady Li</h1>
        <p className="hero-subtitle">Software Engineer, Researcher, Student</p>
        <p className="hero-subtext">I build realities and explore the minds within</p>
        <div className="connect-buttons">
          <a href="https://github.com/bradylii" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/brady-li-78328b23b/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://drive.google.com/file/d/1uz0uT9a0cpNA5SlwJOYT6ai6rVqLm2_m/view?usp=sharing"target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </section>
    </div>
  );
}
