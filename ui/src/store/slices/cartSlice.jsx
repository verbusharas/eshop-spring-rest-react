const {createSlice} = require("@reduxjs/toolkit");

const initialState = []

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            state.push(action.product)
        },
        removeFromCart(state, action) {
            return state.filter(product => product.id !== action.id);
        }
    }
})

export const {addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;