import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import Home from './components/Home.tsx'
import About from './components/About.tsx'
import Services from './components/Services.tsx'
import ServiceArea from './components/ServiceArea.tsx'
import Contact from './components/Contact.tsx'
import Gallery from './components/Gallery.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path='/' element={<Navigate to='/home' replace/>} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/service-area' element={<ServiceArea />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
          
        </Routes>
      </App>
    </BrowserRouter>
  </React.StrictMode>,
)
