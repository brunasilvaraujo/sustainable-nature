// import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import Header from './components/Header'
import Hero from './components/HeroSection'
import Services from './components/SevicesSection';
import About from './components/AboutSection';
import Contact from './components/ContactSection';
import Footer from './components/Footer';


function App() {
  
  return (
    <div className="home">     
      <Header />
      <Hero />
      <div style={{ marginTop: '200px' }}>
        <Services />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
