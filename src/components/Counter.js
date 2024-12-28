import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.show);
  const dispatch = useDispatch();
  function increment() {
    dispatch({ type: "increment" });
  }
  function decrement() {
    dispatch({ type: "decrement" });
  }
  function increase() {
    dispatch({ type: "increase", amount: 5 });
  }
  function toggleCounterHandler() {
    dispatch({ type: "show" });
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
