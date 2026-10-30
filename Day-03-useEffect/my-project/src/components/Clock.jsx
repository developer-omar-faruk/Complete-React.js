import React, { useEffect, useState } from 'react'

function Clock() {
    const [time,setTime]=useState((new Date()).toLocaleTimeString())
    const [show,setShow]=useState(true)
    
    useEffect(()=>{
        console.log("run")
        if(!show) return;
        const intervalId = setInterval(()=>{
            setTime((new Date()).toLocaleTimeString())
            console.log("running");
        },1000)
        return ()=>{
            clearInterval(intervalId);
        }
    },[show])
  return (
    <div className='m-10 flex flex-col gap-3 items-center justify-center'>
      <h1 className='text-xl'> {show&& `Clock : ${time}`} </h1>
      <button onClick={()=>setShow(!show)} className='bg-white text-black p-2'>{show ? "Hide Time" : "Show Time"}</button>

    </div>
  )
}

export default Clock
