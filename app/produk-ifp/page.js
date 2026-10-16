'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProdukIFP() {
  const [size, setSize] = useState(75);
  const [ram, setRam] = useState('8-128');
  const [ops, setOps] = useState('i7');
  const [addons, setAddons] = useState({ standing: false, dongle: false });
  const [modalType, setModalType] = useState(null); // 'stylus' | 'remote' | 'wallmount' | 'tkdn' | null

  const productData = {
    65: { code: 'IWB65', tkdn: false, tkdnVal: 'Non-TKDN' },
    75: { code: 'IWB75', tkdn: true, tkdnVal: 'TKDN+BMP 43.50%' },
    86: { code: 'IWB86', tkdn: true, tkdnVal: 'TKDN+BMP 43.50%' },
    98: { code: 'IWB98', tkdn: true, tkdnVal: 'TKDN+BMP 43.50%' },
    110: { code: 'IWB110', tkdn: true, tkdnVal: 'TKDN+BMP 43.50%' },
  };

  const currentProduct = productData[size];
  const ramWindows = ram === '4-32' ? '8GB / 256GB' : '16GB / 512GB';
  const modelCode = `HDE-${currentProduct.code}${ops !== 'none' ? '-OPS' : ''}-${ram}-SB`;

  let addonText = '';
  if (addons.standing) addonText += '\n- Termasuk Standing Mount Mobile';
  if (addons.dongle) addonText += '\n- Termasuk Wireless Dongle';

  const waMessage = encodeURIComponent(
    `Halo HDe Technology, saya ingin bertanya tentang:\n\n` +
      `Model: ${modelCode}\n` +
      `Ukuran Layar: ${size} Inch\n` +
      `RAM Android 13: ${ram} GB\n` +
      `RAM Windows 11: ${ramWindows}\n` +
      `Modul OPS: ${ops.toUpperCase()}\n` +
      `Status TKDN: ${currentProduct.tkdnVal}` +
      `${addonText}\n\n` +
      `Mohon informasi harga resmi dan ketersediaan unit. Terima kasih.`
  );

  const accessoryDetails = {
    stylus: {
      title: 'Smart Stylus HDe',
      icon: 'fa-pen-nib',
      color: 'blue',
      img: '/img/aksesoris/1.jpg',
      desc: '1. Passive EMR Technology (Tanpa baterai, siap pakai setiap saat).\n2. Mendukung hingga 20 titik sentuh simultan dengan respon instan < 5ms.\n3. Dilengkapi sistem magnetik yang melekat rapi pada sisi bezel panel.',
    },
    remote: {
      title: 'Remote Control Pintar',
      icon: 'fa-tower-broadcast',
      color: 'amber',
      img: '/img/aksesoris/remote.jpg',
      desc: '1. Akses navigasi instan ke Home, Source input, dan Freeze display layar.\n2. Built-in laser pointer untuk memandu presentasi di ruang rapat besar.\n3. Kontrol volume, shutdown, dan switch OS dengan satu sentuhan.',
    },
    wallmount: {
      title: 'Heavy-Duty Wallmount Kit',
      icon: 'fa-border-all',
      color: 'emerald',
      img: '/img/aksesoris/brack.png',
      desc: '1. Bracket baja cold-rolled steel dengan kapasitas beban hingga 150kg.\n2. Standar VESA compliant kompatibel dengan ukuran 65" hingga 110".\n3. Dilengkapi mekanisme safety lock anti-jatuh saat digunakan.',
    },
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 md:py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Breadcrumb Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 uppercase tracking-wider mb-2">
              <Link href="/" className="hover:text-blue-600 transition">Beranda</Link>
              <span>/</span>
              <span className="text-blue-600 font-bold">Interactive Flat Panel</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
              HDe Interactive <span className="text-blue-600">Flat Panel (IFP)</span>
            </h1>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-600 hover:border-blue-500 hover:text-blue-600 transition shadow-sm"
          >
            <i className="fas fa-arrow-left"></i>
            <span>Kembali ke Beranda</span>
          </Link>
        </div>

        {/* Main Grid: Visuals & Configurator */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Visual Showcase & Specs (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Main Product Showcase Box */}
            <div className="relative w-full aspect-video rounded-[3rem] bg-white border border-slate-200/80 shadow-xl overflow-hidden flex items-center justify-center p-8 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 via-transparent to-transparent pointer-events-none"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/Produk/ifp/ifpp1.png"
                alt="HDe Interactive Flat Panel"
                className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)]"
              />

              <div className="absolute top-6 left-6 flex items-center gap-2">
                <span className="bg-slate-900/90 backdrop-blur-md text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow">
                  {size} Inch 4K Display
                </span>
                {currentProduct.tkdn && (
                  <span className="bg-emerald-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow flex items-center gap-1.5">
                    <i className="fas fa-certificate text-[9px]"></i> TKDN 43.50%
                  </span>
                )}
              </div>
            </div>

            {/* Kelengkapan Unit Accessories Clickable Pills */}
            <div className="bg-white p-6 rounded-[2.5rem] border border-slate-200/80 shadow-sm">
              <span className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
                Kelengkapan Unit Bawaan (Klik Untuk Melihat Detail)
              </span>
              <div className="grid grid-cols-3 gap-4">
                <button
                  type="button"
                  onClick={() => setModalType('stylus')}
                  className="p-4 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-300 transition-all text-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mx-auto mb-2 shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
                    <i className="fas fa-pen-nib text-lg"></i>
                  </div>
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-tight block">Smart Stylus</span>
                  <span className="text-[10px] text-slate-400 font-medium">Passive EMR</span>
                </button>

                <button
                  type="button"
                  onClick={() => setModalType('remote')}
                  className="p-4 rounded-2xl bg-slate-50 hover:bg-amber-50 border border-slate-100 hover:border-amber-300 transition-all text-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mx-auto mb-2 shadow-sm text-amber-600 group-hover:scale-110 transition-transform">
                    <i className="fas fa-tower-broadcast text-lg"></i>
                  </div>
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-tight block">Remote Control</span>
                  <span className="text-[10px] text-slate-400 font-medium">Quick Freeze</span>
                </button>

                <button
                  type="button"
                  onClick={() => setModalType('wallmount')}
                  className="p-4 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-100 hover:border-emerald-300 transition-all text-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mx-auto mb-2 shadow-sm text-emerald-600 group-hover:scale-110 transition-transform">
                    <i className="fas fa-border-all text-lg"></i>
                  </div>
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-tight block">Wallmount Kit</span>
                  <span className="text-[10px] text-slate-400 font-medium">Baja VESA 150kg</span>
                </button>
              </div>
            </div>

            {/* Core Specs Highlights */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200/80 shadow-sm">
              <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                Keunggulan Spesifikasi Seri IFP
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <i className="fas fa-check-circle text-blue-600 text-sm"></i>
                  <span>4K UHD Anti-Glare 3.5mm Tempered Glass</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <i className="fas fa-check-circle text-blue-600 text-sm"></i>
                  <span>Zero-Fit Lamination Writing System</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <i className="fas fa-check-circle text-blue-600 text-sm"></i>
                  <span>40-Point Multi Infrared Touch</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <i className="fas fa-check-circle text-blue-600 text-sm"></i>
                  <span>Dual OS: Android 13 + Windows 11</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <i className="fas fa-check-circle text-blue-600 text-sm"></i>
                  <span>Smart 4K Camera 48M & 8 Array Mic</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <i className="fas fa-check-circle text-blue-600 text-sm"></i>
                  <span>Wireless ScreenShare (Laptop, Tablet, HP)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Configurator Box (5 cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-10 border border-blue-100">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block">
                    Smart Configurator
                  </span>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">HDe IFP Series</h2>
                </div>
                <div className="text-right">
                  <span className="inline-block text-[10px] font-black text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 uppercase">
                    {currentProduct.tkdnVal}
                  </span>
                  <span className="text-[10px] text-slate-400 block font-mono font-bold mt-1">
                    {modelCode}
                  </span>
                </div>
              </div>

              {/* 1. Size Selection */}
              <div className="mb-6">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
                  1. Pilih Ukuran Layar (Diagonal)
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {[65, 75, 86, 98, 110].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSize(s)}
                      className={`py-3 rounded-2xl text-xs font-black transition-all border ${
                        size === s
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {s}&quot;
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Dual-OS Memory Configuration */}
              <div className="mb-6">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
                  2. Konfigurasi Memori (Dual OS)
                </label>
                <div className="flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => setRam('4-32')}
                    className={`p-4 rounded-2xl border text-left transition-all flex justify-between items-center ${
                      ram === '4-32'
                        ? 'border-blue-600 bg-blue-50/50 shadow-sm'
                        : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-4 divide-x divide-slate-200">
                      <div>
                        <span className="text-[9px] font-black text-blue-600 uppercase block">Android 13</span>
                        <span className="text-xs font-bold text-slate-800">4GB / 32GB</span>
                      </div>
                      <div className="pl-4">
                        <span className="text-[9px] font-black text-slate-500 uppercase block">Windows 11</span>
                        <span className="text-xs font-bold text-slate-800">8GB / 256GB</span>
                      </div>
                    </div>
                    <i className={`fas fa-check-circle text-blue-600 ${ram === '4-32' ? 'opacity-100' : 'opacity-0'}`}></i>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRam('8-128')}
                    className={`p-4 rounded-2xl border text-left transition-all flex justify-between items-center ${
                      ram === '8-128'
                        ? 'border-blue-600 bg-blue-50/50 shadow-sm'
                        : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-4 divide-x divide-slate-200">
                      <div>
                        <span className="text-[9px] font-black text-blue-600 uppercase block">Android 13</span>
                        <span className="text-xs font-bold text-slate-800">8GB / 128GB</span>
                      </div>
                      <div className="pl-4">
                        <span className="text-[9px] font-black text-slate-500 uppercase block">Windows 11</span>
                        <span className="text-xs font-bold text-slate-800">16GB / 512GB</span>
                      </div>
                    </div>
                    <i className={`fas fa-check-circle text-blue-600 ${ram === '8-128' ? 'opacity-100' : 'opacity-0'}`}></i>
                  </button>
                </div>
              </div>

              {/* 3. OPS PC Windows Processor */}
              <div className="mb-6">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
                  3. Modul OPS PC Windows (Processor)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'none', label: 'Tanpa OPS' },
                    { id: 'i3', label: 'OPS Core i3' },
                    { id: 'i5', label: 'OPS Core i5' },
                    { id: 'i7', label: 'OPS Core i7' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setOps(p.id)}
                      className={`py-3 px-2 rounded-2xl text-[11px] font-bold transition-all border ${
                        ops === p.id
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Optional Addons */}
              <div className="mb-6">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
                  4. Tambahan Aksesoris Opsional
                </label>
                <div className="space-y-2">
                  <div
                    onClick={() => setAddons({ ...addons, standing: !addons.standing })}
                    className={`p-3.5 rounded-2xl border flex items-center justify-between cursor-pointer transition ${
                      addons.standing ? 'border-blue-600 bg-blue-50/40' : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={addons.standing}
                        readOnly
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <span className="text-xs font-semibold text-slate-800">Standing Mount Mobile (Beban 300kg)</span>
                    </div>
                    <span className="text-[10px] font-bold text-blue-600 uppercase">Optional</span>
                  </div>

                  <div
                    onClick={() => setAddons({ ...addons, dongle: !addons.dongle })}
                    className={`p-3.5 rounded-2xl border flex items-center justify-between cursor-pointer transition ${
                      addons.dongle ? 'border-blue-600 bg-blue-50/40' : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={addons.dongle}
                        readOnly
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <span className="text-xs font-semibold text-slate-800">Wireless Screen Dongle (One-Click Share)</span>
                    </div>
                    <span className="text-[10px] font-bold text-blue-600 uppercase">Optional</span>
                  </div>
                </div>
              </div>

              {/* Ready Stock & Action Button */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Status: Ready Stock</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setModalType('tkdn')}
                    className="text-[11px] font-bold text-blue-600 hover:underline flex items-center gap-1"
                  >
                    <i className="fas fa-file-pdf"></i>
                    <span>Lihat Sertifikat TKDN</span>
                  </button>
                </div>

                <a
                  href={`https://wa.me/628194010189?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3 active:scale-98"
                >
                  <i className="fab fa-whatsapp text-lg text-emerald-300"></i>
                  <span>Dapatkan Penawaran Resmi</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== MODAL PREVIEW ===================== */}
      {modalType && (
        <div className="fixed inset-0 z-[120] bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-[2.5rem] p-6 md:p-8 max-w-lg w-full relative shadow-2xl animate-fade-in border border-slate-200">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition"
              aria-label="Tutup Modal"
            >
              <i className="fas fa-times text-sm"></i>
            </button>

            {modalType === 'tkdn' ? (
              <div>
                <div className="mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 block">
                    Dokumen Negara Resmi
                  </span>
                  <h3 className="text-xl font-black text-slate-900">Sertifikat TKDN & BMP Resmi</h3>
                  <p className="text-xs text-slate-500">Kementerian Perindustrian Republik Indonesia</p>
                </div>

                <div className="max-h-[60vh] overflow-y-auto rounded-2xl border border-slate-200 p-2 bg-slate-50 mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/sertifikat/ifphde.png"
                    alt="Sertifikat TKDN HDe IFP"
                    className="w-full h-auto rounded-xl shadow-sm"
                  />
                </div>

                <div className="flex gap-3">
                  <a
                    href="/img/sertifikat/ifphde.png"
                    download="Sertifikat_TKDN_HDe_IFP.png"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition shadow-lg shadow-blue-500/20"
                  >
                    <i className="fas fa-download mr-2"></i> Unduh File
                  </a>
                  <button
                    onClick={() => setModalType(null)}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <div className="h-48 rounded-2xl overflow-hidden bg-slate-100 mb-6 flex items-center justify-center">
                  <img
                    src={accessoryDetails[modalType].img}
                    alt={accessoryDetails[modalType].title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg`}
                  >
                    <i className={`fas ${accessoryDetails[modalType].icon}`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900">
                      {accessoryDetails[modalType].title}
                    </h3>
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                      Included In Box Standard
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line mb-6 border-l-2 border-blue-500 pl-4 bg-slate-50/50 py-2 rounded-r-xl">
                  {accessoryDetails[modalType].desc}
                </p>

                <button
                  onClick={() => setModalType(null)}
                  className="w-full bg-slate-900 hover:bg-blue-600 text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition"
                >
                  Tutup Informasi
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
