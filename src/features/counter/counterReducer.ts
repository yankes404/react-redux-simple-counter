import { createSlice } from "@reduxjs/toolkit";

export const { reducer, actions } = createSlice({
    name: "counter",
    initialState: { value: 0 },
    reducers: {
        increment: (state, action) => {
            state.value += isNaN(action.payload.value) ? 1 : action.payload.value;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
});

export const { increment, decrement } = actions;