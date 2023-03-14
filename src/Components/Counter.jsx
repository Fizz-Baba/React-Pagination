import React, { useState } from "react";
function Counter() {
  let [value, setValue] = useState(0);
  const handleDecrement = () => {
    setValue(value - 1);
    console.log("Decrement was clicked");
  };
  const handleIncrement = () => {
    setValue(value + 1);
    console.log("Increment was clicked");
  };

  // useEffect
  // React.useEffect(() => {
  //   console.log ('An effect was fired')
  //   console.log (document.title)
  //   document.title = `Count is ${value}`
  // }, [value])

  return (
    <>
      <h1> {value} </h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}

export default Counter;
