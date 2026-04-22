import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import WhatsAppButton from '../components/contact/WhatsAppButton'

import AboutHero from '../components/about/AboutHero'
import CompanyInfo from '../components/about/CompanyInfo'
import StatsSection from '../components/about/StatsSection'
import CitiesSection from '../components/about/CitiesSection'
import DriversInfo from '../components/about/DriversInfo'
import RefundPolicy from '../components/about/RefundPolicy'

function About() {
  return (
    <>
      <Header />

      <AboutHero />

      <CompanyInfo />

      <StatsSection />

      <CitiesSection />

      <DriversInfo />

      <RefundPolicy />

      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default About
