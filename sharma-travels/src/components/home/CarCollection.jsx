import './CarCollection.css'
import SectionTitle from '../common/SectionTitle'
import CarCard from './CarCard'

import sedan from '../../assets/images/cars/sedan.png'
import ertiga from '../../assets/images/cars/ertiga.png'
import innova from '../../assets/images/cars/innova.png'

function CarCollection() {
  return (
    <div className="cars">
      <div className="container">

        <SectionTitle
          title="Our Car Collection"
          subtitle="Choose from our range of comfortable vehicles"
        />

        <div className="car-grid">
          <CarCard
            image={sedan}
            name="Sedan"
            seats="4+1"
            year="2024"
            fuel="Petrol/CNG"
            price="₹11/km"
          />

          <CarCard
            image={ertiga}
            name="Ertiga"
            seats="6+1"
            year="2024"
            fuel="Petrol"
            price="₹14/km"
          />

          <CarCard
            image={innova}
            name="Innova"
            seats="7+1"
            year="2024"
            fuel="Diesel"
            price="₹18/km"
          />
        </div>

      </div>
    </div>
  )
}

export default CarCollection