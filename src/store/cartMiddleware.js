import { cartSlice } from './cartSlice';

// List of cart-related actions we want to watch for.
// Example: If you have a shopping cart, these actions could be "add item", "remove item", or "set cart".
const CART_ACTIONS = [
    cartSlice.actions.addItem.type,    // e.g., User adds a product to their cart
    cartSlice.actions.removeItem.type, // e.g., User removes a product from their cart
    cartSlice.actions.setCart.type,    // e.g., Cart is loaded from server or reset
];

// Middleware to sync cart state to localStorage whenever cart changes.
// Think of this as a security camera that records every time someone adds/removes items from a shopping cart.
export const cartMiddleware = store => next => action => {
    // Pass the action to the next middleware/reducer first
    const result = next(action);

    // If the action is related to the cart (add, remove, set)
    if (CART_ACTIONS.includes(action.type)) {
        // Get the latest cart items from the store
        const items = store.getState().cart.items;

        // Save the cart items to localStorage so the cart persists if the user refreshes the page
        // Real world example: Like saving your shopping cart so you don't lose it if you close the browser
        localStorage.setItem('cart', JSON.stringify(items));
    }

    // Return the result of next(action) so the Redux flow continues
    return result;
};
