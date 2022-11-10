import { createSlice } from "@reduxjs/toolkit";

// counter: 0

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: []
    },
    reducers: {
        increment: (state, countUpdate) => {
            console.log('display' , countUpdate);//
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1
        }
    }
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;


// action.js
//action methods
// export const onIncrement = () => {
//     return {

//     }
// }


// reducer.js

// const initState = {
//     counter: 0,
// }

// const reducer = () => {
//     return state;
// }


//apartments (get), 
// specific apartments (get),
// join out team(post) createApi
//  modal,
