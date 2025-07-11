import React from 'react'
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux'

function Cart() {
    const cartItems = useSelector((state) => state.cart.items);
    console.log("Cart Items:", cartItems);
  return (
    <div>
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Shopping Cart</h1>
        {cartItems.length === 0 ? (
            <div className="text-center text-gray-500 text-lg">Your cart is empty.</div>
        ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {cartItems.map(item => (
                    <CartItem key={item.id} item={item} />
                ))}
                <li className="col-span-2 text-center text-gray-600">
                    <img src="/cart.png" alt="Cart" className="mx-auto w-24 h-24 mb-4" />
                    <p className="text-lg font-semibold">You have {cartItems.length} items in your cart.</p>
                </li>
                <li className="col-span-2 text-right text-lg font-semibold">
                    Total: ${cartItems.reduce((total, item) => total + item.price * item
.quantity, 0).toFixed(2)}
                </li>

            </ul>
        )}
    </div>
  )
}

export default Cart