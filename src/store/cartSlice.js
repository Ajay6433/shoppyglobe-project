import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Holds all cart items
  },
  reducers: {
    // Sets the cart items (e.g. from localStorage)
    setCart: (state, action) => {
      state.items = action.payload;
    },

    // Adds an item to the cart
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      // Increases quantity if item already exists
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        // Adds new item with quantity 1
        state.items.push({ ...item, quantity: 1 });
      }
    },

    // Removes an item from the cart
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },

    // Updates quantity of a specific item
    updateQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);

      if (existingItem) {
        // Removes item if quantity is 0 or less
        if (quantity <= 0) {
          state.items = state.items.filter((item) => item.id !== itemId);
        } else {
          // Updates the quantity
          existingItem.quantity = quantity;
        }
      }
    },

    // Clears all items from the cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { setCart, addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export { cartSlice };
export default cartSlice.reducer;
