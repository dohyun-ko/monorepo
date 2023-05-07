import Counter from "./Counter";
import { useState } from "react";

const CounterContainer = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Counter count={count} />
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default CounterContainer;
