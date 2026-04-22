import { NavLink } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/images/logo.png'

function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Sharma Travels" />
          <span>Sharma Travels</span>
        </div>

        {/* Navigation */}
        <nav className="nav">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/services" className="nav-link">
            Our Services
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About Us
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact Us
          </NavLink>
        </nav>

      </div>
    </header>
  )
}

export default Header