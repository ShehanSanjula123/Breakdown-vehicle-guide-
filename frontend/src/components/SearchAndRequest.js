import './searchAndRequest.css'

export default function SearchAndRequest() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section className="searchAndRequest">
      <h2>Need Help? Let's Get Started</h2>
      <form onSubmit={handleSubmit}>
        <select required>
          <option value="">Select Vehicle Type</option>
          <option value="car">Car</option>
          <option value="motorcycle">Motorcycle</option>
          <option value="truck">Truck</option>
        </select>
        <input type="text" placeholder="Your Current Location" required />
        <textarea placeholder="Describe Your Issue" required></textarea>
        <button type="submit">Submit Request</button>
      </form>
    </section>
  )
}

