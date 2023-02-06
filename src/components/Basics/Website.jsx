import React from 'react'
import Home from '../../Pages/Home/Home'
import About from '../About.jsx/About'
import Appointment from '../Appointment/Appointment'
import Footer from '../Footer/Footer'
import Links from '../links/Links'
import New from '../News/New'
import Process from '../process/Process'
import Services from '../Services/Services'
import Testimonial from '../Testimonial/Testimonial'



function Website() {
  return (
    <>
        <Links />
        <Home />
        <About />
        <Process />
        <Appointment />
        <Services />
        <Testimonial />
        <New />
        <Footer />
        
    </>
  )
}

export default Website