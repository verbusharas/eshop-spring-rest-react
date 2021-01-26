import _ from "lodash";
import {loadFromStorage, saveToStorage} from "../../utils/localStorage";
import {createSlice} from "@reduxjs/toolkit";

const initialState = []

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, {payload:product}) {
            state.push(product)
        },
        removeFromCart(state, {payload:id}) {
            return state.filter(product => product.id !== id);
        }
    }
})

let prevCart = initialState;

export const subscribeToCartChanges = (store) => {
    store.subscribe(_.throttle(() => {
        const currentCart = store.getState().cart
        if (prevCart !== currentCart) {
            prevCart = currentCart;
            saveToStorage("cart", currentCart)
        }

    }, 1000))
}

export const loadCartFromStorage = () => loadFromStorage("cart");

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;