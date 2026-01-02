# 🌾 PanganWarga

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![License](https://img.shields.io/github/license/Zaammm16/panganwarga?style=for-the-badge)

> **Platform digital modern untuk memantau ketahanan pangan, mendata distribusi bantuan, dan memberikan informasi pangan yang transparan bagi warga.**

---

## 🌐 Demo & Tautan Penting
* **Live Demo:** [https://panganwarga.vercel.app](https://panganwarga.vercel.app)
* **Laporkan Bug:** [Issues Page](https://github.com/Zaammm16/panganwarga/issues)
* **Request Fitur:** [Discussions](https://github.com/Zaammm16/panganwarga/discussions)

---

## 📑 Daftar Isi
1.  [Tentang Proyek](#-tentang-proyek)
2.  [Fitur Utama](#-fitur-utama)
3.  [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
4.  [Struktur Direktori](#-struktur-direktori)
5.  [Panduan Instalasi & Pengembangan](#-panduan-instalasi--pengembangan)
6.  [Variabel Lingkungan (.env)](#-variabel-lingkungan-env)
7.  [Deployment](#-deployment)
8.  [Roadmap](#-roadmap)
9.  [Kontribusi](#-kontribusi)
10. [Lisensi](#-lisensi)
11. [Kontak](#-kontak)

---

## 📖 Tentang Proyek
**PanganWarga** hadir sebagai solusi digital untuk mengatasi masalah kesenjangan informasi terkait pangan di masyarakat. Dengan antarmuka yang ramah pengguna, aplikasi ini bertujuan untuk memudahkan warga, pemerintah setempat, atau relawan dalam memantau stok, harga, dan distribusi bantuan pangan secara *real-time*.

Proyek ini dibangun dengan fokus pada performa (kecepatan), aksesibilitas, dan skalabilitas menggunakan teknologi web terbaru.

---

## ✨ Fitur Utama

### 🖥️ Frontend & UI
* **Responsive Design:** Tampilan adaptif yang sempurna di Smartphone, Tablet, dan Desktop.
* **Interactive Dashboard:** Visualisasi data pangan yang mudah dipahami.
* **Dark Mode Support:** (Opsional/Planned) Kenyamanan visual pengguna.

### ⚙️ Fungsionalitas (Contoh/Placeholder)
* **Pemetaan Lokasi:** Integrasi peta untuk melihat titik distribusi pangan.
* **Real-time Data:** Pembaruan data stok atau harga pangan tanpa *refresh* halaman.
* **Manajemen Data:** CRUD (Create, Read, Update, Delete) untuk data penerima bantuan.

---

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun di atas ekosistem JavaScript/TypeScript modern:

* **Core Framework:** [Next.js 14+](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/) / [React Icons](https://react-icons.github.io/react-icons/)
* **Font:** [Geist](https://vercel.com/font) (Next.js Optimized Font)
* **Linting & Formatting:** ESLint & Prettier
* **Deployment:** Vercel

---

## 📂 Struktur Direktori

Berikut adalah gambaran umum struktur folder proyek ini:

```bash
panganwarga/
├── app/                   # Next.js App Router (Halaman & API Routes)
│   ├── layout.tsx         # Layout utama aplikasi
│   ├── page.tsx           # Halaman beranda (Home)
│   └── globals.css        # CSS Global / Tailwind directives
├── components/            # Komponen UI Reusable (Button, Card, Navbar)
├── data/                  # Data statis atau dummy (JSON/TS)
├── public/                # Aset statis (Images, Favicon, SVGs)
├── styles/                # File style tambahan (jika ada)
├── .gitignore             # Daftar file yang diabaikan Git
├── eslint.config.mjs      # Konfigurasi ESLint
├── next.config.ts         # Konfigurasi Next.js
├── package.json           # Dependensi & Scripts
├── postcss.config.mjs     # Konfigurasi PostCSS
├── tailwind.config.ts     # Konfigurasi Tailwind CSS (jika ada/implicit)
└── tsconfig.json          # Konfigurasi TypeScript
