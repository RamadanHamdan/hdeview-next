'use client';

import Link from 'next/link';

export default function PanduanPage() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Header */}
      <header className="bg-slate-50 border-b border-slate-200 py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
            Support & Documentation
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight">
            Pusat Panduan Penggunaan
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Temukan panduan lengkap pengoperasian unit HDe Interactive Flat Panel, aksesoris nirkabel, hingga panduan setup mandiri.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16 max-w-5xl">
        {/* Quick Shortcut Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div
            onClick={() => scrollTo('unit-guide')}
            className="p-8 rounded-[2.5rem] border border-slate-200 bg-white hover:border-blue-500 hover:shadow-xl transition-all cursor-pointer group"
          >
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <i className="fas fa-desktop"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Panduan Unit Utama</h3>
            <p className="text-slate-500 text-xs leading-relaxed mb-6">
              Cara setup awal, penggunaan papan tulis cerdas (whiteboard), dan navigasi Dual OS (Android & Windows).
            </p>
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
              Lihat Detail <i className="fas fa-arrow-down text-[10px]"></i>
            </span>
          </div>

          <div
            onClick={() => scrollTo('dongle-guide')}
            className="p-8 rounded-[2.5rem] border border-purple-200 bg-purple-50/20 hover:border-purple-500 hover:shadow-xl transition-all cursor-pointer group"
          >
            <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all">
              <i className="fas fa-plug"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Aksesoris & Dongle</h3>
            <p className="text-slate-500 text-xs leading-relaxed mb-6">
              Tutorial pairing Wireless Dongle, penggunaan Smart Stylus Pen, dan kendali layar touch 2 arah.
            </p>
            <span className="text-purple-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
              Lihat Detail <i className="fas fa-arrow-down text-[10px]"></i>
            </span>
          </div>

          <Link
            href="/unduh"
            className="p-8 rounded-[2.5rem] border border-slate-200 bg-white hover:border-emerald-500 hover:shadow-xl transition-all group block"
          >
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <i className="fas fa-file-pdf"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Pusat Unduhan PDF</h3>
            <p className="text-slate-500 text-xs leading-relaxed mb-6">
              Unduh file Manual Book PDF resmi, sertifikat TKDN, dan datasheet teknis untuk kebutuhan pengadaan.
            </p>
            <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
              Unduh File <i className="fas fa-download text-[10px]"></i>
            </span>
          </Link>
        </div>

        {/* Section 1: Navigasi Unit Utama */}
        <section id="unit-guide" className="py-16 border-t border-slate-200">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl shadow-inner flex-shrink-0">
              <i className="fas fa-desktop"></i>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                Navigasi Unit Utama IFP
              </h2>
              <p className="text-slate-500 text-sm">
                Memahami sistem Dual OS cerdas dan fitur Whiteboard HDe.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-blue-600">
                  <i className="fas fa-toggle-on text-xl"></i>
                </div>
                <h4 className="font-bold text-lg text-slate-800">Beralih Antar Sistem</h4>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed mb-6">
                Unit HDe dilengkapi dengan sistem ganda Android bawaan dan Windows (OPS PC). Anda bisa berpindah sistem seketika:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-xs text-slate-700">
                  <i className="fas fa-check-circle text-emerald-500 text-sm mt-0.5"></i>
                  <span>
                    <strong>Sidebar Menu:</strong> Swipe dari kedua tepi layar dan tekan tombol ikon "Source" untuk memilih Android atau PC OPS.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-xs text-slate-700">
                  <i className="fas fa-check-circle text-emerald-500 text-sm mt-0.5"></i>
                  <span>
                    <strong>Home Screen:</strong> Sentuh kotak ikon shortcut "PC" pada tampilan beranda utama Android.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-amber-500">
                  <i className="fas fa-chalkboard text-xl"></i>
                </div>
                <h4 className="font-bold text-lg text-slate-800">Fitur Whiteboard Cerdas</h4>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed mb-6">
                Mendukung penulisan simultan hingga 40 titik sentuh dengan respons ultra cepat dan tools cerdas:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-xs text-slate-700">
                  <i className="fas fa-pen-fancy text-blue-500 text-sm mt-0.5"></i>
                  <span>
                    <strong>Gesture Erasing:</strong> Hapus tulisan papan tulis cukup dengan mengusap layar menggunakan telapak tangan tanpa perlu mengganti tool.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-xs text-slate-700">
                  <i className="fas fa-qrcode text-purple-500 text-sm mt-0.5"></i>
                  <span>
                    <strong>Scan & Share:</strong> Selesai rapat? Pindai QR Code di pojok layar untuk menyimpan seluruh catatan langsung ke smartphone peserta.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white border border-dashed border-slate-300 rounded-[2rem] p-6 text-center">
            <h5 className="font-bold text-slate-400 uppercase text-[10px] tracking-widest mb-3">
              Port Konektivitas Depan (Front Panel)
            </h5>
            <div className="flex flex-wrap justify-center gap-6 text-xs font-bold text-slate-600 uppercase">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span> HDMI 2.0 IN
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span> TOUCH USB
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span> USB 3.0 HIGH SPEED
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span> TYPE-C FULL FUNCTION (65W CHARGING)
              </span>
            </div>
          </div>
        </section>

        {/* Section 2: Wireless Screen Sharing */}
        <section id="dongle-guide" className="py-16 border-t border-slate-200">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center text-2xl shadow-inner flex-shrink-0">
              <i className="fas fa-rss"></i>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                Wireless Screen Sharing Dongle
              </h2>
              <p className="text-slate-500 text-sm">
                Cara menghubungkan laptop ke HDe IFP secara nirkabel tanpa kabel HDMI.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border border-slate-200 rounded-[2.5rem] shadow-sm relative">
              <span className="absolute -top-3 -left-3 w-10 h-10 bg-purple-600 text-white rounded-xl flex items-center justify-center font-black shadow-md text-sm">
                1
              </span>
              <div className="mb-6 rounded-2xl overflow-hidden bg-slate-100 aspect-video flex items-center justify-center">
                <img
                  src="/img/Produk/ifp/panduan/pair.png"
                  alt="Pairing Dongle"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-base mb-2 text-purple-950">1. Plug & Pair</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Colokkan dongle ke port USB panel IFP. Tunggu hingga layar menampilkan notifikasi <strong className="text-purple-600">"Pairing Successful"</strong>.
              </p>
            </div>

            <div className="p-8 bg-white border border-slate-200 rounded-[2.5rem] shadow-sm relative">
              <span className="absolute -top-3 -left-3 w-10 h-10 bg-purple-600 text-white rounded-xl flex items-center justify-center font-black shadow-md text-sm">
                2
              </span>
              <div className="mb-6 rounded-2xl overflow-hidden bg-slate-100 aspect-video flex items-center justify-center">
                <img
                  src="/img/Produk/ifp/panduan/connect.png"
                  alt="Connect to Laptop"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-base mb-2 text-purple-950">2. Connect to Laptop</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Pindahkan dongle ke port USB laptop Anda. Tunggu lampu indikator LED dongle menyala stabil tanpa berkedip.
              </p>
            </div>

            <div className="p-8 bg-white border border-slate-200 rounded-[2.5rem] shadow-sm relative">
              <span className="absolute -top-3 -left-3 w-10 h-10 bg-purple-600 text-white rounded-xl flex items-center justify-center font-black shadow-md text-sm">
                3
              </span>
              <div className="mb-6 rounded-2xl overflow-hidden bg-slate-100 aspect-video flex items-center justify-center">
                <img
                  src="/img/Produk/ifp/panduan/one.png"
                  alt="One Click Share"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-base mb-2 text-purple-950">3. One-Click Share</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Tekan tombol tengah dongle. Layar laptop Anda langsung tampil di IFP secara instan dengan kendali sentuh dua arah (<strong className="text-purple-600">Touch Back</strong>).
              </p>
            </div>
          </div>
        </section>

        {/* Support Help Banner */}
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-14 text-white relative overflow-hidden mt-12">
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-black mb-2">Butuh bantuan teknis langsung?</h2>
              <p className="text-slate-400 text-xs md:text-sm">
                Tim teknisi HDe siap membantu panduan instalasi, kalibrasi, dan troubleshooting unit Anda.
              </p>
            </div>
            <a
              href="https://wa.me/628194010189"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold transition shadow-xl text-xs uppercase tracking-widest whitespace-nowrap active:scale-95 flex items-center gap-2"
            >
              <i className="fab fa-whatsapp text-lg"></i>
              <span>Hubungi Teknisi</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
