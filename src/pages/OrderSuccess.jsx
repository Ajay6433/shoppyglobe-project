import React from 'react';
import { useLocation } from 'react-router-dom';

const OrderSuccess = () => {

  // Accessing state passed via navigation (from CheckoutPage)
  const location = useLocation();

  // Destructure order details from location.state
  const { cartItems, shippingInfo, total } = location.state || {};

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 mt-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-green-600 mb-2">🎉 Order Placed Successfully!</h2>
        <p className="text-gray-600 text-sm">Thank you for shopping with ShoppyGlobe.</p>
      </div>

      {/* Shipping Info */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-2">Shipping Information</h3>
        <div className="text-sm text-gray-700 space-y-1">
          <p><strong>Name:</strong> {shippingInfo?.name}</p>
          <p><strong>Address:</strong> {shippingInfo?.address}</p>
          <p><strong>Phone:</strong> {shippingInfo?.phone}</p>
        </div>
      </div>

      {/* Order Summary */}
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-2">Order Summary</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          {cartItems?.map((item) => (
            <li key={item.id} className="flex justify-between">
              <span>{item.title} × {item.quantity}</span>
              <span>₹{(item.price * item.quantity * 83).toFixed(2)}</span>
            </li>
          ))}
        </ul>

        <div className="text-right font-semibold text-gray-800 border-t mt-4 pt-3">
          Total Paid: ₹{total}
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
