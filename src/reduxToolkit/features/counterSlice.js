import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name: "Counter",
    initialState: 0,
    reducers: {
        Increment: (state, action) => state + 1,
        Decrement: (state, action) => state - 1
    }
})

export const { Increment, Decrement } = CounterSlice.actions;
export default CounterSlice.reducer;