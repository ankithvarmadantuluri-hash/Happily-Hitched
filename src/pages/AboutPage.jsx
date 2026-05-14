import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { Link } from 'react-router-dom'

export default function AboutPage() {

  const weddingTypes = [

    {
      title: 'Beach Weddings',
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
      text:
        'Romantic beach weddings with sunset ceremonies, floral mandaps, ocean views, and luxury seaside celebrations.',
    },

    {
      title: 'Royal Palace Weddings',
      image:
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop',
      text:
        'Experience royal luxury with palace weddings featuring grand entrances, regal decor, and heritage-inspired celebrations.',
    },

    {
      title: 'Resort Weddings',
      image:
        'https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=1200&auto=format&fit=crop',
      text:
        'Premium resort weddings with elegant setups, poolside functions, luxury hospitality, and unforgettable experiences.',
    },

    {
      title: 'Mountain Weddings',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
      text:
        'Scenic mountain weddings surrounded by breathtaking views, fresh air, natural beauty, and peaceful luxury.',
    },

  ]

  return (

    <>

      <Navbar />

      <section className="about page-section">

        <div className="about-container">

          <img
            src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop"
            alt="About Happily Hitched"
          />

          <div>

            <h2 className="about-title">
              About Happily Hitched
            </h2>

            <p className="about-text">
              Happily Hitched is a premium wedding and event planning company
              specializing in luxurious and unforgettable celebrations.
            </p>

            <p className="about-text">
              From destination weddings to elegant decor styling,
              our expert team creates personalized experiences
              that reflect your story and vision.
            </p>

            <p className="about-text">
              We combine creativity, planning, hospitality,
              and flawless execution to transform weddings
              into timeless memories.
            </p>

          </div>

        </div>

      </section>

      {/* WEDDING TYPES SECTION */}

      <section className="services">

        <div className="section-heading">

          <h2>
            Types Of Weddings We Create
          </h2>

          <p>
            Explore our signature luxury wedding experiences.
          </p>

        </div>

        <div className="services-grid">

          {weddingTypes.map((item, index) => (

            <div className="service-card" key={index}>

              <img
                src={item.image}
                alt={item.title}
                className="service-image"
              />

              <div className="service-content">

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </div>

            </div>

          ))}

        </div>

        <div className="view-more-container">

          <Link to="/contact">

            <button className="primary-btn">
              Plan Your Wedding
            </button>

          </Link>

        </div>

      </section>

      <Footer />

    </>

  )

}