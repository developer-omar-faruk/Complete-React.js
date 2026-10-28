import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React UseState Hook</h1>
      <div>
        <h2>Counter : {count}</h2>
        <div>
          <button onClick={()=>setCount(count+1)}>Increment</button>
          <button onClick={()=>setCount(count-1)}>Dicrement</button>
          <button onClick={()=> setCount(0)}>Reset 0</button>
        </div>
      </div>
    </>
  )
}

export default App
