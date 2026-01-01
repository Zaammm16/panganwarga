import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-forest relative overflow-hidden">
      {/* Background Blobs (Hiasan) */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-gold/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-fade-up">
          Ready to Bring Nature to Your Table?
        </h2>
        <p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto animate-fade-up delay-100">
          Join our network of distributors and experience the finest agricultural products Indonesia has to offer.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up delay-200">
          <Link href="#footer-contact" className="bg-gold text-forest px-8 py-4 rounded-full font-bold hover:bg-white transition-colors shadow-lg">
            Get a Quote
          </Link>
          <Link href="#products" className="border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors">
            Download Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}