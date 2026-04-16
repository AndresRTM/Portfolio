import Home from './pages/Home'
import Navbar from './components/Navbar'  
import Footer from './components/footer'
import About from './pages/About'
import CV from './pages/CV'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/CV" element={<CV />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </HashRouter>
    </>
  )
}  

export default App
