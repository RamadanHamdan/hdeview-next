'use client';

import Link from 'next/link';

export default function VideotronGuidePage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Header */}
      <header className="bg-slate-950 pt-36 pb-24 relative overflow-hidden text-center text-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="inline-block px-4 py-1.5 border border-amber-500/50 text-amber-400 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
            Support & Maintenance Hub
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Pusat Panduan <span className="text-amber-400">Videotron HDe</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
            Instruksi teknis pengoperasian LED Display lengkap, mulai dari anatomi hardware, manajemen NovaStar, SOP maintenance, hingga diagram troubleshooting cepat.
          </p>
        </div>
      </header>

      {/* Main Container */}
      <main className="container mx-auto px-6 py-20 max-w-6xl">
        {/* Navigation Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 -mt-24 relative z-20">
          <a
            href="#hardware"
            className="p-8 rounded-[2.5rem] bg-white border border-slate-200 shadow-xl hover:border-amber-500 hover:-translate-y-1 transition-all group block"
          >
            <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-amber-600 group-hover:text-white transition-all">
              <i className="fas fa-layer-group"></i>
            </div>
            <h3 className="text-xl font-black mb-2 uppercase tracking-tight">01. Anatomi Hardware</h3>
            <p className="text-slate-500 text-xs leading-relaxed mb-6">
              Mengenal modul LED, receiving card MRV, power supply unit (PSU), dan wiring signal flow.
            </p>
            <span className="text-amber-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
              Detail Komponen <i className="fas fa-arrow-right"></i>
            </span>
          </a>

          <a
            href="#control"
            className="p-8 rounded-[2.5rem] bg-white border border-slate-200 shadow-xl hover:border-blue-500 hover:-translate-y-1 transition-all group block"
          >
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <i className="fas fa-sliders-h"></i>
            </div>
            <h3 className="text-xl font-black mb-2 uppercase tracking-tight">02. Software NovaLCT</h3>
            <p className="text-slate-500 text-xs leading-relaxed mb-6">
              Panduan mapping posisi kabinet layar, konfigurasi resolusi, dan sinkronisasi Cloud ViPlex.
            </p>
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
              Langkah Setting <i className="fas fa-arrow-right"></i>
            </span>
          </a>

          <a
            href="#maintenance"
            className="p-8 rounded-[2.5rem] bg-white border border-slate-200 shadow-xl hover:border-emerald-500 hover:-translate-y-1 transition-all group block"
          >
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <i className="fas fa-tools"></i>
            </div>
            <h3 className="text-xl font-black mb-2 uppercase tracking-tight">03. SOP Perawatan</h3>
            <p className="text-slate-500 text-xs leading-relaxed mb-6">
              Prosedur Front-Service vakum magnetik, hot swapping modul, kalibrasi warna, dan jadwal inspeksi.
            </p>
            <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
              SOP Teknisi <i className="fas fa-arrow-right"></i>
            </span>
          </a>
        </div>

        {/* 01. Hardware Anatomy */}
        <section id="hardware" className="py-16 border-t border-slate-200">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-amber-600 font-bold text-xs uppercase tracking-[0.25em] mb-2 block">
                01. Hardware Anatomy
              </span>
              <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight text-slate-900 leading-tight">
                Sistem Distribusi Data & Daya
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Berbeda dengan monitor biasa, LED Videotron bekerja secara modular. Sinyal video dipecah dan didistribusikan secara sinkron ke modul kabinet melalui rangkaian komponen inti berikut:
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-amber-600 text-lg flex-shrink-0">
                    <i className="fas fa-microchip"></i>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm mb-1">Receiving Card (NovaStar MRV Series)</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Terpasang di setiap kabinet untuk menerima paket data dari Sending Box dan menerjemahkannya ke baris dioda LED.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-amber-600 text-lg flex-shrink-0">
                    <i className="fas fa-bolt"></i>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm mb-1">Power Supply Unit (PSU 5V)</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Mengonversi arus AC PLN ke DC 5V presisi tinggi. Dilengkapi proteksi over-voltage dan efisiensi termal tinggi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Signal Flow Diagram */}
            <div className="lg:w-1/2 w-full bg-slate-900 text-white p-8 rounded-[2.5rem] border border-white/10 shadow-2xl">
              <p className="text-center font-bold text-xs uppercase tracking-[0.25em] text-amber-400 mb-8">
                Signal Flow Diagram
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
                <div className="p-4 bg-white/10 rounded-2xl border border-white/10 w-full md:w-auto">
                  <i className="fas fa-laptop text-2xl text-blue-400 mb-2"></i>
                  <p className="text-xs font-bold uppercase">Video Source</p>
                  <p className="text-[10px] text-slate-400">HDMI / Media Player</p>
                </div>
                <i className="fas fa-arrow-down md:fas fa-arrow-right text-slate-500 text-lg"></i>
                <div className="p-4 bg-white/10 rounded-2xl border border-white/10 w-full md:w-auto">
                  <i className="fas fa-box text-2xl text-amber-400 mb-2"></i>
                  <p className="text-xs font-bold uppercase">Sending Box</p>
                  <p className="text-[10px] text-slate-400">NovaStar Controller</p>
                </div>
                <i className="fas fa-arrow-down md:fas fa-arrow-right text-slate-500 text-lg"></i>
                <div className="p-4 bg-white/10 rounded-2xl border border-white/10 w-full md:w-auto">
                  <i className="fas fa-th text-2xl text-emerald-400 mb-2"></i>
                  <p className="text-xs font-bold uppercase">LED Cabinets</p>
                  <p className="text-[10px] text-slate-400">Cat6 Daisy Chain</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02. Software Setup */}
        <section id="control" className="py-16 border-t border-slate-200">
          <div className="bg-slate-950 text-white rounded-[3rem] p-8 md:p-14 border border-white/10 relative overflow-hidden">
            <div className="relative z-10 max-w-4xl mx-auto">
              <span className="text-blue-400 font-bold text-xs uppercase tracking-[0.25em] mb-2 block">
                02. Software Guide
              </span>
              <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tight">
                Setup NovaLCT & Screen Connection Mapping
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs mb-4">
                    1
                  </span>
                  <h5 className="font-bold text-sm mb-2 uppercase">Advanced Login</h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Masuk ke menu User → Advanced Login di NovaLCT untuk membuka panel pengaturan teknis perangkat keras.
                  </p>
                </div>

                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs mb-4">
                    2
                  </span>
                  <h5 className="font-bold text-sm mb-2 uppercase">Screen Connection</h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Tentukan jumlah kolom x baris kabinet dan tarik garis urutan kabel data LAN (Daisy Chain topology).
                  </p>
                </div>

                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs mb-4">
                    3
                  </span>
                  <h5 className="font-bold text-sm mb-2 uppercase">Save to Hardware</h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Klik tombol "Save to HW" agar konfigurasi tersimpan permanen di memori flash card saat unit restart.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300">
                <i className="fas fa-info-circle mr-2"></i>
                Untuk pengelolaan konten jarak jauh via internet, gunakan aplikasi <strong>ViPlex Express / ViPlex Handy</strong> yang terhubung ke cloud server NovaStar.
              </div>
            </div>
          </div>
        </section>

        {/* 03. Maintenance SOP Table */}
        <section id="maintenance" className="py-16 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-emerald-600 font-bold text-xs uppercase tracking-[0.25em] mb-2 block">
              03. Maintenance SOP
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Jadwal Perawatan Berkala
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Jaga usia operasional hingga 100.000 jam dengan mengikuti SOP pemeliharaan standar HDe.
            </p>
          </div>

          <div className="overflow-x-auto shadow-xl rounded-3xl border border-slate-200 bg-white mb-12">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase text-slate-400">
                <tr>
                  <th className="p-6">Interval</th>
                  <th className="p-6">Komponen</th>
                  <th className="p-6">Tindakan Teknis</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="p-6">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] font-bold uppercase">
                      Mingguan
                    </span>
                  </td>
                  <td className="p-6 font-bold text-slate-900">Suhu & Software</td>
                  <td className="p-6 text-slate-600 text-xs leading-relaxed">
                    Monitor suhu operasional via NovaLCT (kisaran 30°C - 55°C). Bersihkan cache file player dan log sistem.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="p-6">
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-[10px] font-bold uppercase">
                      Bulanan
                    </span>
                  </td>
                  <td className="p-6 font-bold text-slate-900">Kabel & Konektor</td>
                  <td className="p-6 text-slate-600 text-xs leading-relaxed">
                    Inspeksi fisik kabel data Cat6 dan terminal power AC. Pastikan soket terkunci rapat dan tidak mengalami korosi.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="p-6">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-bold uppercase">
                      6 Bulanan
                    </span>
                  </td>
                  <td className="p-6 font-bold text-slate-900">Fisik & Kalibrasi</td>
                  <td className="p-6 text-slate-600 text-xs leading-relaxed">
                    Pembersihan debu internal dengan blower udara bertekanan rendah. Jalankan kalibrasi ulang warna untuk menjaga keseragaman visual.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 04. Troubleshooting Guide */}
        <section id="troubleshoot" className="py-16 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-amber-500 font-bold text-xs uppercase tracking-[0.25em] mb-2 block">
              Self-Diagnosis Tool
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Diagram Troubleshooting Cepat
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Lakukan diagnosis mandiri jika terjadi kendala pada tampilan sebelum menghubungi teknisi lapangan.
            </p>
          </div>

          <div className="bg-slate-950 text-white rounded-[3rem] p-8 md:p-12 border border-white/10 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
              <div className="p-6 bg-slate-800 rounded-3xl border-2 border-amber-500/50 text-center">
                <p className="text-[10px] font-bold uppercase text-amber-400 mb-2 tracking-widest">Masalah Utama</p>
                <h5 className="text-sm font-bold uppercase">Layar Mati Total</h5>
              </div>

              <div className="p-6 bg-slate-900 rounded-3xl border border-white/10 text-center">
                <p className="text-[10px] font-bold uppercase text-slate-400 mb-2">Cek 01: PSU</p>
                <h5 className="text-xs font-bold text-white mb-2">Lampu Indikator Power</h5>
                <div className="flex justify-center gap-2 text-[10px] font-bold">
                  <span className="text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">YA → Lanjut</span>
                  <span className="text-red-400 bg-red-400/10 px-2 py-0.5 rounded">TIDAK (MCB)</span>
                </div>
              </div>

              <div className="p-6 bg-slate-900 rounded-3xl border border-white/10 text-center">
                <p className="text-[10px] font-bold uppercase text-slate-400 mb-2">Cek 02: Signal</p>
                <h5 className="text-xs font-bold text-white mb-2">Lampu Data LAN Card</h5>
                <div className="flex justify-center gap-2 text-[10px] font-bold">
                  <span className="text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">YA (Cek PC)</span>
                  <span className="text-red-400 bg-red-400/10 px-2 py-0.5 rounded">TIDAK (LAN)</span>
                </div>
              </div>

              <div className="p-6 bg-emerald-500/10 rounded-3xl border-2 border-emerald-500/30 text-center">
                <p className="text-[10px] font-bold uppercase text-emerald-400 mb-2">Solusi Akhir</p>
                <h5 className="text-xs font-bold text-white mb-1">Software Re-Sync</h5>
                <p className="text-[10px] text-slate-400 leading-tight">
                  Buka NovaLCT → Screen Connection → Klik "Reload from HW".
                </p>
              </div>
            </div>

            <div className="mt-12 border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-xs text-slate-400 flex items-center gap-2">
                <i className="fas fa-headset text-amber-400"></i>
                <span>Masalah belum teratasi? Teknisi kami siap membantu via WhatsApp.</span>
              </div>
              <a
                href="https://wa.me/628194010189"
                target="_blank"
                rel="noreferrer"
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all"
              >
                Chat Technical Support
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
