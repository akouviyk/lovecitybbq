import Nav from './components/Nav'
import Hero from './components/Hero'
import SmokeDivider from './components/SmokeDivider'
import Story from './components/Story'
import LocalScene from './components/LocalScene'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import InfoStrip from './components/InfoStrip'
import Menu from './components/Menu'
import FAQ from './components/FAQ'
import Visit from './components/Visit'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <SmokeDivider from="var(--ink)" to="#fbf2de" />
      <Story />
      <LocalScene />
      <Gallery />
      <SmokeDivider from="#fbf2de" to="#ffffff" />
      <Testimonials />
      <InfoStrip />
      <SmokeDivider from="#f4efe1" to="#ffffff" />
      <Menu />
      <FAQ />
      <SmokeDivider from="#ffffff" to="#fbf2de" />
      <Visit />
      <Footer />
    </div>
  )
}
