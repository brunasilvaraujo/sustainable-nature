import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import Header from './components/Header'
import Hero from './components/HeroSection'
import Services from './components/SevicesSection';
import About from './components/AboutSection';

function App() {
  
  return (
    <div className="App">     
      <Header />
      <Hero />
      <Services />
      <About />
    </div>
  )
}

export default App
