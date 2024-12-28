import { createStore } from "redux";
const initalstate = {
  counter: 0,
  show: true,
};
const counterReducer = (state = initalstate, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "increase":
      return {
        ...state,
        counter: state.counter + action.amount,
      };
    case "show":
      return {
        ...state,
        show: !state.show,
      };
    default:
      break;
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
