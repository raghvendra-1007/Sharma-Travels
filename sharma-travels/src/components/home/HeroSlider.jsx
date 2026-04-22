import { useState, useEffect } from 'react'
import './HeroSlider.css'

import hero1 from '../../assets/images/hero/hero1.jpg'
import hero2 from '../../assets/images/hero/hero2.jpg'
import hero3 from '../../assets/images/hero/hero3.jpg'

const images = [hero1, hero2, hero3]

function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="hero">
      {images.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Overlay Content */}
      <div className="hero-content">
        <h1>Sharma Travels</h1>
        <p>Your trusted partner for comfortable journeys</p>
      </div>
    </div>
  )
}

export default HeroSlider