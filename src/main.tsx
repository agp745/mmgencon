import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { Home } from './pages/home/index.ts'
import { About } from './pages/about/index.ts'
import { Services } from './pages/services/index.ts'
import { ServiceArea } from './pages/service_area/index.ts'
import { Contact } from './pages/contact/index.ts'
import { Gallery } from './pages/gallery/index.ts'
import { Careers } from './pages/careers/index.ts'

import { store } from './app/store'
import { Provider } from 'react-redux'
// import Test from './test.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App>
        <Routes>
          <Route path='/' element={<Navigate to='/home' replace/>} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/service-area' element={<ServiceArea />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/careers' element={<Careers />} />
          {/* <Route path='/test' element={<Test />} /> */}
        </Routes>
      </App>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
