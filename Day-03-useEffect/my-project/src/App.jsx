import Clock from "./components/Clock"
import User from "./components/User"

function App() {

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-center text-2xl p-5">useEffect in React</h1>

      <User/>
      <Clock/>
    </div>
  )
}

export default App
