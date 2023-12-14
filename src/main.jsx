import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap'
import 'react-bootstrap'



ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </div>
)
