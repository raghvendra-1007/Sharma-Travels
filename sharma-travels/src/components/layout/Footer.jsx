import './Footer.css'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container footer-container">

          {/* Column 1 */}
          <div className="footer-col">
            <h3>Sharma Travels</h3>
            <p>
              Reliable and comfortable travel services across Jaipur,
              Ajmer and Kishangarh. Your journey, our responsibility.
            </p>
          </div>

          {/* Column 2 */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>Our Services</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>One Way Trips</li>
              <li>Outstation Trips</li>
              <li>Corporate Rentals</li>
              <li>Self Drive Cars</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-col">
            <h4>Contact</h4>
            <p><FaPhone /> +91 9876543210</p>
            <p><FaEnvelope /> info@sharmatravels.com</p>
            <p><FaMapMarkerAlt /> Jaipur, Rajasthan</p>
          </div>

        </div>

        {/* Google Map */}
        <div className="map-section">
          <iframe
            src="https://maps.google.com/maps?q=Jaipur&t=&z=13&ie=UTF8&iwloc=&output=embed"
            title="map"
          ></iframe>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Sharma Travels. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer