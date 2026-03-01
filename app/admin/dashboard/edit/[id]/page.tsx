"use client";

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ambilKomoditasBerdasarkanId, updateKomoditas } from '@/app/actions/product';

export default function EditKomoditasPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string; // Mengambil ID dari URL
  
  // State form
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<'raw' | 'processed'>('raw');
  const [desc, setDesc] = useState('');
  const [images, setImages] = useState('');
  const [specs, setSpecs] = useState([{ label: '', value: '' }]);

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  // Ambil data produk lama saat halaman dimuat
  useEffect(() => {
    const fetchProduct = async () => {
      const hasil = await ambilKomoditasBerdasarkanId(id);
      if (hasil.success && hasil.data) {
        setTitle(hasil.data.title);
        setCategory(hasil.data.category as 'raw' | 'processed');
        setDesc(hasil.data.desc);
        setImages(hasil.data.imageUrl);
        if (hasil.data.specs && hasil.data.specs.length > 0) {
          // Hanya ambil kolom label dan value agar sesuai form
          const mappedSpecs = hasil.data.specs.map((s: any) => ({ label: s.label, value: s.value }));
          setSpecs(mappedSpecs);
        }
      } else {
        alert("Data tidak ditemukan!");
        router.push('/admin/dashboard');
      }
      setIsLoading(false);
    };
    fetchProduct();
  }, [id, router]);

  const addSpec = () => setSpecs([...specs, { label: '', value: '' }]);

  const updateSpec = (index: number, field: 'label' | 'value', newValue: string) => {
    const newSpecs = [...specs];
    newSpecs[index][field] = newValue;
    setSpecs(newSpecs);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    const hasil = await updateKomoditas(id, {
      title, category, desc, imageUrl: images, specs
    });

    if (hasil.success) {
      alert("Perubahan berhasil disimpan!");
      router.push('/admin/dashboard');
      router.refresh();
    } else {
      alert("Gagal menyimpan perubahan. Coba lagi.");
    }
    setIsSaving(false);
  };

  if (isLoading) return <div className="min-h-screen flex items-center justify-center">Memuat data...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        <button onClick={() => router.back()} className="text-gray-500 hover:text-forest mb-6 flex items-center gap-2 transition">
          ← Kembali Batal
        </button>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Edit Komoditas</h1>

          <form onSubmit={handleSave} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nama Produk</label>
              <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-forest outline-none" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" value="raw" checked={category === 'raw'} onChange={() => setCategory('raw')} className="text-forest focus:ring-forest"/> Mentah (Raw)
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" value="processed" checked={category === 'processed'} onChange={() => setCategory('processed')} className="text-forest focus:ring-forest"/> Olahan (Processed)
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
              <textarea required rows={3} value={desc} onChange={(e) => setDesc(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-forest outline-none"></textarea>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <label className="block text-sm font-medium text-gray-700 mb-3">Spesifikasi</label>
              <div className="space-y-3">
                {specs.map((spec, index) => (
                  <div key={index} className="flex gap-3">
                    <input type="text" placeholder="Label" value={spec.label} onChange={(e) => updateSpec(index, 'label', e.target.value)} className="w-1/3 px-3 py-2 border border-gray-200 rounded-lg outline-none" />
                    <input type="text" placeholder="Nilai" value={spec.value} onChange={(e) => updateSpec(index, 'value', e.target.value)} className="flex-1 px-3 py-2 border border-gray-200 rounded-lg outline-none" />
                  </div>
                ))}
              </div>
              <button type="button" onClick={addSpec} className="mt-3 text-sm text-forest font-medium hover:underline">+ Tambah Spesifikasi</button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">URL Gambar</label>
              <input type="url" required value={images} onChange={(e) => setImages(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-forest outline-none" />
            </div>

            <div className="pt-4 flex justify-end gap-3 border-t border-gray-100">
              <button type="submit" disabled={isSaving} className={`px-6 py-2 text-white rounded-lg transition shadow ${isSaving ? 'bg-gray-400' : 'bg-forest hover:bg-opacity-90'}`}>
                {isSaving ? 'Menyimpan...' : 'Simpan Perubahan'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}