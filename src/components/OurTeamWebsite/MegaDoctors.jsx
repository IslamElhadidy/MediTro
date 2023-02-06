import './MegaDoctors.css'
import doctorone from '../../images/doctor-6.jpg'
import doctortwo from '../../images/doctor-3.jpg'
import doctorthree from '../../images/doctor-1.jpg'
import doctorfour from '../../images/doctor-4.jpg'
import doctorfive from '../../images/doctor-2.jpg'
import doctorsix from '../../images/doctor-5.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import imgone from '../../images/download (4).png'
import imgtwo from '../../images/download (13).png'
import imgthree from '../../images/download (10).png'

function MegaDoctors() {
  return (
    <>
                <div className="mega-doctors">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                        <div className="doctor-box">
                            <div className="image">
                                <img src={doctorone} alt="" />
                            </div>
                            <h4>Dr. Eslam Elhadidy</h4>
                            <span>Dentist</span>
                            <ul>
                                <li><a href="#!"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li><a href="#!"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                <li><a href="#!"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                        <div className="doctor-box">
                                <div className="image">
                                    <img src={doctortwo} alt="" />
                                </div>
                                <h4>Dr. Marcel Koller</h4>
                                <span>Chiropractor</span>
                                <ul>
                                    <li><a href="#!"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                    <li><a href="#!"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                    <li><a href="#!"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                            <div className="doctor-box">
                                <div className="image">
                                    <img src={doctorthree} alt="" />
                                </div>
                                <h4>Dr. Yara Benjamin</h4>
                                <span>Cardiologist</span>
                                <ul>
                                    <li><a href="#!"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                    <li><a href="#!"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                    <li><a href="#!"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                </ul>
                            </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                            <div className="doctor-box">
                                <div className="image">
                                    <img src={doctorsix} alt="" />
                                </div>
                                <h4>Dr. Marcel Koller</h4>
                                <span>Cardiologist</span>
                                <ul>
                                    <li><a href="#!"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                    <li><a href="#!"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                    <li><a href="#!"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                </ul>
                            </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                            <div className="doctor-box">
                                <div className="image">
                                    <img src={doctorfive} alt="" />
                                </div>
                                <h4>Dr. Enas Benjamin</h4>
                                <span>Cardiologist</span>
                                <ul>
                                    <li><a href="#!"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                    <li><a href="#!"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                    <li><a href="#!"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                </ul>
                            </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                            <div className="doctor-box">
                                <div className="image">
                                    <img src={doctorfour} alt="" />
                                </div>
                                <h4>Dr. John David</h4>
                                <span>Cardiologist</span>
                                <ul>
                                    <li><a href="#!"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                    <li><a href="#!"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                    <li><a href="#!"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                </ul>
                            </div>
                    </div>
                </div>
                <div className="images-doctors-decore">
                    <img src={imgone} alt="" />
                    <img src={imgtwo} alt="" />
                    <img src={imgthree} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default MegaDoctors