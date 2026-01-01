import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import GlobalReach from '@/components/sections/GlobalReach';
import ProductShowcase from '@/components/sections/ProductShowcase';
import Values from '@/components/sections/Values'; // Baru
import CTA from '@/components/sections/CTA';       // Baru
import Footer from '@/components/layout/Footer';   // Baru

export default function Home() {
  return (
    <main className="antialiased text-gray-900 bg-cream">
      {/* 1. Navigation */}
      <Navbar />
      
      {/* 2. Hero Section */}
      <Hero />
      
      {/* 3. About Company */}
      <About />
      
      {/* 4. Global Distribution Map */}
      <GlobalReach />
      
      {/* 5. Product Catalog (Grid & Modal) */}
      <ProductShowcase />
      
      {/* 6. Core Values */}
      <Values />

      {/* 7. Call To Action */}
      <CTA />

      {/* 8. Footer & Map */}
      <Footer />
    </main>
  );
}