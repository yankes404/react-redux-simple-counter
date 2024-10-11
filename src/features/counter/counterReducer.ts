import { createSlice } from "@reduxjs/toolkit";
import { isNumber } from "../../function/is-number";

export const { reducer, actions } = createSlice({
    name: "counter",
    initialState: { value: 0 },
    reducers: {
        increment: (state, action) => {
            state.value += isNumber(action.payload.value) ? action.payload.value : 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
});

export const { increment, decrement } = actions;