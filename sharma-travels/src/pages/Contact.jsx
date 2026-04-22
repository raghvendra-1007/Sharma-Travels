import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import WhatsAppButton from '../components/contact/WhatsAppButton'

import ContactHero from '../components/contact/ContactHero'
import ContactInfo from '../components/contact/ContactInfo'
import ContactForm from '../components/contact/ContactForm'

function Contact() {
  return (
    <>
      <Header />

      <ContactHero />

      <ContactInfo />

      <ContactForm />

      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default Contact