import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* 1. Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Menggunakan tag img biasa untuk kemudahan awal. 
            Nanti bisa diupgrade ke component <Image/> Next.js untuk performa lebih tinggi */}
        <img 
          src="https://picsum.photos/seed/paddyfield/1920/1080" 
          alt="Indonesian Agriculture Landscape" 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay: Gelap di atas, transparan di tengah, menyatu dengan warna cream di bawah */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-cream"></div>
      </div>

      {/* 2. Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white mt-16">
        
        {/* Badge: Menggunakan animasi fade-up yang kita buat di globals.css */}
        <span className="animate-fade-up inline-block py-1 px-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-sm font-medium tracking-wide mb-6 text-gold">
          100% Organic & Local
        </span>
        
        {/* Headline Besar */}
        <h1 className="animate-fade-up delay-100 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6 drop-shadow-lg">
          From the Earth of <br/> Indonesia to the World
        </h1>
        
        {/* Subheadline */}
        <p className="animate-fade-up delay-200 text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Delivering premium, sustainably-sourced agricultural products directly from local farmers to your table.
        </p>
        
        {/* Tombol CTA (Call to Action) */}
        <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="#products" 
            className="px-8 py-4 bg-gold text-forest font-bold rounded-full shadow-lg hover:bg-yellow-500 transition-all transform hover:-translate-y-1"
          >
            Explore Our Products
          </Link>
          <Link 
            href="#about" 
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-medium rounded-full hover:bg-white/20 transition-all"
          >
            Learn More
          </Link>
        </div>

      </div>
    </section>
  );
}