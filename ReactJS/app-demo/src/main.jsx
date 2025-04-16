import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './App.jsx'
import HomeView from './views/HomeView.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomeView />
  </StrictMode>,
)
