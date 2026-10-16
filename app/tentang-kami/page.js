import Link from 'next/link';

export const metadata = {
  title: 'Tentang Kami - HDe Technology',
  description: 'Mengenal HDe Technology, solusi tampilan visual interaktif, LED Videotron, dan sistem dokumentasi rapat resmi di Indonesia.',
};

export default function TentangKamiPage() {
  return (
    <div className="bg-white text-slate-800 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white py-24 md:py-32 px-6 text-center relative overflow-hidden">
        <div className="container mx-auto max-w-4xl relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-widest mb-4">
            Profil Perusahaan
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Mengenal HDe Technology
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Dedikasi kami adalah menghadirkan inovasi teknologi visual mutakhir dan otomatisasi cerdas untuk mendukung kolaborasi dan transformasi digital di Indonesia.
          </p>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="container mx-auto py-24 px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.25em] mb-2 block">
              Core Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 border-l-4 border-blue-600 pl-4 tracking-tight">
              Visi & Misi Kami
            </h2>

            <div className="mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-blue-700 mb-2 flex items-center gap-2">
                <i className="fas fa-eye text-blue-600"></i> Visi
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Menjadi pemimpin pasar dalam solusi tampilan visual interaktif, LED Videotron, dan sistem rekaman rapat yang paling inovatif, berdaya saing, dan terpercaya di Indonesia.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2">
                <i className="fas fa-bullseye text-blue-600"></i> Misi
              </h3>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-emerald-500 text-base mt-0.5"></i>
                  <span>Menghadirkan produk berkualitas tinggi dengan standar internasional dan TKDN resmi di atas 40%.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-emerald-500 text-base mt-0.5"></i>
                  <span>Memberikan layanan purna jual, suku cadang terjamin, dan dukungan teknis on-site yang responsif ke seluruh Indonesia.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-emerald-500 text-base mt-0.5"></i>
                  <span>Membantu institusi pendidikan, instansi pemerintahan, dan korporat bertransformasi ke ekosistem digital yang efisien.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Kenapa Memilih HDe */}
          <div className="bg-gradient-to-br from-blue-900 to-indigo-950 rounded-[3rem] p-10 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <h3 className="text-2xl md:text-3xl font-black mb-8 text-center uppercase tracking-tight">
              Kenapa Memilih HDe?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center hover:bg-white/20 transition-all">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mx-auto mb-3 text-xl shadow">
                  <i className="fas fa-award"></i>
                </div>
                <h4 className="font-bold text-sm mb-1">Kualitas Terjamin</h4>
                <p className="text-[11px] text-slate-300">Grade A Panel & QC Ketat</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center hover:bg-white/20 transition-all">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mx-auto mb-3 text-xl shadow">
                  <i className="fas fa-tools"></i>
                </div>
                <h4 className="font-bold text-sm mb-1">Dukungan Teknis</h4>
                <p className="text-[11px] text-slate-300">On-Site Service Nasional</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center hover:bg-white/20 transition-all">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mx-auto mb-3 text-xl shadow">
                  <i className="fas fa-handshake"></i>
                </div>
                <h4 className="font-bold text-sm mb-1">E-Katalog LKPP</h4>
                <p className="text-[11px] text-slate-300">Pengadaan Resmi & Cepat</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center hover:bg-white/20 transition-all">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mx-auto mb-3 text-xl shadow">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h4 className="font-bold text-sm mb-1">Garansi Resmi</h4>
                <p className="text-[11px] text-slate-300">1 - 2 Tahun Full Cover</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/portofolio"
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-50 transition"
              >
                <span>Lihat Portofolio Proyek</span>
                <i className="fas fa-arrow-right text-xs"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
