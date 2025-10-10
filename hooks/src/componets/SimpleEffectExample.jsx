import { useState, useEffect } from "react";

function SimpleEffectExample() {
  const [count, setCount] = useState(0);

  // useEffect: page load hone par chalega
  useEffect(() => {
    console.log("👋 Component load hua!");
  }, []); // empty array => sirf ek baar chalega

  // useEffect: jab bhi count badhe, ye chalega
  useEffect(() => {
    console.log(`🔢 Count badal gaya: ${count}`);
  }, [count]); // dependency me count diya hai

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>You clicked {count} times</h2>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default SimpleEffectExample;
