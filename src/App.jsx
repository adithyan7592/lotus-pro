import { useEffect } from "react"
import { initLenis } from "./utils/lenis"

import Navbar from "./components/Navbar"
import Cursor from "./components/cursor"
import Home from "./Pages/Home"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Contact from "./Pages/contact"
import About from "./Pages/about"
function App() {
  useEffect(() => {
    initLenis()
  }, [])

  return (
    <>
      <Cursor />
    
      <Router basename="/lotus-pro">
          <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
