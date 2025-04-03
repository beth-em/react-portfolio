// Imports for NavLink
import { NavLink } from 'react-router-dom';

// Function to navigate to different pages by selecting options on nav bar
function Navigation() {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-menu">
        <div className="navbar-start">
          <NavLink to="/" end className="navbar-item">About Me</NavLink>
          <NavLink to="/portfolio" className="navbar-item">Portfolio</NavLink>
          <NavLink to="/contact" className="navbar-item">Contact</NavLink>
          <NavLink to="/resume" className="navbar-item">Resume</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
