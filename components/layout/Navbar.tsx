"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Global Reach', href: '#reach' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 top-0 left-0 
      ${isScrolled ? 'glass shadow-sm py-2' : 'bg-transparent py-4'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* LOGO */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            {/* Logo Bulat Tetap Hijau/Putih karena kontrasnya cukup */}
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300 
              ${isScrolled ? 'bg-forest text-white' : 'bg-white text-forest'}`}>
              PW
            </div>
            {/* Teks Logo: Putih saat transparan, Hijau saat discroll */}
            <span className={`font-bold text-xl tracking-tight transition-colors duration-300 
              ${isScrolled ? 'text-forest' : 'text-white drop-shadow-md'}`}>
              Pangan Warga
            </span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
               <Link 
                 key={item.name} 
                 href={item.href} 
                 className={`font-medium transition-colors duration-300 
                   ${isScrolled 
                     ? 'text-gray-700 hover:text-forest' // Warna saat Scroll (Gelap)
                     : 'text-white/90 hover:text-white drop-shadow-sm' // Warna saat Top (Putih)
                   }`}
               >
                 {item.name}
               </Link>
            ))}
            {/* Tombol Contact: Putih saat atas, Hijau saat scroll */}
            <Link 
              href="#footer-contact" 
              className={`px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg 
              ${isScrolled 
                ? 'bg-forest text-white hover:bg-forest-800' 
                : 'bg-white text-forest hover:bg-gray-100'}`}
            >
              Contact Us
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileOpen(!isMobileOpen)} 
              className={`focus:outline-none transition-colors duration-300 
              ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* MOBILE MENU DROPDOWN (Selalu Background Putih agar terbaca) */}
      <div className={`md:hidden bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300 overflow-hidden ${isMobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
           {menuItems.map((item) => (
             <Link key={item.name} href={item.href} onClick={() => setIsMobileOpen(false)} className="block w-full text-center px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-forest hover:bg-cream">
               {item.name}
             </Link>
           ))}
           <Link href="#footer-contact" onClick={() => setIsMobileOpen(false)} className="block w-full text-center mt-4 bg-forest text-white px-5 py-3 rounded-lg font-medium">
             Contact Us
           </Link>
        </div>
      </div>
    </nav>
  );
}