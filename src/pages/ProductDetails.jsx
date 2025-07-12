import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import toast from 'react-hot-toast';

function ProductDetails() {
  //Destructuring the id from the parameter 
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Fetching single product from the API based on its id
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  //Function to add product to the cart
  const addToCart = (product) => {
    toast.success(`${product.title} added to cart`);
    dispatch(addItem(product));
  };
  //Function to handle the buy now functionality
  const handleBuyNow = (product) => {
    toast.success(`Redirecting to checkout for ${product.title}`);
    dispatch(addItem(product));
    navigate('/checkout');
  };

  //Dynamic error handling
  if (loading) return <Spinner />;
  if (error) return <div className="text-center text-red-500 py-6">Error: {error.message}</div>;
  if (!product) return <div className="text-center text-gray-600 py-6">Product not found.</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 mt-8">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Product Image */}
        <div className="md:w-1/2">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-80 object-contain border rounded shadow-sm"
          />
        </div>

        {/* Product Info */}
        <div className="md:w-1/2">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">{product.title}</h1>
          {/* converting the price to INR  */}
          ₹{(product.price * 83).toFixed(2)}
          <p className="text-gray-600 text-sm mb-4">{product.description}</p>
          <p className="text-gray-500 text-sm mb-2">Category: {product.category}</p>
          <p className="text-sm text-gray-500 mb-2">In Stock: {product.stock}</p>
          <p className="text-sm text-gray-500 mb-4">Shipping: {product.shippingInformation || 'Ships in 3–5 days'}</p>

          <div className="flex gap-4 mb-6">
            <button
              onClick={() => addToCart(product)}
              className="px-4 py-2 border border-gray-300 text-sm text-gray-700 rounded hover:bg-gray-50 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={() => handleBuyNow(product)}
              className="px-4 py-2 bg-gray-900 text-white text-sm rounded hover:bg-black transition"
            >
              Buy Now
            </button>
          </div>

          {/* Reviews */}
          {product.reviews && product.reviews.length > 0 && (
            <div className="mt-6">
              <h3 className="text-md font-semibold text-gray-800 mb-2">Customer Reviews</h3>
              <div className="space-y-4">
                {product.reviews.map((review, index) => (
                  <div key={index} className="p-3 border border-gray-100 rounded bg-gray-50">
                    <p className="text-sm text-gray-700 mb-1">“{review.comment}”</p>
                    <p className="text-xs text-gray-500">— {review.reviewerName}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
