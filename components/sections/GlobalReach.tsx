"use client";

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// PENTING: Memanggil Leaflet secara dinamis agar tidak error "window is not defined" di Next.js
const DynamicAseanMap = dynamic(() => import('@/components/map/AseanMap'), {
  ssr: false, 
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
        
        {/* Header - Menggunakan Framer Motion agar muncul saat di-scroll */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <span className="text-gold font-bold tracking-widest uppercase text-sm mb-2 block">ASEAN Network</span>
          <h2 className="text-3xl md:text-5xl font-bold">Dominating the Southeast Asian Market</h2>
          <p className="text-green-100 mt-4 max-w-2xl mx-auto">
            Jaringan logistik dan distribusi Pangan Warga telah menghubungkan petani lokal Sulawesi Barat langsung ke berbagai pusat perdagangan utama di Asia Tenggara.
          </p>
        </motion.div>

        {/* AREA PETA INTERAKTIF - DENGAN ANIMASI BERJALAN TERUS */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{ 
            y: [0, -12, 0], // Melayang naik turun pelan
          }}
          transition={{ 
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            },
            default: { duration: 1 }
          }}
          className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] border-4 border-white/20 bg-white p-1"
        >
          <DynamicAseanMap />
        </motion.div>

        {/* Statistik */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/10">
          {[
            { label: "ASEAN Hubs", val: "6+" },
            { label: "Ports Connected", val: "15+" },
            { label: "Tons Distributed", val: "5k" },
            { label: "Max Delivery Time", val: "48h" },
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group cursor-default"
            >
              <p className="text-4xl font-bold text-white group-hover:text-gold transition-colors duration-300">
                {item.val}
              </p>
              <p className="text-xs text-green-200 uppercase tracking-wider mt-1">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}