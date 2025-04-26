import React from "react";
import { useFormik } from "formik";//we import formik
import { registrationFormShemas } from "../schemas/RegistrationFormSchemas";//and ipmort our yup shcema

//Reagistration form component
function RegistrationForm() {
    //function to be run when form is submitted
    const submit = (values, action) => {
      //we wait for 2 secon(as if we are sending data)
      setTimeout(() => {
        action.resetForm();//we reset the form
      }, 2000);
    }
// we manage our form with formik hook
  const {values, errors, handleChange,handleSubmit} = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      term: ""
    },
    //validation schema we wrote with yup
    validationSchema: registrationFormShemas,
    //function to be run when form is submitted succesfully
    onSubmit: submit
  });
  return (
    <>
    {/* we check the form with form tag and handlesubmit */}
      <form onSubmit={handleSubmit}>
    <div className="inputDiv">
        <label>Email</label>
        <input type="text" id="email" placeholder="enter your email" value={values.email} onChange={handleChange} />
        {/* if there is a error about email we show it to user */}
        {errors.email && <p className="imput-error"> {errors.email} </p>}
    </div>

    <div className="inputDiv">
        <label>Age</label>
        <input type="number" id="age" placeholder="enter your age" value={values.age} onChange={handleChange} />
        {errors.age && <p className="imput-error"> {errors.age} </p>}
    </div>

    <div className="inputDiv">
        <label>Password</label>
        <input type="password" id="password" placeholder="enter your password" value={values.password} onChange={handleChange} />
        {errors.password && <p className="imput-error"> {errors.password} </p>}
    </div>
    
    <div className="inputDiv">
        <label>Password again</label>
        <input type="password" id="confirmPassword" placeholder="enter your password again" value={values.confirmPassword} onChange={handleChange} />
        {errors.confirmPassword && <p className="imput-error"> {errors.confirmPassword} </p>}
    </div>
    
    <div className="inputDiv">

    <div className="term">
    <input style={{width: "20px", height: "12px"}} type="checkbox" id="term" placeholder="enter your password again" value={values.term} onChange={handleChange} />
    <label>I accept the user agreement</label>
    </div>
    {errors.term && <p className="imput-error"> {errors.term} </p>}
    </div>

    <button type="submit" className="save-button">Save</button>
      </form>
    </>
  );
}

//we export the component
export default RegistrationForm;
