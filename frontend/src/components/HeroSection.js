import './heroSection.css'

export default function HeroSection() {
  return (
    <section className="hero">
      <h1>Roadside Help, Anytime, Anywhere!</h1>
      <button className="ctaButton">Request Assistance Now</button>
      <div className="searchFields">
        <select>
          <option value="">Select Vehicle Type</option>
          <option value="car">Car</option>
          <option value="motorcycle">Motorcycle</option>
          <option value="truck">Truck</option>
        </select>
        <input type="text" placeholder="Enter your location" />
        <input type="text" placeholder="Describe your issue" />
      </div>
    </section>
  )
}

