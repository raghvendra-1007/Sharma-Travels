import './PrivacyPolicy.css'

function PrivacyPolicy() {
  return (
    <div className="privacy">
      <div className="container">

        <h2>Privacy Policy</h2>

        <div className="privacy-content">
          <p>
            At Sharma Travels, we respect your privacy and are committed to protecting your personal information.
          </p>

          <ul>
            <li>
              We collect basic details like name, phone number, and location for booking purposes.
            </li>
            <li>
              Your information is used only to provide and improve our services.
            </li>
            <li>
              We do not sell, share, or rent your personal data to third parties.
            </li>
            <li>
              All transactions and communications are handled securely.
            </li>
            <li>
              We may use your contact details to send booking confirmations or updates.
            </li>
          </ul>

          <p>
            By using our services, you agree to our privacy policy.
          </p>
        </div>

      </div>
    </div>
  )
}

export default PrivacyPolicy
