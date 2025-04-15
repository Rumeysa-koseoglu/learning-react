import { useEffect, useState } from 'react'

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    console.log("always runs")
  })//if we do not provide an array parameter (it can be empty array) after a useEffect's callback, the value inside the useEffect will be ran(executed) every time we take an action

  useEffect(() => {
    console.log("runs on first render")
  }, [])

  useEffect(() => {
    console.log("runs on the first render and when the firstName state value changes")
  }, [firstName])

  useEffect(() => {
    console.log("runs on the first render and when the lastName state value changes")
  }, {lastName})

  return (
    <>
<div><button onClick={() => setFirstName('Rumeysa')}>Change Name</button></div>
<div><button onClick={() => setLastName('Koseoglu')}>Change Last Name</button></div>
    </>
  )
}

//useEffects run when spesific actions are performed such as when the page loads or a state value changes

export default App
