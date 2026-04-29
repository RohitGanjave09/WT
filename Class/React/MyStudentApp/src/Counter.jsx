import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [rcount, setrCount] = useState(0);

  return (
    <>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>increase</button>

      <button onClick={() => setCount(count - 1)}>decrearse</button>
    </>
  );
}

export default Counter;
