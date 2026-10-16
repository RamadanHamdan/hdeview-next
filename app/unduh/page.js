'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

export default function UnduhPage() {
  const [activeCategory, setActiveCategory] = useState('all'); // 'all' | 'manual' | 'legal'
  const [searchQuery, setSearchQuery] = useState('');
  const [copyToast, setCopyToast] = useState(false);

  const documents = [
    {
      id: 1,
      category: 'legal',
      title: 'Sertifikat TKDN - Interactive Flat Panel',
      type: 'Dokumen Resmi Negara • PNG/PDF',
      tkdn: 'TKDN 40.25%',
      releaseDate: 'TA 2026',
      icon: 'fas fa-certificate text-amber-600',
      iconBg: 'bg-amber-100',
      viewUrl: '/img/sertifikat/ifphde.png',
      downloadUrl: '/img/sertifikat/ifphde.png',
      downloadFilename: 'Sertifikat_TKDN_IFP_HDe.png',
    },
    {
      id: 2,
      category: 'legal',
      title: 'Sertifikat TKDN - HDe LED Videotron',
      type: 'Dokumen Resmi Negara • PNG/PDF',
      tkdn: 'TKDN 40.25%',
      releaseDate: 'TA 2026',
      icon: 'fas fa-certificate text-amber-600',
      iconBg: 'bg-amber-100',
      viewUrl: '/img/sertifikat/videotronhde.png',
      downloadUrl: '/img/sertifikat/videotronhde.png',
      downloadFilename: 'Sertifikat_TKDN_HDe_Videotron.png',
    },
    {
      id: 3,
      category: 'legal',
      title: 'Sertifikat TKDN - HDe Meeting Recording',
      type: 'Dokumen Resmi Negara • PNG/PDF',
      tkdn: 'TKDN 40.25%',
      releaseDate: 'TA 2026',
      icon: 'fas fa-certificate text-amber-600',
      iconBg: 'bg-amber-100',
      viewUrl: '/img/sertifikat/mrs.png',
      downloadUrl: '/img/sertifikat/mrs.png',
      downloadFilename: 'Sertifikat_TKDN_HDe_Meeting_Recording.png',
    },
    {
      id: 4,
      category: 'manual',
      title: 'Manual Book - HDe Interactive Flat Panel',
      type: 'Technical User Guide • PDF',
      tkdn: 'TKDN 40.25%',
      releaseDate: '02 Jan 2026',
      icon: 'fas fa-book-open text-indigo-600',
      iconBg: 'bg-indigo-100',
      viewUrl: '/docs/KatalogHDe.pdf',
      downloadUrl: '/docs/ifphde.pdf',
      downloadFilename: 'Manual_HDe_IFP.pdf',
    },
    {
      id: 5,
      category: 'manual',
      title: 'Manual Book - HDe LED Videotron',
      type: 'Technical Specification Guide • Image/PDF',
      tkdn: 'TKDN 40.25%',
      releaseDate: '02 Jan 2026',
      icon: 'fas fa-book-open text-indigo-600',
      iconBg: 'bg-indigo-100',
      viewUrl: '/docs/katalogvideotron.png',
      downloadUrl: '/docs/katalogvideotron.png',
      downloadFilename: 'Manual_HDe_LED_Videotron.png',
    },
    {
      id: 6,
      category: 'manual',
      title: 'Manual Book - HDe Meeting Recording System',
      type: 'Datasheet & User Manual • PDF',
      tkdn: 'TKDN 40.25%',
      releaseDate: '02 Jan 2026',
      icon: 'fas fa-book-open text-indigo-600',
      iconBg: 'bg-indigo-100',
      viewUrl: '/docs/Datasheet Meet Recording HDe.pdf',
      downloadUrl: '/docs/Datasheet Meet Recording HDe.pdf',
      downloadFilename: 'Manual_HDe_Meeting_Recording.pdf',
    },
  ];

  const filteredDocs = useMemo(() => {
    return documents.filter((doc) => {
      const matchCategory = activeCategory === 'all' || doc.category === activeCategory;
      const matchQuery =
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.type.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [activeCategory, searchQuery]);

  const handleCopyLink = (url) => {
    const fullUrl = window.location.origin + url;
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopyToast(true);
      setTimeout(() => setCopyToast(false), 2500);
    });
  };

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <main className="flex-grow py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Header */}
          <div className="mb-12">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.25em] mb-3 block">
              Documentation & Certification
            </span>
            <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight text-slate-900">
              Pusat Unduhan Resmi
            </h1>
            <p className="text-slate-600 max-w-2xl text-sm md:text-base leading-relaxed">
              Temukan manual book, brosur teknis, dan sertifikat legalitas TKDN resmi untuk seluruh lini produk HDe Technology.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="space-y-6 mb-10">
            <div className="max-w-xl">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i className="fas fa-search text-slate-400 group-focus-within:text-blue-600 transition-colors"></i>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari dokumen, sertifikat, atau produk..."
                  className="w-full bg-white border border-slate-200 text-slate-900 text-sm rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 block pl-11 p-4 shadow-sm transition-all outline-none"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveCategory('all')}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeCategory === 'all'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                Semua
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory('manual')}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeCategory === 'manual'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                Manual Book
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory('legal')}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeCategory === 'legal'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                Legalitas & TKDN
              </button>
            </div>
          </div>

          {/* Table Container */}
          <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden">
            {filteredDocs.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="p-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                        Informasi Dokumen
                      </th>
                      <th className="p-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 text-center">
                        TKDN / Sertifikasi
                      </th>
                      <th className="p-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hidden md:table-cell text-center">
                        Terbit
                      </th>
                      <th className="p-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 text-right">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredDocs.map((doc) => (
                      <tr
                        key={doc.id}
                        className={`transition-colors hover:bg-slate-50/80 ${
                          doc.category === 'legal' ? 'bg-amber-50/20' : ''
                        }`}
                      >
                        <td className="p-6">
                          <div className="flex items-center gap-4">
                            <div
                              className={`w-12 h-12 ${doc.iconBg} rounded-2xl flex items-center justify-center flex-none border border-slate-200 shadow-sm`}
                            >
                              <i className={`${doc.icon} text-lg`}></i>
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900 text-sm">{doc.title}</h4>
                              <p className="text-[11px] text-slate-500 font-medium uppercase mt-0.5 tracking-wider flex items-center gap-1">
                                <i className="far fa-file-pdf text-blue-500"></i> {doc.type}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="p-6 text-center whitespace-nowrap">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black bg-emerald-600 text-white shadow-sm">
                            <i className="fas fa-check-circle text-[9px]"></i> {doc.tkdn}
                          </span>
                        </td>
                        <td className="p-6 hidden md:table-cell text-center font-mono text-xs text-slate-500 font-semibold whitespace-nowrap">
                          {doc.releaseDate}
                        </td>
                        <td className="p-6 text-right whitespace-nowrap">
                          <div className="flex justify-end items-center gap-2">
                            <button
                              type="button"
                              onClick={() => handleCopyLink(doc.downloadUrl)}
                              title="Salin Link Dokumen"
                              className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 text-slate-500 hover:bg-blue-50 hover:text-blue-600 transition-all text-xs"
                            >
                              <i className="fas fa-link"></i>
                            </button>

                            <a
                              href={doc.viewUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                            >
                              <i className="fas fa-eye text-xs"></i> Lihat
                            </a>

                            <a
                              href={doc.downloadUrl}
                              download={doc.downloadFilename}
                              className={`px-4 py-2 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2 ${
                                doc.category === 'legal'
                                  ? 'bg-amber-600 hover:bg-amber-700 shadow-amber-600/20'
                                  : 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/20'
                              }`}
                            >
                              <i className="fas fa-download text-xs"></i> Unduh
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="py-20 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 text-slate-400 rounded-full mb-4">
                  <i className="fas fa-search text-3xl"></i>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Dokumen tidak ditemukan</h3>
                <p className="text-slate-500 text-xs">Coba gunakan kata kunci pencarian atau kategori lain.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Copy Toast Notification */}
      <div
        className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] transition-all duration-300 pointer-events-none ${
          copyToast ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="bg-slate-900 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/10">
          <div className="bg-emerald-500 w-6 h-6 rounded-full flex items-center justify-center text-xs">
            <i className="fas fa-check"></i>
          </div>
          <span className="text-xs font-bold">Link dokumen berhasil disalin ke clipboard!</span>
        </div>
      </div>
    </div>
  );
}
