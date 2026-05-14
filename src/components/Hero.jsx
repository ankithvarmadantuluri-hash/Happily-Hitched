import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">PREMIUM WEDDING EXPERIENCES</p>

        <h1 className="hero-title">
          Crafting Timeless
          <br />
          <span>Wedding Celebrations</span>
        </h1>

        <p className="hero-text">
          Luxury wedding planning, destination celebrations, and elegant decor
          concepts designed to create unforgettable memories.
        </p>

        <div className="hero-buttons">
          <Link to="/services">
            <button className="primary-btn">Explore Services</button>
          </Link>

          <Link to="/gallery-more">
            <button className="secondary-btn">View Portfolio</button>
          </Link>

          <Link to="/contact">
            <button className="primary-btn">Book Your Event</button>
          </Link>
        </div>
      </div>
    </section>
  )
}