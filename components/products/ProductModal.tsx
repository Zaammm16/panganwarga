"use client";

import { useEffect, useState } from "react";

// Tipe data Product yang sesuai dengan struktur Database Prisma
interface Product {
  id: string;
  title: string;
  category: string;
  desc: string;
  imageUrl: string;
  specs?: { label: string; value: string }[]; 
}

interface ModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ModalProps) {
  // State untuk gambar aktif (Sekarang mengambil dari imageUrl)
  const [activeImage, setActiveImage] = useState<string>("");

  // Update gambar aktif saat produk berubah
  useEffect(() => {
    if (product) setActiveImage(product.imageUrl);
  }, [product]);

  // Kunci scroll body saat modal terbuka
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Jika modal tertutup atau produk kosong, jangan render apa-apa
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop Gelap (Klik untuk tutup) */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm animate-fade-in cursor-pointer"
        onClick={onClose}
      ></div>

      {/* Konten Modal */}
      <div className="relative bg-cream w-full max-w-5xl h-[85vh] md:h-[600px] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-fade-up z-10">
        
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        {/* KIRI: Galeri Gambar */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-gray-100 relative group">
          {/* Menggunakan imageUrl tunggal dari database */}
          <img
            src={activeImage || product.imageUrl}
            alt={product.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* KANAN: Detail Produk */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-white p-6 md:p-10 overflow-y-auto">
          <span className="text-forest text-xs font-bold uppercase bg-forest/10 px-3 py-1 rounded-full">
            {product.category} product
          </span>
          <h2 className="text-3xl font-bold mt-3 mb-4 text-gray-900">
            {product.title}
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-sm">
            {product.desc}
          </p>

          <div className="bg-cream/50 rounded-xl p-4 mb-6">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
              Specifications
            </h3>
            <table className="w-full text-sm">
              <tbody>
                {/* Perbaikan Logika Map Spesifikasi */}
                {product.specs && product.specs.length > 0 ? (
                  product.specs.map((spec, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-gray-200 last:border-0"
                    >
                      <td className="py-2 text-gray-500 font-medium w-1/2">
                        {spec.label}
                      </td>
                      <td className="py-2 text-forest font-bold">{spec.value}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="py-2 text-gray-500 italic">
                      Spesifikasi belum ditambahkan.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* TOMBOL WHATSAPP */}
          <a
            href={`https://wa.me/+6285298591487?text=Hello, I am interested in your ${product.title}. Can you send me a quotation?`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-forest text-white py-3 rounded-xl font-bold hover:bg-forest-800 transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.481 0 1.461 1.063 2.875 1.211 3.074.149.198 2.095 3.2 5.076 4.487 2.982 1.288 2.982.858 3.526.801.544-.057 1.733-.705 1.98-1.386.248-.68.248-1.263.174-1.386z" />
            </svg>
            Request Quotation via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}