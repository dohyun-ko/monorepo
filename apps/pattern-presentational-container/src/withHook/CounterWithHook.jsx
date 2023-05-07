import useCounter from "./useCounter";

const CounterWithHook = ({}) => {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h1>Counter with Hook</h1>

      <p
        style={{
          fontSize: "1.5rem",
          color: count > 0 ? "green" : count < 0 ? "red" : "black",
        }}
      >
        Count: {count}
      </p>

      <button
        onClick={() => {
          decrement();
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          increment();
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default CounterWithHook;
