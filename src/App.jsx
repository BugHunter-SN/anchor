import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Values from './components/Values'
import Programs from './components/Programs'
import Impact from './components/Impact'
import Donate from './components/Donate'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Values />
        <Programs />
        <Impact />
        <Donate />
      </main>
      <Footer />
    </div>
  )
}