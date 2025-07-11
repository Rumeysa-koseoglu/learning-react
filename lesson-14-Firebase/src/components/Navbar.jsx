import React from "react";
import "../css/Navbar.css";
import { signOut } from "firebase/auth";
import { auth } from "../pages/Firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const navigate = useNavigate();

  const logOut = async () => {
    toast.success("logging out");
    setTimeout(() => {
      signOut(auth);
      navigate("/auth");
    }, 3000);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">FIREBASE</div>
      <div onClick={logOut} className="navbar-right">
        Log Out
      </div>
    </div>
  );
}

export default Navbar;
