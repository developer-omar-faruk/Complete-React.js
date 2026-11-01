import React from 'react'

const ReactMemo = React.memo(({name, obj})=>{
    console.log("ReactMemo run");
    return (
    <div>
      <h1 className='text-lg font-bold text-center'>My name is {name}</h1>
      <h1>{obj.fastName}</h1>
    </div>
  )
})

export default ReactMemo
