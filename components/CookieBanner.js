'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('hde_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('hde_cookie_consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <aside
      aria-label="Cookie consent banner"
      className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-sm z-[100] animate-fade-in"
    >
      <div className="bg-slate-900 border border-white/10 p-6 rounded-[2rem] shadow-2xl backdrop-blur-xl">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0 text-blue-400">
            <i className="fas fa-cookie-bite text-lg"></i>
          </div>
          <div>
            <h5 className="text-white font-bold text-sm uppercase tracking-wider">
              Pengalaman Lebih Baik
            </h5>
            <p className="text-slate-400 text-xs leading-relaxed mt-1">
              Kami menggunakan cookies untuk meningkatkan performa situs dan kenyamanan interaksi Anda.
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            onClick={accept}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-black py-2.5 rounded-xl uppercase tracking-wider transition-all"
          >
            Setuju
          </button>
          <Link
            href="/kebijakan-privasi"
            className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-black py-2.5 rounded-xl uppercase tracking-wider text-center transition-all border border-white/5"
          >
            Detail
          </Link>
        </div>
      </div>
    </aside>
  );
}
