import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Homepage from './components/Homepage/Homepage.jsx'
import ContactInformation from './components/Contact/Contact.jsx'
import AboutPage from './components/About/About.jsx'
import ServicesPage from './components/Services/Services.jsx'
import WebDesign from './components/Services/WebDesign.jsx'
import DigitalMarketing from './components/Services/DigitalMarketing.jsx'
import Footer from './components/Footer/Footer.jsx'


{/*import SocialMediaManagement from './components/Services/socialMediaManagement.jsx'
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


          {/* ----<Route path='/services/graphic-design' element={<GraphicDesign />} />

          <Route path='/services/social-media-management' element={<SocialMediaManagement />} />
          <Route path='/services/ai-assistants' element={<AIAssistantsDevelopment />} />
          <Route path='/services/pos-systems' element={<WebBasedPOSSystems />} />
          <Route path='/services/it-support' element={<ITSupport />} />
          <Route path='/services/web-hosting' element={<WebHosting />} />
          <Route path='/services/website-maintenance' element={<WebsiteMaintenance />} /> ---*/}