import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import { cartMiddleware } from './cartMiddleware';

// Getting cart items from localStorage when app loads
const loadCartState = () => {
  try {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

// Redux store
export const store = configureStore({
  reducer: {
    cart: cartSlice, // Cart slice reducer
  },
  preloadedState: {
    cart: {
      items: loadCartState(), // Load saved cart items
    },
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartMiddleware), // Added custom middleware
});
