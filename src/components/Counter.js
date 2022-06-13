import classes from './Counter.module.css';
import { counterActions } from '../store/counter';
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const shown = useSelector(state => state.counter.shown)
  
  

  const incrementCounterHandler = () => {
    dispatch(counterActions.increment())
  };
  const incrementBy5CounterHandler = () => {
    dispatch(counterActions.incrementBy5(10))
  };
  const decrementCounterHandler = () => {
    dispatch(counterActions.decrement())
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {shown && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementCounterHandler}>Increment</button>
      <button onClick={incrementBy5CounterHandler}>Increment by 5</button>
      <button onClick={decrementCounterHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
