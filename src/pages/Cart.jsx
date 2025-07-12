import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  //Performing items count
  const itemsCount = useMemo(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

  //Performing calculation for the total amount
  const totalAmount = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 mt-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Shopping Cart</h1>

      {/* Error handling when cart is empty using ternary operator */}
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">
          <img src="/emptyCart.png" alt="Empty Cart" className="w-28 h-28 mx-auto mb-4" />
          <p className="text-lg mb-3">Your cart is empty.</p>
          <Link
            to="/"
            className="inline-block px-5 py-2 border border-gray-300 text-sm text-gray-700 rounded hover:bg-gray-50 transition"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>

          <div className="border-t pt-6 text-right">
            <p className="text-gray-600 text-sm mb-2">
              You have <strong>{itemsCount}</strong> {itemsCount === 1 ? 'item' : 'items'} in your cart.
            </p>
            <p className="text-lg font-semibold text-gray-800">
              ₹{(totalAmount * 83).toFixed(2)}
            </p>
          </div>

          <button
            onClick={() => navigate('/checkout')}
            className="inline-block px-5 py-2 border border-gray-300 text-sm text-gray-700 rounded hover:bg-gray-50 transition"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
