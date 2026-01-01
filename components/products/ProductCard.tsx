import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div 
      onClick={onClick}
      className="group relative rounded-[2rem] overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 h-[350px] w-full"
    >
      {/* Background Image */}
      <img 
        src={product.images[0]} 
        alt={product.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      
      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
      
      {/* Konten Teks */}
      <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <span className={`inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full mb-2 
          ${product.category === 'processed' ? 'bg-gold text-forest' : 'bg-white/20 backdrop-blur-md border border-white/30'}`}>
          {product.category}
        </span>
        
        <h4 className="text-2xl font-bold mb-1 leading-tight">{product.title}</h4>
        
        {/* Tombol View Details (Muncul saat hover) */}
        <div className="h-0 group-hover:h-8 opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden mt-2">
          <span className="text-gold text-sm font-bold flex items-center gap-2">
            View Details 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </span>
        </div>
      </div>
    </div>
  );
}