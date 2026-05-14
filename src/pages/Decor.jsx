import { Link } from 'react-router-dom'

export default function Decor() {
  return (
    <section className="about page-section">
      <div className="about-container">
        <img
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop"
          alt="Wedding Decor"
        />

        <div>
          <h2 className="about-title">Wedding Decor & Styling</h2>

          <p className="about-text">
            We create visually stunning wedding environments through creative
            design, luxury styling, and artistic floral arrangements.
          </p>

          <p className="about-text">
            Our decor services include mandap design, stage decoration,
            entrance arches, floral installations, aisle styling, and lighting
            concepts.
          </p>

          <p className="about-text">
            We specialize in themes such as royal palaces, modern minimal,
            bohemian elegance, and traditional cultural weddings.
          </p>

          <p className="about-text">
            Every setup is customized to reflect your personality and create
            unforgettable visual experiences.
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