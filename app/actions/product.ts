"use server"; // Ini wajib ada! Menandakan kode ini hanya berjalan di server (aman).

import { prisma } from '@/lib/prisma';// Import Prisma Client untuk akses database
import { revalidatePath } from 'next/cache';

// Kita buat tipe data untuk spesifikasi
interface SpecInput {
  label: string;
  value: string;
}

// Fungsi utama untuk menyimpan komoditas
export async function simpanKomoditasKeDatabase(data: {
  title: string;
  category: string;
  desc: string;
  imageUrl: string;
  specs: SpecInput[];
}) {
  try {
    // Memerintahkan Prisma untuk membuat data baru di tabel Product
    const newProduct = await prisma.product.create({
      data: {
        title: data.title,
        category: data.category,
        desc: data.desc,
        imageUrl: data.imageUrl,
        // Menyimpan spesifikasi sekaligus (karena kita pakai relasi)
        specs: {
          create: data.specs.map(spec => ({
            label: spec.label,
            value: spec.value
          }))
        }
      }
    });

    // Menyegarkan halaman dashboard agar data baru langsung muncul
    revalidatePath('/admin/dashboard'); 
    
    return { success: true, message: "Berhasil disimpan!" };
  } catch (error) {
    console.error("Gagal menyimpan komoditas:", error);
    return { success: false, message: "Gagal menyimpan ke database." };
  }
}

// Fungsi untuk mengambil semua data komoditas dari database
export async function ambilSemuaKomoditas() {
  try {
    // Meminta Prisma mengambil semua data di tabel Product
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: 'desc' // Urutkan dari yang paling baru ditambahkan
      }
    });
    return { success: true, data: products };
  } catch (error) {
    console.error("Gagal mengambil data:", error);
    return { success: false, data: [] };
  }
}

// Fungsi untuk menghapus komoditas berdasarkan ID
export async function hapusKomoditas(id: string) {
  try {
    await prisma.product.delete({
      where: { id: id }
    });
    return { success: true };
  } catch (error) {
    console.error("Gagal menghapus data:", error);
    return { success: false };
  }
}

// Fungsi untuk mengambil 1 komoditas secara spesifik untuk di-edit
export async function ambilKomoditasBerdasarkanId(id: string) {
  try {
    const product = await prisma.product.findUnique({
      where: { id: id },
      include: { specs: true } // Ambil juga spesifikasinya
    });
    return { success: true, data: product };
  } catch (error) {
    console.error("Gagal mengambil data:", error);
    return { success: false, data: null };
  }
}

// Fungsi untuk menyimpan perubahan data (Update)
export async function updateKomoditas(id: string, data: any) {
  try {
    // Trik aman: Hapus semua spesifikasi lama, lalu buat ulang yang baru
    await prisma.spec.deleteMany({
      where: { productId: id }
    });

    // Update data produk utama dan masukkan spesifikasi baru
    await prisma.product.update({
      where: { id: id },
      data: {
        title: data.title,
        category: data.category,
        desc: data.desc,
        imageUrl: data.imageUrl,
        specs: {
          create: data.specs
        }
      }
    });
    return { success: true };
  } catch (error) {
    console.error("Gagal update data:", error);
    return { success: false };
  }
}