import './RefundPolicy.css'

function RefundPolicy() {
  return (
    <div className="refund">
      <div className="container">

        <h2>Refund Policy</h2>

        <div className="refund-content">
          <p>
            At Sharma Travels, we aim to provide a smooth and reliable booking experience.
            Please read our refund policy carefully before making a booking.
          </p>

          <ul>
            <li>
              Cancellations made at least <strong>24 hours before</strong> the journey
              are eligible for a full refund.
            </li>
            <li>
              Cancellations made within <strong>24 hours</strong> may be subject to partial charges.
            </li>
            <li>
              Advance payments (₹1000 booking amount) are <strong>non-refundable</strong>
              once the driver is assigned.
            </li>
            <li>
              Refunds, if applicable, will be processed within <strong>5–7 working days</strong>.
            </li>
            <li>
              In case of service issues from our side, we will ensure fair compensation.
            </li>
          </ul>

          <p>
            For any refund-related queries, please contact our support team.
          </p>
        </div>

      </div>
    </div>
  )
}

export default RefundPolicy
