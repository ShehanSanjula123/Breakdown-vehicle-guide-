import './testimonial.css'

export default function Testimonials() {
  const testimonials = [
    { name: 'John D.', photo: '/ava-1.jpg', feedback: 'Saved me when I was stranded!', rating: 5 },
    { name: 'Sarah M.', photo: '/ava-2.jpg', feedback: 'Quick and reliable service.', rating: 4 },
    { name: 'Mike R.', photo: '/ava-3.jpg', feedback: 'Professional and friendly staff.', rating: 5 },
  ]

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonialGrid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonialCard">
            <img src={testimonial.photo || "/placeholder.svg"} alt={testimonial.name} />
            <h4>{testimonial.name}</h4>
            <p>{testimonial.feedback}</p>
            <div className="rating">
              {'⭐'.repeat(testimonial.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

