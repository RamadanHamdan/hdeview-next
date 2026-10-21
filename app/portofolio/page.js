import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Portofolio & Lokasi Proyek | HDe Technology',
  description: 'Daftar instalasi proyek HDe Interactive Flat Panel, LED Videotron, dan Meeting Recording System di instansi pemerintah dan swasta.',
};

export default function PortofolioPage() {
  const projects = [
    {
      title: 'Interactive Flat Panel - CV Inarum',
      category: 'Swasta',
      tech: 'Tech: 4K IFP 98" Touchscreen',
      badgeColor: 'text-blue-600 bg-blue-50 border-blue-200',
      desc: 'Instalasi Videotron 4K ukuran 98 Inci pada cv Inarum',
      img: '/img/Produk/home/proyek/ARI-0001-140426-FotoBarang-HDe-98_inch.jpeg',
    },
    {
      title: 'Ballroom LED - Gedung Perkantoran XYZ',
      category: 'Korporasi',
      tech: 'Tech: LED P2.5 Indoor Ultra-Smooth',
      badgeColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      desc: 'Instalasi videotron indoor seluas 15m² dengan kerapatan pixel tinggi dan refresh rate 3840Hz untuk presentasi korporat.',
      img: '/img/Produk/home/proyek/Gemini_Generated_Image_10y43110y43110y4.png',
    },
    {
      title: 'Command Center - Dinas Kominfo',
      category: 'Pemerintahan',
      tech: 'Tech: Auto Tracking AI PTZ Camera',
      badgeColor: 'text-amber-600 bg-amber-50 border-amber-200',
      desc: 'Integrasi sistem perekaman rapat cerdas yang mendukung transparansi operasional data kota tanpa operator kamera.',
      img: '/img/Produk/home/proyek/mrsroom.png',
    },
    {
      title: 'Command Center - Dinas Kominfo',
      category: 'Pemerintahan',
      tech: 'Tech: Auto Tracking AI PTZ Camera',
      badgeColor: 'text-amber-600 bg-amber-50 border-amber-200',
      desc: 'Integrasi sistem perekaman rapat cerdas yang mendukung transparansi operasional data kota tanpa operator kamera.',
      img: '/img/Produk/home/proyek/mrsroom.png',
    },
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Header Banner */}
      <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
            Experience Matters
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Instalasi & Proyek <span className="text-blue-600">Terpilih.</span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
            Membangun ekosistem digital untuk instansi pemerintah, universitas, dan korporasi terkemuka dengan teknologi visual dan interaktif masa depan.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col group"
              >
                <div className="relative overflow-hidden h-64 bg-slate-900">
                  <Image
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    width={1080}
                    height={1080}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <span className="bg-white/20 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase border border-white/20">
                      {item.tech}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 border ${item.badgeColor}`}
                    >
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-xs md:text-sm mt-3 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office & Maps Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-wrap border border-slate-200">
            <div className="w-full lg:w-2/5 p-10 lg:p-14 bg-slate-950 text-white flex flex-col justify-between">
              <div>
                <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.25em] mb-3 block">
                  Visit Our Office
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-8 leading-tight">
                  Hubungi Kami & <br />Konsultasi Proyek
                </h2>

                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-xs">
                      Jl. RD Rangga Kencana No.53, Cibaduyut, Kec. Bojongloa Kidul, Kota Bandung, Jawa Barat 40237
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                      <i className="fas fa-phone"></i>
                    </div>
                    <p className="text-slate-300 font-mono text-xs">(022) 540-1234 / 0819-4010-189</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <p className="text-slate-300 text-xs">support@hde.co.id</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="https://maps.app.goo.gl/HXnsA9kh9g6f5XGa9"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-500 text-white py-4 px-6 rounded-2xl font-bold transition-all text-xs uppercase tracking-widest shadow-xl shadow-blue-600/30 gap-2"
                >
                  <span>Petunjuk Arah Google Maps</span>
                  <i className="fas fa-location-arrow"></i>
                </a>
              </div>
            </div>

            <div className="w-full lg:w-3/5 h-[400px] lg:h-auto overflow-hidden bg-slate-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63367.6467837739!2d107.52627262167967!3d-6.9528132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e978bc9b8141%3A0x90f345e4601f683c!2sCV.%20Mabel%20Solusi%20Mandiri!5e0!3m2!1sid!2sid!4v1767932928348!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Lokasi CV. Mabel Solusi Mandiri"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
