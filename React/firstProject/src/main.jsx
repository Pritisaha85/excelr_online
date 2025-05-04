import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import First from'./FirstComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <First/>
    {/* it is a component for this code */}
  </StrictMode>,
)
