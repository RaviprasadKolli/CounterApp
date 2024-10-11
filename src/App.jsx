import { useState } from 'react';
import './App.css';

let App = () => {
  let [count, setCount] = useState(0);
  let handleClick = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  let handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  let reset = ()=>{
    setCount(count=0)
  }
  return (
    <>
      <div>
        <h1>CounterApp</h1>
      </div>
      <div>
        <h2>Count :- {count}</h2>
        <button onClick={handleClick}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
};

export default App;
