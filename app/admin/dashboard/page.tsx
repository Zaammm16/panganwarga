"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// Import fungsi ambil dan hapus data
import { ambilSemuaKomoditas, hapusKomoditas } from "@/app/actions/product";

interface ProductData {
  id: string;
  title: string;
  category: string;
  desc: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState<ProductData[]>([]);

  // Mengambil data saat halaman dimuat
  const fetchData = async () => {
    setIsLoading(true);
    const hasil = await ambilSemuaKomoditas();
    if (hasil.success && hasil.data) {
      setProductList(hasil.data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    if (role !== "admin") {
      router.push("/login");
      return;
    }
    fetchData();
  }, [router]);

  // FUNGSI BARU: Menghapus Data
  const handleDelete = async (id: string, title: string) => {
    // Munculkan popup konfirmasi bawaan browser
    const isConfirm = window.confirm(
      `Apakah kamu yakin ingin menghapus komoditas "${title}"?`,
    );

    if (isConfirm) {
      const hasil = await hapusKomoditas(id);
      if (hasil.success) {
        alert("Data berhasil dihapus!");
        fetchData(); // Refresh tabel setelah dihapus
      } else {
        alert("Gagal menghapus data. Silakan coba lagi.");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    router.push("/login");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        Memuat Dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar Sederhana */}
      <aside className="w-64 bg-forest text-white flex flex-col">
        <div className="p-6 font-bold text-2xl border-b border-white/10">
          Pangan Warga
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a
            href="#"
            className="block px-4 py-2 bg-white/10 rounded-lg font-medium"
          >
            📦 Komoditas
          </a>
        </nav>
        <div className="p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 text-red-300 hover:text-red-100 transition"
          >
            🚪 Keluar
          </button>
        </div>
      </aside>

      {/* Konten Utama */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Kelola Komoditas
            </h1>
            <p className="text-gray-500 mt-1">
              Atur daftar produk mentah dan olahan Pangan Warga.
            </p>
          </div>
          <button
            onClick={() => router.push("/admin/dashboard/tambah")}
            className="bg-forest text-white px-5 py-2.5 rounded-lg shadow hover:bg-opacity-90 transition font-medium"
          >
            + Tambah Komoditas
          </button>
        </header>

        {/* Tabel Data dari Database */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-gray-600">
                <th className="py-4 px-6 font-semibold text-sm">Nama Produk</th>
                <th className="py-4 px-6 font-semibold text-sm">Kategori</th>
                <th className="py-4 px-6 font-semibold text-sm">
                  Deskripsi Singkat
                </th>
                <th className="py-4 px-6 font-semibold text-sm text-right">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {productList.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-50 hover:bg-gray-50/50 transition"
                >
                  <td className="py-4 px-6 font-medium text-gray-800">
                    {item.title}
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full capitalize ${
                        item.category === "raw"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-emerald-100 text-emerald-700"
                      }`}
                    >
                      {item.category}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-500 text-sm truncate max-w-xs">
                    {item.desc}
                  </td>
                  <td className="py-4 px-6 text-right space-x-3">
                    <button
                      onClick={() =>
                        router.push(`/admin/dashboard/edit/${item.id}`)
                      }
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id, item.title)}
                      className="text-red-600 hover:text-red-800 text-sm font-medium transition"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
              {productList.length === 0 && (
                <tr>
                  <td colSpan={4} className="py-8 text-center text-gray-500">
                    Belum ada komoditas di Database. Silakan tambah baru!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
