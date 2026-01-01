export default function About() {
  return (
    <section id="about" className="py-28 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* KOLOM KIRI: Teks & Statistik */}
          <div className="order-2 lg:order-1 animate-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-gold"></div>
              <span className="text-forest font-bold uppercase tracking-[0.2em] text-sm">Our Heritage</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
              Nurturing the Roots of <br/> <span className="text-forest">Indonesian Agriculture</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg mb-10">
              <p>
                It starts with the hands that till the soil. At Pangan Warga Nusantara, we don't just export commodities; we export a legacy. 
                For generations, the fertile volcanic lands of our archipelago have produced the world's finest spices and grains.
              </p>
              <p>
                Our story is one of <strong>sustainability</strong>. We believe that true quality cannot come from depleted earth. 
                We work side-by-side with local farming families to implement organic, regenerative farming practices.
              </p>
            </div>

            {/* Kotak Statistik */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border-l-4 border-forest pl-4">
                <h4 className="text-2xl font-bold text-gray-900">500+</h4>
                <p className="text-sm text-gray-500 mt-1">Empowered Farming Families</p>
              </div>
              <div className="border-l-4 border-gold pl-4">
                <h4 className="text-2xl font-bold text-gray-900">100%</h4>
                <p className="text-sm text-gray-500 mt-1">Organically Certified Soil</p>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: Gambar & Floating Card */}
          <div className="order-1 lg:order-2 animate-fade-up delay-200 relative">
            {/* Hiasan Background Miring */}
            <div className="absolute -inset-4 bg-forest/5 rounded-[2.5rem] transform rotate-3"></div>
            
            <img 
              src="https://picsum.photos/seed/farmer-hands/600/800" 
              alt="Farmer holding soil" 
              className="relative rounded-[2.5rem] shadow-2xl w-full h-[600px] object-cover"
            />
            
            {/* Floating Card (Fair Trade) */}
            <div className="absolute bottom-10 -left-4 md:-left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs z-20">
              <div className="flex items-center gap-4">
                <div className="bg-gold/20 p-3 rounded-full text-gold">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Fair Trade First</p>
                  <p className="text-xs text-gray-500">Direct farmer partnership</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}