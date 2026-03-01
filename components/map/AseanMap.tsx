"use client";

import { MapContainer, TileLayer, CircleMarker, Polyline, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function AseanMap() {
  // Titik Koordinat
  const sulbarHQ: [number, number] = [-2.6785, 118.8860]; // Koordinat Mamuju, Sulbar
  
  const destinations: { name: string; coords: [number, number] }[] = [
    { name: "Singapore Port", coords: [1.3521, 103.8198] },
    { name: "Kuala Lumpur, Malaysia", coords: [3.1390, 101.6869] },
    { name: "Bangkok, Thailand", coords: [13.7563, 100.5018] },
    { name: "Ho Chi Minh, Vietnam", coords: [10.8231, 106.6297] },
    { name: "Manila, Philippines", coords: [14.5995, 120.9842] },
    { name: "Jakarta, Indonesia (Hub)", coords: [-6.2088, 106.8456] },
  ];

  return (
    <>
      {/* CSS KHUSUS UNTUK ANIMASI GARIS */}
      <style jsx global>{`
        .animated-route {
          /* Ukuran garis putus-putusnya */
          stroke-dasharray: 10, 15; 
          /* Durasi animasi: semakin kecil detiknya, semakin cepat bergeraknya */
          animation: route-animation 1.5s linear infinite;
        }
        @keyframes route-animation {
          0% { stroke-dashoffset: 25; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>

      {/* Kontainer Peta */}
      <MapContainer 
        center={[4.5, 115.0]} 
        zoom={5} 
        scrollWheelZoom={false} 
        className="w-full h-[500px] rounded-xl shadow-inner z-0"
      >
        {/* PETA BERWARNA: Menggunakan OpenStreetMap Default */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        {/* Titik Pusat: Sulawesi Barat */}
        <CircleMarker center={sulbarHQ} radius={10} pathOptions={{ color: '#000', weight: 2, fillColor: '#D4AF37', fillOpacity: 1 }}>
          <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
            <span className="font-bold text-forest">HQ: Sulawesi Barat</span>
          </Tooltip>
        </CircleMarker>

        {/* Titik Tujuan & Garis Rute Distribusi */}
        {destinations.map((dest, index) => (
          <div key={index}>
            {/* GARIS ANIMASI: Kita masukkan class 'animated-route' ke sini */}
            <Polyline 
              positions={[sulbarHQ, dest.coords]} 
              pathOptions={{ 
                color: '#ef4444', // Warna garis diubah jadi Merah Terang agar kontras dengan peta warna
                weight: 3, 
                opacity: 0.9,
                className: 'animated-route' // Memanggil CSS animasi di atas
              }} 
            />
            {/* Titik Negara Tujuan */}
            <CircleMarker center={dest.coords} radius={7} pathOptions={{ color: '#fff', weight: 2, fillColor: '#22c55e', fillOpacity: 1 }}>
              <Tooltip direction="top" offset={[0, -5]}>
                <span className="font-medium text-gray-800">{dest.name}</span>
              </Tooltip>
            </CircleMarker>
          </div>
        ))}
      </MapContainer>
    </>
  );
}