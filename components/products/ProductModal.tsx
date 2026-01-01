"use client";
import { Product } from '@/data/products';
import { useEffect, useState } from 'react';

interface ModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ModalProps) {
  // State untuk gambar aktif di dalam modal
  const [activeImage, setActiveImage] = useState<string>("");

  // Update gambar aktif saat produk berubah
  useEffect(() => {
    if (product) setActiveImage(product.images[0]);
  }, [product]);

  // Kunci scroll body saat modal terbuka
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Jika modal tertutup atau produk kosong, jangan render apa-apa
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop Gelap (Klik untuk tutup) */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm animate-fade-in" onClick={onClose}></div>
      
      {/* Konten Modal */}
      <div className="relative bg-cream w-full max-w-5xl h-[85vh] md:h-[600px] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-fade-up z-10">
        
        {/* Tombol Close */}
        <button onClick={onClose} className="absolute top-4 right-4 z-20 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        {/* KIRI: Galeri Gambar */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-gray-100 relative group">
          {/* PERBAIKAN DI SINI: Menggunakan fallback || product.images[0] */}
          <img 
            src={activeImage || product.images[0]} 
            alt={product.title} 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          
          {/* Thumbnails */}
          <div className="absolute bottom-4 left-0 w-full px-6 flex gap-3 overflow-x-auto z-10 justify-center">
            {product.images.map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setActiveImage(img)} 
                // Logika border aktif juga diperbarui agar konsisten
                className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 
                  ${(activeImage || product.images[0]) === img ? 'border-gold scale-110' : 'border-white/50 opacity-70 hover:opacity-100'}`}
              >
                <img src={img} className="w-full h-full object-cover" alt={`Thumbnail ${idx + 1}`} />
              </button>
            ))}
          </div>
        </div>

        {/* KANAN: Detail Produk */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-white p-6 md:p-10 overflow-y-auto">
           <span className="text-forest text-xs font-bold uppercase bg-forest/10 px-3 py-1 rounded-full">{product.category} product</span>
           <h2 className="text-3xl font-bold mt-3 mb-4 text-gray-900">{product.title}</h2>
           <p className="text-gray-600 mb-6 leading-relaxed text-sm">{product.desc}</p>
           
           <div className="bg-cream/50 rounded-xl p-4 mb-6">
             <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Specifications</h3>
             <table className="w-full text-sm">
               <tbody>
                 {product.specs.map((spec, idx) => (
                   <tr key={idx} className="border-b border-gray-200 last:border-0">
                     <td className="py-2 text-gray-500 font-medium w-1/2">{spec.label}</td>
                     <td className="py-2 text-forest font-bold">{spec.value}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>

           <button className="w-full bg-forest text-white py-3 rounded-xl font-bold hover:bg-forest-800 transition-all shadow-lg flex items-center justify-center gap-2">
             Request Quotation
           </button>
        </div>
      </div>
    </div>
  );
}