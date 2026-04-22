import './ServiceCard.css'

function ServiceCard({ image, title, desc }) {
  return (
    <div className="service-card">
      <img src={image} alt={title} />
      <div className="service-content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default ServiceCard