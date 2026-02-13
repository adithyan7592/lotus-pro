import { useEffect } from "react"
import { initLenis } from "./utils/lenis"

import Navbar from "./components/Navbar"
import Cursor from "./components/cursor"
import Home from "./Pages/Home"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Contact from "./Pages/contact"
function App() {
  useEffect(() => {
    initLenis()
  }, [])

  return (
    <>
      <Cursor />
    
      <Router>
          <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
