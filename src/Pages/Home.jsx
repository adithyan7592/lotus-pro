import { useEffect } from "react"
import gsap from "gsap"
import PortfolioCard from "../components/PortfolioCard"
import { fadeUp } from "../animations/gsap"

export default function Home() {
  useEffect(() => {
    // 1. Immediate Hero Animation (Solves the "Blackout" issue)
    gsap.from(".hero-fade", {
      y: 30,
      opacity: 0,
      duration: 1.5,
      stagger: 0.3,
      ease: "power4.out",
      delay: 0.2
    })

    // 2. Scroll Animations for the rest of the page
    // Slight timeout ensures DOM and ScrollTrigger are synced
    const timer = setTimeout(() => {
      fadeUp(".fade-up")
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="bg-[#050505] text-white">
      
      {/* HERO - Full Screen & High Contrast */}
     <section className="relative h-screen flex items-center justify-center">
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black z-10" />

  <div className="relative text-center z-20 px-4">
    <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase text-white">
      LOTUS <span className="text-[#00df9a]">PRO</span>
    </h1>
    <p className="mt-6 text-xs uppercase tracking-[0.5em] text-[#00df9a] font-bold opacity-90">
      Cinematic Excellence / Portfolio 2026
    </p>
  </div>
</section>

      {/* PORTFOLIO GRID */}
      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col items-center mb-20 text-center fade-up">
             <span className="text-[#00df9a] text-xs uppercase tracking-[0.3em] mb-4 font-bold">Our Gallery</span>
             <h2 className="text-5xl font-bold tracking-tight uppercase">Latest Work</h2>
             <div className="h-[2px] w-24 bg-[#00df9a] mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Using your existing PortfolioCard component */}
            <PortfolioCard title="Factory Shoots" image="/path/to/img" video="/path/to/vid" />
            <PortfolioCard title="Corporate Event" image="/path/to/img" video="/path/to/vid" />
            <PortfolioCard title="Drone Shoots" image="/path/to/img" video="/path/to/vid" />
            <PortfolioCard title="Showroom Facilities" image="/path/to/img" video="/path/to/vid" />
            <PortfolioCard title="Amruthika" image="/path/to/img" video="/path/to/vid" />
            <PortfolioCard title="Gaming Video" image="/path/to/img" video="/path/to/vid" />
          </div>
        </div>
      </section>

      {/* FEATURED CASE - Spotlight Style */}
      <section className="bg-zinc-950 py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
          <div className="fade-up aspect-video rounded-sm bg-zinc-900 flex items-center justify-center border border-white/10 shadow-2xl">
            <span className="text-[#00df9a]/50 uppercase tracking-widest text-sm font-bold italic">Previewing Feature</span>
          </div>

          <div className="fade-up">
            <h3 className="text-4xl font-bold mb-6 italic tracking-tight uppercase">
              New Year At Beach
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-md">
              A cinematic journey through the 2026 festivities. High-speed captures and drone perspectives.
            </p>
            <ul className="space-y-4 text-gray-300 text-[10px] uppercase tracking-[0.2em] font-bold">
              <li className="flex items-center gap-4"><span className="text-[#00df9a]">LOC</span> Sydney Beach</li>
              <li className="flex items-center gap-4"><span className="text-[#00df9a]">EVT</span> New Year Event</li>
              <li className="flex items-center gap-4"><span className="text-[#00df9a]">CLT</span> CitySurf Company</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA - Closing Scene */}
      <section className="relative h-[70vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/90" />
        <div className="relative fade-up z-10 px-6">
          <p className="uppercase tracking-[0.4em] text-[#00df9a] text-xs mb-6 font-bold">
            Hire Our Studio
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase italic max-w-4xl leading-none">
            We Are Always Ready To Take A Perfect Shot
          </h2>
          <button className="mt-12 px-12 py-4 border border-[#00df9a] text-[#00df9a] uppercase text-xs tracking-[0.3em] font-bold hover:bg-[#00df9a] hover:text-black transition-all duration-700">
            Get In Touch
          </button>
        </div>
      </section>

    </main>
  )
}