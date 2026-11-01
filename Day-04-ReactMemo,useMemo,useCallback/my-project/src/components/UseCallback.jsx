import React, { useCallback, useMemo, useState } from 'react'

function UseCallback() {
    const [count, setCount]= useState(0);
    console.log("useCallback component run")

    const fun =useCallback(()=>{    // use for passing data to child. becouse obj, arr, fun copy by refecence
        console.log("useCallback run")
    },[])

    
  return (
    <div className="flex items-center justify-center flex-col gap-5">
        <h1 className='font-bold'>useCallback</h1>
      <div className="flex items-center justify-center gap-2 flex-col">
        <h3>Count : {count}</h3>
        <button onClick={()=> setCount(count+1)} className="p-2 cursor-pointer bg-gray-900 text-white font-semibold">Increase Count</button>
      </div>

    </div>
  )
}

export default UseCallback
