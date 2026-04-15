import './index.css'
import Hero from './sections/Hero.jsx'
import Features from './sections/Features.jsx'
import HowItWorks from './sections/HowItWorks.jsx'
import TechStack from './sections/TechStack.jsx'
import Donate from './sections/Donate.jsx'
import Footer from './sections/Footer.jsx'

export default function App() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <TechStack />
      <Donate />
      <Footer />
    </main>
  )
}
