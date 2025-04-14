import React from 'react'

//we provided to export only this part of codes by using "export" in the leading of code we want to export
export const users = [
  {
    userName: "Ali",
    password: "123"
  },
  {
    userName: "Ayse",
    password: "321"
  }
]

function Login() {
  return (
    <>
    <div>
      <p>Name</p>
      <input type="text" />
    </div>

    <div>
      <p>Password</p>
      <input type="text" />
    </div>

      <button>Log in</button>
    
    </>
  )
    //if we need this code somewhere else , we dont need to copy and paste it , we just can call it in the App component
}
//if we want to export a component as it is , we use "export default", or if we want to export only part of it , we use "export"
export default Login