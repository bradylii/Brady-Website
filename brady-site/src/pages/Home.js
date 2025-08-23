"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

export default function Home({ togglePlay, playing }) {
  const [init, setInit] = useState(false);

  // ✅ only initialize once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => setInit(true));
  }, []);

  // ✅ memoize options so they don’t trigger rerender
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
    [] // <— super important, no deps
  );

  // ✅ memoize the actual component so it persists
  const ParticlesBackground = useMemo(() => {
    return init ? <Particles id="tsparticles" options={options} /> : null;
  }, [init, options]);

  return (
    <div className="hero-container">
      {ParticlesBackground}
      <section className="hero">
        <h1 className="hero-title">Brady Li</h1>
        <p className="hero-subtitle">Software Engineer, Researcher, Lifelong Learner</p>
        <p className="hero-subtext">I build realities and explore the minds within</p>

        <div className="music-player">
          <p>Music while you explore 💿</p>
          <button type="button" onClick={togglePlay} className="music-btn">
            {playing ? "⏸ Pause" : "▶ Play"}
          </button>
        </div>

        {/* icons */}
        <div className="connect-buttons">
          <a href="https://github.com/bradylii" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/brady-li" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a 
            href="/Brady_Li_SWE_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <HiOutlineDocumentText />
          </a>
        </div>
      </section>
    </div>
  );
}
