import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Footer from '../components/Footer'

import { Link } from 'react-router-dom'

export default function Home() {

  return (

    <>

      <Navbar />

      <Hero />

      <About />

      {/* CONTACT CTA SECTION */}

      <section className="contact-preview">

        <div className="contact-preview-content">

          <h2>
            Let’s Create Your Dream Wedding
          </h2>

          <p>
            Connect with our expert planners to begin
            designing a luxurious and unforgettable celebration.
          </p>

          <Link to="/contact">

            <button className="primary-btn">
              Contact Our Team
            </button>

          </Link>

        </div>

      </section>

      <Footer />

    </>

  )

}