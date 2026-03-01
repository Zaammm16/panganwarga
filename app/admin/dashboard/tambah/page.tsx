"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
// Mengimpor fungsi server untuk menyimpan ke database
import { simpanKomoditasKeDatabase } from '@/app/actions/product';

export default function TambahKomoditasPage() {
  const router = useRouter();
  
  // State untuk menyimpan inputan form
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<'raw' | 'processed'>('raw');
  const [desc, setDesc] = useState('');
  const [images, setImages] = useState('');
  const [specs, setSpecs] = useState([{ label: '', value: '' }]);

  // State untuk mengontrol Modal dan status Loading
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Fungsi menambah baris spesifikasi
  const addSpec = () => {
    setSpecs([...specs, { label: '', value: '' }]);
  };

  // Fungsi mengubah nilai spesifikasi
  const updateSpec = (index: number, field: 'label' | 'value', newValue: string) => {
    const newSpecs = [...specs];
    newSpecs[index][field] = newValue;
    setSpecs(newSpecs);
  };

  // Fungsi saat form disubmit (Hanya memunculkan modal)
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true); // Buka popup konfirmasi
  };

  // Fungsi yang benar-benar menyimpan ke database saat diklik "Ya, Simpan" di Modal
  const confirmSave = async () => {
    setIsSaving(true); // Ubah tombol jadi "Menyimpan..."

    // Panggil fungsi Backend (Server Action) dan simpan di variabel 'hasil'
    const hasil = await simpanKomoditasKeDatabase({
      title,
      category,
      desc,
      imageUrl: images,
      specs
    });

    setIsSaving(false);    // Matikan loading
    setIsModalOpen(false); // Tutup popup

    // Cek apakah berhasil disimpan ke database
    if (hasil.success) {
      alert("Komoditas berhasil disimpan ke Database!");
      router.push('/admin/dashboard'); 
      router.refresh(); // Memaksa Next.js mengambil data terbaru dari database
    } else {
      alert("Waduh, gagal menyimpan data. Coba lagi ya.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 relative">
      <div className="max-w-3xl mx-auto">
        
        {/* Tombol Kembali */}
        <button 
          onClick={() => router.back()}
          className="text-gray-500 hover:text-forest mb-6 flex items-center gap-2 transition"
        >
          ← Kembali ke Dashboard
        </button>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Tambah Komoditas Baru</h1>
            <p className="text-gray-500 text-sm mt-1">Masukkan detail produk pangan mentah atau olahan di sini.</p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            
            {/* Input Judul */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nama Produk</label>
              <input 
                type="text" required
                value={title} onChange={(e) => setTitle(e.target.value)}
                placeholder="Contoh: Kopi Gayo Arabica"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-forest outline-none transition"
              />
            </div>

            {/* Input Kategori */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" name="category" value="raw"
                    checked={category === 'raw'} onChange={() => setCategory('raw')}
                    className="text-forest focus:ring-forest"
                  />
                  <span>Bahan Mentah (Raw)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" name="category" value="processed"
                    checked={category === 'processed'} onChange={() => setCategory('processed')}
                    className="text-forest focus:ring-forest"
                  />
                  <span>Olahan (Processed)</span>
                </label>
              </div>
            </div>

            {/* Input Deskripsi */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi Singkat</label>
              <textarea 
                required rows={3}
                value={desc} onChange={(e) => setDesc(e.target.value)}
                placeholder="Ceritakan tentang produk ini..."
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-forest outline-none transition"
              ></textarea>
            </div>

            {/* Input Spesifikasi */}
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <label className="block text-sm font-medium text-gray-700 mb-3">Spesifikasi Produk</label>
              <div className="space-y-3">
                {specs.map((spec, index) => (
                  <div key={index} className="flex gap-3">
                    <input 
                      type="text" placeholder="Label (Misal: Grade)"
                      value={spec.label} onChange={(e) => updateSpec(index, 'label', e.target.value)}
                      className="w-1/3 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-forest outline-none"
                    />
                    <input 
                      type="text" placeholder="Nilai (Misal: Grade 1 Premium)"
                      value={spec.value} onChange={(e) => updateSpec(index, 'value', e.target.value)}
                      className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-forest outline-none"
                    />
                  </div>
                ))}
              </div>
              <button 
                type="button" onClick={addSpec}
                className="mt-3 text-sm text-forest font-medium hover:underline"
              >
                + Tambah Spesifikasi Lain
              </button>
            </div>

            {/* Input URL Gambar */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">URL Gambar</label>
              <input 
                type="url" required
                value={images} onChange={(e) => setImages(e.target.value)}
                placeholder="https://contoh.com/gambar-kopi.jpg"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-forest outline-none transition"
              />
            </div>

            {/* Tombol Aksi */}
            <div className="pt-4 flex justify-end gap-3 border-t border-gray-100">
              <button 
                type="button" onClick={() => router.back()}
                className="px-6 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition"
              >
                Batal
              </button>
              <button 
                type="submit"
                className="px-6 py-2 bg-forest text-white rounded-lg hover:bg-opacity-90 transition shadow"
              >
                Simpan Komoditas
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* --- BAGIAN MODAL POPUP --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm transform transition-all">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                ?
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Konfirmasi Simpan</h3>
              <p className="text-sm text-gray-500 mb-6">
                Apakah kamu yakin ingin menyimpan komoditas <br/>
                <span className="font-semibold text-gray-800">"{title || 'Tanpa Nama'}"</span> ini?
              </p>
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={() => setIsModalOpen(false)}
                disabled={isSaving}
                className="flex-1 py-2.5 rounded-lg border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition"
              >
                Batal
              </button>
              <button 
                onClick={confirmSave}
                disabled={isSaving}
                className={`flex-1 py-2.5 rounded-lg text-white font-medium shadow transition ${isSaving ? 'bg-gray-400 cursor-not-allowed' : 'bg-forest hover:bg-opacity-90'}`}
              >
                {isSaving ? 'Menyimpan...' : 'Ya, Simpan'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}