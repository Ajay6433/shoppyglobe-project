import React from 'react'

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import toast from 'react-hot-toast';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProduct();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }
  
  if (error) {
    return <div className="text-red-500 text-center mt-4">Error: {error.message}</div>;
  }
  
  if (!product) {
    return <div className="text-center mt-4">Product not found.</div>;
  }
  function addToCart(product){
    toast.success(`${product.title} is added to the cart`);
    console.log("Product added to cart:", product);
    dispatch(addItem(product));
  }
  
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.title} className="w-full h-auto object-contain max-h-96" />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-700 text-xl mb-4">${product.price}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-gray-500 text-sm">Category: {product.category}</p>
          <button 
          onClick={()=> addToCart(product)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails