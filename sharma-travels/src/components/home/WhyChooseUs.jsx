import './WhyChooseUs.css'
import SectionTitle from '../common/SectionTitle'

import { FaCar, FaUserTie, FaClock, FaShieldAlt } from 'react-icons/fa'

function WhyChooseUs() {
  const points = [
    {
      icon: <FaCar />,
      title: 'Well Maintained Cars',
      desc: 'Our vehicles are clean, comfortable and regularly serviced.',
    },
    {
      icon: <FaUserTie />,
      title: 'Professional Drivers',
      desc: 'Experienced and polite drivers for a smooth journey.',
    },
    {
      icon: <FaClock />,
      title: 'On Time Service',
      desc: 'We value your time and ensure timely pickups and drops.',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Safe & Secure',
      desc: 'Your safety is our top priority during the journey.',
    },
  ]

  return (
    <div className="why">
      <div className="container">

        <SectionTitle
          title="Why Choose Us"
          subtitle="We provide the best travel experience for you"
        />

        <div className="why-grid">
          {points.map((item, index) => (
            <div key={index} className="why-card">
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default WhyChooseUs