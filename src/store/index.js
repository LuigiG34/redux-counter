// import { createStore } from 'redux';
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, show: true };
const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
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

const initialAuthState = { isAuthenticated: false };
const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        login: (state) => {
            state.auth = true;
        },
        logout: (state) => {
            state.auth = false;
        },
    }
})

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
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;

export default store;