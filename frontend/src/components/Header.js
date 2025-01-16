import  './header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img src='/logo.jpg' alt="Vehicle Breakdown Help Center" />
        </a>
      </div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
        <a href="/login">Login/Sign Up</a>
      </nav>
      <button className="helpNowButton">Help Now</button>
    </header>
  )
}

