import './ContactInfo.css'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="container info-grid">

        <div className="info-card">
          <FaPhone />
          <h3>Call Us</h3>
          <p>+91 9876543210</p>
        </div>

        <div className="info-card">
          <FaEnvelope />
          <h3>Email</h3>
          <p>info@sharmatravels.com</p>
        </div>

        <div className="info-card">
          <FaMapMarkerAlt />
          <h3>Location</h3>
          <p>Jaipur, Rajasthan</p>
        </div>

      </div>
    </div>
  )
}

export default ContactInfo