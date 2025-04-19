import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'//we import our routes and route to use below
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
import Header from './components/header'

function App() {

  return (
    <>
    <Header/>{/**we called our header and imported it above*/}
    <Routes> {/**we opend routes here to put "route"s inside this (so we can renderour pages (components)) and we should import them above*/}
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/*' element={<PageNotFound/>} /> {/**if user write invalid path to the end of the URL this component will run */}
    </Routes> {/**when our URL address matches with a path from here, it takes us to the component of that path */}
    </>
  )
}

export default App
