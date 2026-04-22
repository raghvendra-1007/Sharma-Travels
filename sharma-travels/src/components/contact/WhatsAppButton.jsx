import { FaWhatsapp } from 'react-icons/fa'
import './WhatsApp.css'

function WhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/9199694819592', '_blank')
  }

  return (
    <div className="whatsapp" onClick={handleClick}>
      <FaWhatsapp />
    </div>
  )
}

export default WhatsAppButton