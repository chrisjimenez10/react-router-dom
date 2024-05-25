//Import BrowserRouter
import { BrowserRouter } from 'react-router-dom';

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* We MUST wrap the App component with the BrowserRouter component, so we can use react-router-dom and have access to navigation in our React App - It is here, in the entry file to our project (src/main.jsx) */}
    <BrowserRouter>
      <App />
    </BrowserRouter>


  </React.StrictMode>,
)
