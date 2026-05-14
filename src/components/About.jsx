import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <img
          src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop"
          alt="Wedding Couple"
        />

        <div>
          <h2 className="about-title">
            Curating Elegant Weddings With Luxury & Detail
          </h2>

          <p className="about-text">
            We create extraordinary celebrations tailored to your story. From
            intimate ceremonies to grand destination weddings, our team manages
            every detail with sophistication and creativity.
          </p>

          <p className="about-text">
            Our expertise spans venue selection, decor styling, entertainment,
            hospitality, and complete wedding coordination.
          </p>

          <div className="cta-row">
            <Link to="/about">
              <button className="primary-btn">Discover More</button>
            </Link>

            <Link to="/contact">
              <button className="primary-btn">Plan Your Event</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}