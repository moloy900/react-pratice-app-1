import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../features/counterSlice";

const Store = configureStore({
    reducer:{
        counter: CounterSlice
    }
})

export default Store