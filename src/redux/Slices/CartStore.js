import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./cartSlice";


export const CartStore = configureStore({
    reducer:{
        cart:CartSlice.reducer,
    }
})