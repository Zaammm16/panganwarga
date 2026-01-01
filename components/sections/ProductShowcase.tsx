"use client";
import { useState } from 'react';
import { products, Product } from '@/data/products'; // Import data JSON
import ProductCard from '@/components/products/ProductCard'; // Import komponen Kartu
import ProductModal from '@/components/products/ProductModal'; // Import komponen Modal

export default function ProductShowcase() {
  // State untuk Filter (all / raw / processed)
  const [filter, setFilter] = useState<'all' | 'raw' | 'processed'>('all');
  
  // State untuk Produk yang sedang dipilih (diklik)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Logika Filter
  const filteredProducts = products.filter(p => filter === 'all' || p.category === filter);

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

        {/* Grid Produk */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      </div>

      {/* Render Modal (Hanya muncul jika selectedProduct tidak null) */}
      <ProductModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  );
}