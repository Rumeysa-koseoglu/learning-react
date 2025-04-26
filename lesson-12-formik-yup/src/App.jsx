import { useState } from "react";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm";//we import our form component here

function App() {

  return (
    //main component of the application
    <div className="app">
      <RegistrationForm/> {/** the registration form component is called here */}
    </div>
  );
}

export default App;
