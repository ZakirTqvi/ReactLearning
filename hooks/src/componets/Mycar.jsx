import { useState } from "react";

function MyCar(){
      const [car, setCar] = useState({
        brand:"Ford",
        model:"Mustang",
        year:"1964",
        color:"red"
      })

const updateColor = ()=>{
        setCar(prevoiusState => {
            return { ...prevoiusState, color: "blue"}
        }); 
     }

  return (
    <>
     <h1>My {car.brand}</h1>
     <p>
        It is a {car.color} {car.model} from {car.year}
     </p>
     <button onClick={updateColor}>change color</button>

    </>
  )
}

export default MyCar;