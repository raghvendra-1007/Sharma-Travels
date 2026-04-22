import { useState } from 'react'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import WhatsAppButton from '../components/contact/WhatsAppButton'

import HeroSlider from '../components/home/HeroSlider'
import BookingForm from '../components/home/BookingForm'
import PreBookModal from '../components/home/PreBookModal'
import CarCollection from '../components/home/CarCollection'
import WhyChooseUs from '../components/home/WhyChooseUs'

function Home() {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <>
      <Header />

      <HeroSlider />

      <BookingForm onBook={() => setShowPopup(true)} />

      {showPopup && (
        <PreBookModal onClose={() => setShowPopup(false)} />
      )}

      <CarCollection />

      <WhyChooseUs />

      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default Home