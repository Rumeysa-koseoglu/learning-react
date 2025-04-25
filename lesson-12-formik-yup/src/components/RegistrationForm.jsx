import React from "react";
import { useFormik } from "formik";

function RegistrationForm() {
  const {values, errors, handleChange,handleSubmit} = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      term: ""
    },
  });
  return (
    <>
      <form>
    <div className="inputDiv">
        <label>Email</label>
        <input type="text" id="email" placeholder="enter your email" value={values.email} onChange={handleChange} />
    </div>

    <div className="inputDiv">
        <label>Age</label>
        <input type="number" id="age" placeholder="enter your age" value={values.age} onChange={handleChange} />
    </div>

    <div className="inputDiv">
        <label>Password</label>
        <input type="password" id="password" placeholder="enter your password" value={values.password} onChange={handleChange} />
    </div>
    
    <div className="inputDiv">
        <label>Password again</label>
        <input type="password" id="confirmPassword" placeholder="enter your password again" value={values.confirmPassword} onChange={handleChange} />
    </div>
    
    <div className="inputDiv">

    <div className="term">
    <input style={{width: "20px", height: "12px"}} type="checkbox" id="term" placeholder="enter your password again" value={values.term} onChange={handleChange} />
    <label>I accept the user agreement</label>
    </div>

    </div>

    <button className="save-button">Save</button>

      </form>
    </>
  );
}

export default RegistrationForm;
