import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-sm text-white">
      <div className="mx-auto max-w-7xl px-8 py-6 flex justify-between items-center">
        
        {/* The Logo with the span color you liked */}
        <h1 className="text-white text-2xl font-bold tracking-tighter uppercase italic">
          LOTUS <span className="text-[#00df9a]">PRODUCTION</span>
        </h1>

        <ul className="flex gap-8 text-sm uppercase tracking-widest font-medium">
          <li className="cursor-pointer hover:text-[#00df9a] transition-colors"><Link to="/">Home</Link></li>
          <li className="cursor-pointer hover:text-[#00df9a] transition-colors">Portfolio</li>
          <li className="cursor-pointer hover:text-[#00df9a] transition-colors">About</li>
          <li className="cursor-pointer hover:text-[#00df9a] transition-colors"><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}