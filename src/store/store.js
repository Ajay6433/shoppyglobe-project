import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import { cartMiddleware } from './cartMiddleware';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartMiddleware),
});
