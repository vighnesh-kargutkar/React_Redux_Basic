import { configureStore, createSlice } from "@reduxjs/toolkit";

const initalstate = { counter: 0, show: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initalstate,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    show(state) {
      state.show = !state.show;
    },
  },
});

const initalAuthAtate = { isAuth: false };
const authSlice = createSlice({
  name: "authentication",
  initialState: initalAuthAtate,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
