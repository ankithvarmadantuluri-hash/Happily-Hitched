import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Footer from '../components/Footer'

import { Link } from 'react-router-dom'

export default function ServicesPage() {

  return (

    <>

      <Navbar />

      <main className="page-section">

        <Services />

        <div className="back-home-container">

          <Link to="/">

            <button className="primary-btn">
              Back To Home
            </button>

          </Link>

        </div>

      </main>

      <Footer />

    </>

  )

}