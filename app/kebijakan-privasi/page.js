import Link from 'next/link';

export const metadata = {
  title: 'Kebijakan Privasi - HDe Technology',
  description: 'Kebijakan privasi dan perlindungan data pengguna resmi HDe Technology.',
};

export default function KebijakanPrivasiPage() {
  return (
    <div className="bg-white text-slate-800 min-h-screen py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="mb-12">
          <span className="text-blue-600 font-bold tracking-[0.25em] uppercase text-xs mb-3 block">
            Legalitas & Transparansi
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Kebijakan Privasi
          </h1>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full mb-4"></div>
          <p className="text-slate-400 text-xs italic">
            Terakhir diperbarui: 7 Januari 2026
          </p>
        </div>

        <div className="space-y-10 text-slate-600 leading-relaxed text-sm md:text-base">
          <section>
            <h3 className="font-bold text-slate-900 text-xl mb-3 tracking-tight">
              1. Komitmen Privasi
            </h3>
            <p>
              HDe Technology (&quot;Kami&quot;) berkomitmen untuk melindungi dan menghormati privasi setiap pelanggan dan pengunjung situs web kami. Kebijakan ini menjelaskan bagaimana data pribadi Anda dikumpulkan, digunakan, dan dijaga keamanannya sesuai dengan standar perlindungan data yang berlaku di Indonesia.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-slate-900 text-xl mb-3 tracking-tight">
              2. Informasi yang Kami Kumpulkan
            </h3>
            <p className="mb-4">Kami mengumpulkan informasi melalui beberapa saluran interaksi, antara lain:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>Informasi Identitas:</strong> Nama lengkap dan instansi / perusahaan Anda.
              </li>
              <li>
                <strong>Informasi Kontak:</strong> Alamat email dan nomor telepon / WhatsApp yang Anda berikan saat mengajukan tiket bantuan atau konsultasi penawaran.
              </li>
              <li>
                <strong>Data Produk:</strong> Nomor seri perangkat (Serial Number S/N) dan bukti serah terima untuk verifikasi masa garansi dan rekam QC.
              </li>
              <li>
                <strong>Data Teknis:</strong> Alamat IP, preferensi browser, dan informasi log untuk keamanan infrastruktur situs.
              </li>
            </ul>
          </section>

          <div className="p-6 bg-blue-50 rounded-2xl border border-blue-200 flex gap-4 items-start">
            <i className="fas fa-shield-alt text-blue-600 text-2xl mt-1"></i>
            <p className="text-blue-900 text-sm leading-relaxed font-medium">
              &quot;HDe Technology menjamin bahwa data pribadi Anda tidak akan pernah dijual, disewakan, atau dibagikan kepada pihak ketiga untuk tujuan periklanan tanpa persetujuan tertulis dari Anda.&quot;
            </p>
          </div>

          <section>
            <h3 className="font-bold text-slate-900 text-xl mb-3 tracking-tight">
              3. Penggunaan Informasi
            </h3>
            <p className="mb-4">Informasi yang kami kumpulkan digunakan secara terbatas untuk:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Menyediakan layanan purna jual dan bantuan teknis yang responsif.</li>
              <li>Memproses klaim garansi hardware, inspeksi on-site, dan penggantian spare part.</li>
              <li>Mengirimkan informasi pembaruan sistem operasi atau firmware produk yang relevan.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-slate-900 text-xl mb-3 tracking-tight">
              4. Keamanan Data
            </h3>
            <p>
              Kami menerapkan langkah-langkah keamanan teknis terstandar dan enkripsi untuk melindungi data Anda dari akses yang tidak sah, pengubahan, atau kebocoran data.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-slate-900 text-xl mb-3 tracking-tight">
              5. Hubungi Kami
            </h3>
            <p>
              Jika Anda memiliki pertanyaan mengenai kebijakan privasi ini atau ingin mengajukan permohonan penghapusan data, silakan hubungi kami melalui:
            </p>
            <div className="mt-4 p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-2 text-sm">
              <p className="flex items-center gap-3">
                <i className="fas fa-envelope text-blue-600"></i> info@hde.co.id / support@hde.co.id
              </p>
              <p className="flex items-center gap-3">
                <i className="fab fa-whatsapp text-blue-600"></i> +62 819-4010-189
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
