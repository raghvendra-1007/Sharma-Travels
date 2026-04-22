import './ContactForm.css'
import Button from '../common/Button'

function ContactForm() {
  return (
    <div className="contact-form">
      <div className="container">

        <h2>Send a Message</h2>

        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>

          <Button text="Send Message" />
        </form>

      </div>
    </div>
  )
}

export default ContactForm