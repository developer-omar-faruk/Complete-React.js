import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [count, setCount]= useState(0);
    console.log("useMemo component run")

    const cal =useMemo(()=>{    // memorize value
        console.log("cal")
        let sum =0;
        for(let i=0; i<10000000; i++){
            for(let j=0; j<100; j++){
                sum+=j;
            }
        }
        return sum;
    },[])
    
  return (
    <div className="flex items-center justify-center flex-col gap-5">
        <h1 className='font-bold'>useMemo</h1>
      <div className="flex items-center justify-center gap-2 flex-col">
        <h3>Count : {count}</h3>
        <button onClick={()=> setCount(count+1)} className="p-2 cursor-pointer bg-gray-900 text-white font-semibold">Increase Count</button>
      </div>
      <h3>cal : {cal}</h3>
    </div>
  )
}

export default UseMemo
