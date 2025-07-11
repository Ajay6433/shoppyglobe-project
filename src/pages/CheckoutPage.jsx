import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../store/cartSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const INR_RATE = 83;

  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    phone: '',
  });

  const handleChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!shippingInfo.name || !shippingInfo.address || !shippingInfo.phone) {
      toast.error('Please fill in all shipping fields.');
      return;
    }

    dispatch(clearCart());
    navigate('/order-success', {
      state: {
        cartItems,
        shippingInfo,
        total: (total * INR_RATE).toFixed(2),
      },
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Checkout</h2>

      {/* Shipping Form */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-700 mb-4">Shipping Details</h3>
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={shippingInfo.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={shippingInfo.address}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={shippingInfo.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Cart Summary */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-700 mb-4">Cart Summary</h3>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-2 text-sm text-gray-700">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>{item.title} × {item.quantity}</span>
                <span>₹{(item.price * item.quantity * INR_RATE).toFixed(2)}</span>
              </li>
            ))}
            <li className="pt-3 border-t text-right font-semibold text-gray-800">
              Total Amount: ₹{(total * INR_RATE).toFixed(2)}
            </li>
          </ul>
        )}
      </div>

      {/* Place Order */}
      <div className="text-center">
        <button
          onClick={handlePlaceOrder}
          className="px-6 py-2 text-sm bg-gray-900 text-white rounded hover:bg-black transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
