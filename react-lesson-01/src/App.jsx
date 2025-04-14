import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css"; //here, we import things to use them in our component

function App() {
  // we write JS codes here (to the field before "return")
  const [count, setCount] = useState(0);
  let a = 39;
  const firstName = "Ali";
  let names = ["Rumeysa", "Sumeyye", "Zeynep"];

  return (
    //we write HTML codes here
    <div>
      <p>value : {a}</p>
      <p>customer name: {firstName} </p>
      {/*while looping through the array, we need to give each element a unique key*/} {/*and we can style it like using style={{}} */}
      {names.map((name, index) => (
        <div style= {{
          backgroundColor: 'orange',
          border: '1px solid black'
        }} key={index}>{name} </div>
      ))}
    </div>
  ); //we use curly bracets to write JavaScript expressions inside JSX
}

export default App; // we esport the "app" component from here so that it can be imported into main.js (so these codes will be included in the div in index.html)
