import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import WhatsAppButton from '../components/contact/WhatsAppButton'

import ServicesHero from '../components/services/ServicesHero'
import ServiceList from '../components/services/ServiceList'
import ExtraInfo from '../components/services/ExtraInfo'
import TermsConditions from '../components/services/TermsConditions'

function Services() {
  return (
    <>
      <Header />

      <ServicesHero />

      <ServiceList />

      <ExtraInfo />

      <TermsConditions />

      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default Services
