import './App.css'
import useCounter from './hooks/useCounter'

function App() {

  const {count, increase, decrease} = useCounter();

  return (
    <>
    <div>{count}</div>
  <button onClick={increase} >increase</button>
  <button onClick={decrease} >decrease</button>
    </>
  )
}

export default App
