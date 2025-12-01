import { useEffect, useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import CarViewer360 from './components/CarViewer360'
import Gallery from './components/Gallery'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Navbar from './components/Navbar'
import SpeedLines from './components/SpeedLines'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="relative bg-ferrari-dark">
      <SpeedLines />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CarViewer360 />
      <Gallery />
      <AboutSection />
      <ContactSection />
    </div>
  )
}

export default App
