// import { createStore } from 'redux';
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, show: true };

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.counter++;
        },
        decrement: (state) => {
            state.counter--;
        },
        increase: (state, action) => {
            state.counter = state.counter + action.payload;
        },
        toggleCounter: (state) => {
            state.show = !state.show;
        },
    }
});

// const counterReducer = (state = initialState, action) => {
//     // Never mutate the existing state always override it with Redux
//     // It can lead to bugs, unpredictable behavior
//     if(action.type === "increment") {
//         return {
//             counter: state.counter + 1,
//             show: state.show,
//         }
//     }
//
//     if(action.type === "increase") {
//         return {
//             counter: state.counter + action.amount,
//             show: state.show,
//         }
//     }
//
//     if(action.type === "decrement") {
//         return {
//             counter: state.counter - 1,
//             show: state.show,
//         }
//     }
//
//     if(action.type === "toggleCounter") {
//         return {
//             counter: state.counter,
//             show: !state.show,
//         }
//     }
//
//     return state;
// };
//
// const store = createStore(counterReducer);

const store = configureStore({
    reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;