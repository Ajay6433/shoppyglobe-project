import React from 'react'
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

    return (
        <div >
           <Link to={`product/${product.id}`} >

            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="max-w-md w-full p-6">
                {loading && <p className="text-blue-500 text-center">Loading...</p>}
                {error && <p className="text-red-500 text-center">Error: {error}</p>}
                {!loading && !error && product && (
                    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl">
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-36 h-36 object-contain mb-4 rounded-md shadow"
                        />
                        <h2 className="text-xl font-semibold mb-2 text-center text-gray-900">{product.title}</h2>
                        <p className="text-gray-600 mb-3 text-center line-clamp-2">{product.description}</p>
                        <p className="text-white bg-green-600 px-4 py-1 rounded-full font-bold text-lg mt-auto shadow">
                            ${product.price}
                        </p>
                        <button
                            onClick={() => addToCart(product)}
                            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                        >
                            Add to Cart
                        </button>
                    </div>
                )}
                {!loading && !error && !product && (
                    <p className="text-center text-gray-500">No product available.</p>
                )}
            </div>
        </div></Link>
        </div>
    )
}

export default ProductItem
