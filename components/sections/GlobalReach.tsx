export default function GlobalReach() {
  return (
    <section id="reach" className="py-24 bg-forest text-white relative overflow-hidden">
      
      {/* Background Pattern: Grid Halus */}
      <div className="absolute inset-0 opacity-20" 
           style={{ 
             backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      
      {/* Vignette (Bayangan pinggir agar fokus ke tengah) */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-forest-800 opacity-80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8 animate-fade-up">
          <span className="text-gold font-bold tracking-widest uppercase text-sm mb-2 block">Distribution Network</span>
          <h2 className="text-3xl md:text-5xl font-bold">From the Archipelago to the World</h2>
        </div>

        {/* AREA PETA SVG */}
        <div className="relative w-full max-w-6xl mx-auto animate-fade-up delay-100">
          
          <svg className="w-full h-auto drop-shadow-2xl" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
            
            <defs>
              {/* 1. Gradient untuk Peta (Biar tidak flat) */}
              <linearGradient id="mapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3d6e36" stopOpacity="1" /> {/* Hijau agak terang */}
                <stop offset="100%" stopColor="#1e3d1a" stopOpacity="1" /> {/* Hijau gelap */}
              </linearGradient>

              {/* 2. Glow untuk Garis Jalur */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* --- WORLD MAP SILHOUETTE (Lebih Halus & Akurat) --- */}
            <g fill="url(#mapGradient)" stroke="#4a8542" strokeWidth="0.5">
              {/* Amerika Utara */}
              <path d="M50,120 Q80,100 150,100 T250,80 T350,60 L320,150 L280,300 L200,320 L150,250 Z" />
              {/* Amerika Selatan */}
              <path d="M220,330 L280,330 L300,400 L250,480 L200,420 Z" />
              {/* Eropa & Asia (Disatukan agar mulus) */}
              <path d="M420,150 L450,80 L550,50 L700,50 L900,80 L950,150 L920,300 L850,350 L750,320 L700,280 L600,250 L500,220 Z" />
              {/* Afrika */}
              <path d="M450,230 L550,230 L600,300 L580,420 L500,400 L440,300 Z" />
              {/* Australia */}
              <path d="M780,380 L880,380 L900,450 L820,480 L760,420 Z" />
              {/* Indonesia (Highlight Emas Pudar) */}
              <path d="M720,300 L780,290 L800,310 L760,330 L710,320 Z" fill="#D4AF37" fillOpacity="0.3" stroke="none" />
            </g>

            {/* --- JALUR DISTRIBUSI (Curved & Animated) --- */}
            {/* Koordinat Pusat Indonesia: X=750, Y=310 */}
            <g fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" filter="url(#glow)">
              
              {/* Rute ke EROPA (Jerman) */}
              <path d="M750,310 Q600,350 500,150" strokeDasharray="8,8" className="animate-dash opacity-80" />
              
              {/* Rute ke AMERIKA (USA) - Melengkung jauh ke atas */}
              <path d="M750,310 Q500,50 200,180" strokeDasharray="8,8" className="animate-dash opacity-80" />
              
              {/* Rute ke ASIA TIMUR (China/Jepang) */}
              <path d="M750,310 Q800,250 850,150" strokeDasharray="8,8" className="animate-dash opacity-80" />
              
              {/* Rute ke AUSTRALIA */}
              <path d="M750,310 Q780,350 820,400" strokeDasharray="8,8" className="animate-dash opacity-80" />
            </g>

            {/* --- MARKER POINTS (Pulsing) --- */}
            
            {/* Pusat: Indonesia */}
            <g>
              <circle cx="750" cy="310" r="15" fill="#D4AF37" opacity="0.2" className="animate-ping" />
              <circle cx="750" cy="310" r="6" fill="#D4AF37" stroke="#fff" strokeWidth="2" />
              <text x="750" y="345" fill="#D4AF37" fontSize="14" fontWeight="bold" textAnchor="middle" style={{textShadow: '0px 2px 4px rgba(0,0,0,0.5)'}}>INDONESIA HQ</text>
            </g>

            {/* Tujuan: Eropa */}
            <g>
              <circle cx="500" cy="150" r="4" fill="#F9F7F2" className="animate-pulse" />
              <text x="500" y="140" fill="#fff" fontSize="10" opacity="0.7" textAnchor="middle">Europe Hub</text>
            </g>

            {/* Tujuan: USA */}
            <g>
              <circle cx="200" cy="180" r="4" fill="#F9F7F2" className="animate-pulse" />
              <text x="200" y="170" fill="#fff" fontSize="10" opacity="0.7" textAnchor="middle">USA Hub</text>
            </g>

            {/* Tujuan: Asia */}
            <g>
              <circle cx="850" cy="150" r="4" fill="#F9F7F2" className="animate-pulse" />
              <text x="850" y="140" fill="#fff" fontSize="10" opacity="0.7" textAnchor="middle">Asia Hub</text>
            </g>

          </svg>

          {/* Statistik Bawah */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-white/10">
            <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
              <p className="text-4xl font-bold text-white group-hover:text-gold transition-colors">4+</p>
              <p className="text-xs text-green-200 uppercase tracking-wider mt-1">Continents</p>
            </div>
            <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
              <p className="text-4xl font-bold text-white group-hover:text-gold transition-colors">20+</p>
              <p className="text-xs text-green-200 uppercase tracking-wider mt-1">Countries</p>
            </div>
            <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
              <p className="text-4xl font-bold text-white group-hover:text-gold transition-colors">10k</p>
              <p className="text-xs text-green-200 uppercase tracking-wider mt-1">Tons Exported</p>
            </div>
            <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
              <p className="text-4xl font-bold text-white group-hover:text-gold transition-colors">24h</p>
              <p className="text-xs text-green-200 uppercase tracking-wider mt-1">Response Time</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}