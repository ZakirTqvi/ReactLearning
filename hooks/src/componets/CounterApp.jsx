import { useState, useCallback } from "react";

function CounterApp() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

   // Without useCallback — ye function har render me naya banega
  // With useCallback — React ise "yaad" rakhega jab tak count change na ho

  const increase = useCallback(() => {
    setCount((prevcount) => prevcount + 1);
     setCount((prevcount) => prevcount + 1);
      setCount((prevcount) => prevcount + 1);
       setCount((prevcount) => prevcount + 1);
  }, []); // empty array => function sirf ek baar banega
  

  

  return (
     <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Count: {count}</h2>
      <button onClick={increase}>Increase</button>

      <br /><br />

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  )
}

export default CounterApp;