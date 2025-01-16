import styles from './App.css'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import SearchAndRequest from './components/SearchAndRequest'
import Testimonials from './components/Testimonial'

export default function HomePage() {
  return (
    <div className={styles.container}>
     <Header/>
      <main>
       <HeroSection/>
       <Features/>
       <SearchAndRequest/>
       <Testimonials/>
      </main>
      <Footer/>
    </div>
  )
}

