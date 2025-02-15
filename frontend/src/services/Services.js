import './services.css'

export default function Services() {
  const services = [
    { title: 'Towing', description: '24/7 towing service for all vehicle types', icon: '🚛' },
    { title: 'Battery Jump-Start', description: 'Quick battery boost to get you back on the road', icon: '🔋' },
    { title: 'Tire Change', description: 'Flat tire replacement with your spare', icon: '🛞' },
    { title: 'Fuel Delivery', description: 'Emergency fuel delivery if you run out of gas', icon: '⛽' },
    { title: 'Lockout Service', description: 'Help when you\'re locked out of your vehicle', icon: '🔑' },
    { title: 'Winching', description: 'Extraction service if your vehicle is stuck', icon: '🪢' },
  ]

  return (
    <div className="servicesPage">
      <h1>Our Services</h1>
      <p className="intro">We offer a wide range of roadside assistance services to keep you moving.</p>
      <div className="serviceGrid">
        {services.map((service, index) => (
          <div key={index} className="serviceCard">
            <div className="serviceIcon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

