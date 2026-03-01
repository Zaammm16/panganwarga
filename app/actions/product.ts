"use server"; 

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

interface SpecInput {
  label: string;
  value: string;
}

// 1. Fungsi Simpan: Sudah mendukung relasi Specs
export async function simpanKomoditasKeDatabase(data: {
  title: string;
  category: string;
  desc: string;
  imageUrl: string;
  specs: SpecInput[];
}) {
  try {
    const newProduct = await prisma.product.create({
      data: {
        title: data.title,
        category: data.category,
        desc: data.desc,
        imageUrl: data.imageUrl,
        specs: {
          create: data.specs.map(spec => ({
            label: spec.label,
            value: spec.value
          }))
        }
      }
    });

    // Segarkan cache agar data baru muncul di semua halaman
    revalidatePath('/');
    revalidatePath('/admin/dashboard'); 
    
    return { success: true, message: "Berhasil disimpan!" };
  } catch (error) {
    console.error("Gagal menyimpan komoditas:", error);
    return { success: false, message: "Gagal menyimpan ke database." };
  }
}

// 2. Fungsi Ambil Semua: FIXED (Sekarang mengajak data Specs)
export async function ambilSemuaKomoditas() {
  try {
    const products = await prisma.product.findMany({
      include: { 
        specs: true // <--- Inilah kunci agar spesifikasi muncul di katalog depan
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    return { success: true, data: products };
  } catch (error) {
    console.error("Gagal mengambil data:", error);
    return { success: false, data: [] };
  }
}

// 3. Fungsi Hapus: Menghapus produk (Specs akan ikut terhapus karena Cascade)
export async function hapusKomoditas(id: string) {
  try {
    await prisma.product.delete({
      where: { id: id }
    });
    revalidatePath('/');
    revalidatePath('/admin/dashboard');
    return { success: true };
  } catch (error) {
    console.error("Gagal menghapus data:", error);
    return { success: false };
  }
}

// 4. Fungsi Ambil Berdasarkan ID
export async function ambilKomoditasBerdasarkanId(id: string) {
  try {
    const product = await prisma.product.findUnique({
      where: { id: id },
      include: { specs: true } 
    });
    return { success: true, data: product };
  } catch (error) {
    console.error("Gagal mengambil data:", error);
    return { success: false, data: null };
  }
}

// 5. Fungsi Update: FIXED (Menghapus specs lama dan membuat yang baru)
export async function updateKomoditas(id: string, data: any) {
  try {
    // Hapus specs lama agar tidak duplikat atau tertinggal
    await prisma.spec.deleteMany({
      where: { productId: id }
    });

    // Update data utama dan masukkan specs baru
    await prisma.product.update({
      where: { id: id },
      data: {
        title: data.title,
        category: data.category,
        desc: data.desc,
        imageUrl: data.imageUrl,
        specs: {
          create: data.specs.map((spec: any) => ({
            label: spec.label,
            value: spec.value
          }))
        }
      }
    });

    // Paksa Vercel memperbarui tampilan website
    revalidatePath('/');
    revalidatePath('/admin/dashboard');

    return { success: true };
  } catch (error) {
    console.error("Gagal update data:", error);
    return { success: false };
  }
}