"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DetailedProfilePage() {
  // Bagan 1: Struktur Kepengurusan Inti & Divisi Kerja (Sesuai Halaman 5 Proposal)
  const organisasi = [
    {
      kategori: "Pengurus Inti Komunitas",
      warna: "border-gold bg-gold/5",
      shadow: "shadow-gold/10",
      anggota: [
        { nama: "Muh. Wais", jabatan: "Ketua Umum" },
        { nama: "Muhammad Fachri Siswanto", jabatan: "Sekretaris" },
        { nama: "Sudrajat S", jabatan: "Bendahara" }
      ]
    },
    {
      kategori: "Divisi Riset & Dokumentasi Pangan",
      warna: "border-forest bg-forest/5",
      shadow: "shadow-forest/10",
      anggota: [
        { nama: "Dicky Zulkarnain Madjid", jabatan: "Kordinator Riset" },
        { nama: "Muh. Kadri", jabatan: "Anggota Riset" },
        { nama: "Fadliansyah", jabatan: "Anggota Riset" }
      ]
    },
    {
      kategori: "Divisi Pemberdayaan Komunitas",
      warna: "border-emerald-200 bg-emerald-50/30",
      shadow: "shadow-emerald-900/5",
      anggota: [
        { nama: "Hariadi", jabatan: "Kordinator Lapangan" },
        { nama: "Aco Nursyamsu", jabatan: "Fasilitator Petani" },
        { nama: "Wiratmawanto", jabatan: "Fasilitator Adat" }
      ]
    }
  ];

  // Bagan 2: Lini Masa Aksi Lapangan & Ekspedisi (Sesuai Halaman 6 Proposal)
  const baganKegiatan = [
    {
      tahun: "2022",
      judul: "Pemetaan Pangan Berbasis Komunitas",
      lokasi: "Dusun Bulo-Bulo, Polewali Mandar",
      fokus: "Identifikasi lumbung pangan darurat warga saat musim paceklik serta studi aturan adat dalam menjaga kelestarian hutan.",
      icon: "📍"
    },
    {
      tahun: "2022",
      judul: "Pendataan Kopi Lokal Arabika Mamasa",
      subtitle: "Varietas Endemik Pegunungan",
      lokasi: "Kecamatan Sesena Padang, Mamasa",
      fokus: "Inventarisasi varietas tanaman Kopi Arabika Lokal asli Mandar yang masih dibudidayakan secara tradisional oleh warga.",
      icon: "☕"
    },
    {
      tahun: "2025",
      judul: "Pendataan Kopi Lokal Ulumanda",
      subtitle: "Etnobotani Tradisional",
      lokasi: "Kecamatan Ulumanda, Majene",
      fokus: "Pencatatan varietas kopi di wilayah elevasi tinggi, perekaman sejarah lisan penanaman, serta dokumentasi teknik sangrai kuali tanah tradisional.",
      icon: "🌱"
    },
    {
      tahun: "2026",
      judul: "Pendampingan Riset Jejak Petualang Trans7",
      subtitle: "Sinergi Media Nasional",
      lokasi: "Kecamatan Ulumanda, Majene",
      fokus: "Verifikasi narasumber pelosok/pesisir, pemetaan jalur tim nasional, serta sinkronisasi narasi budaya dalam mengolah masakan tradisional khas Mandar.",
      icon: "🎥"
    },
    {
      tahun: "2026",
      judul: "Ekspedisi Budaya & Pangan Limboro Rambu-Rambu",
      subtitle: "Fokus Utama Kebudayaan",
      lokasi: "Komunitas Adat Limboro, Kec. Sendana",
      fokus: "Riset peran kelembagaan adat dalam mempertahankan kearifan lokal etnobotani, serta pendataan komprehensif tanaman pangan hutan liar.",
      icon: "🗺️"
    }
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-gray-800 antialiased selection:bg-gold/30 selection:text-forest">
      
      {/* TOMBOL KEMBALI FIXED */}
      <div className="absolute top-6 left-6 z-50">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-forest font-bold px-4 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group text-xs border border-gray-100 backdrop-blur-md"
        >
          <svg className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Kembali ke Beranda
        </Link>
      </div>

      {/* 1. HERO PROFILE */}
      <section className="relative py-32 bg-forest text-white overflow-hidden border-b-8 border-gold">
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-gold/10 rounded-full blur-[120px]"></div>

        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center space-y-4">
          <span className="text-gold font-mono tracking-widest uppercase text-xs inline-block bg-white/10 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-xs">
            Corporate & Community Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight uppercase">
            Profil Lengkap Korporasi
          </h1>
          <p className="text-sm md:text-base text-green-100 max-w-2xl mx-auto font-light leading-relaxed">
            Dokumentasi komprehensif legalitas, visi ekonomi global, struktur komite kerja, dan rekam jejak pengabdian kebudayaan Pangan Warga Nusantara.
          </p>
        </div>
      </section>

      {/* 2. NARASI UTAMA PERUSAHAAN */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1 space-y-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-xs relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gold"></div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Ikhtisar Institusi</h3>
            <div className="space-y-3 text-xs md:text-sm text-gray-700">
              <p><strong>Nama Resmi:</strong> Pangan Warga Nusantara (PWN)</p>
              <p><strong>Domisili Legal:</strong> Kel. Tande Timur, Kec. Banggae Timur, Kab. Majene, Sulawesi Barat</p>
              <p><strong>Sektor Gerakan:</strong> Agrikultur, Ekspor Rempah, & Pelestarian Warisan Budaya</p>
              <p><strong>Aktivitas Web:</strong> International Spice Supplier (Cloves, Nutmegs, Aromatics)</p>
            </div>
          </div>

          <div className="md:col-span-2 space-y-6 text-justify text-gray-600 leading-relaxed text-base">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              Menjembatani Komoditas Global, <br className="hidden md:inline"/> Melindungi Kearifan Lokal
            </h2>
            <p>
              Secara makro dan jaringan perdagangan internasional, <strong>Pangan Warga Nusantara</strong> bergerak sebagai salah satu agregator dan penyuplai komoditas rempah unggulan (seperti cengkih berkualitas tinggi dan biji pala) yang menghubungkan hasil bumi petani lokal Sulawesi Barat langsung ke pasar niaga yang lebih luas[cite: 1, 2]. Kami percaya bahwa keberhasilan ekonomi komoditas tidak boleh dilepaskan dari kesejahteraan komunitas adat yang merawat tanahnya.
            </p>
            <p>
              Oleh karena itu, secara mikro di akar rumput, kami mendedikasikan institusi ini untuk melakukan pemetaan pangan darurat, dokumentasi tradisi lisan etnobotani, serta revitalisasi pangan lokal alternatif pengganti padi seperti Jewawut (Tarreang) dan Umbi Gadung (Kundo) yang menuntut kecerdasan serta kesabaran tinggi dalam proses pengolahannya.
            </p>
          </div>
        </div>
      </section>

      {/* 3. BAGAN STRUKTUR ORGANISASI VISUAL */}
      <section className="py-20 bg-white border-y border-gray-100 px-4 relative">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-forest tracking-tight">Bagan Struktur Organisasi & Komite Kerja</h2>
            <p className="text-xs text-gray-400 max-w-xl mx-auto">Sinergi kepengurusan formal dalam memastikan tata kelola administrasi bantuan pemerintah dan riset lapangan berjalan akuntabel.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {organisasi.map((org, index) => (
              <div key={index} className={`border-2 ${org.warna} rounded-3xl p-6 space-y-4 shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-1`}>
                <h3 className="font-extrabold text-sm text-gray-800 uppercase tracking-wide border-b pb-2 border-gray-200/80">
                  {org.kategori}
                </h3>
                <div className="space-y-3">
                  {org.anggota.map((p, idx) => (
                    <div key={idx} className="bg-white p-3 rounded-xl border border-gray-100/70 flex justify-between items-center text-xs shadow-2xs group cursor-default">
                      <span className="font-bold text-gray-950 group-hover:text-forest transition-colors">{p.nama}</span>
                      <span className="text-forest bg-forest/5 px-2 py-0.5 rounded-sm font-semibold tracking-wide text-[10px] uppercase">{p.jabatan}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BAGAN KRONIK KEGIATAN */}
      <section className="py-24 px-4 max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Bagan Rekam Jejak Aktivitas & Ekspedisi</h2>
          <p className="text-xs text-gray-400 max-w-xl mx-auto">Kronologi portofolio riset dan pengabdian masyarakat nyata yang telah berhasil dilaksanakan dari tahun 2022 hingga saat ini.</p>
        </div>

        <div className="relative border-l-4 border-forest/20 ml-4 md:ml-48 space-y-12">
          {baganKegiatan.map((keg, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="relative pl-8 md:pl-12 group"
            >
              <div className="absolute hidden md:flex flex-col items-end -left-48 top-0 w-36 text-right transition-transform group-hover:-translate-x-1 duration-300">
                <span className="font-black text-3xl text-forest tracking-tight">{keg.tahun}</span>
                <span className="text-[9px] font-bold text-gold bg-forest px-2 py-0.5 rounded-sm uppercase tracking-wider mt-1">Verified</span>
              </div>

              <div className="absolute -left-[14px] md:-left-[16px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-gold shadow-xs flex items-center justify-center text-[11px] z-10 group-hover:bg-gold/20 transition-all duration-300">
                {keg.icon}
              </div>

              <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-2xs border border-gray-100 hover:shadow-md hover:border-gray-200/80 transition-all duration-300 relative overflow-hidden">
                <div className="flex md:hidden items-center gap-2 mb-2">
                  <span className="text-xl font-black text-forest">{keg.tahun}</span>
                  <span className="text-[9px] font-bold bg-gold/10 text-forest px-2 py-0.5 rounded uppercase">Riset</span>
                </div>

                <h3 className="text-base md:text-lg font-extrabold text-gray-900 leading-snug group-hover:text-forest transition-colors">{keg.judul}</h3>
                {keg.subtitle && <p className="text-xs text-gold font-semibold uppercase tracking-wider mt-0.5">{keg.subtitle}</p>}
                
                <div className="text-xs text-gray-400 font-medium my-2 flex items-center gap-1">
                  <span>📍</span> Wilayah: {keg.lokasi}
                </div>
                
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-light text-justify pt-3 border-t border-gray-100 mt-3">
                  {keg.fokus}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. FOOTER LEGALITAS */}
      <section className="py-12 bg-gray-900 text-white border-t-4 border-gold text-center px-4 text-xs font-mono tracking-wide opacity-95">
        <div className="max-w-2xl mx-auto space-y-2 text-gray-400 font-light">
          <p className="text-white font-medium">KEMENTERIAN PENDIDIKAN, KEBUDAYAAN, RISET, DAN TEKNOLOGI</p>
          <p>BALAI PELESTARIAN KEBUDAYAAN WILAYAH XVIII PALU — SULAWESI TENGAH</p>
          <p className="text-gray-600 pt-4 text-[10px]">© 2026 PT Pangan Warga Nusantara. All Rights Reserved. Verified Corporate Registry.</p>
        </div>
      </section>

    </div>
  );
}