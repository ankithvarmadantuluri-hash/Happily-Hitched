import { Link } from 'react-router-dom'

export default function DestinationDetails() {
  const cards = [
    {
      title: 'Beach Wedding',
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
      text: 'Romantic beach weddings with sunset views, floral mandaps, and ocean breeze celebrations.',
    },
    {
      title: 'Royal Palace Wedding',
      image:
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop',
      text: 'Luxury palace weddings with royal decor, grand entrances, and heritage vibes.',
    },
    {
      title: 'Resort Wedding',
      image:
        'https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=1200&auto=format&fit=crop',
      text: 'Premium resort weddings with poolside setups, elegant lighting, and luxury hospitality.',
    },
    {
      title: 'Mountain Wedding',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
      text: 'Scenic mountain weddings with natural beauty, cool breeze, and breathtaking views.',
    },
  ]

  return (
    <section className="services page-section">
      <div className="section-heading">
        <h2>Destination Wedding Experiences</h2>
        <p>Explore our most beautiful destination wedding setups.</p>
      </div>

      <div className="services-grid">
        {cards.map((card, index) => (
          <div className="service-card" key={index}>
            <img src={card.image} alt={card.title} className="service-image" />

            <div className="service-content">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="view-more-container">
        <Link to="/">
          <button className="primary-btn">Back Home</button>
        </Link>
      </div>
    </section>
  )
}