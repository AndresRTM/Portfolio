import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import About from './pages/About'
import CV from './pages/CV'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect, use } from 'react'

function App() {
  const [repos, setRepos] = useState([])
  useEffect(() => {
    fetch('https://api.github.com/AndresRTM/repos')
      .then(response => response.json())
      .then(data => setRepos(data))
  }, [])

  return (
    <>
      {
        repos.map(repo => {
          return (
            <div key={repo.name}>
              <h2>{repo.name}</h2>
              <p>{repo.description}</p>
              <p>{repo.language}</p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
          )
        })}
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/CV" element={<CV />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  )
}

export default App
