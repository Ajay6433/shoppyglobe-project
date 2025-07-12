import { cartSlice } from './cartSlice';

// List of cart actions to watch for
const CART_ACTIONS = [
  cartSlice.actions.addItem.type,    // When user adds a product
  cartSlice.actions.removeItem.type, // When user removes a product
  cartSlice.actions.setCart.type,    // When cart is set or updated
];

// This middleware runs every time an action is dispatched
export const cartMiddleware = store => next => action => {
  // Action continue to reducers
  const result = next(action);

  // Condition to check if the action is one of the cart actions
  if (CART_ACTIONS.includes(action.type)) {
    // Getting updated cart items from the store
    const items = store.getState().cart.items;

    // Saving the cart to localStorage
    localStorage.setItem('cart', JSON.stringify(items));
  }
  return result;
};
