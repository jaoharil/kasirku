import React, { useState } from 'react';
import { db } from '../Firebase';
import { collection, addDoc } from 'firebase/firestore';

const ProductForm = ({ onSuccess }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'products'), {
      name,
      price: parseInt(price),
      stock: parseInt(stock),
    });
    setName('');
    setPrice('');
    setStock('');
    if (onSuccess) onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1">Nama Produk</label>
        <input value={name} onChange={(e) => setName(e.target.value)} className="border p-2 rounded w-full" />
      </div>
      <div>
        <label className="block mb-1">Harga</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="border p-2 rounded w-full" />
      </div>
      <div>
        <label className="block mb-1">Stok</label>
        <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} className="border p-2 rounded w-full" />
      </div>
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
        Simpan
      </button>
    </form>
  );
};

export default ProductForm;
