import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import GalleryMore from './pages/GalleryMore'
import ContactPage from './pages/ContactPage'

import Planning from './pages/Planning'
import Destination from './pages/Destination'
import Decor from './pages/Decor'
import Hospitality from './pages/Hospitality'
import DestinationDetails from './pages/DestinationDetails'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/gallery-more" element={<GalleryMore />} />
      <Route path="/contact" element={<ContactPage />} />

      <Route path="/planning" element={<Planning />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/decor" element={<Decor />} />
      <Route path="/hospitality" element={<Hospitality />} />
      <Route path="/destination-details" element={<DestinationDetails />} />
    </Routes>
  )
}