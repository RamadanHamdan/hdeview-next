'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProdukAioPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: 'Standard View',
      desc: '23.8" IPS Display',
      img: '/img/Produk/aio/TDS_AIO_K5-F_page0_imageoo - Edited.png',
    },
    {
      title: 'Ultra Slim Design',
      desc: 'Mg-Al Alloy Base',
      img: '/img/Produk/aio/TDS_AIO_K5-F_page0_imageooo - Edited.png',
    },
    {
      title: 'Clean Aesthetic',
      desc: 'White ABS Shell',
      img: '/img/Produk/aio/TDS_AIO_K5-F_page0_imageo - Edited.png',
    },
    {
      title: 'Full Connectivity',
      desc: 'USB 3.0 | HDMI | VGA | LAN | Audio Out/Mic In',
      img: '/img/Produk/aio/ports.png',
    },
  ];

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 z-0"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-[0.2em] uppercase mb-6">
                HDe AIO Professional
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-6 uppercase tracking-tight">
                Simplicity <br />
                <span className="text-blue-600">is the new Power</span>
              </h1>
              <p className="text-base md:text-lg text-slate-600 mb-8 max-w-lg leading-relaxed font-light">
                HDe PC All-in-One hadir dengan desain elegan berwarna putih dan performa Intel Core i5 generasi terbaru untuk mendukung produktivitas instansi Anda tanpa memakan ruang meja.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#specs"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-blue-600/20 active:scale-95"
                >
                  Cek Spesifikasi
                </a>
                <a
                  href="https://wa.me/628194010189?text=Halo%20Admin%20HDe%2C%20saya%20tertarik%20dengan%20produk%20PC%20AIO%20HDe.%20Bisa%20minta%20info%20lebih%20lanjut%3F"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm"
                >
                  <i className="fab fa-whatsapp text-emerald-500 text-lg"></i>
                  <span>E-Katalog Ready</span>
                </a>
              </div>
            </div>

            <div className="relative flex justify-center">
              <img
                src="/img/Produk/aio/aio3.png"
                className="w-full max-w-lg h-auto drop-shadow-2xl z-10 relative"
                alt="HDe AIO K5-F White"
              />
              <div className="absolute top-4 right-4 bg-white p-4 shadow-xl rounded-2xl border border-slate-100 z-20 animate-bounce">
                <span className="block text-2xl font-black text-blue-600">23.8"</span>
                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">IPS Full HD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Specs Cards */}
      <section id="specs" className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
              <i className="fas fa-microchip text-3xl text-blue-600 mb-6"></i>
              <h4 className="font-bold text-slate-900 mb-2">Intel Core i5</h4>
              <p className="text-xs text-slate-500 leading-relaxed italic">
                i5-13500H High Performance Processor untuk multitasking stabil.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
              <i className="fas fa-memory text-3xl text-blue-600 mb-6"></i>
              <h4 className="font-bold text-slate-900 mb-2">8GB / 512GB SSD</h4>
              <p className="text-xs text-slate-500 leading-relaxed italic">
                Multitasking cepat dengan penyimpanan SSD M.2 NVMe ultra cepat.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
              <i className="fab fa-windows text-3xl text-blue-600 mb-6"></i>
              <h4 className="font-bold text-slate-900 mb-2">Windows 11</h4>
              <p className="text-xs text-slate-500 leading-relaxed italic">
                Sistem operasi modern terbaru siap pakai untuk instansi kerja.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
              <i className="fas fa-wifi text-3xl text-blue-600 mb-6"></i>
              <h4 className="font-bold text-slate-900 mb-2">WiFi 5.0 & BT</h4>
              <p className="text-xs text-slate-500 leading-relaxed italic">
                Koneksi internet nirkabel kencang, stabil, dan bebas kabel semrawut.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Gallery Slider */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Galeri Desain Eksklusif</h2>
            <p className="text-slate-500 text-sm mt-2">Ditinjau dari segala sisi untuk estetika ruang kerja modern.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Main Slide Viewer */}
            <div className="bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-200 shadow-lg flex flex-col items-center">
              <div className="w-full h-72 md:h-96 flex items-center justify-center mb-8">
                <img
                  src={slides[activeSlide].img}
                  alt={slides[activeSlide].title}
                  className="max-h-full max-w-full object-contain drop-shadow-xl transition-all duration-500"
                />
              </div>
              <div className="text-center">
                <span className="block text-slate-900 font-extrabold text-xl tracking-tight">
                  {slides[activeSlide].title}
                </span>
                <span className="text-xs text-blue-600 uppercase tracking-widest font-bold mt-1 block">
                  {slides[activeSlide].desc}
                </span>
              </div>
            </div>

            {/* Thumbnail Selectors */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {slides.map((s, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveSlide(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    activeSlide === idx
                      ? 'border-blue-600 bg-blue-50/50 shadow-md ring-2 ring-blue-500/20'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <p className="text-xs font-bold text-slate-900 truncate">{s.title}</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider truncate mt-0.5">{s.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Data Sheet Table */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Lembar Data Teknis</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-6 text-xs font-bold uppercase tracking-widest">Kategori</th>
                  <th className="p-6 text-xs font-bold uppercase tracking-widest">Spesifikasi</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-slate-100">
                <tr className="hover:bg-blue-50/50 transition">
                  <td className="p-6 font-bold text-slate-900">Model</td>
                  <td className="p-6 text-slate-600 font-medium">HDe AIO (All-in-One Desktop PC K5-F)</td>
                </tr>
                <tr className="hover:bg-blue-50/50 transition">
                  <td className="p-6 font-bold text-slate-900">Layar</td>
                  <td className="p-6 text-slate-600 font-medium">23.8" IPS Full HD (1920x1080) Wide Viewing Angle</td>
                </tr>
                <tr className="hover:bg-blue-50/50 transition">
                  <td className="p-6 font-bold text-slate-900">Komponen Utama</td>
                  <td className="p-6 text-slate-600 font-medium">Intel Core i5-13500H | RAM 8GB DDR4 | SSD 512GB M.2 NVMe</td>
                </tr>
                <tr className="hover:bg-blue-50/50 transition">
                  <td className="p-6 font-bold text-slate-900">Audio & Visual</td>
                  <td className="p-6 text-slate-600 font-medium">Stereo Speakers Built-in | Camera 0.3 MP (Retrofit)</td>
                </tr>
                <tr className="hover:bg-blue-50/50 transition">
                  <td className="p-6 font-bold text-slate-900">Konektivitas I/O</td>
                  <td className="p-6 text-slate-600 font-medium">
                    1x HDMI, 1x VGA(COM), 1x RJ45 Gigabit LAN, 6x USB 3.0/2.0, 3.5mm Audio Out & Mic In
                  </td>
                </tr>
                <tr className="hover:bg-blue-50/50 transition">
                  <td className="p-6 font-bold text-slate-900">Build Quality</td>
                  <td className="p-6 text-slate-600 font-medium">White ABS Engineering Plastic Shell with Mg-Al Alloy Base</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
