import React from 'react'
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../store/cartSlice';

function CartItem({ item }) {
    const dispatch = useDispatch();
    const removeFromCart = (itemId) => {
        dispatch(removeItem(itemId));
    };
    const handleUpdateQuantity = (itemId, quantity) => {
        if (quantity < 0) return; // Prevent negative quantity
        if (quantity === 0) {
            removeFromCart(itemId);
            return;
        }
        dispatch(updateQuantity({ itemId, quantity }));
    };


  return (
    <div>
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between">
            <div className="flex items-center">
            <img
                src={item.thumbnail}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-md mr-4"
            />
            <div>
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>
            </div>
            <div className="flex items-center">
            <button
                onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                className="px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
            >
                -
            </button>
            <span className="mx-2">{item.quantity}</span>
            <button
                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                className="px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
            >
                +
            </button>
            <button
                onClick={() => removeFromCart(item.id)}
                className="ml-4 text-red-500 hover:text-red-700"
            >
                Remove
            </button>
            </div>
        </div>
    </div>
  )
}

export default CartItem