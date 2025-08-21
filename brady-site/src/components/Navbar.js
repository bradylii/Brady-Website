import { Link } from 'react-router-dom';
import '../Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-right">
        <ul>
          <Link to="/" className="logo">Home</Link>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/experience">Experience</Link></li>
        </ul>
      </div>
    </nav>
  );
}
