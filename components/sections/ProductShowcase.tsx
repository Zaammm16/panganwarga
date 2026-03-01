"use client";

import { useState, useEffect } from 'react';
// Import fungsi ambil data dari database (Server Action)
import { ambilSemuaKomoditas } from '@/app/actions/product'; 
import ProductCard from '@/components/products/ProductCard'; 
import ProductModal from '@/components/products/ProductModal'; 

// Kita buat tipe data Product sesuai dengan struktur Database Prisma kita
export interface Product {
  id: string;
  title: string;
  category: string;
  desc: string;
  imageUrl: string;
  specs?: { label: string; value: string }[]; 
}

export default function ProductShowcase() {
  const [filter, setFilter] = useState<'all' | 'raw' | 'processed'>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // State baru untuk menyimpan data asli dari database dan status loading
  const [dbProducts, setDbProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mengambil data dari database saat komponen ini pertama kali muncul
  useEffect(() => {
    const fetchData = async () => {
      try {
        const hasil = await ambilSemuaKomoditas();
        if (hasil.success && hasil.data) {
          // Masukkan data dari database ke state
          setDbProducts(hasil.data as unknown as Product[]); 
        }
      } catch (error) {
        console.error("Gagal memuat data:", error);
      } finally {
        setIsLoading(false); // Matikan loading setelah selesai
      }
    };

    fetchData();
  }, []);

  // Logika Filter (sekarang memfilter dari dbProducts, bukan dari data statis)
  const filteredProducts = dbProducts.filter(p => filter === 'all' || p.category === filter);

  return (
    <section id="products" className="py-24 bg-cream relative overflow-hidden">
      {/* Hiasan background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-forest/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Tombol Filter */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
           <div className="text-center md:text-left">
             <h2 className="text-forest text-sm font-bold tracking-widest uppercase mb-2">Our Harvest</h2>
             <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Premium Selections</h3>
           </div>
           
           {/* Tombol Filter */}
           <div className="bg-white p-1 rounded-full shadow-sm border border-gray-100 inline-flex">
              {['all', 'raw', 'processed'].map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat as any)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize 
                    ${filter === cat ? 'bg-forest text-white shadow-md' : 'text-gray-500 hover:text-forest'}`}
                >
                  {cat}
                </button>
              ))}
           </div>
        </div>

        {/* Tampilan Loading atau Grid Produk */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-forest border-t-transparent rounded-full animate-spin"></div>
            <span className="ml-4 text-gray-500 font-medium">Memuat komoditas segar...</span>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white/50 rounded-2xl border border-dashed border-gray-300">
            <span className="text-4xl mb-3 block">🌱</span>
            <p className="text-gray-500">Belum ada komoditas di kategori ini.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id}
                product={product as any}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        )}

      </div>

      {/* Render Modal (Hanya muncul jika selectedProduct tidak null) */}
      <ProductModal 
        product={selectedProduct as any} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  );
}