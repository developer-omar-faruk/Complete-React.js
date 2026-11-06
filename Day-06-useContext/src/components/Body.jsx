import React from 'react'
import Counter from './Counter'

function Body() {
    console.log("body render")
  return (
    <div>
      <h1>I am Body</h1>
      <Counter/>
    </div>
  )
}

export default Body
