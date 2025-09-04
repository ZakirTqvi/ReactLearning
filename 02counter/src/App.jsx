import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const remValue = () => {
    if (counter > 0){
       setCounter(counter - 1)
    }
   
  }
  return (
    <>
      <h1>React Counter App</h1>
      <h2>Conter:{counter}</h2>
      <button onClick={addValue}>increase</button>
      <br />
      <button onClick={remValue}>decrease</button>
    </>
  );
}

export default App;
