import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store";
const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.show);
  const dispatch = useDispatch();
  function increment() {
    dispatch(counterActions.increment());
  }
  function decrement() {
    dispatch(counterActions.decrement());
  }
  function increase() {
    dispatch(counterActions.increase(10));
  }
  function toggleCounterHandler() {
    dispatch(counterActions.show());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={increase}>Increase</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
