import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        setCart : (state, action) => {
            state.items = action.payload;
        },
        addItem: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find((i) => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter((item) => item.id !== itemId);
        },
        updateQuantity: (state, action) => {
            const { itemId, quantity } = action.payload;
            const existingItem = state.items.find((item) => item.id === itemId);
            if(existingItem) {
                if (quantity <= 0) {
                    state.items = state.items.filter((item) => item.id !== itemId);
                } else {
                    existingItem.quantity = quantity;
                }
            }
        },

    }
})

export const { setCart, addItem, removeItem, updateQuantity } = cartSlice.actions;
export { cartSlice };
export default cartSlice.reducer;