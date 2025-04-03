// Imports
import { StrictMode } from 'react' // StrictMode enables additional checks and warnings in development mode
import { createRoot } from 'react-dom/client' // Import createRoot to initialize the root of the React app
import { BrowserRouter } from 'react-router-dom' // Import BrowserRouter to handle client-side routing
import './index.css'
import App from './App.jsx'

// Function to initialize the React app and render it to the DOM
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
  </StrictMode>,
)
