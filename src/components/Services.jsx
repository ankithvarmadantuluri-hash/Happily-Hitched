import { Link } from 'react-router-dom'

export default function Services() {
  const services = [
    {
      title: 'Luxury Wedding Planning',
      image:
        'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
      text: 'Complete end-to-end wedding planning with elegant experiences and seamless coordination.',
      link: '/planning',
    },
    {
      title: 'Destination Weddings',
      image:
        'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop',
      text: 'Beach weddings, palace weddings, and luxury resort celebrations worldwide.',
      link: '/destination',
    },
    {
      title: 'Wedding Decor & Styling',
      image:
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
      text: 'Premium floral styling, stage decor, lighting concepts, and luxury aesthetics.',
      link: '/decor',
    },
    {
      title: 'Hospitality Management',
      image:
        'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop',
      text: 'Guest management, travel coordination, and luxury hospitality experiences.',
      link: '/hospitality',
    },
  ]

  return (
    <section className="services">
      <div className="section-heading">
        <h2>Luxury Wedding Services</h2>
        <p>
          Explore our premium wedding planning and luxury celebration services.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />

            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.text}</p>

              <Link to={service.link}>
                <button className="primary-btn">Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="view-more-container">
        <Link to="/contact">
          <button className="primary-btn">Enquire Now</button>
        </Link>
      </div>
    </section>
  )
}