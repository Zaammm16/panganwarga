"use client";

import dynamic from 'next/dynamic';

// PENTING: Memanggil Leaflet secara dinamis agar tidak error "window is not defined" di Next.js
const DynamicAseanMap = dynamic(() => import('@/components/map/AseanMap'), {
  ssr: false, // Matikan Server-Side Rendering untuk peta ini
  loading: () => (
    <div className="w-full h-[500px] bg-white/10 animate-pulse rounded-2xl flex items-center justify-center">
      <span className="text-white">Memuat Peta Interaktif...</span>
    </div>
  ),
});

export default function GlobalReach() {
  return (
    <section id="reach" className="py-24 bg-forest text-white relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-forest-800 opacity-80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 animate-fade-up">
          <span className="text-gold font-bold tracking-widest uppercase text-sm mb-2 block">ASEAN Network</span>
          <h2 className="text-3xl md:text-5xl font-bold">Dominating the Southeast Asian Market</h2>
          <p className="text-green-100 mt-4 max-w-2xl mx-auto">
            Jaringan logistik dan distribusi Pangan Warga telah menghubungkan petani lokal Sulawesi Barat langsung ke berbagai pusat perdagangan utama di Asia Tenggara.
          </p>
        </div>

        {/* AREA PETA INTERAKTIF LEAFLET */}
        <div className="relative w-full max-w-5xl mx-auto animate-fade-up delay-100 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-white p-1">
          <DynamicAseanMap />
        </div>

        {/* Statistik */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/10">
          <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
            <p className="text-4xl font-bold text-white group-hover:text-gold transition-colors">6+</p>
            <p className="text-xs text-green-200 uppercase tracking-wider mt-1">ASEAN Hubs</p>
          </div>
          <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
            <p className="text-4xl font-bold text-white group-hover:text-gold transition-colors">15+</p>
            <p className="text-xs text-green-200 uppercase tracking-wider mt-1">Ports Connected</p>
          </div>
          <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
            <p className="text-4xl font-bold text-white group-hover:text-gold transition-colors">5k</p>
            <p className="text-xs text-green-200 uppercase tracking-wider mt-1">Tons Distributed</p>
          </div>
          <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
            <p className="text-4xl font-bold text-white group-hover:text-gold transition-colors">48h</p>
            <p className="text-xs text-green-200 uppercase tracking-wider mt-1">Max Delivery Time</p>
          </div>
        </div>

      </div>
    </section>
  );
}