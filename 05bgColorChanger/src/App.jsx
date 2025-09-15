import { useState } from "react";

function App() {
   const defaultColor = 'black';
   const [color, setColor] = useState(defaultColor)

  return (
    <div className="bg-slate-600 h-screen w-full "
     
    style={{backgroundColor:color}}
    >
      <footer className="fixed bottom-0 left-0 w-full bg-gray-600 p-4">
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={()=>setColor('red')}
          >
            Red
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={()=>setColor('green')}
          >
            Green
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={()=>setColor('blue')}
          >
            Blue
          </button>
          <button className="bg-cyan-300 text-white px-4 py-2 rounded"
          onClick={() =>setColor('cyan')}
          >
            Cyan
          </button>
          <button className="bg-yellow-300 text-black px-4 py-2 rounded"
          onClick={()=>setColor('yellow')}
          >
            Yellow
          </button>

          <button className={`px-4 py-2 rounded ${
            color === defaultColor ? "bg-gray-400 text-gray-200 cursor-not-allowed"
            : "bg-black text-white"
          }`}
          onClick={()=>setColor(defaultColor)}
          disabled = {color === defaultColor}
          >
            Default
          </button>

        </div>
      </footer>
    </div>
  );
}

export default App;
