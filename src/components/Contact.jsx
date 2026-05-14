export default function Contact() {
  function scheduleConsultation() {
    const name = document.getElementById('nameInput').value.trim()
    const email = document.getElementById('emailInput').value.trim()
    const phone = document.getElementById('phoneInput').value.trim()

    if (name === '') {
      alert('Please enter your name')
      return
    }

    if (email === '' || !email.includes('@') || !email.includes('.')) {
      alert('Please enter a valid email')
      return
    }

    if (phone === '' || phone.length < 10) {
      alert('Please enter a valid contact number')
      return
    }

    alert('Consultation Scheduled Successfully! Our team will contact you soon.')

    document.getElementById('nameInput').value = ''
    document.getElementById('emailInput').value = ''
    document.getElementById('phoneInput').value = ''
  }

  return (
    <section id="contact" className="contact">
      <h2>Let’s Plan Your Dream Wedding</h2>

      <p>
        Connect with our wedding experts to begin designing a personalized
        celebration that reflects your vision.
      </p>

      <div className="office-details">
        <h3>Visit Our Wedding Studio</h3>

        <p>
          📍 Alankaran Weddings, Jubilee Hills Road No. 45, Hyderabad,
          Telangana, India
        </p>

        <p>📞 +91 98765 43210</p>

        <p>✉️ info@alankaranweddings.com</p>

        <p>🕒 Monday - Saturday | 10:00 AM - 7:00 PM</p>
      </div>

      <div className="contact-form">
        <input type="text" id="nameInput" placeholder="Enter your name" />

        <input type="email" id="emailInput" placeholder="Enter your email" />

        <input
          type="tel"
          id="phoneInput"
          placeholder="Enter your contact number"
        />

        <button className="primary-btn" onClick={scheduleConsultation}>
          Schedule Consultation
        </button>
      </div>

      <div className="view-more-container">
        <a href="tel:+919876543210">
          <button className="primary-btn">Call Now</button>
        </a>

        <a href="https://wa.me/919876543210" target="_blank">
          <button className="primary-btn">WhatsApp Us</button>
        </a>
      </div>
    </section>
  )
}