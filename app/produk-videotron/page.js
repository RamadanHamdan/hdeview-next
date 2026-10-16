'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

export default function ProdukVideotronPage() {
  const [activeMode, setActiveMode] = useState('Indoor');
  const [dist, setDist] = useState(3);
  const [qtyW, setQtyW] = useState(4);
  const [qtyH, setQtyH] = useState(3);

  const spec = useMemo(() => {
    let base = {
      model: '',
      pitch: '',
      led: '',
      resW: 0,
      resH: 0,
      wattBase: 0,
      cabW: 0,
      cabH: 0,
      powerMode: '',
      weightBase: 0,
      ipRating: '',
      maint: '',
      inclusions: '',
      brightness: '',
      viewAngle: '',
    };

    if (activeMode === 'Indoor') {
      base.cabW = 0.64;
      base.cabH = 0.48;
      base.brightness = '≥ 450 nits';
      base.viewAngle = 'H 160º ; V 140º';
      base.ipRating = 'IP20';
      base.maint = 'Front Access';
      base.weightBase = 0;
      base.inclusions = 'Instalasi';

      if (dist <= 2.5) {
        return {
          ...base,
          model: 'GEN-Y12',
          pitch: '1.25 mm',
          resW: 512,
          resH: 384,
          wattBase: 500,
          powerMode: 'area',
        };
      } else if (dist <= 3.5) {
        return {
          ...base,
          model: 'GEN-Y15',
          pitch: '1.5 mm',
          resW: 416,
          resH: 312,
          wattBase: 500,
          powerMode: 'area',
        };
      } else if (dist <= 4.5) {
        return {
          ...base,
          model: 'GEN-Y18',
          pitch: '1.86 mm',
          resW: 344,
          resH: 258,
          wattBase: 470,
          powerMode: 'area',
        };
      } else if (dist <= 6) {
        return {
          ...base,
          model: 'GEN-Y25',
          pitch: '2.5 mm',
          resW: 256,
          resH: 192,
          wattBase: 385,
          powerMode: 'area',
        };
      } else {
        return {
          ...base,
          model: 'GEN-Y40',
          pitch: '4.0 mm',
          resW: 160,
          resH: 120,
          wattBase: 200,
          powerMode: 'unit',
        };
      }
    } else {
      // Outdoor
      base.cabW = 0.96;
      base.cabH = 0.96;
      base.brightness = '5000 nits';
      base.viewAngle = 'H 140º ; V 120º';
      base.ipRating = 'IP65 / IP54';
      base.maint = 'Rear Access';
      base.weightBase = 45;
      base.inclusions = 'Instalasi';

      if (dist <= 8) {
        return {
          ...base,
          model: 'GEN-Z400',
          pitch: '4 mm',
          led: 'SMD1921',
          resW: 240,
          resH: 240,
          wattBase: 1150,
          powerMode: 'area_roundup',
        };
      } else if (dist <= 12) {
        return {
          ...base,
          model: 'GEN-Z500',
          pitch: '5 mm',
          led: 'SMD1921',
          resW: 192,
          resH: 192,
          wattBase: 1150,
          powerMode: 'unit',
        };
      } else if (dist <= 20) {
        return {
          ...base,
          model: 'GEN-Z800',
          pitch: '8 mm',
          led: 'SMD3535',
          resW: 120,
          resH: 120,
          wattBase: 1000,
          powerMode: 'area',
        };
      } else {
        return {
          ...base,
          model: 'GEN-Z1000',
          pitch: '10 mm',
          led: 'SMD3535',
          resW: 96,
          resH: 96,
          wattBase: 1000,
          powerMode: 'unit',
        };
      }
    }
  }, [activeMode, dist]);

  const calculations = useMemo(() => {
    const totalCabinets = (qtyW || 0) * (qtyH || 0);
    const realWidth = (qtyW || 0) * spec.cabW;
    const realHeight = (qtyH || 0) * spec.cabH;
    const totalArea = realWidth * realHeight;
    const totalResW = (qtyW || 0) * spec.resW;
    const totalResH = (qtyH || 0) * spec.resH;
    const totalPixels = totalResW * totalResH;

    let totalPower = 0;
    if (spec.powerMode === 'unit') {
      totalPower = spec.wattBase * totalCabinets;
    } else if (spec.powerMode === 'area_roundup') {
      totalPower = Math.ceil((spec.wattBase * totalArea) / 1000) * 1000;
    } else {
      totalPower = spec.wattBase * totalArea;
    }

    const totalWeight =
      spec.weightBase > 0 ? `${Math.round(spec.weightBase * totalArea)} Kg` : '-';

    return {
      totalCabinets,
      realWidth: realWidth.toFixed(2),
      realHeight: realHeight.toFixed(2),
      totalArea: totalArea.toFixed(2),
      totalResW,
      totalResH,
      totalPixels: totalPixels.toLocaleString('id-ID'),
      totalPower: Math.round(totalPower).toLocaleString('id-ID'),
      totalWeight,
    };
  }, [qtyW, qtyH, spec]);

  const handleModeChange = (mode) => {
    setActiveMode(mode);
    if (mode === 'Indoor') {
      if (dist > 10) setDist(3);
    } else {
      if (dist < 4) setDist(8);
    }
  };

  const sendWhatsApp = () => {
    const phoneNumber = '628194010189';
    const message = `Halo Admin HDe LED, saya ingin konsultasi penawaran videotron:

*DETAIL KEBUTUHAN:*
- Lokasi: ${activeMode}
- Target Ukuran: ${qtyW} x ${qtyH} Meter

*REKOMENDASI SISTEM:*
- Model: *${spec.model}*
- Pixel Pitch: ${spec.pitch}
- Konfigurasi: ${qtyW} x ${qtyH} (${calculations.totalCabinets} Units)
- Ukuran Real: ${calculations.realWidth} x ${calculations.realHeight} m
- Resolusi: ${calculations.totalPixels} px (${calculations.totalResW} x ${calculations.totalResH} px)
- Listrik: ±${calculations.totalPower} Watt
- Termasuk: ${spec.inclusions}

Mohon bantuannya untuk informasi lebih lanjut. Terima kasih.`;

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="relative group">
            <div className="h-[320px] md:h-[460px] w-full rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl relative z-10 bg-slate-900">
              <img
                src="/img/Produk/Vid/vidd1.png"
                alt="Videotron LED HDe"
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600/90 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 shadow-xl hidden sm:block z-20">
              <span className="text-[10px] uppercase font-bold tracking-widest text-blue-200 block">Refresh Rate</span>
              <span className="text-2xl font-black text-white">≥ 3840 Hz</span>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 border border-blue-400 text-blue-400 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              <i className="fas fa-sparkles"></i> Visual Excellence
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              LED Videotron <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Indoor & Outdoor
              </span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed font-light">
              Hadirkan visual tanpa batas dengan modul LED presisi tinggi. Sempurna untuk periklanan digital,{' '}
              <strong className="text-white">Command Center</strong>, auditorium, hingga <strong className="text-white">Ballroom</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a
                href="#comparison"
                className="group relative px-8 py-4 bg-blue-600 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-blue-700 hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/30 flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                <i className="fas fa-calculator text-lg"></i>
                <span className="font-black uppercase tracking-widest text-xs">Smart Configurator</span>
                <i className="fas fa-arrow-down text-xs group-hover:translate-y-1 transition-transform"></i>
              </a>

              <Link
                href="/videotron-guide"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                <i className="fas fa-book-open"></i> Buka Panduan Teknis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Configurator & Calculator Section */}
      <section id="comparison" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.25em] mb-3 block">
              Selection Tool & Calculator
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight text-slate-900">
              Konfigurasi Videotron Anda
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              Sesuaikan lokasi, jarak pandang, dan target ukuran ruangan. Sistem akan menghitung jumlah kabinet, resolusi, luas, dan kebutuhan listrik secara otomatis.
            </p>
          </div>

          <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-xl p-6 md:p-12 border border-slate-200">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Controls */}
              <div className="space-y-8">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-3 uppercase tracking-wider">
                    1. Lokasi Pemasangan:
                  </label>
                  <div className="flex p-1.5 bg-slate-100 rounded-2xl w-full">
                    <button
                      type="button"
                      onClick={() => handleModeChange('Indoor')}
                      className={`flex-1 py-3.5 rounded-xl font-bold text-sm transition-all ${
                        activeMode === 'Indoor'
                          ? 'bg-white shadow-md text-blue-600 scale-[1.02]'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      <i className="fas fa-building mr-2"></i> Indoor
                    </button>
                    <button
                      type="button"
                      onClick={() => handleModeChange('Outdoor')}
                      className={`flex-1 py-3.5 rounded-xl font-bold text-sm transition-all ${
                        activeMode === 'Outdoor'
                          ? 'bg-white shadow-md text-blue-600 scale-[1.02]'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      <i className="fas fa-cloud-sun mr-2"></i> Outdoor
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      2. Jarak Pandang Audiens:
                    </label>
                    <span className="text-2xl font-black text-blue-600">
                      {dist} <span className="text-xs font-semibold text-slate-400 uppercase">Meter</span>
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max={activeMode === 'Indoor' ? '10' : '30'}
                    step="1"
                    value={dist}
                    onChange={(e) => setDist(parseInt(e.target.value))}
                    className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-2">
                    <span>1m (Dekat)</span>
                    <span>{activeMode === 'Indoor' ? '10m (Jauh)' : '30m (Sangat Jauh)'}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-3 uppercase tracking-wider">
                    3. Estimasi Ukuran Target (Meter):
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Lebar Target (m)</span>
                      <input
                        type="number"
                        min="1"
                        max="50"
                        value={qtyW}
                        onChange={(e) => setQtyW(Math.max(1, parseInt(e.target.value) || 0))}
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-slate-800 focus:ring-2 focus:ring-blue-500 outline-none transition"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Tinggi Target (m)</span>
                      <input
                        type="number"
                        min="1"
                        max="50"
                        value={qtyH}
                        onChange={(e) => setQtyH(Math.max(1, parseInt(e.target.value) || 0))}
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-slate-800 focus:ring-2 focus:ring-blue-500 outline-none transition"
                      />
                    </div>
                  </div>
                  <p className="mt-3 text-[11px] text-slate-400 italic">
                    *Sistem otomatis menyesuaikan kelipatan ukuran modul kabinet ({activeMode === 'Indoor' ? '640 x 480 mm' : '960 x 960 mm'}).
                  </p>
                </div>
              </div>

              {/* Dynamic Result Card */}
              <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white relative shadow-2xl shadow-blue-900/20 overflow-hidden border border-white/10">
                <div className="absolute top-6 right-6 bg-emerald-500 text-[9px] font-black px-3.5 py-1 rounded-full uppercase tracking-widest animate-bounce z-20 shadow-md">
                  TKDN 40%
                </div>

                <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-2 block text-center">
                  Rekomendasi Spesifikasi
                </span>
                <h3 className="text-3xl md:text-4xl font-black mb-6 text-center uppercase tracking-tight text-white">
                  {spec.model}
                </h3>

                <div className="grid grid-cols-2 gap-3 relative z-10 text-center">
                  <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-[9px] uppercase text-slate-400 mb-0.5">Pixel Pitch</p>
                    <p className="text-sm font-bold text-blue-400">{spec.pitch}</p>
                  </div>
                  <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-[9px] uppercase text-slate-400 mb-0.5">Refresh Rate</p>
                    <p className="text-sm font-bold text-white">3840 Hz</p>
                  </div>
                  <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-[9px] uppercase text-slate-400 mb-0.5">Total Weight</p>
                    <p className="text-sm font-bold text-white">{calculations.totalWeight}</p>
                  </div>
                  <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-[9px] uppercase text-slate-400 mb-0.5">IP Rating</p>
                    <p className="text-sm font-bold text-white">{spec.ipRating}</p>
                  </div>
                  <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-[9px] uppercase text-slate-400 mb-0.5">Max Brightness</p>
                    <p className="text-sm font-bold text-white">{spec.brightness}</p>
                  </div>
                  <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-[9px] uppercase text-slate-400 mb-0.5">Viewing Angle</p>
                    <p className="text-[11px] font-bold text-white">{spec.viewAngle}</p>
                  </div>

                  {/* Calculations Details */}
                  <div className="p-5 bg-blue-600/10 rounded-2xl border border-blue-500/20 col-span-2 space-y-3 mt-1 text-left">
                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                      <div>
                        <p className="text-[9px] uppercase text-slate-400">Cabinet Configuration</p>
                        <p className="text-xs font-bold text-white">{qtyW} x {qtyH} (W x H)</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[9px] uppercase text-slate-400">Total Cabinets</p>
                        <p className="text-xs font-bold text-blue-400">{calculations.totalCabinets} Units</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                      <div>
                        <p className="text-[9px] uppercase text-slate-400">Real Screen Size</p>
                        <p className="text-xs font-bold text-white">{calculations.realWidth} x {calculations.realHeight} m</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[9px] uppercase text-slate-400">Total Resolution</p>
                        <p className="text-[11px] font-bold text-white">
                          {calculations.totalResW} x {calculations.totalResH} px
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                      <div>
                        <p className="text-[9px] uppercase text-slate-400">Maintenance</p>
                        <p className="text-xs font-bold text-white">{spec.maint}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[9px] uppercase text-slate-400">Inclusions</p>
                        <p className="text-xs font-bold text-blue-400 italic">{spec.inclusions}</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-1">
                      <div>
                        <p className="text-[9px] uppercase text-slate-400">Total Luas Real</p>
                        <p className="text-sm font-black text-white">{calculations.totalArea} m²</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[9px] uppercase text-slate-400">Max Power Req.</p>
                        <p className="text-sm font-black text-emerald-400">± {calculations.totalPower} Watt</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 relative z-10">
                  <button
                    type="button"
                    onClick={sendWhatsApp}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 px-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-3 active:scale-95"
                  >
                    <i className="fab fa-whatsapp text-lg"></i>
                    <span>Dapatkan RAB Spesifik</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Guarantee Banner */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 border border-white/10 shadow-2xl relative z-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-5 w-full md:w-auto">
              <div className="w-14 h-14 bg-blue-600/20 text-blue-400 rounded-2xl flex-shrink-0 flex items-center justify-center border border-blue-500/30 shadow-inner">
                <i className="fas fa-tools text-xl"></i>
              </div>
              <div>
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] block mb-1">
                  Layanan Khusus
                </span>
                <span className="text-base font-black text-white uppercase flex items-center gap-3">
                  On-Site Service Seluruh Indonesia
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                </span>
              </div>
            </div>

            <div className="w-full md:w-auto flex justify-start md:justify-end">
              <span className="text-xs font-black text-emerald-400 bg-emerald-400/10 px-5 py-2.5 rounded-xl border border-emerald-400/20 tracking-wider">
                TKDN + BMP 40.25% Resmi Kemenperin
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Support & Guide Callout */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-900 to-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left">
                <span className="inline-block bg-blue-500/20 text-blue-300 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 border border-blue-500/30">
                  Support Center
                </span>
                <h2 className="text-3xl md:text-4xl font-black mb-3">Butuh Panduan Teknis?</h2>
                <p className="text-slate-300 max-w-md text-sm">
                  Pelajari cara maintenance mandiri, wiring kabinet, dan tutorial setting NovaLCT di pusat panduan kami.
                </p>
              </div>
              <Link
                href="/videotron-guide"
                className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all shadow-xl flex items-center gap-3 active:scale-95 text-xs uppercase tracking-widest"
              >
                <i className="fas fa-book-open text-blue-600"></i> Buka Panduan Teknis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
