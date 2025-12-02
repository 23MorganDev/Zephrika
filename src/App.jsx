import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Homepage from './components/Homepage/Homepage.jsx'
import ContactInformation from './components/Contact/Contact.jsx'
import AboutPage from './components/About/About.jsx'
import WhyChooseZephrika from './components/Why_Zephrika/Why_Zephrika.jsx'
import ServicesPage from './components/Services/Services.jsx'
import WebDesign from './components/Services/WebDesign.jsx'
import DigitalMarketing from './components/Services/DigitalMarketing.jsx'
import Footer from './components/Footer/Footer.jsx'


{/*
import AIAssistantsDevelopment from './components/Services/aiAssistantsDevelopment.jsx'
import WebBasedPOSSystems from './components/Services/webBasedPOSSystems.jsx'
import ITSupport from './components/Services/itSupport.jsx'
import WebHosting from './components/Services/webHosting.jsx'
import WebsiteMaintenance from './components/Services/websiteMaintenance.jsx' */}

function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/services' element={<ServicesPage />} />


          <Route path='/services/web-design' element={<WebDesign />} />
          <Route path='/services/digital-marketing' element={<DigitalMarketing />} />


          <Route path='/contact' element={<ContactInformation />} />
        </Routes>
      </Router>


    </>

  )
}

export default App
