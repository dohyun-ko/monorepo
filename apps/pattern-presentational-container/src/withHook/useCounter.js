import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
    console.log("increment");
  };
  const decrement = () => setCount((prev) => prev - 1);

  return { count, increment, decrement };
};

export default useCounter;
