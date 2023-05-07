const Counter = ({ count }) => {
  return (
    <div>
      <h1>Counter</h1>
      <p
        style={{
          fontSize: "1.5rem",
          color: count > 0 ? "green" : count < 0 ? "red" : "black",
        }}
      >
        Count: {count}
      </p>
    </div>
  );
};

export default Counter;
