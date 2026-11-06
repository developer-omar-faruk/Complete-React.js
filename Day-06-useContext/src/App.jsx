import { useState, createContext, useMemo } from 'react'
import Hader from './components/Hader'
import Body from './components/Body'

export const CountContext = createContext()

function App() {
  console.log("app render")
  const [count, setCount] = useState(0)
  
  const value = useMemo(()=>({
    count, setCount
  }),[count])

  return (
    <>
      <CountContext value={value}>
        <Hader/>
        <Body/>
      </CountContext>
    </>
  )
}

export default App
