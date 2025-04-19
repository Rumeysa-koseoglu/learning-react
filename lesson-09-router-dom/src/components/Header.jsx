import React from 'react'
import { Link } from 'react-router-dom';//for using link component we should import it from react router dom

function Header() {//in order for the header component to have an output we need to call it in app.jsx above the routes
  return (
    <div className='header'> {/**we go to the URL address we want, using link component (and we defined a calss name to style it) */}
        <Link className='link' to="/" >Home</Link>
        <Link className='link' to="/about" >About</Link>
        <Link className='link' to="/products" >Products</Link>
        <Link className='link' to="/contact" >Contact</Link>
    </div>
  )
}

export default Header