import { useRef, useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  const intarvalIdRef= useRef(null);

  const handleClick = ()=>{
    if(intarvalIdRef.current != null) return;
    intarvalIdRef.current= setInterval(()=>{
      setCount(count=>count+1);
    },1000)
  }

  const handleStop =()=>{
    clearInterval(intarvalIdRef.current);
    intarvalIdRef.current=null;
  }

  const handleReset =()=>{
    clearInterval(intarvalIdRef.current);
    intarvalIdRef.current = null
    setCount(0);
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className='text-center text-2xl w-full p-5 bg-gray-900 font-semibold text-white'>....useRef....</h1>

      <h3 className="text-xl font-semibold">Timer : {count}</h3>
      <div className="flex gap-5">
        <button onClick={handleClick} className="p-2 px-4 rounded-md cursor-pointer bg-gray-900 text-white font-semibold">Start</button>
        <button onClick={handleStop} className="p-2 px-4 rounded-md cursor-pointer bg-gray-900 text-white font-semibold">Stop</button>
        <button onClick={handleReset} className="p-2 px-4 rounded-md cursor-pointer bg-gray-900 text-white font-semibold">Reset</button>
      </div>
    </div>
  )
}

export default App
