import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../store/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const removeFromCart = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleUpdateQuantity = (itemId, quantity) => {
    if (quantity < 1) {
      removeFromCart(itemId);
    } else {
      dispatch(updateQuantity({ itemId, quantity }));
    }
  };

  return (
    <div className="bg-white border rounded-md shadow-sm p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      {/* Image + Info */}
      <div className="flex items-center gap-4">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <h3 className="text-base font-medium text-gray-800 ">{item.title}</h3>
          <p className="text-sm text-gray-600">₹{(item.price * 83).toFixed(2)}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
          className="w-8 h-8 text-gray-700 border border-gray-300 rounded hover:bg-gray-100 transition"
        >
          –
        </button>
        <span className="w-6 text-center text-sm">{item.quantity}</span>
        <button
          onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
          className="w-8 h-8 text-gray-700 border border-gray-300 rounded hover:bg-gray-100 transition"
        >
          +
        </button>
        <button
          onClick={() => removeFromCart(item.id)}
          className="ml-2 text-sm text-red-500 hover:text-red-600 transition"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
