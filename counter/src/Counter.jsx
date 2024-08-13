import React, { useState } from "react";

const Counter = ({ mul }) => {
  const [count, setCount] = useState(0);
  console.log(mul);
  return (
    <div className="bg-red-600">
      <p>Count :{count}</p>
      <button
        onClick={() => setCount((prevState) => (prevState + 1) * (mul || 2))}
      >
        Add
      </button>
    </div>
  );
};

export default Counter;
