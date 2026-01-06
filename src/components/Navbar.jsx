import React from 'react'



const Navbar = () => {
  return (
    <>
     
      <nav className="w-full bg-white/30 backdrop-blur-md border-b border-white/20 shadow-md px-4 py-2 flex items-center justify-between fixed top-7 z-50">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/vite.svg" alt="Logo" className="h-10 w-10" />
        </div>
        {/* Menu */}
        <div className="flex items-center gap-6 text-white font-medium">
          <div className="relative group">
            <button className="flex items-center gap-1">Program <span className="ml-1">▼</span></button>
          </div>
          <div className="relative group">
            <button className="flex items-center gap-1">Champions <span className="ml-1">▼</span></button>
          </div>
          <div className="relative group">
            <button className="flex items-center gap-1">Partners <span className="ml-1">▼</span></button>
          </div>
          <button>Blog</button>
          <div className="relative group">
            <button className="flex items-center gap-1">More <span className="ml-1">▼</span></button>
          </div>
        </div>
        {/* Search and Buttons */}
        <div className="flex items-center gap-3">
          <button className="bg-white rounded-full p-2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-900">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
            </svg>
          </button>
          <button className="border border-white text-white px-4 py-1 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition">Become an Affiliate</button>
          <button className="border border-white text-white px-4 py-1 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition">Login</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
