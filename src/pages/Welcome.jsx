import React from 'react';
import KasirIllustration from '../assets/undraw_creative-flow_t3kz.svg';

const Welcome = () => {
  return (
    <div className="text-center mt-10 flex flex-col items-center justify-center">
      <img src={KasirIllustration} alt="Kasir Illustration" className="w-40 h-40 mb-6" />

      <h2 className="text-2xl font-bold text-blue-600">Selamat Datang di KasirKU</h2>
      <p className="text-gray-700 mt-2">Kelola produk, transaksi, dan laporan toko kamu dengan mudah dan cepat.</p>
      <p className="text-sm text-gray-500 mt-1 italic">Silakan pilih menu di atas untuk mulai menggunakan sistem kasir.</p>
    </div>
  );
};

export default Welcome;
