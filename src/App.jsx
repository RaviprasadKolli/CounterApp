import { useState } from 'react';
import './App.css';

let App = () => {
  const [count, setCount] = useState(0);
  let handleClick = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div>
        <h1>CounterApp</h1>
      </div>
      <div>
        <h2>Count :- {count}</h2>
        <button onClick={handleClick}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </>
  );
};

export default App;
