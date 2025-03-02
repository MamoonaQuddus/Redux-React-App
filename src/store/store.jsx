import { configureStore} from "@reduxjs/toolkit";
import productReducer from "./slices/productsSlice";
// import {productSlice} from "./slices/productsSlice"

export const store = configureStore({
    reducer: {
        // product: productReducer,
        productSlice: productReducer,
        // Add the reducer here 
    }});