import React from 'react'
import reactLogo from '../assets/react.svg'

// Example logos (replace with your own assets if available)
const languageLogos = [
  { name: 'JavaScript', src: reactLogo },
  { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'C++', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'NodeJS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'PHP', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Ruby', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg' },
  { name: 'Go', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
  { name: 'Kotlin', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
  { name: 'Swift', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
];

const Language = () => {
  return (
    <div className="text-center py-8 relative">
      <h2 className="mb-4 font-extrabold text-3xl tracking-tight text-[rgb(1,83,106)] drop-shadow-lg">Unlock Your Coding Potential</h2>
      <div className="relative w-full overflow-hidden py-4 auto-scroll-row">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-linear-to-r from-white/90 to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-linear-to-l from-white/90 to-transparent"></div>
        <div className="flex gap-8 w-max animate-scrollLeft scroll-content">
          {[...languageLogos, ...languageLogos].map((logo, idx) => (
            <div key={idx} className="logo-card min-w-30 flex flex-col items-center justify-center transition-transform duration-300">
              <img src={logo.src} alt={logo.name} className="logo-img w-20 h-20 object-contain rounded-xl shadow-md bg-gray-100 transition-transform duration-300 mb-2" />
              <span className="block font-semibold text-slate-700 text-base tracking-wide text-center leading-tight">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scrollLeft {
          animation: scrollLeft 18s linear infinite;
          will-change: transform;
        }
        .logo-card:hover .logo-img {
          transform: scale(1.15);
          box-shadow: 0 6px 24px rgba(37,99,235,0.15);
          background: #e0e7ff;
        }
        .logo-card:hover {
          transform: scale(1.08);
        }
        .auto-scroll-row::-webkit-scrollbar { display: none; }
        .auto-scroll-row { scrollbar-width: none; }
      `}</style>
    </div>
  )
}

export default Language