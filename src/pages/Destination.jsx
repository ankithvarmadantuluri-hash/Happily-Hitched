import { Link } from 'react-router-dom'

export default function Destination() {
  return (
    <section className="destination page-section">
      <div className="destination-container">
        <div>
          <h2 className="about-title">Destination Weddings</h2>

          <p className="about-text">
            We design breathtaking destination weddings at exotic locations in
            India and around the world.
          </p>

          <p className="about-text">
            From beach weddings in Goa and Maldives to royal palace weddings in
            Jaipur and Udaipur, we handle everything from planning to execution.
          </p>

          <p className="about-text">
            Our services include travel coordination, accommodation booking,
            venue setup, permissions, and guest management.
          </p>

          <p className="about-text">
            Each destination is transformed into a personalized luxury
            experience with themed decor and cultural elegance.
          </p>

          <Link to="/services">

  <button className="primary-btn">
    Back To Services
  </button>

</Link>
        </div>

        <img
          src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop"
          alt="Destination Wedding"
        />
      </div>
    </section>
  )
}