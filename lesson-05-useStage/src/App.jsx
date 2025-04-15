import { useState } from 'react'
import './App.css'

function App() {

//we define useStates like this. we can change firstName using setFirstName
  const [firstName, setFirstName] = useState('Rumeysa')
  //we can define array using useState
  const [names, setNames] = useState(["Ali", "Veli", "Ayse", "Fatma"])
  //we cab also define object
  const [userInfo, setUserInfo] = useState({username: "rkoseoglu", password: "365245"})//it can be empty first and we can fill it later

  const changeName = () => {
    setFirstName('Elif')
    console.log("component rendered")
  }

  return (
    <>
<div>
  {firstName}
  {/*we can also write function inside onclick ; "onClick={() => {setFirstName('Elif')}}" */}
  <div><button onClick={changeName}>Change Name</button></div> 
  
<div>
  {/* we can loop through the names we defined above */}
  {names.map((name,index) => (
    <div key={index}>{name}</div>
  ))}
</div>

{/* we can print the user info to the screen we defined above */}
<div>
  {userInfo.username} {userInfo.password}
</div>

</div>
    </>
  )
}
//when we changed the value of the state by using set method, the  component will rendered again

export default App
