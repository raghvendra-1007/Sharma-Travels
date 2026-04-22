import './CarCard.css'

function CarCard({ image, name, seats, year, fuel, price }) {
  return (
    <div className="car-card">
      <img src={image} alt={name} />

      <div className="car-info">
        <h3>{name}</h3>
        <p>Passengers: {seats}</p>
        <p>Year: {year}</p>
        <p>Fuel: {fuel}</p>

        <h4>{price}</h4>
      </div>
    </div>
  )
}

export default CarCard