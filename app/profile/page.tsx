"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DetailedProfilePage() {
  // Bagan 1: Struktur Kepengurusan Inti dengan Metadata Gambar Medsos (Paling Atas)
  const pengurusInti = [
    {
      nama: "Muh. Wais",
      jabatan: "Ketua Umum",
      roleDesc: "Penanggung Jawab Utama & Pengarah Ekspedisi Kebudayaan",
      instagram: "@waissyakir61",
      // Kamu bisa ganti url gambar ini dengan foto asli Kak Wais nantinya
      foto: "https://drive.google.com/file/d/1zmA74rAkvScOs2uOecFoh9U6Nm8yxySb/view?usp=drive_link" 
    },
    {
      nama: "Muhammad Fachri Siswanto",
      jabatan: "Sekretaris Organisasi",
      roleDesc: "Komparator Data Riset, Administrasi Kelayakan, & Hubungan Lembaga",
      instagram: "@fachrisiswanto",
      foto: "https://drive.google.com/file/d/1UOnloMhWvLV4BoGDG9ntjgtKMK8FjVm7/view?usp=drive_link"
    },
    {
      nama: "Sudrajat S",
      jabatan: "Bendahara Umum",
      roleDesc: "Manajemen Alokasi Anggaran & Akuntabilitas Dana Bantuan Kebudayaan",
      instagram: "@sudrajatliem",
      foto: "https://drive.google.com/file/d/1w8RGreyIXYIfQ2GJwjwf-T6ABWYw6Z_n/view?usp=drive_link"
    }
  ];

  // Divisi Pendukung Lapangan
  const divisiPendukung = [
    {
      kategori: "Divisi Riset & Dokumentasi Pangan",
      warna: "border-forest bg-forest/5",
      anggota: [
        { nama: "Dicky Zulkarnain Madjid", jabatan: "Kordinator Riset" },
        { nama: "Muh. Kadri", jabatan: "Anggota Riset" },
        { nama: "Fadliansyah", jabatan: "Anggota Riset" }
      ]
    },
    {
      kategori: "Divisi Pemberdayaan Komunitas",
      warna: "border-emerald-200 bg-emerald-50/30",
      anggota: [
        { nama: "Hariadi", jabatan: "Kordinator Lapangan" },
        { nama: "Aco Nursyamsu", jabatan: "Fasilitator Petani" },
        { nama: "Wiratmawanto", jabatan: "Fasilitator Adat" }
      ]
    }
  ];

  // Bagan 2: Lini Masa Aksi Lapangan & Ekspedisi
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

      {/* 2. BAGAN UTAMA: DEWAN PENGURUS INTI (Pindah ke Paling Atas dengan Tampilan Grid Visual Medsos) */}
      <section className="py-20 px-4 max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-gold uppercase tracking-widest bg-forest px-3 py-1 rounded-sm">Struktur Komite Tertinggi</span>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">Dewan Pengurus Inti</h2>
          <p className="text-xs text-gray-400 max-w-md mx-auto">Aparatur pelaksana program kepemimpinan nasional yang bertanggung jawab atas legalitas operasional organisasi.</p>
        </div>

        {/* Grid Kartu Profil Visual Ala Instagram/Medsos Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {pengurusInti.map((lead, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-xs border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col group"
            >
              {/* Wadah Foto Profil Inti */}
              <div className="relative h-72 w-full bg-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <img 
                  src={lead.foto} 
                  alt={lead.nama} 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* Lencana Jabatan Mengambang */}
                <div className="absolute top-4 right-4 z-20 bg-white/95 text-forest font-bold text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full shadow-xs backdrop-blur-xs border border-gray-100">
                  {lead.jabatan}
                </div>
                {/* Nama di Dalam Gambar */}
                <div className="absolute bottom-4 left-6 z-20 text-white">
                  <h3 className="text-lg font-black tracking-tight leading-none">{lead.nama}</h3>
                  <p className="text-[10px] text-gold font-mono mt-1 opacity-90">{lead.instagram}</p>
                </div>
              </div>

              {/* Detail Keterangan Peran Jabatan */}
              <div className="p-6 md:p-8 space-y-4 flex-grow flex flex-col justify-between bg-white">
                <p className="text-xs text-gray-500 leading-relaxed font-light text-justify italic">
                  "{lead.roleDesc}"
                </p>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] font-medium text-forest">
                  <span className="flex items-center gap-1 opacity-80">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse"></span> Active Member
                  </span>
                  <span className="text-gold font-mono uppercase tracking-wider text-[10px] bg-forest/5 px-2 py-0.5 rounded-sm">ID: PWN-00{index+1}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. DIVISI KERJA PENDUKUNG */}
      <section className="py-16 bg-white border-y border-gray-100 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {divisiPendukung.map((org, index) => (
            <div key={index} className={`border-2 ${org.warna} rounded-[2rem] p-6 space-y-4 shadow-2xs`}>
              <h3 className="font-extrabold text-xs text-gray-800 uppercase tracking-wider border-b pb-2 border-gray-200/60">
                {org.kategori}
              </h3>
              <div className="space-y-2.5">
                {org.anggota.map((p, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-xl border border-gray-100/80 flex justify-between items-center text-xs shadow-3xs hover:border-gray-200 transition-colors">
                    <span className="font-bold text-gray-900">{p.nama}</span>
                    <span className="text-forest bg-forest/5 px-2.5 py-1 rounded-md font-semibold tracking-wide text-[9px] uppercase">{p.jabatan}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. NARASI STRATEGIS PERUSAHAAN */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1 space-y-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-xs relative overflow-hidden">
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
              Secara makro dan jaringan perdagangan internasional, <strong>Pangan Warga Nusantara</strong> bergerak sebagai salah satu agregator dan penyuplai komoditas rempah unggulan (seperti cengkih berkualitas tinggi dan biji pala) yang menghubungkan hasil bumi petani lokal Sulawesi Barat langsung ke pasar niaga yang lebih luas. Kami percaya bahwa keberhasilan ekonomi komoditas tidak boleh dilepaskan dari kesejahteraan komunitas adat yang merawat tanahnya.
            </p>
            <p>
              Oleh karena itu, secara mikro di akar rumput, kami mendedikasikan institusi ini untuk melakukan pemetaan pangan darurat, dokumentasi tradisi lisan etnobotani, serta revitalisasi pangan lokal alternatif pengganti padi seperti Jewawut (Tarreang) dan Umbi Gadung (Kundo) yang menuntut kecerdasan serta kesabaran tinggi dalam proses pengolahannya.
            </p>
          </div>
        </div>
      </section>

      {/* 5. BAGAN KRONIK KEGIATAN & TIMELINE */}
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

      {/* 6. FOOTER LEGALITAS */}
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
