import { Link } from 'react-router-dom'

export default function GalleryMore() {
  const images = [
    'https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1525258946800-98cfd641d0de?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1200&auto=format&fit=crop',
    
    'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1200&auto=format&fit=crop',
  ]

  return (
    <section className="gallery page-section">
      <div className="section-heading">
        <h2>Wedding Gallery</h2>
      </div>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <img src={img} alt="More Gallery" key={index} />
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