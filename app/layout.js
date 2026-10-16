import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CookieBanner from '@/components/CookieBanner';

export const metadata = {
  title: 'HDe Technology | Solusi Visual Interaktif & Videotron Indonesia',
  description:
    'Penyedia solusi visual premium: Interactive Flat Panel (IFP), LED Videotron, dan Smart Recording System. Terpercaya untuk instansi pemerintah, pendidikan, dan korporasi.',
  keywords:
    'HDe Technology, Interactive Flat Panel, Videotron Indonesia, Meeting Recording System, E-Katalog LKPP, Solusi Visual Bandung',
  authors: [{ name: 'HDe Technology' }],
  metadataBase: new URL('https://hdeview.com'),
  openGraph: {
    title: 'HDe Technology | Solusi Visual Interaktif & Videotron',
    description: 'Transformasi ruang kolaborasi Anda dengan teknologi visual mutakhir dari HDe.',
    url: 'https://hdeview.com',
    siteName: 'HDe Technology',
    images: [
      {
        url: '/img/HDe-2.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HDe View | Solusi Visual Interaktif',
    description: 'Solusi visual interaktif berkualitas dunia untuk Indonesia.',
    images: ['/img/HDe-2.png'],
  },
  icons: {
    icon: '/img/favicon.png',
    apple: '/img/favicon.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Font Awesome 6 Icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        {/* Tailwind CSS CDN */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-blue-600 selection:text-white">
        <Navbar />
        <div className="flex-grow pt-16 md:pt-20">{children}</div>
        <Footer />
        <FloatingWhatsApp />
        <CookieBanner />
      </body>
    </html>
  );
}
