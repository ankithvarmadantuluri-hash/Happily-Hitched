import { Link } from 'react-router-dom'

export default function Hospitality() {
  return (
    <section className="about page-section">
      <div className="about-container">
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop"
          alt="Hospitality Management"
        />

        <div>
          <h2 className="about-title">Hospitality Management</h2>

          <p className="about-text">
            Our Hospitality Management service ensures every guest experiences
            comfort, care, and luxury throughout the wedding.
          </p>

          <p className="about-text">
            We handle hotel bookings, airport pickups, transportation, welcome
            kits, and guest assistance services.
          </p>

          <p className="about-text">
            Dedicated teams manage seating arrangements, special requests, and
            real-time guest support during events.
          </p>

          <p className="about-text">
            Our goal is to provide a seamless experience where families focus
            only on celebration while we handle everything else.
          </p>

          <Link to="/services">

  <button className="primary-btn">
    Back To Services
  </button>

</Link>
        </div>
      </div>
    </section>
  )
}