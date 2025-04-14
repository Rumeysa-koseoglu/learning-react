import { useState } from "react";
import "./App.css";
import Login from "./Login"
import {users} from "./Login"//to use the "users" array that we exported in app.jx, we import it from Login.jx in curly brackets (the reason we used curly bracket is; we wanted to export only one part of codes in Login.jsx and we also used "export" in there not "export default")

function App() {
  console.log(users)
  return ( 
    /*there must be only one root element; you can use fragment for this (<> jsx codes </> or <div> jsx codes </div>) */
    <div>
      <Login />
      <Login /> {/**we called the component twice so we can use the same component when we need it again */}
    </div>
  )
}

export default App