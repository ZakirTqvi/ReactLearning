import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let counter = 12;
const addValue = () => {
  console.log("value added", Math.random())
  counter = counter + 1;
}
  return (
    <>
      <h1>React Learning</h1>
      <p>Conter:{counter}</p>
      <button onClick={addValue}>increase</button><br />
      <button>decrease</button>
    </>
  )
}

export default App
