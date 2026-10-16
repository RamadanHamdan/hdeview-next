import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/5 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand Info */}
          <div className="col-span-1">
            <Link href="/" className="inline-block mb-6">
              <h3 className="text-2xl font-black tracking-tighter uppercase">
                HDe <span className="text-blue-500">Technology</span>
              </h3>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">
              Inovator solusi visual interaktif kelas dunia dan sistem perekaman cerdas. Kami berdedikasi membangun ekosistem digital yang efisien, aman, dan terintegrasi untuk Indonesia.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/hdeindonesia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-tr hover:from-amber-600 hover:via-pink-600 hover:to-purple-600 hover:border-transparent transition-all duration-300"
                aria-label="Instagram HDe Technology"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a
                href="https://wa.me/628194010189"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-600 hover:border-transparent transition-all duration-300"
                aria-label="WhatsApp HDe Technology"
              >
                <i className="fab fa-whatsapp text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 uppercase text-[10px] tracking-[0.25em] text-blue-400">
              Navigasi
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400 transition-colors"></span>
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/kebijakan-privasi" className="hover:text-white transition flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400 transition-colors"></span>
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="font-bold mb-6 uppercase text-[10px] tracking-[0.25em] text-blue-400">
              Solusi terintegrasi
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/videotron-guide" className="hover:text-white transition flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400 transition-colors"></span>
                  Katalog Solusi LED
                </Link>
              </li>
              <li>
                <Link href="/produk-videotron" className="hover:text-white transition flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400 transition-colors"></span>
                  Smart Configurator
                </Link>
              </li>
              <li>
                <Link href="/panduan" className="hover:text-white transition flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400 transition-colors"></span>
                  Panduan Penggunaan
                </Link>
              </li>
            </ul>
          </div>

          {/* Headquarters Info */}
          <div>
            <h4 className="font-bold mb-6 uppercase text-[10px] tracking-[0.25em] text-blue-400">
              Kantor Pusat
            </h4>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-blue-500 mt-1 flex-shrink-0"></i>
                <a
                  href="https://maps.google.com/?q=Jl.+RD+Rangga+Kencana+No.53,+Cibaduyut,+Kota+Bandung"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition leading-relaxed text-xs"
                >
                  Jl. RD Rangga Kencana No.53, Cibaduyut, Kota Bandung, Jawa Barat 40237
                  <span className="block text-[10px] text-blue-400 mt-1 font-bold uppercase tracking-wider flex items-center gap-1">
                    Petunjuk Arah <i className="fas fa-external-link-alt text-[8px]"></i>
                  </span>
                </a>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <i className="fas fa-phone-alt text-blue-500 flex-shrink-0"></i>
                <a href="tel:+628194010189" className="hover:text-white transition">
                  +62 819-4010-189 (Telemarketing HDe)
                </a>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <i className="fas fa-envelope text-blue-500 flex-shrink-0"></i>
                <a href="mailto:info@hdeview.com" className="hover:text-white transition">
                  info@hdeview.com
                </a>
              </div>

              {/* Unit Bisnis */}
              <div className="pt-4 border-t border-white/10 mt-2">
                <span className="block text-[9px] font-black tracking-[0.2em] text-slate-500 uppercase mb-2">
                  Unit Bisnis Utama
                </span>
                <a
                  href="https://mabel.co.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-white/5 p-3 rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all text-xs">
                    <i className="fas fa-building"></i>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-xs">Mabel.co.id</span>
                    <span className="text-[9px] text-slate-400">CV. MABEL SOLUSI MANDIRI</span>
                  </div>
                  <i className="fas fa-chevron-right text-[10px] ml-auto text-slate-500 group-hover:text-white transition-all"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="text-xs text-slate-500">
            © 2026 HDe Technology. <span className="mx-2 hidden md:inline text-slate-700">|</span> Innovation for Better Collaboration.
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-emerald-400">
              <i className="fas fa-shield-alt mr-1"></i> TKDN Certified
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-blue-400">
              <i className="fas fa-shopping-bag mr-1"></i> LKPP E-Katalog
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
