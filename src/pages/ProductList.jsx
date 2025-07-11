import React, { useState, useEffect } from 'react';
import useProductsData from '../hooks/useProductsData';
import ProductItem from '../components/ProductItem';
import Spinner from '../components/Spinner';

function ProductList() {
  const { products, loading, error } = useProductsData();
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      setProductsData(products);
    }
  }, [products]);

  const handleSearch = (searchQuery) => {
    if (!searchQuery) {
      setProductsData(products);
    } else {
      const filtered = products.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setProductsData(filtered);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 mt-8">
      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search for products..."
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Loading Spinner */}
      {loading && <Spinner />}

      {/* Error Message */}
      {error && (
        <div className="text-center text-red-600">
          <img
            src="/noData.jpg"
            alt="No Data"
            className="mx-auto mb-4 w-64 h-auto"
          />
          <p className="text-lg font-medium">Failed to fetch products. Please try again.</p>
        </div>
      )}

      {/* Product Grid */}
      {!loading && !error && productsData.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsData.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition duration-200 p-4"
            />
          ))}
        </div>
      )}

      {/* No Products Found (after search) */}
      {!loading && !error && productsData.length === 0 && (
        <div className="text-center mt-10 text-gray-600 text-lg">
          <p>No products found matching your search.</p>
        </div>
      )}
    </div>
  );
}

export default ProductList;
