import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>
      <h1
        style={{
          backgroundColor: count > 5 ? "teal" : "yellow",
          transition: "all 0.2s ease",
        }}
      >
        {count}
      </h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default App;
