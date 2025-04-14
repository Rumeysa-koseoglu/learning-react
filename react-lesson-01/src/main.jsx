import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' //we imported app.jsx here

createRoot(document.getElementById('root')).render(//we selected the element whose id is root 
  <StrictMode>
    <App />
  </StrictMode>,
)// the codes in the "app" component will be imported here (into the element whose id is root)
