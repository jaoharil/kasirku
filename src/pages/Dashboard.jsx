import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-white shadow-md p-4 rounded-lg mb-6">
        <h1 className="text-xl font-semibold">Dashboard KasirKU</h1>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">📦 Produk</div>
        <div className="bg-white p-4 rounded-lg shadow">💰 Transaksi</div>
        <div className="bg-white p-4 rounded-lg shadow">📊 Laporan</div>
      </div>
    </div>
  );
};

export default Dashboard;
