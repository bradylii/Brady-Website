import { Routes, Route } from "react-router-dom";
import { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Connect from "./pages/Connect";
import { Analytics } from "@vercel/analytics/react"

function App() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setPlaying(true);
      }).catch((err) => {
        console.warn("Play was blocked:", err);
      });
    }
  };

  return (
    <div className="App">
      <Navbar />

      {/* Audio element lives here globally, invisible */}
      <audio ref={audioRef} src="/Middle_of_Nowhere.mp3" loop />

      <main className="content">
        <Routes>
          <Route
            path="/"
            element={<Home togglePlay={togglePlay} playing={playing} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </main>
      <Analytics />
    </div>
  );
}

export default App;
