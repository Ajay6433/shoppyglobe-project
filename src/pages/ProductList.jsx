import React, { useState, useEffect } from 'react';
import useProductsData from '../hooks/useProductsData';
import ProductItem from '../components/ProductItem';
import Spinner from '../components/Spinner';

function ProductList() {
  const { products, loading, error } = useProductsData();
  const [productsData, setProductsData] = useState([]);

  // Sync products into productsData once fetched
  useEffect(() => {
    if (products && products.length > 0) {
      setProductsData(products);
    }
  }, [products]);

  const handleSearch = (searchQuery) => {
    if (!searchQuery) {
      setProductsData(products); // reset
    } else {
      const filtered = products.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setProductsData(filtered);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <input
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search for product here"
        className="mb-6 w-full p-2 border border-gray-300 rounded"
      />
      
      {loading && <Spinner />}

      {error && (
        <div className="text-center text-red-500 text-lg">
          <img src='/noData.jpg' alt="No Data" className="mx-auto mb-4 w-84 h-84" />
          <p className="font-semibold text-xl mt-2">Failed to fetch products</p>
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsData.map(product => (
            <ProductItem
              key={product.id}
              product={product}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 p-4"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
