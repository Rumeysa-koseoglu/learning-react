import React from "react";
import "../css/Auth.css";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "./Firebase";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = response.user;
      if (user) {
        toast.success("user added");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="auth">
      <h3 className="auth-header">Sign in / Sign up</h3>
      <div className="input-div">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="email adress"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
      </div>
      <div className="buttons-wrapper" style={{ marginTop: "20px" }}>
        <button className="google-button">
          <FaGoogle style={{ marginRight: "10px" }} /> Sign in with Google
        </button>
        <button className="login-button">Log in</button>
        <button onClick={register} className="register-button">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Auth;
