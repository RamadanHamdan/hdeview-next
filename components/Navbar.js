'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight > 0) {
        setScrollProgress((currentScrollY / docHeight) * 100);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsOpen(false);
      } else {
        setIsVisible(true);
      }

      setIsScrolled(currentScrollY > 40);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/tentang-kami', label: 'Tentang' },
    { href: '/panduan', label: 'Panduan' },
    { href: '/faq', label: 'FAQ' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[110] pointer-events-none">
        <div
          className="h-full bg-blue-500 transition-all duration-150 ease-out shadow-sm"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 transform ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'bg-slate-950/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-2'
            : 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-3'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo & Brand */}
          <Link
            href="/"
            onClick={(event) => {
              if (pathname === '/') {
                event.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center group relative py-1"
          >
            <div className="relative flex items-center justify-center min-w-[45px] md:min-w-[60px]">
              <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full scale-125 group-hover:scale-150 transition-transform duration-700 opacity-60"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/HDe-2.png"
                alt="HDe Technology Logo"
                className="h-9 md:h-12 w-auto object-contain relative z-10 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(37,99,235,0.4)]"
              />
            </div>
            <div className="ml-4 md:ml-6 text-[10px] font-bold text-slate-300 uppercase tracking-[0.25em] hidden lg:block border-l border-white/20 pl-4 leading-tight">
              Official<br />
              <span className="text-blue-400 font-black">Technology</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-6 text-[11px] font-bold tracking-[0.18em] uppercase text-slate-200">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors relative py-1 hover:text-blue-400 ${
                    isActive ? 'text-blue-400 font-extrabold' : 'text-slate-300'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/628194010189"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-5 py-2.5 rounded-full text-[10px] font-black tracking-widest hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-lg shadow-blue-900/30 uppercase"
            >
              <span>Hubungi Kami</span>
              <i className="fab fa-whatsapp ml-2 text-sm text-green-400"></i>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden w-10 h-10 flex items-center justify-center text-white text-lg bg-white/10 rounded-xl hover:bg-white/20 transition-all border border-white/10"
              aria-label="Toggle Navigation"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`xl:hidden transition-all duration-300 ease-in-out overflow-hidden border-t border-white/10 bg-slate-950/98 backdrop-blur-2xl px-6 ${
            isOpen ? 'max-h-[550px] py-6 opacity-100' : 'max-h-0 py-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="grid grid-cols-2 gap-3 mb-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                    isActive
                      ? 'bg-blue-600/20 text-blue-400 border-blue-500/40'
                      : 'bg-white/5 text-slate-300 border-white/5 hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <Link
              href="/tentang-kami"
              className="text-xs text-slate-400 py-2 hover:text-white transition"
            >
              <i className="fas fa-info-circle mr-2 text-blue-400"></i> Tentang Kami
            </Link>
            <Link
              href="/kebijakan-privasi"
              className="text-xs text-slate-400 py-2 hover:text-white transition"
            >
              <i className="fas fa-shield-alt mr-2 text-blue-400"></i> Kebijakan Privasi
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
