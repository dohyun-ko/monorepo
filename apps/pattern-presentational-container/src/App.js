import "./App.css";
import CounterContainer from "./basic/CounterContainer";
import CounterWithHook from "./withHook/CounterWithHook";
import { useState } from "react";

function App() {
  const [showHooks, setShowHooks] = useState(false);

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {!showHooks ? <CounterContainer /> : <CounterWithHook />}
      <button
        onClick={() => setShowHooks((prev) => !prev)}
        style={{
          marginTop: "50px",
        }}
      >
        {showHooks ? "Prev" : "Next"}
      </button>
    </div>
  );
}

export default App;
