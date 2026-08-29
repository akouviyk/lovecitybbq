import Nav from './components/Nav'
import Hero from './components/Hero'
import InfoStrip from './components/InfoStrip'
import SmokeDivider from './components/SmokeDivider'
import Story from './components/Story'
import Gallery from './components/Gallery'
import LocalScene from './components/LocalScene'
import Menu from './components/Menu'
import Visit from './components/Visit'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <InfoStrip />
      <SmokeDivider from="var(--ink)" to="#fbf2de" />
      <Story />
      <Gallery />
      <LocalScene />
      <SmokeDivider from="#fbf2de" to="#ffffff" />
      <Menu />
      <SmokeDivider from="#ffffff" to="#fbf2de" />
      <Visit />
      <Footer />
    </div>
  )
}
