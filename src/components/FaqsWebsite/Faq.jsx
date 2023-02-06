import React from 'react'
import Footer from '../Footer/Footer'
import Links from '../links/Links'
import New from '../News/New'
import Accord from './Accord'
import FaqsHeading from './FaqsHeading'

function Faq() {
  return (
    <>
        <Links /> 
        <FaqsHeading />
        <Accord />
        <New />
        <Footer />
    </>
  )
}

export default Faq