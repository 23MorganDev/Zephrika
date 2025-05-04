import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Homepage from './components/Homepage/Homepage.jsx'
import ContactInformation from './components/Contact/Contact.jsx'
import AboutPage from './components/About/About.jsx'
import ServicesPage from './components/Services/Services.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<ContactInformation />} />
        </Routes>
      </Router>
    </>

  )
}

export default App
