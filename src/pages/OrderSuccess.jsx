// src/pages/OrderSuccess.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const OrderSuccess = () => {
  const location = useLocation();
  const { cartItems, shippingInfo, total } = location.state || {};

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h2>🎉 Order Placed Successfully!</h2>

      <h3>Shipping Information</h3>
      <p><strong>Name:</strong> {shippingInfo?.name}</p>
      <p><strong>Address:</strong> {shippingInfo?.address}</p>
      <p><strong>Phone:</strong> {shippingInfo?.phone}</p>

      <h3>Order Summary</h3>
      <ul>
        {cartItems?.map(item => (
          <li key={item.id}>
            {item.name} × {item.quantity} = ₹{item.price * item.quantity}
          </li>
        ))}
      </ul>
      <p><strong>Total Paid:</strong> ₹{total}</p>
    </div>
  );
};

export default OrderSuccess;
