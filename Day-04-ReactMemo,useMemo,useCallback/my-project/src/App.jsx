import { useMemo, useState } from "react"
import ReactMemo from "./components/ReactMemo"
import UseMemo from "./components/UseMemo";


function App() {
  const [count, setCount] =useState(0);

  const obj = useMemo(()=>{
    return {fastName : "Omar", lastName : "Faruk"};
  },[])

  console.log("App run")

  return (
    <div className="flex items-center justify-center flex-col gap-5">
      <h1 className='text-center text-2xl w-full p-5 bg-gray-900 font-semibold text-white'>reactMemo - useMemo - useCallback</h1>

      <div className="flex items-center justify-center gap-2 flex-col">
        <h3>Count : {count}</h3>
        <button onClick={()=> setCount(count+1)} className="p-2 cursor-pointer bg-gray-900 text-white font-semibold">Increase Count</button>
      </div>
      
      {/* // direct passing obj it's render every time because obj capy by refecence */}
      <ReactMemo obj={obj} name = "Omar Faruk" /> 

      <UseMemo/>
    </div>
  )
}

export default App
