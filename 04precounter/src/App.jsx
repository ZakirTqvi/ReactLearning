
import './App.css'
import { useState } from 'react'

function App() {

  const [counter, setCounter] = useState(0)
  function addValue(){
    setCounter(preCounter => preCounter + 1)
     setCounter(preCounter => preCounter + 1)
      setCounter(preCounter => preCounter + 1)
       setCounter(preCounter => preCounter + 1)
   
  }
  return (
    <>
    <h1>Counter App</h1>
    <p>count:{counter}</p>
    <button onClick={addValue}>Add Value</button>
    </>
    
  )
}

export default App
