import React from 'react'
import { Link, Outlet } from 'react-router-dom'//we need to import link and outlet elements

function About() {//We create links to be rendered when about is clicked, in About component
  return (
    <div>
      <h1>About</h1>
      <hr />
    <Link style={{marginRight: '40px'}} to="employees">About Employees</Link>
    <Link to="company">About Company</Link>{/**we used link element and imported it above */}



    <Outlet/>{/**used to render children elements of the parent routes element */}
    </div>
  )
}

export default About