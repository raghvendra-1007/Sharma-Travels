import './ServiceList.css'
import SectionTitle from '../common/SectionTitle'
import ServiceCard from './ServiceCard'

import hero1 from '../../assets/images/hero/hero1.jpg'
import hero2 from '../../assets/images/hero/hero2.jpg'
import hero3 from '../../assets/images/hero/hero3.jpg'

function ServiceList() {
  return (
    <div className="services-list">
      <div className="container">

        <SectionTitle
          title="Our Travel Services"
          subtitle="Flexible options for all your travel needs"
        />

        <div className="service-grid">
          <ServiceCard
            image={hero1}
            title="Cab Services"
            desc="Affordable and convenient one way travel solutions."
          />

          <ServiceCard
            image={hero2}
            title="Outstation Trips"
            desc="Comfortable long distance journeys with experienced drivers."
          />

          <ServiceCard
            image={hero3}
            title="Corporate Rentals"
            desc="Reliable transport services for your business needs."
          />

          <ServiceCard
            image={hero1}
            title="Self Drive Cars"
            desc="Drive yourself with our well-maintained rental cars."
          />
        </div>

      </div>
    </div>
  )
}

export default ServiceList