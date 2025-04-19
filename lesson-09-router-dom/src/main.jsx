import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  //if we want to run React Router DOM in our project, we should wrap "app" with BrowserRouter and import it (BrowserRouter) above
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)