import './PreBookModal.css'
import Button from '../common/Button'

function PreBookModal({ onClose }) {

  const cars = [
    {
      name: 'Sedan',
      seats: '4+1',
      price: '₹11/km',
    },
    {
      name: 'Ertiga',
      seats: '6+1',
      price: '₹14/km',
    },
    {
      name: 'Innova',
      seats: '7+1',
      price: '₹18/km',
    },
  ]

  return (
    <div className="modal-overlay" onClick={onClose}>
      
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="modal-header">
          <h2>Pre-Book</h2>
          <span className="close" onClick={onClose}>×</span>
        </div>

        {/* Cars */}
        <div className="modal-content">
          {cars.map((car, index) => (
            <div key={index} className="car-option">
              <div>
                <h3>{car.name}</h3>
                <p>Seats: {car.seats}</p>
                <p>Rate: {car.price}</p>
              </div>

              <Button text="Pay ₹1000" />
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default PreBookModal