// src/pages/CheckoutPage.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {clearCart} from '../store/cartSlice';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
      alert('Please fill in all shipping fields.');
      return;
    }


    dispatch(clearCart());
    navigate('/order-success', {
      state: {
        cartItems,
        shippingInfo,
        total,
      },
    });
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h2>Checkout</h2>

      {/* Shipping Details */}
      <div style={{ marginBottom: '30px' }}>
        <h3>Shipping Details</h3>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={shippingInfo.name}
          onChange={handleChange}
          style={{ display: 'block', marginBottom: 10, width: '100%' }}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={shippingInfo.address}
          onChange={handleChange}
          style={{ display: 'block', marginBottom: 10, width: '100%' }}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={shippingInfo.phone}
          onChange={handleChange}
          style={{ display: 'block', marginBottom: 10, width: '100%' }}
        />
      </div>

      {/* Cart Summary */}
      <div style={{ marginBottom: '30px' }}>
        <h3>Cart Summary</h3>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul style={{ paddingLeft: 0 }}>
            {cartItems.map((item) => (
              <li key={item.id} style={{ listStyle: 'none', marginBottom: 10 }}>
                <div>
                  <strong>{item.name}</strong> × {item.quantity} = ₹{item.price * item.quantity}
                </div>
              </li>
            ))}
          </ul>
        )}
        <p><strong>Total Amount: ₹{total}</strong></p>
      </div>

      {/* Place Order Button */}
      <button onClick={handlePlaceOrder} style={{ padding: '10px 20px', fontSize: 16 }}>
        Place Order
      </button>
    </div>
  );
};

export default CheckoutPage;
