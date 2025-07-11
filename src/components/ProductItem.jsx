import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../store/cartSlice';
import toast from 'react-hot-toast';

function ProductItem({ product, loading, error }) {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    toast.success(`${product.title} added to cart!`);
    dispatch(addItem(product));
  };

  if (loading) {
    return <p className="text-blue-500 text-center py-8">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center py-8">Error: {error}</p>;
  }

  if (!product) {
    return <p className="text-center text-gray-500 py-8">No product available.</p>;
  }

  return (
    <div className="bg-white border rounded-md shadow-sm hover:shadow-md transition p-4 text-center">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-40 object-contain mb-3 rounded"
        />
        <h2 className="text-base font-medium text-gray-800 mb-1 truncate">{product.title}</h2>
        <p className="text-sm text-gray-500 mb-2 line-clamp-2">{product.description}</p>
        <p className="text-sm font-semibold text-gray-700 mb-3">₹{product.price}</p>
      </Link>

      <button
        onClick={() => addToCart(product)}
        className="w-full border border-gray-300 text-sm text-gray-700 rounded-md py-1.5 hover:bg-gray-50 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;
