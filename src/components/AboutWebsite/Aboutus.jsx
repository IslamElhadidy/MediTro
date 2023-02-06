import React from 'react'
import About from '../About.jsx/About'
import Footer from '../Footer/Footer'
import Links from '../links/Links'
import New from '../News/New'
import Testimonial from '../Testimonial/Testimonial'
import AboutusHeading from './AboutusHeading'
import Acheiv from './Acheiv'
import Doctors from './Doctors'

function Aboutus() {
  return (
    <>
        <Links />
        <AboutusHeading />
        <About />
        <Acheiv />
        <Doctors />
        <Testimonial />
        <New />
        <Footer />

    </>
  )
}

export default Aboutus