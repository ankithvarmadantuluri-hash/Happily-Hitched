import { Link } from 'react-router-dom'

export default function Planning() {
  return (
    <section className="about page-section">
      <div className="about-container">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
          alt="Luxury Wedding Planning"
        />

        <div>
          <h2 className="about-title">Luxury Wedding Planning</h2>

          <p className="about-text">
            Our Luxury Wedding Planning service offers complete end-to-end
            execution of your wedding with elegance, precision, and creativity.
          </p>

          <p className="about-text">
            We begin with concept development, theme selection, budgeting, and
            detailed scheduling. Every element is planned according to your
            vision and cultural traditions.
          </p>

          <p className="about-text">
            Our team manages venue booking, vendor coordination, catering,
            photography, entertainment, logistics, and guest hospitality.
          </p>

          <p className="about-text">
            On the wedding day, we ensure flawless execution so you can enjoy
            every moment without stress.
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