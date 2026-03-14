// import { createStore } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./counter";
import authSliceReducer from "./auth";

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
    reducer: { counter: counterSliceReducer, auth: authSliceReducer },
});

export default store;