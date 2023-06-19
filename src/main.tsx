import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { Home } from './components/home'
import { About } from './components/about'
import { Services } from './components/services'
import { ServiceArea } from './components/service_area'
import { Contact } from './components/contact'
import { Gallery } from './components/gallery'

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
