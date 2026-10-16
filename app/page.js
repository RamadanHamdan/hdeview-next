'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  // Hero Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroSlides = [
    {
      title: 'Masa Depan Kolaborasi',
      highlight: 'Visual Interaktif',
      desc: 'Transformasi ruang rapat dan ruang belajar Anda dengan Interactive Flat Panel HDe kelas dunia.',
      img: '/img/Produk/ifp/ifp.jpg',
      link: '/produk-ifp',
      btnText: 'Jelajahi Produk IFP',
      theme: 'from-blue-900/60 to-slate-950',
    },
    {
      title: 'Performa Tinggi',
      highlight: 'PC All-in-One HDe',
      desc: 'Solusi komputer ringkas dengan spesifikasi workstation untuk produktivitas profesional tanpa batas.',
      img: '/img/Produk/aio/aio.png',
      link: '/produk-aio',
      btnText: 'Lihat Spesifikasi AIO',
      theme: 'from-slate-900/60 to-slate-950',
    },
    {
      title: 'Visual Megah',
      highlight: 'LED Videotron',
      desc: 'Tampilan tanpa batas untuk kebutuhan indoor maupun outdoor dengan teknologi LED High-Refresh Rate.',
      img: '/img/Produk/Vid/vid23.jpg',
      link: '/produk-videotron',
      btnText: 'Konsultasi Proyek Videotron',
      theme: 'from-blue-950/70 to-slate-950',
    },
    {
      title: 'Dokumentasi',
      highlight: 'Cerdas & Otomatis',
      desc: 'Sistem perekaman rapat profesional untuk hasil diskusi yang lebih akurat, aman, dan terorganisir.',
      img: '/img/Produk/Mrs/unnamed.jpg',
      link: '/produk-recording',
      btnText: 'Pelajari Solusi MRS',
      theme: 'from-slate-950/70 to-slate-950',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Support Ticket Form State
  const [clientName, setClientName] = useState('');
  const [category, setCategory] = useState('HDe IFP');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [serialNumber, setSerialNumber] = useState('');
  const [issueDetail, setIssueDetail] = useState('');
  const [warning, setWarning] = useState(false);

  const categories = [
    { label: 'HDe IFP', icon: 'fa-hand-pointer' },
    { label: 'HDe LED Videotron', icon: 'fa-tv' },
    { label: 'HDe Meeting Recording', icon: 'fa-microphone-alt' },
  ];

  const handleSupportSubmit = (e) => {
    e.preventDefault();
    if (!clientName.trim() || !serialNumber.trim() || !issueDetail.trim()) {
      setWarning(true);
      setTimeout(() => setWarning(false), 4000);
      return;
    }

    setWarning(false);
    const message =
      `Halo Tim Support HDe Technology,\n\n` +
      `*TIKET BANTUAN TEKNIS*\n` +
      `--------------------------\n` +
      `• *Nama/Instansi:* ${clientName}\n` +
      `• *Kategori:* ${category}\n` +
      `• *Serial Number:* ${serialNumber}\n` +
      `• *Kendala:* ${issueDetail}\n\n` +
      `Mohon bantuan untuk diagnosa lebih lanjut. Terima kasih.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/628194010189?text=${encoded}`, '_blank');
  };

  // Partner Filter Tab State
  const [partnerFilter, setPartnerFilter] = useState('dinas');

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);
  const faqs = [
    {
      id: 1,
      cat: 'LED Videotron',
      icon: 'fa-tv',
      q: 'Apa keunggulan seri GEN-Z untuk penggunaan Outdoor?',
      a: 'Seri GEN-Z dirancang dengan tingkat kecerahan hingga 5000 nits dan refresh rate 3840 Hz. Ini memastikan konten tetap terlihat tajam di bawah sinar matahari langsung dan aman dari efek kedipan saat direkam kamera.',
    },
    {
      id: 2,
      cat: 'LED Videotron',
      icon: 'fa-tv',
      q: 'Apa perbedaan seri GEN-Z (Outdoor) dan GEN-Y (Indoor)?',
      a: 'Seri GEN-Z dirancang dengan tingkat kecerahan hingga 5000 nits dan proteksi tahan cuaca IP65. Seri GEN-Y dioptimalkan untuk jarak dekat dengan warna lebih halus dan kecerahan 450 nits agar nyaman di mata.',
    },
    {
      id: 3,
      cat: 'Interactive Board',
      icon: 'fa-hand-pointer',
      q: 'Apakah IFP HDe mendukung penggunaan Dual-OS?',
      a: 'Ya, Interactive Flat Panel kami mendukung sistem operasi Android bawaan dan dapat diintegrasikan dengan modul OPS Windows. Anda dapat berpindah sistem hanya dengan satu sentuhan tanpa perlu mematikan perangkat.',
    },
    {
      id: 4,
      cat: 'Meeting Recording',
      icon: 'fa-microphone-alt',
      q: 'Apa keunggulan utama HDe MRS dibanding rekaman bawaan aplikasi video conference?',
      a: 'HDe Recording System merekam secara hardware-based, artinya kualitas audio dan video tetap jernih meskipun koneksi internet tidak stabil, serta mendukung pengambilan gambar dari berbagai sudut kamera sekaligus (multi-cam) dengan auto-tracking AI.',
    },
    {
      id: 5,
      cat: 'Technical Support',
      icon: 'fa-tools',
      q: 'Bagaimana prosedur klaim garansi jika terjadi kendala?',
      a: 'Anda cukup mengisi form Tiket Bantuan di halaman ini atau menu Cek Garansi dengan menyertakan Nomor Seri unit. Tim teknisi kami akan melakukan diagnosa jarak jauh atau menjadwalkan kunjungan teknis langsung.',
    },
  ];

  return (
    <main className="bg-white">
      {/* ===================== HERO CAROUSEL ===================== */}
      <section className="relative group overflow-hidden bg-slate-950 min-h-[75vh] md:min-h-[85vh] flex items-center justify-center">
        {heroSlides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center justify-center ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Slide Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover opacity-35 scale-105 transition-transform duration-[6000ms] ease-out"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${slide.theme} via-slate-950/60`}
                ></div>
              </div>

              {/* Slide Content */}
              <div className="container mx-auto px-6 relative z-20 text-center text-white max-w-4xl py-12">
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/30 border border-blue-400/40 text-[10px] font-black uppercase tracking-[0.3em] text-blue-300 mb-6 backdrop-blur-md">
                  Premium Visual Ecosystem
                </span>
                <h1 className="text-4xl md:text-7xl font-black mb-6 leading-[1.08] tracking-tight uppercase">
                  {slide.title} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                    {slide.highlight}
                  </span>
                </h1>
                <p className="text-base md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                  {slide.desc}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href={slide.link}
                    className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-black text-[11px] tracking-[0.2em] uppercase transition-all duration-300 shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95"
                  >
                    {slide.btnText}
                  </Link>
                  <a
                    href="https://wa.me/628194010189"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-[11px] tracking-[0.15em] uppercase transition-all duration-300 backdrop-blur-sm"
                  >
                    Konsultasi Cepat
                  </a>
                </div>
              </div>
            </div>
          );
        })}

        {/* Carousel Arrow Controls */}
        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))
          }
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 hidden md:flex border border-white/10"
          aria-label="Previous Slide"
        >
          <i className="fas fa-chevron-left text-sm"></i>
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 hidden md:flex border border-white/10"
          aria-label="Next Slide"
        >
          <i className="fas fa-chevron-right text-sm"></i>
        </button>

        {/* Carousel Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 transition-all duration-300 rounded-full ${
                idx === currentSlide ? 'w-8 bg-blue-500' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ===================== PRODUCT ECOSYSTEM ===================== */}
      <section id="produk" className="scroll-mt-24 py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-3 block">
              Our Ecosystem
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Solusi Teknologi <span className="text-blue-600">HDe</span>
            </h2>
            <div className="h-1.5 w-16 bg-blue-600 mx-auto mt-5 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: IFP */}
            <div className="group hde-card p-6 bg-slate-50/70 border border-slate-100 rounded-[2.5rem] flex flex-col justify-between">
              <div>
                <div className="relative rounded-[2rem] overflow-hidden bg-white h-52 mb-6 flex items-center justify-center p-4 border border-slate-100 shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/Produk/ifp/ifpp1.png"
                    alt="Interactive Flat Panel"
                    className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-amber-500 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow">
                    Best Seller
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors uppercase">
                  Interactive Flat Panel
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-6">
                  Layar sentuh 4K cerdas dengan 40-point touch, dual OS (Android & Windows), kamera 4K dan mic array untuk presentasi interaktif.
                </p>
              </div>
              <Link
                href="/produk-ifp"
                className="inline-flex items-center justify-between text-blue-600 font-black text-[11px] tracking-[0.15em] uppercase group/btn pt-3 border-t border-slate-200"
              >
                <span>Konfigurasi IFP</span>
                <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover/btn:bg-blue-600 group-hover/btn:text-white transition-all">
                  <i className="fas fa-arrow-right text-xs"></i>
                </span>
              </Link>
            </div>

            {/* Card 2: Videotron */}
            <div className="group hde-card p-6 bg-slate-50/70 border border-slate-100 rounded-[2.5rem] flex flex-col justify-between">
              <div>
                <div className="relative rounded-[2rem] overflow-hidden bg-white h-52 mb-6 flex items-center justify-center p-4 border border-slate-100 shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/Produk/Vid/vidd1.png"
                    alt="LED Videotron"
                    className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-slate-900 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow">
                    Enterprise
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors uppercase">
                  HDe LED Videotron
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-6">
                  Visual raksasa dengan kecerahan hingga 5000 nits, high refresh 3840Hz untuk indoor (Fine Pitch) maupun outdoor advertising IP65.
                </p>
              </div>
              <Link
                href="/produk-videotron"
                className="inline-flex items-center justify-between text-blue-600 font-black text-[11px] tracking-[0.15em] uppercase group/btn pt-3 border-t border-slate-200"
              >
                <span>Smart Configurator</span>
                <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover/btn:bg-blue-600 group-hover/btn:text-white transition-all">
                  <i className="fas fa-arrow-right text-xs"></i>
                </span>
              </Link>
            </div>

            {/* Card 3: MRS */}
            <div className="group hde-card p-6 bg-slate-50/70 border border-slate-100 rounded-[2.5rem] flex flex-col justify-between">
              <div>
                <div className="relative rounded-[2rem] overflow-hidden bg-white h-52 mb-6 flex items-center justify-center p-4 border border-slate-100 shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/Produk/Mrs/mrsroom.png"
                    alt="Meeting Recording"
                    className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-emerald-600 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow">
                    Education & Gov
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors uppercase">
                  Meeting Recording System
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-6">
                  Sistem audio-visual otomatis berbasis hardware dengan kamera auto-tracking AI dan audio processor untuk notulensi akurat dan streaming.
                </p>
              </div>
              <Link
                href="/produk-recording"
                className="inline-flex items-center justify-between text-blue-600 font-black text-[11px] tracking-[0.15em] uppercase group/btn pt-3 border-t border-slate-200"
              >
                <span>Simulasi MRS</span>
                <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover/btn:bg-blue-600 group-hover/btn:text-white transition-all">
                  <i className="fas fa-arrow-right text-xs"></i>
                </span>
              </Link>
            </div>

            {/* Card 4: AIO */}
            <div className="group hde-card p-6 bg-slate-50/70 border border-slate-100 rounded-[2.5rem] flex flex-col justify-between">
              <div>
                <div className="relative rounded-[2rem] overflow-hidden bg-white h-52 mb-6 flex items-center justify-center p-4 border border-slate-100 shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/Produk/aio/aio3.png"
                    alt="HDe AIO Series"
                    className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-blue-600 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow">
                    New Arrival
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors uppercase">
                  HDe AIO Series
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-6">
                  Solusi PC All-in-One elegan dengan material Mg-Al Alloy, performa workstation, dan layar ultra tipis untuk ruang kerja modern.
                </p>
              </div>
              <Link
                href="/produk-aio"
                className="inline-flex items-center justify-between text-blue-600 font-black text-[11px] tracking-[0.15em] uppercase group/btn pt-3 border-t border-slate-200"
              >
                <span>Lihat Spesifikasi</span>
                <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover/btn:bg-blue-600 group-hover/btn:text-white transition-all">
                  <i className="fas fa-arrow-right text-xs"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TENTANG KAMI ===================== */}
      <section id="tentang" className="scroll-mt-24 bg-slate-50 py-24 border-y border-slate-200/60 overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Showcase */}
          <div className="relative">
            <div className="w-full h-[320px] md:h-[500px] bg-slate-950 rounded-[3rem] overflow-hidden shadow-2xl relative group border border-slate-800 flex items-center justify-center p-12">
              <div className="absolute inset-0 bg-radial-gradient from-blue-500/20 via-transparent to-transparent"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/HDe-2.png"
                alt="HDe Technology Excellence"
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-[0_20px_40px_rgba(37,99,235,0.4)]"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-blue-500/20 backdrop-blur-md border border-white/20 text-blue-200 text-[9px] px-4 py-2 rounded-full uppercase tracking-widest font-black">
                  Established Excellence
                </span>
              </div>
            </div>

            {/* Experience Pill */}
            <div className="absolute -bottom-6 -right-2 md:-bottom-8 md:-right-6 bg-blue-600 p-6 md:p-8 rounded-[2rem] text-white shadow-2xl border-4 md:border-8 border-white flex items-center gap-4">
              <span className="text-4xl md:text-6xl font-black leading-none tracking-tight">3+</span>
              <div className="h-10 w-[1px] bg-white/30"></div>
              <p className="text-[9px] md:text-[10px] uppercase font-black tracking-widest leading-tight">
                Tahun Inovasi<br />Digital Indonesia
              </p>
            </div>
          </div>

          {/* Text Description & Pillars */}
          <div className="space-y-8">
            <div>
              <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-[10px] mb-3 block">
                Leading Technology Partner
              </span>
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 leading-tight">
                Solusi Visual & Audio <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                  Terintegrasi Mutakhir.
                </span>
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                HDe Technology hadir sebagai mitra strategis dalam menghadirkan ekosistem digital kelas dunia. Kami menggabungkan inovasi hardware termutakhir dengan kepatuhan regulasi lokal LKPP dan TKDN demi keandalan operasional jangka panjang.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-5 p-4 rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:border-blue-300 transition-all">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 text-xl shadow-sm">
                  <i className="fas fa-certificate"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Standar Sertifikasi Global & Lokal</h4>
                  <p className="text-xs text-slate-500">Lulus uji POSTEL SDPPI Kominfo dan standar internasional RoHS & CE.</p>
                </div>
              </div>

              <div className="flex items-center gap-5 p-4 rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:border-emerald-300 transition-all">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 text-xl shadow-sm">
                  <i className="fas fa-flag"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Dukungan TKDN & E-Katalog LKPP</h4>
                  <p className="text-xs text-slate-500">Memenuhi regulasi konten lokal untuk pengadaan instansi pemerintah, BUMN, dan universitas.</p>
                </div>
              </div>

              <div className="flex items-center gap-5 p-4 rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:border-amber-300 transition-all">
                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 text-xl shadow-sm">
                  <i className="fas fa-headset"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Layanan Purna Jual & On-Site Service</h4>
                  <p className="text-xs text-slate-500">Dukungan suku cadang original dan teknisi berpengalaman ke seluruh Indonesia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== OFFICIAL SUPPORT & TIKET BANTUAN ===================== */}
      <section id="layanan" className="scroll-mt-24 py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-wrap border border-slate-200">
            {/* Left Column: Official Support Info */}
            <div className="w-full lg:w-2/5 p-10 md:p-14 bg-gradient-to-br from-blue-700 to-blue-900 text-white relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border border-white/20 text-blue-100">
                  Official Support
                </span>
                <h3 className="text-3xl font-black mb-10 leading-tight uppercase tracking-tight">
                  Komitmen Purna Jual <br />HDe Technology
                </h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                      <i className="fas fa-history text-blue-200 text-sm"></i>
                    </div>
                    <div>
                      <h5 className="font-bold text-xs uppercase tracking-wider text-white mb-1">Respon Cepat</h5>
                      <p className="text-xs text-blue-100/70 leading-relaxed">Tim kami akan memberikan diagnosa awal teknis sesaat setelah tiket diajukan.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                      <i className="fas fa-user-shield text-blue-200 text-sm"></i>
                    </div>
                    <div>
                      <h5 className="font-bold text-xs uppercase tracking-wider text-white mb-1">Teknisi Tersertifikasi</h5>
                      <p className="text-xs text-blue-100/70 leading-relaxed">Penanganan dilakukan langsung oleh tenaga ahli yang memahami struktur hardware HDe secara mendalam.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                      <i className="fas fa-box-open text-blue-200 text-sm"></i>
                    </div>
                    <div>
                      <h5 className="font-bold text-xs uppercase tracking-wider text-white mb-1">Suku Cadang Asli</h5>
                      <p className="text-xs text-blue-100/70 leading-relaxed">Jaminan penggantian komponen menggunakan modul original untuk menjaga stabilitas jangka panjang.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-10 relative z-10 border-t border-white/10 text-xs text-blue-200">
                Layanan aktif Senin - Jumat: 08.30 - 17.30 WIB
              </div>
            </div>

            {/* Right Column: Support Ticket Form */}
            <div className="w-full lg:w-3/5 p-8 md:p-14 bg-white relative">
              <div className="mb-8">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-2 block">
                  Support Center
                </span>
                <h4 className="font-black text-3xl text-slate-900 uppercase tracking-tight mb-2">
                  Ajukan Tiket <span className="text-blue-600">Bantuan</span>
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Lengkapi data di bawah ini agar teknisi kami dapat segera memverifikasi dan menangani kendala perangkat Anda.
                </p>
              </div>

              {/* Error Warning Notification */}
              {warning && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-4 animate-fade-in text-red-700">
                  <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center flex-shrink-0 text-sm shadow">
                    <i className="fas fa-exclamation-triangle"></i>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider block">Form Belum Lengkap</span>
                    <span className="text-xs">Mohon isi Nama/Instansi, Serial Number, dan Detail Kendala.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSupportSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                      Nama Lengkap / Instansi
                    </label>
                    <input
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Contoh: Budi - Universitas ABC"
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                    />
                  </div>

                  {/* Category Custom Dropdown */}
                  <div className="space-y-1.5 relative">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                      Kategori Perangkat
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                      className="w-full px-5 py-3.5 bg-slate-900 border border-slate-800 rounded-2xl text-xs font-bold text-white flex items-center justify-between shadow transition"
                    >
                      <div className="flex items-center gap-2.5">
                        <i className={`fas ${categories.find((c) => c.label === category)?.icon || 'fa-tv'} text-blue-400 text-xs`}></i>
                        <span>{category}</span>
                      </div>
                      <i className={`fas fa-chevron-down text-[10px] text-slate-400 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`}></i>
                    </button>

                    {isCategoryOpen && (
                      <div className="absolute w-full left-0 mt-2 p-2 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl z-50 animate-fade-in">
                        {categories.map((cat) => (
                          <div
                            key={cat.label}
                            onClick={() => {
                              setCategory(cat.label);
                              setIsCategoryOpen(false);
                            }}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer text-xs font-bold transition ${
                              category === cat.label
                                ? 'bg-blue-600 text-white'
                                : 'text-slate-300 hover:bg-white/10'
                            }`}
                          >
                            <i className={`fas ${cat.icon} text-xs`}></i>
                            <span>{cat.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Serial Number */}
                  <div className="space-y-1.5 md:col-span-2">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                      Nomor Seri (Serial Number)
                    </label>
                    <input
                      type="text"
                      value={serialNumber}
                      onChange={(e) => setSerialNumber(e.target.value)}
                      placeholder="Contoh: HDE-QC-2026-001 (Lihat stiker hologram di belakang unit)"
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                    />
                  </div>
                </div>

                {/* Issue Description */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                    Deskripsi Kendala
                  </label>
                  <textarea
                    rows={3}
                    value={issueDetail}
                    onChange={(e) => setIssueDetail(e.target.value)}
                    placeholder="Jelaskan detail kendala, indikator lampu, atau pesan error yang muncul..."
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-blue-600 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-xl flex items-center justify-center gap-3 active:scale-98"
                >
                  <i className="fab fa-whatsapp text-lg text-emerald-400"></i>
                  <span>Kirim Tiket Dukungan via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PARTNERS ===================== */}
      <section id="klien" className="py-20 bg-slate-50 border-t border-slate-200/60">
        <div className="container mx-auto px-6 text-center">
          <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-3 block">
            Partnership
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase mb-8">
            Kemitraan Strategis
          </h2>

          <div className="flex justify-center gap-3 mb-10">
            <button
              onClick={() => setPartnerFilter('dinas')}
              className={`px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all border shadow-sm ${
                partnerFilter === 'dinas'
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-blue-500'
              }`}
            >
              Pemerintah & Publik
            </button>
            <button
              onClick={() => setPartnerFilter('corporate')}
              className={`px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all border shadow-sm ${
                partnerFilter === 'corporate'
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-blue-500'
              }`}
            >
              Dinas & Korporat
            </button>
          </div>

          <div className="max-w-4xl mx-auto bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
            {partnerFilter === 'dinas' ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="/img/mitra.png"
                alt="Mitra Pemerintah HDe Technology"
                className="w-full h-auto rounded-2xl animate-fade-in"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="/img/dinas.png"
                alt="Dinas dan Korporat Mitra HDe Technology"
                className="w-full h-auto rounded-2xl animate-fade-in"
              />
            )}
          </div>
        </div>
      </section>

      {/* ===================== FAQ ACCORDION ===================== */}
      <section id="faq" className="w-full max-w-4xl mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-3 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">
            Knowledge Base
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight mb-4">
            Pertanyaan yang <span className="text-blue-600">Sering Diajukan</span>
          </h2>
          <p className="text-slate-500 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
            Temukan jawaban cepat mengenai spesifikasi teknis, garansi, dan dukungan operasional perangkat HDe Technology.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-slate-200 rounded-[2rem] overflow-hidden bg-white shadow-sm hover:border-blue-300 transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                  className="w-full px-6 py-6 md:px-8 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-blue-400 flex-shrink-0 text-sm">
                      <i className={`fas ${faq.icon}`}></i>
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider block mb-0.5">
                        {faq.cat}
                      </span>
                      <h4 className="text-sm font-bold text-slate-800">{faq.q}</h4>
                    </div>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isOpen ? 'bg-blue-600 text-white rotate-45' : 'bg-slate-100 text-slate-400'
                    }`}
                  >
                    <i className="fas fa-plus text-xs"></i>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 animate-fade-in">
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed border-l-2 border-blue-500 pl-4 ml-2">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest hover:underline"
          >
            <span>Lihat Semua Pertanyaan di FAQ Center</span>
            <i className="fas fa-arrow-right text-[10px]"></i>
          </Link>
        </div>
      </section>

      {/* ===================== EDUQUIZ DOWNLOAD BANNER ===================== */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-white/10">
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <span className="text-amber-400 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 inline-block">
            Interactive Learning Tool
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 uppercase">
            Bikin Suasana <span className="text-amber-400">Lebih Seru</span> Dengan EduQuiz
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mb-10 leading-relaxed font-light">
            Bawa keseruan game interaktif ke dalam ruang kelas atau ruang rapat Anda bersama perangkat HDe Interactive Flat Panel.
          </p>

          <a
            href="https://drive.google.com/file/d/1TodooMhicxHjTkZ1sDsxOvpaS-sthtiH/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-amber-500 hover:bg-amber-400 text-slate-950 px-8 py-4 rounded-2xl transition-all duration-300 font-black shadow-xl shadow-amber-500/20 active:scale-95"
          >
            <i className="fas fa-gamepad text-2xl"></i>
            <div className="text-left leading-tight">
              <span className="block text-[9px] opacity-75 uppercase tracking-wider">Free Download</span>
              <span className="text-sm uppercase tracking-wide">Unduh EduQuiz (Windows)</span>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
