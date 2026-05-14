import { Link } from 'react-router-dom'

export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop',
  ]

  return (
    <section className="gallery">
      <div className="section-heading">
        <h2>Moments We Created</h2>
      </div>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <img src={img} alt="Wedding Gallery" key={index} />
        ))}
      </div>

      <div className="view-more-container">
        <Link to="/gallery-more">
          <button className="primary-btn">View More</button>
        </Link>

        <Link to="/contact">
          <button className="primary-btn">Contact Us</button>
        </Link>
      </div>
    </section>
  )
}