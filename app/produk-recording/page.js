'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ProdukRecordingPage() {
  const [scenario, setScenario] = useState('presentation') // 'presentation' | 'recording' | 'off'

  const sendMRSWA = () => {
    const msg = `Halo HDe Technology,

Saya tertarik dengan produk *HDe Meeting Recording* (TKDN 40%) yang terdaftar di E-Katalog.

*Informasi Detail Produk:*
• Unit: HDe Meeting Recording System
• Spesifikasi: 1 Video Station, 2 Auto-Tracking Camera, 1 Ceiling Mic, 1 Recording Server, 1 Array Mic, 1 Audio Processor.
• Legalitas: TKDN 40%
• Garansi: 2 Tahun

Mohon dibantu untuk informasi ketersediaan stok dan pengaturan jadwal survei lokasi instalasi. Terima kasih.`

    window.open(
      `https://wa.me/628194010189?text=${encodeURIComponent(msg)}`,
      '_blank',
    )
  }

  return (
    <div className='bg-white text-gray-800 min-h-screen'>
      {/* Hero Section */}
      <section
        id='mrs-intro'
        className='py-24 md:py-32 bg-white overflow-hidden relative'
      >
        <div className='container mx-auto px-6'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <div>
              <span className='inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6'>
                Solusi Rapat Modern
              </span>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900 tracking-tight'>
                Dokumentasi Rapat Otomatis, <br />
                <span className='text-blue-600'>Tanpa Operator Kamera.</span>
              </h1>
              <p className='text-slate-600 text-base md:text-lg mb-8 leading-relaxed'>
                Sistem ini dirancang khusus untuk instansi yang ingin
                mendokumentasikan rapat dengan profesional namun tetap simpel.
                Kamera akan{' '}
                <strong className='text-slate-900 font-bold'>
                  mencari dan mengikuti pembicara secara otomatis
                </strong>
                .
              </p>

              <div className='space-y-4 mb-8'>
                <div className='flex gap-4 items-center p-4 bg-slate-50 rounded-2xl border border-slate-100'>
                  <i className='fas fa-check-circle text-emerald-500 text-lg'></i>
                  <span className='text-sm font-medium text-slate-700'>
                    Hasil rekaman langsung tersimpan di harddisk internal sistem
                    format MP4.
                  </span>
                </div>
                <div className='flex gap-4 items-center p-4 bg-slate-50 rounded-2xl border border-slate-100'>
                  <i className='fas fa-check-circle text-emerald-500 text-lg'></i>
                  <span className='text-sm font-medium text-slate-700'>
                    Audio jernih broadcast grade, suara peserta di ujung meja
                    tetap jelas terdengar.
                  </span>
                </div>
                <div className='flex gap-4 items-center p-4 bg-slate-50 rounded-2xl border border-slate-100'>
                  <i className='fas fa-check-circle text-emerald-500 text-lg'></i>
                  <span className='text-sm font-medium text-slate-700'>
                    Satu tombol operasional cerdas (Start / Stop Recording).
                  </span>
                </div>
              </div>

              <div className='flex flex-wrap gap-4'>
                <button
                  type='button'
                  onClick={sendMRSWA}
                  className='px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-blue-600/30 flex items-center gap-3 active:scale-95'
                >
                  <i className='fab fa-whatsapp text-lg'></i>
                  <span>Konsultasi Penawaran MRS</span>
                </button>
                <a
                  href='#mrs-simulator'
                  className='px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all flex items-center gap-2'
                >
                  <i className='fas fa-play text-blue-600'></i> Coba Simulator
                </a>
              </div>
            </div>

            <div className='relative'>
              <div className='rounded-[3rem] overflow-hidden bg-slate-950 shadow-2xl border-8 border-slate-100 aspect-video relative group'>
                <img
                  src='/img/Produk/Mrs/mrsroom.png'
                  alt='Ruang Rapat MRS HDe'
                  className='w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700'
                />
                <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
                  <div className='w-24 h-24 border-2 border-blue-400 rounded-full animate-ping opacity-30'></div>
                  <div className='absolute border-2 border-blue-400/80 w-48 h-32 rounded-xl flex items-start justify-end p-2 bg-blue-500/10'>
                    <span className='text-[9px] text-white font-mono font-bold bg-blue-600 px-2 py-0.5 rounded shadow'>
                      AUTO TRACKING ON
                    </span>
                  </div>
                </div>
              </div>

              <div className='absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden md:block max-w-[220px]'>
                <div className='w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-3'>
                  <i className='fas fa-robot text-lg'></i>
                </div>
                <p className='text-xs font-bold text-slate-900 mb-1 tracking-tight'>
                  Teknologi Pelacak Suara
                </p>
                <p className='text-[11px] text-slate-500 leading-tight'>
                  Kamera melihat otomatis ke arah peserta yang sedang berbicara.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Cara Lama vs Solusi HDe */}
      <section className='py-20 bg-slate-50 border-y border-slate-200'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-black text-slate-900 mb-4 tracking-tight'>
              Kenapa Ruang Rapat Anda Butuh MRS?
            </h2>
            <p className='text-slate-500 max-w-2xl mx-auto text-sm'>
              Dokumentasi rapat manual seringkali berantakan dan memerlukan
              operator khusus. HDe hadir untuk otomatisasi seluruh prosesnya.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
            <div className='p-8 bg-red-50/70 rounded-3xl border border-red-200'>
              <h4 className='text-red-600 font-black mb-6 uppercase tracking-wider text-xs flex items-center gap-2'>
                <i className='fas fa-times-circle'></i> Cara Lama (Manual)
              </h4>
              <ul className='space-y-4'>
                <li className='flex gap-3 text-sm text-slate-700'>
                  <i className='fas fa-times text-red-500 mt-1'></i>
                  <span>
                    Kamera statis satu sudut, peserta yang jauh tidak terlihat.
                  </span>
                </li>
                <li className='flex gap-3 text-sm text-slate-700'>
                  <i className='fas fa-times text-red-500 mt-1'></i>
                  <span>Suara bergema dan tidak jelas saat diputar ulang.</span>
                </li>
                <li className='flex gap-3 text-sm text-slate-700'>
                  <i className='fas fa-times text-red-500 mt-1'></i>
                  <span>
                    Operator sibuk mengarahkan kamera secara manual, memicu
                    human error.
                  </span>
                </li>
              </ul>
            </div>

            <div className='p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl text-white shadow-xl shadow-blue-500/20'>
              <h4 className='text-blue-200 font-black mb-6 uppercase tracking-wider text-xs flex items-center gap-2'>
                <i className='fas fa-check-circle'></i> Solusi HDe Technology
                (Otomatis)
              </h4>
              <ul className='space-y-4'>
                <li className='flex gap-3 text-sm'>
                  <i className='fas fa-check text-blue-300 mt-1'></i>
                  <span>
                    Kamera bergerak dan zoom otomatis mengikuti siapa pun
                    peserta yang berbicara.
                  </span>
                </li>
                <li className='flex gap-3 text-sm'>
                  <i className='fas fa-check text-blue-300 mt-1'></i>
                  <span>Audio jernih standar broadcast, siap diarsipkan.</span>
                </li>
                <li className='flex gap-3 text-sm'>
                  <i className='fas fa-check text-blue-300 mt-1'></i>
                  <span>Tekan satu tombol: Rekam, Simpan, dan Selesai.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow: 3 Stages */}
      <section
        id='workflow'
        className='py-24 bg-slate-950 text-white relative overflow-hidden'
      >
        <div className='container mx-auto px-6 relative z-10'>
          <div className='text-center mb-20'>
            <h4 className='text-blue-400 font-bold text-xs uppercase tracking-[0.3em] mb-3'>
              Sistem Kerja Otomatis
            </h4>
            <h2 className='text-3xl md:text-5xl font-black tracking-tight mb-4'>
              Bagaimana MRS <span className='text-blue-500'>Bekerja?</span>
            </h2>
            <p className='text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed'>
              Menghilangkan kerumitan dokumentasi rapat konvensional. Biarkan
              teknologi cerdas kami yang bekerja, Anda cukup fokus pada isi
              rapat.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            <div className='bg-slate-900/60 p-8 rounded-[2.5rem] border border-slate-800 hover:border-blue-500 transition-colors'>
              <div className='w-16 h-16 bg-blue-600/20 text-blue-400 rounded-2xl flex items-center justify-center text-2xl mb-6'>
                <i className='fas fa-microphone-lines'></i>
              </div>
              <span className='inline-block text-[10px] font-black bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full mb-3 uppercase tracking-wider'>
                Tahap 01
              </span>
              <h4 className='text-xl font-bold mb-3 text-white'>
                Deteksi Suara Aktif
              </h4>
              <p className='text-slate-400 text-xs leading-relaxed'>
                Sistem mikrofon cerdas mendeteksi arah suara peserta rapat yang
                sedang berbicara secara instan (real-time).
              </p>
            </div>

            <div className='bg-slate-900/60 p-8 rounded-[2.5rem] border border-slate-800 hover:border-emerald-500 transition-colors'>
              <div className='w-16 h-16 bg-emerald-600/20 text-emerald-400 rounded-2xl flex items-center justify-center text-2xl mb-6'>
                <i className='fas fa-video'></i>
              </div>
              <span className='inline-block text-[10px] font-black bg-emerald-600/20 text-emerald-400 px-3 py-1 rounded-full mb-3 uppercase tracking-wider'>
                Tahap 02
              </span>
              <h4 className='text-xl font-bold mb-3 text-white'>
                Kamera Melihat Otomatis
              </h4>
              <p className='text-slate-400 text-xs leading-relaxed'>
                Kamera PTZ HDe menerima sinyal koordinat dan otomatis melihat
                serta melakukan zoom ke wajah pembicara.
              </p>
            </div>

            <div className='bg-slate-900/60 p-8 rounded-[2.5rem] border border-slate-800 hover:border-amber-500 transition-colors'>
              <div className='w-16 h-16 bg-amber-600/20 text-amber-400 rounded-2xl flex items-center justify-center text-2xl mb-6'>
                <i className='fas fa-file-arrow-down'></i>
              </div>
              <span className='inline-block text-[10px] font-black bg-amber-600/20 text-amber-400 px-3 py-1 rounded-full mb-3 uppercase tracking-wider'>
                Tahap 03
              </span>
              <h4 className='text-xl font-bold mb-3 text-white'>
                Rekam & Simpan
              </h4>
              <p className='text-slate-400 text-xs leading-relaxed'>
                Hasil rekaman audio & video diproses dan disimpan otomatis dalam
                format MP4 di storage internal, siap diekspor ke USB atau cloud.
              </p>
            </div>
          </div>
        </div>
        <div className='mt-20 mx-auto flex max-w-3xl flex-col md:flex-row items-center justify-center gap-6 rounded-[2rem] border border-white/10 bg-slate-900/70 px-10 py-6'>
          <div className='flex shrink-0 -space-x-3'>
            <div className='z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-950 bg-blue-600 text-[10px] font-bold'>1</div>
            <div className='z-20 flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-950 bg-emerald-600 text-[10px] font-bold'>2</div>
            <div className='z-30 flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-950 bg-amber-600 text-[10px] font-bold'>3</div>
          </div>
          <p className='text-center text-xs italic text-blue-300/80 md:text-left'>
            &quot;Proses dari tahap 1 hingga 3 berlangsung secara otomatis tanpa campur tangan operator.&quot;
          </p>
        </div>
      </section>

      {/* Package Contents & Components */}
      <section id='mrs-package' className='py-24 bg-white'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h4 className='text-blue-600 font-bold text-xs uppercase tracking-[0.3em] mb-3'>
              Paket Siap Pakai
            </h4>
            <h2 className='text-3xl md:text-5xl font-black text-slate-900 tracking-tight'>
              Solusi All-in-One
            </h2>
            <p className='text-slate-500 text-sm mt-3'>
              Tersedia di E-Katalog LKPP.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            <div className='p-8 rounded-[2.5rem] bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 transition-all'>
              <div className='w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-blue-600 text-2xl'>
                <i className='fas fa-video'></i>
              </div>
              <h3 className='text-xl font-black text-slate-900 mb-3'>
                AI PTZ Camera
              </h3>
              <p className='text-xs text-slate-600 leading-relaxed mb-6'>
                Kamera cerdas yang bisa melihat, menunduk, dan zoom otomatis
                tanpa perlu operator. Sangat tajam untuk menangkap ekspresi
                wajah peserta rapat.
              </p>
              <ul className='text-xs font-bold text-blue-600 space-y-2 uppercase tracking-wider'>
                <li>
                  <i className='fas fa-check mr-2'></i> 20x Optical Zoom
                </li>
                <li>
                  <i className='fas fa-check mr-2'></i> Auto-Tracking Pembicara
                </li>
              </ul>
            </div>

            <div className='p-8 rounded-[2.5rem] bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 transition-all'>
              <div className='w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-blue-600 text-2xl'>
                <i className='fas fa-microphone-alt'></i>
              </div>
              <h3 className='text-xl font-black text-slate-900 mb-3'>
                Audio Processor
              </h3>
              <p className='text-xs text-slate-600 leading-relaxed mb-6'>
                Sistem mikrofon yang dirancang untuk menghilangkan gema (Echo)
                dan kebisingan AC, sehingga suara rekaman jernih seperti di
                studio siaran.
              </p>
              <ul className='text-xs font-bold text-blue-600 space-y-2 uppercase tracking-wider'>
                <li>
                  <i className='fas fa-check mr-2'></i> Noise & Echo
                  Cancellation
                </li>
                <li>
                  <i className='fas fa-check mr-2'></i> Clear Human Voice Pickup
                </li>
              </ul>
            </div>

            <div className='p-8 rounded-[2.5rem] bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 transition-all'>
              <div className='w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-blue-600 text-2xl'>
                <i className='fas fa-hdd'></i>
              </div>
              <h3 className='text-xl font-black text-slate-900 mb-3'>
                Recording Station
              </h3>
              <p className='text-xs text-slate-600 leading-relaxed mb-6'>
                Otak dari seluruh sistem. Menyatukan video dan audio menjadi
                satu file MP4 beresolusi tinggi yang langsung tersimpan di
                penyimpanan internal.
              </p>
              <ul className='text-xs font-bold text-blue-600 space-y-2 uppercase tracking-wider'>
                <li>
                  <i className='fas fa-check mr-2'></i> One-Click Recording
                </li>
                <li>
                  <i className='fas fa-check mr-2'></i> Kapasitas Besar 1TB+
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='py-24 bg-slate-50'>
        <div className='container mx-auto px-6'>
          <div className='max-w-6xl mx-auto bg-white rounded-[3rem] shadow-xl p-8 md:p-12 border border-gray-100'>
            <div className='grid md:grid-cols-2 gap-12 items-start'>
              <div className='space-y-8'>
                <div>
                  <h3 className='text-2xl font-black mb-2 text-slate-900'>
                    Kelengkapan Paket Sistem
                  </h3>
                  <p className='text-gray-500 text-sm'>
                    Satu solusi lengkap untuk digitalisasi ruang rapat atau ruang
                    kelas Anda.
                  </p>
                </div>

                <div className='grid grid-cols-1 gap-3'>
                  {[
                    ['01', 'Core System', '1 Video Station & 1 Intelligent Recording Server'],
                    ['02', 'Visual Tracking', '2 Unit Auto-Tracking Camera (PTZ)'],
                    ['03', 'Audio Capture', '1 Ceiling Mic & 1 Intelligent Array Mic'],
                  ].map(([number, title, description]) => (
                    <div
                      key={number}
                      className='group flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-500 transition-all'
                    >
                      <div className='w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold shadow-lg shadow-blue-600/20'>
                        {number}
                      </div>
                      <div className='flex-1'>
                        <p className='text-xs font-bold text-slate-900 uppercase'>
                          {title}
                        </p>
                        <p className='text-[11px] text-slate-500'>
                          {description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='flex flex-wrap gap-3'>
                  <span className='bg-blue-50 text-blue-700 text-[10px] font-bold px-4 py-2 rounded-lg border border-blue-100'>
                    TKDN 40%
                  </span>
                  <span className='bg-emerald-50 text-emerald-700 text-[10px] font-bold px-4 py-2 rounded-lg border border-emerald-100'>
                    POSTEL Certified
                  </span>
                </div>
              </div>

              <div className='bg-slate-900 rounded-[3rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden'>
                <div className='absolute top-0 right-0 p-8 opacity-10'>
                  <i className='fas fa-shield-alt text-8xl'></i>
                </div>

                <div className='relative z-10'>
                  <span className='text-indigo-400 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block'>
                    Data Security System
                  </span>
                  <h3 className='text-2xl md:text-3xl font-black mb-6 md:mb-8 uppercase tracking-tight leading-tight'>
                    HDe Meeting <br />Recording System
                  </h3>

                  <div className='space-y-6 mb-8 md:mb-10'>
                    <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-white/10 pb-6 gap-4 sm:gap-0'>
                      <div>
                        <p className='text-[9px] md:text-[10px] text-slate-500 uppercase font-bold mb-2 tracking-widest'>
                          Standar Integritas Data
                        </p>
                        <div className='flex items-center gap-3'>
                          <div className='w-2 h-2 rounded-full bg-indigo-500 animate-pulse'></div>
                          <p className='text-lg md:text-xl font-bold text-white tracking-tight uppercase'>
                            End-to-End Encryption
                          </p>
                        </div>
                      </div>

                      <div className='text-left sm:text-right'>
                        <p className='text-[9px] font-bold text-emerald-400 uppercase mb-1'>
                          Secure Storage
                        </p>
                        <p className='text-[9px] text-slate-400 uppercase font-medium'>
                          Local & Cloud Sync
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='space-y-4'>
                    <button
                      type='button'
                      onClick={sendMRSWA}
                      rel='noopener noreferrer'
                      target='_blank'
                      className='w-full bg-indigo-600 text-white py-4 md:py-5 px-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-3 shadow-lg shadow-indigo-600/30 uppercase tracking-widest text-[10px] md:text-xs'
                    >
                      <i className='fab fa-whatsapp text-lg'></i>
                      <span className='leading-tight'>Konsultasi Produk & Harga</span>
                    </button>

                    <div className='flex items-start gap-3 py-4 px-5 md:px-6 bg-white/5 rounded-2xl border border-white/5'>
                      <i className='fas fa-info-circle text-indigo-400 text-xs mt-1'></i>
                      <p className='text-[10px] text-slate-400 leading-relaxed italic'>
                        Harga bersifat{' '}
                        <span className='text-white font-bold'>Project-Based</span>.
                        Hubungi kami untuk konfigurasi sistem yang sesuai dengan
                        kebutuhan ruang rapat Anda.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Automation Interactive Simulator */}
      <section
        id='mrs-simulator'
        className='py-24 bg-slate-950 text-white overflow-hidden border-t border-slate-900'
      >
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h4 className='text-blue-500 font-bold text-xs uppercase tracking-[0.3em] mb-3'>
              Interactive Simulator
            </h4>
            <h2 className='text-3xl md:text-5xl font-black mb-4 uppercase tracking-tight'>
              Satu Sentuhan,{' '}
              <span className='text-blue-500'>Kendali Penuh</span>
            </h2>
            <p className='text-slate-400 text-sm max-w-xl mx-auto'>
              Uji langsung skenario kendali terpusat sistem HDe Meeting
              Recording di simulator di bawah ini.
            </p>
          </div>

          <div className='max-w-5xl mx-auto bg-slate-900/60 border border-white/10 rounded-[3rem] p-6 md:p-10 shadow-2xl backdrop-blur-sm'>
            <div className='grid md:grid-cols-2 gap-10 items-center'>
              {/* Virtual Screen Output */}
              <div className='space-y-6'>
                <div
                  className={`aspect-video rounded-[2rem] flex flex-col items-center justify-center border-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all duration-700 relative overflow-hidden ${scenario === 'presentation'
                    ? 'bg-blue-950/60 border-blue-700 shadow-blue-900/30'
                    : scenario === 'recording'
                      ? 'bg-emerald-950/60 border-emerald-700 shadow-emerald-900/30'
                      : 'bg-black border-slate-800'
                    }`}
                >
                  <div className='text-center z-10 transition-all duration-500'>
                    {scenario === 'presentation' && (
                      <>
                        <i className='fas fa-desktop text-5xl mb-4 text-blue-400 animate-pulse'></i>
                        <p className='text-xs font-mono tracking-[0.25em] uppercase text-blue-300 font-bold'>
                          Presentation Mode Active
                        </p>
                      </>
                    )}
                    {scenario === 'recording' && (
                      <>
                        <i className='fas fa-record-vinyl text-5xl mb-4 text-emerald-400 animate-spin'></i>
                        <p className='text-xs font-mono tracking-[0.25em] uppercase text-emerald-300 font-bold'>
                          Recording & Streaming...
                        </p>
                      </>
                    )}
                    {scenario === 'off' && (
                      <>
                        <i className='fas fa-power-off text-5xl mb-4 text-slate-700'></i>
                        <p className='text-xs font-mono tracking-[0.25em] uppercase text-slate-500 font-bold'>
                          System Standby
                        </p>
                      </>
                    )}
                  </div>
                </div>

                <div className='grid grid-cols-2 gap-4'>
                  <div className='p-4 rounded-2xl bg-black/60 border border-white/5 flex items-center gap-3'>
                    <div
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${scenario === 'presentation'
                        ? 'bg-blue-500 shadow-[0_0_8px_#3b82f6]'
                        : scenario === 'recording'
                          ? 'bg-emerald-500 shadow-[0_0_8px_#10b981]'
                          : 'bg-slate-700'
                        }`}
                    ></div>
                    <div>
                      <p className='text-[9px] uppercase text-slate-400 tracking-wider'>
                        Camera Status
                      </p>
                      <p
                        className={`text-xs font-bold uppercase ${scenario === 'presentation'
                          ? 'text-blue-400'
                          : scenario === 'recording'
                            ? 'text-emerald-400'
                            : 'text-slate-500'
                          }`}
                      >
                        {scenario === 'presentation'
                          ? 'Active'
                          : scenario === 'recording'
                            ? 'Tracking'
                            : 'Offline'}
                      </p>
                    </div>
                  </div>

                  <div className='p-4 rounded-2xl bg-black/60 border border-white/5 flex items-center gap-3'>
                    <div
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${scenario === 'recording'
                        ? 'bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]'
                        : 'bg-slate-700'
                        }`}
                    ></div>
                    <div>
                      <p className='text-[9px] uppercase text-slate-400 tracking-wider'>
                        Recording Server
                      </p>
                      <p
                        className={`text-xs font-bold uppercase ${scenario === 'recording'
                          ? 'text-red-400'
                          : 'text-slate-500'
                          }`}
                      >
                        {scenario === 'recording' ? 'Recording' : 'Idle'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scenario Control Buttons */}
              <div className='flex flex-col gap-4'>
                <button
                  type='button'
                  onClick={() => setScenario('presentation')}
                  className={`w-full p-6 rounded-2xl border text-left transition-all ${scenario === 'presentation'
                    ? 'bg-blue-600/20 border-blue-500 shadow-lg shadow-blue-500/10'
                    : 'bg-white/5 border-white/10 hover:border-blue-500/40'
                    }`}
                >
                  <span className='block font-black text-xs uppercase tracking-widest mb-1 text-blue-400'>
                    01. Mode Presentasi
                  </span>
                  <span className='block text-xs text-slate-400'>
                    Optimasi visual videotron & interaktif untuk konten materi
                    rapat.
                  </span>
                </button>

                <button
                  type='button'
                  onClick={() => setScenario('recording')}
                  className={`w-full p-6 rounded-2xl border text-left transition-all ${scenario === 'recording'
                    ? 'bg-emerald-600/20 border-emerald-500 shadow-lg shadow-emerald-500/10'
                    : 'bg-white/5 border-white/10 hover:border-emerald-500/40'
                    }`}
                >
                  <span className='block font-black text-xs uppercase tracking-widest mb-1 text-emerald-400'>
                    02. Mode Recording
                  </span>
                  <span className='block text-xs text-slate-400'>
                    Auto-tracking kamera PTZ aktif & aktivasi server rekam MP4
                    otomatis.
                  </span>
                </button>

                <button
                  type='button'
                  onClick={() => setScenario('off')}
                  className={`w-full p-6 rounded-2xl border text-left transition-all ${scenario === 'off'
                    ? 'bg-red-600/20 border-red-500'
                    : 'bg-white/5 border-white/10 hover:border-red-500/40'
                    }`}
                >
                  <span className='block font-black text-xs uppercase tracking-widest mb-1 text-red-400'>
                    03. System Off
                  </span>
                  <span className='block text-xs text-slate-400'>
                    Cooling-down sistem, matikan kamera, dan proteksi daya.
                  </span>
                </button>

                <div className='mt-2 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20'>
                  <p className='text-[11px] text-blue-300 uppercase tracking-tight'>
                    *Sistem mendukung integrasi sentuh dengan tablet iPad /
                    Android & Wall Touch Panel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Table */}
      <section id='specs' className='py-24 bg-white'>
        <div className='container mx-auto px-6 max-w-4xl'>
          <div className='text-center mb-16'>
            <h3 className='text-3xl font-black mb-3 uppercase tracking-tight text-slate-900'>
              Spesifikasi Detail Sistem
            </h3>
            <p className='text-slate-500 text-sm'>
              Parameter teknis standar paket HDe Meeting Recording System.
            </p>
          </div>

          <div className='space-y-3'>
            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 bg-slate-50 rounded-2xl border border-slate-100'>
              <span className='font-bold text-slate-400 text-xs uppercase tracking-wider mb-1 sm:mb-0'>
                Video Input
              </span>
              <span className='text-slate-800 text-sm font-semibold'>
                Multi-Channel HDMI / 3G-SDI / IP (RTSP/RTMP)
              </span>
            </div>

            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 bg-slate-50 rounded-2xl border border-slate-100'>
              <span className='font-bold text-slate-400 text-xs uppercase tracking-wider mb-1 sm:mb-0'>
                Resolusi Rekam
              </span>
              <span className='text-slate-800 text-sm font-semibold'>
                Ultra HD 4K @60fps (Crystal Clear)
              </span>
            </div>

            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 bg-slate-50 rounded-2xl border border-slate-100'>
              <span className='font-bold text-slate-400 text-xs uppercase tracking-wider mb-1 sm:mb-0'>
                Penyimpanan Internal
              </span>
              <span className='text-slate-800 text-sm font-semibold'>
                1TB Internal Storage (Hingga 500+ Jam Rekaman MP4)
              </span>
            </div>

            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 bg-slate-50 rounded-2xl border border-slate-100'>
              <span className='font-bold text-slate-400 text-xs uppercase tracking-wider mb-1 sm:mb-0'>
                Teknologi AI Tracking
              </span>
              <span className='text-slate-800 text-sm font-semibold'>
                Face Detection & Voice Localization (Real-Time)
              </span>
            </div>

            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center p-8 bg-blue-600 rounded-3xl text-white shadow-xl shadow-blue-500/20'>
              <div>
                <span className='font-bold text-blue-200 text-[10px] uppercase tracking-widest block mb-1'>
                  Legalitas & Kepatuhan Pengadaan
                </span>
                <span className='text-white font-black text-xl'>
                  Sertifikasi Resmi LKPP
                </span>
              </div>
              <div className='flex flex-wrap gap-2 mt-4 sm:mt-0'>
                <span className='bg-white text-blue-700 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider shadow'>
                  TKDN 40%
                </span>
                <span className='bg-blue-700/80 text-white px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider border border-white/20'>
                  POSTEL SDPPI
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
