import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Menu from './components/Menu.jsx'
import FeaturedItems from './components/FeaturedItems.jsx'
import Offers from './components/Offers.jsx'
import About from './components/About.jsx'
import Gallery from './components/Gallery.jsx'
import Location from './components/Location.jsx'
import Contact from './components/Contact.jsx'
import MobileActionBar from './components/MobileActionBar.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <FeaturedItems />
        <Offers />
        <About />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  )
}
