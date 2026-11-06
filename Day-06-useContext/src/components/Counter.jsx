import React from 'react'
import { useContext } from 'react'
import { CountContext } from '../App'

function Counter() {
    console.log("counter render")
    const {count, setCount}= useContext(CountContext);
  return (
    <div>
      <h1>I am Counter</h1>
      <h1>Count : {count} </h1>
      <button onClick={()=> setCount(count+1)}>Increase</button>
    </div>
  )
}

export default Counter
