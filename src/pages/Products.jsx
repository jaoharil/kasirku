import React, { useEffect, useState } from 'react';
import { db } from '../Firebase';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import ProductForm from '../components/ProductForm';

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setProducts(items);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'products', id));
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manajemen Produk</h1>
      <ProductForm onSuccess={fetchProducts} />
      <div className="mt-6">
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2">Nama Produk</th>
              <th className="p-2">Harga</th>
              <th className="p-2">Stok</th>
              <th className="p-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-t">
                <td className="p-2">{p.name}</td>
                <td className="p-2">Rp {p.price.toLocaleString()}</td>
                <td className="p-2">{p.stock}</td>
                <td className="p-2">
                  <button onClick={() => handleDelete(p.id)} className="text-red-600">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
