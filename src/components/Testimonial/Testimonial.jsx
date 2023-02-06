import React from 'react'
import img1 from '../../images/bg-test.png'
import './Testimonial.css'
import doctorone from '../../images/doctor-1.jpg'
import doctortwo from '../../images/doctor-2.jpg'
import doctorthree from '../../images/doctor-3.jpg'
import doctorfour from '../../images/doctor-4.jpg'
import doctorfive from '../../images/doctor-5.jpg'
import doctorsix from '../../images/doctor-6.jpg'

import imgd1 from '../../images/download (1).png'
import imgd2 from '../../images/download (13).png'
import imgd3 from '../../images/download (14).png'
import imgd4 from '../../images/download (15).png'

import TSlider from '../Testimonial/TSlider'
function Testimonial() {
  return (
    <>
        <div className="testimonial">
            <h4>Testimonial</h4>
            <h2>See What Are The Patients Saying About us</h2>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 mb-4">
                        <div className="left-div">
                            <img src={img1} alt="" />
                            <ul>
                                
                                    
                                <li><img src={doctorone} alt="" /></li>
                                <li><img src={doctortwo} alt="" /></li>
                                <li><img src={doctorthree} alt="" /></li>
                                <li><img src={doctorfour} alt="" /></li>
                                <li><img src={doctorfive} alt="" /></li>
                                <li><img src={doctorsix} alt="" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 mb-4">
                        <TSlider />
                    </div>
                </div>
            </div>
            <div className="images-decore">
                <img src={imgd1} alt="" />
                <img src={imgd2} alt="" />
                <img src={imgd3} alt="" />
                <img src={imgd4} alt="" />
            </div>
        </div>
    </>
  )
}

export default Testimonial