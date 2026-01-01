import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer-contact" className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Kolom 1: Brand & Desc */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* Logo PW */}
              <div className="w-6 h-6 rounded-full bg-forest flex items-center justify-center text-white text-xs font-bold">PW</div>
              <span className="font-bold text-xl text-white">Pangan Warga</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              Connecting Indonesia's fertile earth to the global market with integrity and sustainability.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {['Facebook', 'Twitter', 'Instagram'].map((social) => (
                <div key={social} className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-gold hover:text-forest transition-colors cursor-pointer">
                  <span className="text-xs">{social[0]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom 2: Quick Links & Contact */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-gold transition-colors">Home</Link></li>
                <li><Link href="#about" className="hover:text-gold transition-colors">About Us</Link></li>
                <li><Link href="#products" className="hover:text-gold transition-colors">Products</Link></li>
                <li><Link href="#values" className="hover:text-gold transition-colors">Sustainability</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                {/* Alamat Baru: Rumah BUMN Majene */}
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <span>
                    Rumah BUMN Majene<br/>
                    Labuang, Kec. Banggae Tim.,<br/>
                    Kab. Majene, Sulawesi Barat 91412
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <span>hello@panganwarga.id</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  <span>+62 852-9859-1487</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Kolom 3: Google Maps Embed (Rumah BUMN Majene) */}
          <div className="w-full h-[250px] rounded-2xl overflow-hidden shadow-lg border border-gray-800 relative bg-gray-800">
             <iframe 
               src="https://maps.google.com/maps?q=Rumah+BUMN+Majene&t=&z=15&ie=UTF8&iwloc=&output=embed"
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Lokasi Rumah BUMN Majene"
             ></iframe>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 Pangan Warga Nusantara. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
