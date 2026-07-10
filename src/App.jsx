import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Events from './components/Events.jsx'
import Timeline from './components/Timeline.jsx'
import Speakers from './components/Speakers.jsx'
import Registration from './components/Registration.jsx'
import Footer from './components/Footer.jsx'
import CursorGlow from './components/CursorGlow.jsx'

export default function App() {
  return (
    <>
      <div className="grid-overlay" />
      <div className="noise-overlay" />
      <div className="scan-line" />
      <CursorGlow />

      <Navbar />
      <Hero />
      <About />
      <Events />
      <Timeline />
      <Speakers />
      <Registration />
      <Footer />
    </>
  )
}
