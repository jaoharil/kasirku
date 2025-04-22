import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Products from './Products';
import Welcome from './Welcome';
// import Transaksi from './Transaksi'; // Siapkan nanti
// import Laporan from './Laporan';     // Siapkan nanti

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-white shadow-md p-4 rounded-lg mb-6">
        <h1 className="text-xl font-semibold">Dashboard KasirKU</h1>
      </header>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow cursor-pointer hover:bg-blue-100 transition" onClick={() => setActiveMenu('produk')}>
          📦 Produk
        </div>
        <div className="bg-white p-4 rounded-lg shadow cursor-pointer hover:bg-blue-100 transition" onClick={() => setActiveMenu('transaksi')}>
          💰 Transaksi
        </div>
        <div className="bg-white p-4 rounded-lg shadow cursor-pointer hover:bg-blue-100 transition" onClick={() => setActiveMenu('laporan')}>
          📊 Laporan
        </div>
      </div>

      {/* Konten berdasarkan menu */}
      <div className="bg-white p-4 rounded-lg shadow">
        {activeMenu === 'produk' && <Products />}
        {activeMenu === 'transaksi' && <p>Halaman Transaksi akan ditampilkan di sini</p>}
        {activeMenu === 'laporan' && <p>Halaman Laporan akan ditampilkan di sini</p>}
        {!activeMenu && <Welcome />}
      </div>
    </div>
  );
};

export default Dashboard;
