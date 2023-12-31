import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
}

export const numberSlice = createSlice({
    name: 'number',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})