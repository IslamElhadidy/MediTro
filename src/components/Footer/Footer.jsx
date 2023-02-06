import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'
import logo from '../../images/logo.png'
import { faFacebookSquare, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import imgone from '../../images/download (16).png'
import imgtwo from '../../images/download (17).png'
import imgthree from '../../images/download (10).png'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="box-footer-row1">
                            <img src={logo} alt="" />
                            <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
                        <div className="contact">
                                <FontAwesomeIcon icon={faPhone} />
                                <div className="info">
                                    <h6>Contact Us</h6>
                                    <span>+20 1060088542</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="box-footer-row2">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><Link to="/aboutus">About Us</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/booking">Booking</Link></li>
                                <li><Link to="/faqs">Faq's</Link></li>
                                <li><Link to="/blogs">Blogs</Link></li>
                                <li><Link to="/ourteam">Our Team</Link></li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="box-footer-row3">
                                <h3>Our Services</h3>
                                <ul>
                                    <li><Link to="/services">Dental Care</Link></li>
                                    <li><Link to="/services">Cardiac Clinic</Link></li>
                                    <li><Link to="/services">Message Therapy</Link></li>
                                    <li><Link to="/services">Cardiology</Link></li>
                                    <li><Link to="/services">Precise Diagnosis</Link></li>
                                    <li><Link to="/services">Abmbulance Services</Link></li>
                                </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="box-footer-row4">
                                <h3>Subscribe</h3>
                                <input type="text" name="" id="" placeholder='Email Address' />
                                <button>Subscribe Now</button>
                                <ul>
                                    <li><a href="https://www.facebook.com/El7aDiiDy" target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faFacebookSquare} /></a></li>
                                    <li><a href="https://twitter.com/ne_Islamm" target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                    <li><a href="https://github.com/IslamElhadidy" target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
                                    <li><a href="https://www.linkedin.com/in/eslamelhadidy/" target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                </ul>
                        </div>
                    </div>
                </div>
                <div className="images-decore-footer">
                    <img src={imgone} alt="" />
                    <img src={imgtwo} alt="" />
                    <img src={imgthree} alt="" />
                </div>
            </div>
            <div className="copywrite">
                    <p>Copyright © 2023 Design by <Link to="https://www.facebook.com/El7aDiiDy/" target='_blank' >Eslam Elhadidy</Link></p>
            </div>
        </div>
    </>
  )
}

export default Footer