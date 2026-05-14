import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
      <div className="nav-container">
        <h1 className="logo">HAPPILY HITCHED</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery-more">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Link to="/contact">
          <button className="nav-btn">Plan Wedding</button>
        </Link>
      </div>
    </header>
  )
}