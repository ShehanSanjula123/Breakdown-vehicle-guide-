import './features.css'

export default function Features() {
  const features = [
    { icon: '🕒', title: '24/7 Emergency Assistance', description: 'We\'re always here to help.' },
    { icon: '📍', title: 'Real-time Location Tracking', description: 'Know exactly where help is.' },
    { icon: '✅', title: 'Verified Service Providers', description: 'Trust in our network.' },
    { icon: '⭐', title: 'User Reviews & Ratings', description: 'See what others are saying.' },
  ]

  return (
    <section className="features">
      {features.map((feature, index) => (
        <div key={index} className="featureCard">
          <div className="icon">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  )
}

