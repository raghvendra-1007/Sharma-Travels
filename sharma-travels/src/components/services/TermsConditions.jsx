import './TermsConditions.css'

function TermsConditions() {
  return (
    <div className="terms">
      <div className="container">

        <h2>Terms & Conditions</h2>

        <div className="terms-content">
          <p>
            By booking a ride with Sharma Travels, you agree to the following terms and conditions:
          </p>

          <ul>
            <li>
              All bookings are subject to availability of vehicles and drivers.
            </li>
            <li>
              Customers must provide accurate pickup and drop details at the time of booking.
            </li>
            <li>
              The booking amount (₹1000) is required to confirm your ride.
            </li>
            <li>
              Additional charges may apply for extra distance, waiting time, or route changes.
            </li>
            <li>
              Sharma Travels is not responsible for delays due to traffic, weather, or unforeseen events.
            </li>
            <li>
              Customers are expected to maintain proper behavior during the journey.
            </li>
            <li>
              Any damage caused to the vehicle by the customer will be chargeable.
            </li>
          </ul>

          <p>
            We reserve the right to update these terms at any time without prior notice.
          </p>
        </div>

      </div>
    </div>
  )
}

export default TermsConditions
