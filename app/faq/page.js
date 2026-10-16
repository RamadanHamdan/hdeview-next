'use client';

import { useState, useMemo } from 'react';

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    // VIDEOTRON
    {
      cat: 'videotron',
      q: 'Apa perbedaan seri GEN-Z (Outdoor) dan GEN-Y (Indoor)?',
      a: 'Seri GEN-Z dirancang tahan cuaca (IP65) dengan kecerahan tinggi hingga 5000 nits. Seri GEN-Y dioptimalkan untuk jarak dekat dengan warna lebih halus dan kecerahan 450 nits agar nyaman di mata.',
    },
    {
      cat: 'videotron',
      q: 'Berapa IP Rating videotron outdoor HDe?',
      a: 'Seri outdoor seperti GEN-Z400 memiliki rating IP65 pada bagian depan (tahan hujan/debu) dan IP54 pada bagian belakang.',
    },
    {
      cat: 'videotron',
      q: 'Apakah tampilan videotron bergaris saat direkam kamera?',
      a: 'Tidak. Produk HDe memiliki Refresh Rate ≥ 3840 Hz, sehingga visual tetap mulus dan bebas flicker saat difoto atau masuk kamera TV / broadcast.',
    },
    {
      cat: 'videotron',
      q: 'Apa itu Pixel Pitch P4 pada GEN-Z400?',
      a: 'Pixel Pitch 4mm adalah jarak antar lampu LED. P4 memberikan resolusi tajam untuk layar outdoor besar dengan jarak pandang ideal mulai 4 meter.',
    },
    {
      cat: 'videotron',
      q: 'Apa jenis LED yang digunakan pada seri GEN-Y40?',
      a: 'Menggunakan teknologi LED SMD2121 yang memberikan kerapatan warna tinggi untuk penggunaan dalam ruangan.',
    },
    {
      cat: 'videotron',
      q: 'Berapa sudut pandang (Viewing Angle) videotron HDe?',
      a: 'Sangat luas. Indoor mencapai H 160º / V 140º, dan Outdoor H 140º / V 120º.',
    },
    {
      cat: 'videotron',
      q: 'Apakah videotron HDe memiliki sertifikat TKDN?',
      a: 'Ya, videotron kami sudah tersertifikasi dengan nilai TKDN sebesar 40.25% resmi Kemenperin.',
    },
    {
      cat: 'videotron',
      q: 'Berapa masa pakai (lifetime) lampu LED HDe?',
      a: 'Lampu LED kami dirancang untuk penggunaan jangka panjang dengan durabilitas hingga 100.000 jam operasional.',
    },
    {
      cat: 'videotron',
      q: 'Bahan kabinet apa yang digunakan GEN-Z400?',
      a: 'Menggunakan material Iron / Die-cast yang kokoh untuk memastikan struktur tetap stabil di berbagai kondisi cuaca ekstrem.',
    },
    {
      cat: 'videotron',
      q: 'Berapa berat kabinet videotron outdoor?',
      a: 'Rata-rata berat kabinet outdoor adalah 45 Kg per meter persegi.',
    },
    {
      cat: 'videotron',
      q: 'Apa itu Gray Scale 14-16 bit pada videotron?',
      a: 'Menghasilkan transisi warna yang sangat halus tanpa gradasi kasar (color banding).',
    },

    // IFP
    {
      cat: 'ifp',
      q: 'Apa saja ukuran layar HDe IFP yang tersedia?',
      a: 'Tersedia pilihan ukuran 65, 75, 86, 98, hingga 110 inci untuk berbagai kebutuhan ruangan kelas hingga aula.',
    },
    {
      cat: 'ifp',
      q: 'Sistem Operasi apa yang digunakan HDe IFP?',
      a: 'Menggunakan Android 11 (upgradable hingga v14) dan mendukung opsional Windows PC melalui slot modul OPS (i3/i5/i7).',
    },
    {
      cat: 'ifp',
      q: 'Apakah layar IFP mendukung resolusi 4K?',
      a: 'Ya, seluruh varian IFP HDe sudah mendukung resolusi 4K UHD (3840 x 2160) dengan refresh rate 60Hz.',
    },
    {
      cat: 'ifp',
      q: 'Berapa banyak titik sentuh yang didukung?',
      a: 'Mendukung hingga 40 titik sentuh (touch points) secara bersamaan, sangat ideal untuk kolaborasi kelompok.',
    },
    {
      cat: 'ifp',
      q: 'Apa itu teknologi Zero-Fit Lamination?',
      a: 'Teknologi ini menghilangkan celah udara antara panel dan kaca pelindung, sehingga menulis terasa natural dan sangat presisi tanpa jeda visual (zero parallax).',
    },
    {
      cat: 'ifp',
      q: 'Apakah IFP memiliki kamera untuk video conference?',
      a: 'Ya, tersedia opsi Smart Camera 4K (48MP) dan 8 Array Microphone untuk kualitas meeting dan pembelajaran hybrid profesional.',
    },
    {
      cat: 'ifp',
      q: 'Apa spesifikasi kaca pelindung IFP?',
      a: 'Menggunakan 3.5mm Anti-Glare Tempered Glass bersertifikasi 7H Mohs yang tahan gores dan tidak memantulkan cahaya lampu ruangan.',
    },
    {
      cat: 'ifp',
      q: 'Berapa kapasitas memori standar IFP?',
      a: 'Tersedia konfigurasi RAM 4GB / 32GB ROM hingga high-end 8GB / 128GB ROM.',
    },
    {
      cat: 'ifp',
      q: 'Apakah mendukung Screen Mirroring tanpa kabel?',
      a: 'Ya, mendukung fitur ScreenShare untuk menampilkan layar HP, Tablet, atau Laptop secara wireless hanya dengan sekali klik.',
    },
    {
      cat: 'ifp',
      q: 'Apakah tersedia Mobile Stand beroda?',
      a: 'Ya, tersedia heavy-duty mobile stand yang mampu menahan beban hingga 300kg dengan 4 roda pengunci.',
    },
    {
      cat: 'ifp',
      q: 'Berapa berat unit IFP 110 inci?',
      a: 'Unit berukuran 110 inci memiliki berat sekitar 160 Kg.',
    },

    // TEKNIS & DAYA
    {
      cat: 'teknis',
      q: 'Berapa daya listrik maksimal Videotron Outdoor?',
      a: 'Konsumsi daya maksimal untuk seri outdoor adalah sekitar 1150 W per meter persegi (rata-rata 350-400 W/m²).',
    },
    {
      cat: 'teknis',
      q: 'Berapa daya listrik maksimal Videotron Indoor?',
      a: 'Sangat efisien, hanya membutuhkan maksimal 200 W per meter persegi.',
    },
    {
      cat: 'teknis',
      q: 'Apa sistem pemeliharaan (maintenance) videotron HDe?',
      a: 'Mendukung Front Access (akses depan via magnetic tool) untuk seri indoor, dan Rear Access (akses belakang) untuk seri outdoor.',
    },
    {
      cat: 'teknis',
      q: 'Berapa daya yang dibutuhkan IFP 86 inci?',
      a: 'Maksimum konsumsi daya sekitar 450W (standby hemat energi < 0.5W).',
    },
    {
      cat: 'teknis',
      q: 'Apakah perlu menggunakan Stabilizer/UPS?',
      a: 'Kami sangat menyarankan penggunaan stabilizer/UPS untuk menjaga kestabilan tegangan listrik demi keawetan unit.',
    },
    {
      cat: 'teknis',
      q: 'Berapa temperatur operasional videotron?',
      a: 'Aman digunakan pada rentang suhu -20°C hingga 60°C.',
    },
    {
      cat: 'teknis',
      q: 'Bagaimana cara setting jadwal on/off otomatis?',
      a: 'Dapat diatur melalui software controller (NovaLCT / ViPlex) yang sudah termasuk dalam paket instalasi.',
    },
    {
      cat: 'teknis',
      q: 'Apa merk controller yang digunakan HDe?',
      a: 'Kami menggunakan controller standar industri terbaik dunia yaitu NovaStar.',
    },

    // GARANSI & LOKASI
    {
      cat: 'garansi',
      q: 'Berapa lama masa garansi produk HDe?',
      a: 'Seluruh produk HDe memiliki masa garansi resmi selama 1 hingga 2 tahun mencakup spare parts & service on-site.',
    },
    {
      cat: 'garansi',
      q: 'Apakah teknisi bisa datang ke luar kota?',
      a: 'Ya, teknisi kami melayani kunjungan On-Site Service ke seluruh wilayah Indonesia untuk perbaikan di tempat.',
    },
    {
      cat: 'garansi',
      q: 'Di mana saja Service Center HDe berada?',
      a: 'Kami memiliki jaringan support di Jakarta, Bandung, Surabaya, Medan, Makassar, Samarinda, hingga Ambon dan Ternate.',
    },
    {
      cat: 'garansi',
      q: 'Bagaimana prosedur klaim garansi?',
      a: 'Cukup buka menu Cek Garansi di website ini atau kirimkan Serial Number unit Anda ke Technical Support.',
    },
    {
      cat: 'garansi',
      q: 'Apakah ada biaya training operator?',
      a: 'Gratis. Setiap pembelian unit resmi sudah termasuk sesi training penggunaan software bagi staf dan tim Anda.',
    },
    {
      cat: 'garansi',
      q: 'Berapa nomor Technical Support HDe?',
      a: 'Hubungi tim technical support kami via WhatsApp di +62 819-4010-189 atau +62 813-8787-3874.',
    },
  ];

  const filteredFaqs = useMemo(() => {
    return faqData.filter((item) => {
      const matchCategory = activeCategory === 'all' || item.cat === activeCategory;
      const matchSearch =
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 py-24 md:py-32 text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 text-[10px] font-bold uppercase tracking-[0.25em] mb-4">
            Help & Knowledge Base
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight">
            Pusat Bantuan & Pertanyaan Umum
          </h1>
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari solusi (misal: 'P4', 'Android', 'Garansi', 'Daya')..."
              className="w-full p-5 pl-14 rounded-2xl text-slate-800 outline-none shadow-2xl focus:ring-4 focus:ring-blue-400/50 transition font-medium text-sm md:text-base bg-white"
            />
            <i className="fas fa-search absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-lg"></i>
          </div>
        </div>
      </section>

      {/* Categories & FAQ List */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {[
              { id: 'all', label: 'Semua' },
              { id: 'videotron', label: 'Videotron' },
              { id: 'ifp', label: 'Interactive Panel' },
              { id: 'teknis', label: 'Teknis & Daya' },
              { id: 'garansi', label: 'Garansi & Lokasi' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenIndex(null);
                }}
                className={`px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300"
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(idx)}
                      className="w-full p-6 text-left flex justify-between items-center group outline-none"
                    >
                      <span className="font-bold text-slate-800 group-hover:text-blue-600 transition text-sm md:text-base pr-4">
                        {item.q}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                          isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50'
                        }`}
                      >
                        <i className="fas fa-chevron-down text-xs transition-transform duration-300"></i>
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50">
                        <div className="border-l-4 border-blue-600 pl-4 py-1">{item.a}</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
              <i className="fas fa-search text-slate-300 text-5xl mb-4"></i>
              <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">
                Pertanyaan tidak ditemukan
              </p>
              <p className="text-slate-400 text-xs mt-1">Coba gunakan kata kunci lain atau hubungi support kami.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer Contact Support */}
      <section className="bg-slate-900 py-16 text-white text-center">
        <div className="container mx-auto px-6">
          <h3 className="font-black text-2xl md:text-3xl mb-4 uppercase tracking-tight">
            Belum Menemukan Jawaban?
          </h3>
          <p className="text-slate-400 text-sm max-w-md mx-auto mb-8">
            Tim teknisi HDe siap membantu menjawab pertanyaan teknis dan spesifikasi khusus proyek Anda.
          </p>
          <a
            href="https://wa.me/628194010189"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:scale-105 inline-flex items-center gap-3 shadow-xl shadow-blue-600/30"
          >
            <span>Hubungi Tim Teknis HDe</span>
            <i className="fab fa-whatsapp text-lg"></i>
          </a>
        </div>
      </section>
    </div>
  );
}
