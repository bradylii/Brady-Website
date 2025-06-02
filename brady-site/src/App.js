import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Connect from './components/Connect';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
      <Connect />
    </div>
  );
}

export default App;