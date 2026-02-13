import { useEffect } from "react"
import gsap from "gsap"

export default function Contact() {
  useEffect(() => {
    gsap.from(".contact-fade", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    })
  }, [])

  return (
    <main className="bg-[#050505] min-h-screen text-white flex flex-col items-center pt-32 pb-20 px-6">
      
      {/* 1. THE HEADER SECTION */}
      <div className="max-w-4xl w-full text-center mb-20">
        <h2 className=" text-6xl md:text-7xl font-black italic tracking-tighter uppercase leading-none">
          Stay <span className="text-[#00df9a]">Updated</span>
        </h2>
        <p className=" mt-4 text-zinc-500 text-[10px] uppercase tracking-[0.4em] font-bold">
          Exclusive Premieres / Sneak-Peeks / Lotus Production
        </p>
      </div>

      {/* 2. THE ARRANGED CONTENT GRID */}
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-20 items-start">
        
        {/* LEFT SIDE: Newsletter Form */}
        <div className=" space-y-10">
          <div className="relative">
            <label className="text-[#00df9a] text-[10px] font-black uppercase tracking-[0.2em] block mb-2">Email Address</label>
            <input 
              type="email" 
              className="w-full bg-transparent border-b border-zinc-800 py-3 outline-none focus:border-[#00df9a] transition-all text-xl placeholder:text-zinc-700"
              placeholder="Your email address"
            />
          </div>
          <div className="relative">
            <label className="text-[#00df9a] text-[10px] font-black uppercase tracking-[0.2em] block mb-2">First Name (Optional)</label>
            <input 
              type="text" 
              className="w-full bg-transparent border-b border-zinc-800 py-3 outline-none focus:border-[#00df9a] transition-all text-xl placeholder:text-zinc-700"
              placeholder="Your name"
            />
          </div>
          <button className="w-full py-5 bg-[#00df9a] text-black font-black uppercase tracking-[0.3em] text-xs hover:bg-white transition-all duration-500 shadow-[0_10px_30px_rgba(0,223,154,0.2)]">
            Subscribe
          </button>
        </div>

        {/* RIGHT SIDE: Follow Us Section */}
        <div className=" flex flex-col items-center md:items-start">
          <label className="text-[#00df9a] text-[10px] font-black uppercase tracking-[0.2em] mb-8">Follow Our Studio</label>
          <div className="flex flex-wrap gap-4">
            {['TikTok', 'YouTube', 'Instagram', 'Facebook', 'X'].map((platform) => (
              <div 
                key={platform} 
                className="w-12 h-12 border border-zinc-800 rounded-full flex items-center justify-center text-[10px] font-bold uppercase hover:border-[#00df9a] hover:text-[#00df9a] cursor-pointer transition-all duration-300"
              >
                {platform.slice(0, 2)}
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}