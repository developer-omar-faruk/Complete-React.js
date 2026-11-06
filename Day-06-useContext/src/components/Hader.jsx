import React from 'react'
import { useContext } from 'react'
import { CountContext } from '../App'

function Hader() {
    console.log("hader render")
    const {count}= useContext(CountContext);
  return (
    <div>
      <h1>I am hader show count : {count} </h1>
    </div>
  )
}

export default Hader
