import './footer.css'
import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="contactInfo">
        <p>Phone: 1-800-HELP-NOW</p>
        <p>Email: support@vehiclehelp.com</p>
      </div>
      <div className="socialLinks">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
      <div className="quickLinks">
        <a href="/terms">Terms of Service</a>
        <a href="/privacy">Privacy Policy</a>
      </div>
    </footer>
  )
}

