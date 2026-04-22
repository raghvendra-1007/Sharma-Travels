import './BookingForm.css'
import Button from '../common/Button'

function BookingForm({ onBook }) {
  return (
    <div className="booking">
      <div className="container booking-container">

        {/* Left Side */}
        <div className="booking-left">
          <input type="text" placeholder="Pickup Location" />
          <input type="text" placeholder="Drop Location" />
          <input type="date" />
          <input type="tel" placeholder="Mobile Number" maxLength="10" />
        </div>

        {/* Right Side */}
        <div className="booking-right">
          <select>
            <option>Select City</option>
            <option>Jaipur</option>
            <option>Ajmer</option>
            <option>Kishangarh</option>
          </select>

          <select>
            <option>Trip Type</option>
            <option>One Way</option>
            <option>Round Trip</option>
          </select>

          <select>
            <option>Select Vehicle</option>
            <option>Sedan</option>
            <option>Ertiga</option>
            <option>Innova</option>
          </select>
        </div>

      </div>

      {/* Button */}
      <div className="booking-btn">
        <Button text="Book Now" onClick={onBook} />
      </div>
    </div>
  )
}

export default BookingForm