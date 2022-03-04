import { useState } from "react";

export function Counter(props) {
  const [count, setCount] = useState(props.val);
  function handleChange(value) {
    return setCount(count + value);
  }
  function double() {
    return setCount(count * 2);
  }
  return (
    <>
      <h1>Counter: {count}</h1>
      <button
        onClick={() => {
          handleChange(1);
        }}
      >
        Add +1
      </button>
      <button
        onClick={() => {
          handleChange(-1);
        }}
      >
        Sub -1
      </button>
      <button
        onClick={() => {
          double();
        }}
      >
        Double
      </button>
    </>
  );
}
