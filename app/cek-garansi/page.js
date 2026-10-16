'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CekGaransiPage() {
  const [snInput, setSnInput] = useState('');
  const [tglManual, setTglManual] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const databaseQC = {
    'HDE-QC-2026-001': {
      unit: 'Interactive Flat Panel 75 Inch 4K',
      tglBeli: '2025-01-15',
      inspector: 'Andri Gunawan',
      statusQC: 'PASSED (Excellent)',
      noKontrak: 'KTR/HDE/001/2025',
    },
    'HDE-QC-2026-002': {
      unit: 'HDe LED Videotron GEN-Z400 P4 Outdoor',
      tglBeli: '2025-03-10',
      inspector: 'Budi Santoso',
      statusQC: 'PASSED (Certified)',
      noKontrak: 'KTR/HDE/002/2025',
    },
    'HDE-QC-2026-003': {
      unit: 'HDe Meeting Recording System MRS-01',
      tglBeli: '2024-11-20',
      inspector: 'Rahmat Hidayat',
      statusQC: 'PASSED (Certified)',
      noKontrak: 'KTR/HDE/003/2024',
    },
  };

  const handleValidation = (e) => {
    e.preventDefault();
    const sn = snInput.trim().toUpperCase();

    if (!sn && !tglManual) {
      setErrorMsg('Harap masukkan Serial Number atau Tanggal Serah Terima!');
      return;
    }

    setErrorMsg('');
    setLoading(true);
    setResult(null);

    setTimeout(() => {
      setLoading(false);

      let finalTglBeli, finalUnit, finalInspector, finalQC, finalKontrak, labelTipe;

      if (databaseQC[sn]) {
        const data = databaseQC[sn];
        finalTglBeli = new Date(data.tglBeli);
        finalUnit = data.unit;
        finalInspector = data.inspector;
        finalQC = data.statusQC;
        finalKontrak = data.noKontrak;
        labelTipe = 'Verified QC Data';
      } else if (tglManual) {
        finalTglBeli = new Date(tglManual);
        finalUnit = 'Hardware Unit (Estimasi Faktur)';
        finalInspector = 'System Auto-Check';
        finalQC = 'Standard Verification';
        finalKontrak = 'Berdasarkan Tanggal Serah Terima';
        labelTipe = 'Estimation Data';
      } else {
        setErrorMsg('Serial Number tidak ditemukan dalam database HDe Technology!');
        return;
      }

      const tglExp = new Date(finalTglBeli);
      tglExp.setFullYear(tglExp.getFullYear() + 2);
      const hariIni = new Date();
      const sisaHari = Math.ceil((tglExp - hariIni) / (1000 * 60 * 60 * 24));

      setResult({
        valID: 'HDE-VLD-' + Math.floor(1000 + Math.random() * 9000),
        unit: finalUnit,
        noKontrak: finalKontrak,
        inspector: finalInspector,
        statusQC: finalQC,
        labelTipe,
        tglExpText: tglExp.toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
        sisaHari,
        isExpired: sisaHari <= 0,
      });
    }, 1000);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-200 p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl shadow-sm">
              <i className="fas fa-certificate"></i>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Cek Lisensi & Garansi Unit
            </h1>
            <p className="text-slate-500 text-xs md:text-sm mt-2">
              Validasi Serial Number resmi untuk melihat data QC, masa garansi aktif, dan rekam jejak instalasi.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleValidation} className="space-y-5">
            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">
                Serial Number / No. Kontrak
              </label>
              <div className="relative">
                <i className="fas fa-barcode absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
                <input
                  type="text"
                  value={snInput}
                  onChange={(e) => setSnInput(e.target.value)}
                  placeholder="Contoh: HDE-QC-2026-001"
                  className="w-full p-4 pl-12 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition uppercase font-mono text-sm text-slate-900"
                />
              </div>
            </div>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-200"></span>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase">
                <span className="bg-white px-3 text-slate-400 font-bold">Atau Gunakan Tanggal</span>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">
                Tanggal Serah Terima (Estimasi)
              </label>
              <input
                type="date"
                value={tglManual}
                onChange={(e) => setTglManual(e.target.value)}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition text-sm text-slate-700"
              />
            </div>

            {errorMsg && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-2xl text-xs text-red-600 font-medium flex items-center gap-2">
                <i className="fas fa-exclamation-circle text-sm"></i>
                <span>{errorMsg}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-blue-500/20 uppercase tracking-widest text-xs flex items-center justify-center gap-2 active:scale-95 disabled:opacity-70"
            >
              {loading ? (
                <>
                  <i className="fas fa-circle-notch animate-spin"></i>
                  <span>Memvalidasi Data...</span>
                </>
              ) : (
                <>
                  <i className="fas fa-shield-check"></i>
                  <span>Validasi Lisensi Resmi</span>
                </>
              )}
            </button>
          </form>

          {/* Validation Result Box */}
          {result && (
            <div id="hasilValidasi" className="mt-10 space-y-6 pt-6 border-t border-slate-200">
              <div className="flex justify-between items-center">
                <span
                  className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                    result.isExpired
                      ? 'bg-red-100 text-red-700'
                      : 'bg-emerald-100 text-emerald-700'
                  }`}
                >
                  {result.isExpired ? 'Garansi Expired' : 'Garansi Aktif'}
                </span>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {result.labelTipe}
                  </p>
                  <p className="text-[10px] font-mono text-slate-500 font-bold">ID: {result.valID}</p>
                </div>
              </div>

              <div className="text-center bg-slate-50 rounded-[2rem] p-8 border border-slate-200 relative overflow-hidden">
                <h2
                  className={`text-5xl font-black mb-2 tracking-tight ${
                    result.isExpired ? 'text-red-600' : 'text-emerald-600'
                  }`}
                >
                  {result.isExpired ? 'EXPIRED' : `${result.sisaHari} Hari`}
                </h2>
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
                  Masa Aktif Hingga: {result.tglExpText}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50/60 p-4 rounded-2xl border border-blue-100">
                  <p className="text-[9px] text-blue-500 font-bold uppercase tracking-widest mb-1">Status QC</p>
                  <p className="text-xs font-bold text-blue-900">{result.statusQC}</p>
                </div>
                <div className="bg-blue-50/60 p-4 rounded-2xl border border-blue-100">
                  <p className="text-[9px] text-blue-500 font-bold uppercase tracking-widest mb-1">Inspector</p>
                  <p className="text-xs font-bold text-blue-900">{result.inspector}</p>
                </div>
              </div>

              <div className="bg-slate-900 text-white p-6 rounded-3xl">
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-1">Informasi Unit</p>
                <h4 className="font-bold text-sm mb-1 text-white">{result.unit}</h4>
                <p className="text-[11px] text-blue-400 font-mono">{result.noKontrak}</p>
              </div>

              <button
                type="button"
                onClick={() => window.print()}
                className="w-full border-2 border-dashed border-slate-200 hover:border-slate-300 py-3.5 rounded-2xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition flex items-center justify-center gap-2"
              >
                <i className="fas fa-print"></i>
                <span>Cetak Laporan Resmi (PDF / Print)</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
