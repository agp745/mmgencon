import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { Home } from './components/home'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </App>
    </BrowserRouter>
  </React.StrictMode>,
)
