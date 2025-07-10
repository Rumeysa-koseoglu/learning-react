import React from "react";
import "../css/Auth.css";
import { FaGoogle } from "react-icons/fa";

function Auth() {
  return (
    <div className="auth">
      <h3 className="auth-header">Sign in / Sign up</h3>
      <div className="input-div">
        <input type="text" placeholder="email adress" />
        <input type="password" placeholder="password" />
      </div>
      <div className="buttons-wrapper" style={{ marginTop: "20px" }}>
        <button className="google-button">
          <FaGoogle style={{ marginRight: "10px" }} /> Sign in with Google
        </button>
        <button className="login-button">Log in</button>
        <button className="register-button">Sign up</button>
      </div>
    </div>
  );
}

export default Auth;
